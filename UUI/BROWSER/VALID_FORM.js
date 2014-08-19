/**
 * Validatable form class
 */
UUI.VALID_FORM = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.errorMsgs
		//OPTIONAL: params.on
		//OPTIONAL: params.c
		//OPTIONAL: params.style
		//OPTIONAL: params.errorMsgStyle

		var
		// error msgs
		errorMsgs = params === undefined ? undefined : params.errorMsgs,

		// error msg style
		errorMsgStyle = params === undefined ? undefined : params.errorMsgStyle,

		// delays
		delays = [],

		// form
		form,

		// get data.
		getData,

		// set data.
		setData,

		// submit.
		submit,

		// show errors.
		showErrors,

		// get error msgs.
		getErrorMsgs;

		form = FORM();

		self.on('remove', function() {
			EACH(delays, function(delay) {
				delay.remove();
			});
		});

		inner.setDom(form);

		self.getData = getData = function() {

			var
			// data
			data = {},

			// f.
			f = function(node) {
				//REQUIRED: node

				EACH(node.getChildren(), function(child) {

					if (child.getValue !== undefined && child.getName !== undefined && child.getName() !== undefined) {
						data[child.getName()] = child.getValue();
					}

					f(child);
				});
			};

			f(self);

			return data;
		};

		self.setData = setData = function(data) {
			//REQUIRED: data

			var
			// f.
			f = function(node) {
				//REQUIRED: node

				EACH(node.getChildren(), function(child) {

					var
					// value
					value;

					if (child.setValue !== undefined && child.getName !== undefined && child.getName() !== undefined) {
						value = data[child.getName()];
						child.setValue(value === undefined ? '' : value);
					}

					f(child);
				});
			};

			f(self);
		};

		self.submit = submit = function() {
			form.submit();
		};

		self.showErrors = showErrors = function(_errors) {
			//REQUIRED: _errors

			var
			// errors
			errors = COPY(_errors),

			// f.
			f = function(node) {

				EACH(node.getChildren(), function(child) {

					var
					// name
					name,

					// error
					error,

					// error msg
					errorMsg,

					// error msg p
					errorMsgP;

					if (child.getValue !== undefined && child.getName !== undefined) {

						name = child.getName();
						error = errors[name];

						if (error !== undefined && errorMsgs !== undefined) {
							errorMsg = errorMsgs[name][error.type];

							if ( typeof errorMsg === 'function') {
								if (error.validParam !== undefined) {
									errorMsg = errorMsg(error.validParam);
								} else {
									errorMsg = errorMsg(error.validParams);
								}
							}

							child.after( errorMsgP = P({
								style : errorMsgStyle,
								c : errorMsg
							}));

							REMOVE({
								data : errors,
								name : name
							});

							delays.push(DELAY(2, function(delay) {
								errorMsgP.remove();

								REMOVE({
									array : delays,
									value : delay
								});
							}));
						}
					}

					f(child);
				});
			};

			f(self);
		};

		self.getErrorMsgs = getErrorMsgs = function(_errors) {
			//REQUIRED: _errors

			var
			// errors
			errors = COPY(_errors),

			// msgs
			msgs = [],

			// f.
			f = function(node) {

				EACH(node.getChildren(), function(child) {

					var
					// name
					name,

					// error
					error,

					// error msg
					errorMsg;

					if (child.getValue !== undefined && child.getName !== undefined) {

						name = child.getName();
						error = errors[name];

						if (error !== undefined && errorMsgs !== undefined) {
							errorMsg = errorMsgs[name][error.type];

							if ( typeof errorMsg === 'function') {
								if (error.validParam !== undefined) {
									errorMsg = errorMsg(error.validParam);
								} else {
									errorMsg = errorMsg(error.validParams);
								}
							}

							msgs.push(errorMsg);

							REMOVE({
								data : errors,
								name : name
							});
						}
					}

					f(child);
				});
			};

			f(self);

			return msgs;
		};
	}
});
