/**
 * Validatable form class
 */
UUI.VALID_FORM = CLASS({

	preset : function() {
		'use strict';

		return FORM;
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

		// show errors.
		showErrors,

		// get error msgs.
		getErrorMsgs;

		self.on('remove', function() {
			EACH(delays, function(delay) {
				delay.remove();
			});
		});

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
