/**
 * Validatable form class
 */
UUI.VALID_FORM = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.errorMsgs
		//OPTIONAL: params.on
		//OPTIONAL: params.c
		//OPTIONAL: params.style
		//OPTIONAL: params.errorMsgStyle

		var
		// error msgs
		errorMsgs = params === undefined ? undefined : params.errorMsgs,

		// on
		on = params === undefined ? undefined : params.on,

		// children
		children = params === undefined ? undefined : params.c,

		// style
		style = params === undefined ? undefined : params.style,

		// error msg style
		errorMsgStyle = params === undefined ? undefined : params.errorMsgStyle,

		// delays
		delays = [],

		// form
		form,

		// get dom.
		getDom,

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

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		form = FORM({
			style : style,
			c : children,
			on : on
		});

		form.addRemoveHandler(function() {
			EACH(delays, function(delay) {
				delay.remove();
			});
		});

		self.getDom = getDom = function() {
			return form;
		};

		self.getData = getData = function() {
			return form.getData();
		};

		self.setData = setData = function(data) {
			//REQUIRED: data

			return form.setData(data);
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

							(child.getParent().getParent().isValidWrapper === true ? child.getParent().getParent() : (child.getParent().isValidWrapper === true ? child.getParent() : child)).after( errorMsgP = P({
								style : errorMsgStyle,
								c : errorMsg
							}));

							REMOVE({
								data : errors,
								key : name
							});

							delays.push(DELAY(2, function(delay) {
								errorMsgP.remove();

								REMOVE({
									data : delays,
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
								key : name
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
