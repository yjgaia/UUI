/**
 * Full-size submit class
 */
UUI.FULL_SUBMIT = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.style
		//OPTIONAL: params.value
		//OPTIONAL: params.on

		var
		// style
		style = params === undefined ? undefined : params.style,

		// value
		value = params === undefined ? undefined : params.value,

		// on
		on = params === undefined ? undefined : params.on,

		// input
		input,

		// get dom.
		getDom;

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		input = INPUT({
			type : 'submit',
			style : COMBINE([{
				border : 'none',
				width : '100%',
				padding : '10px 0',
				cursor : 'pointer'
			}, style]),
			on : on
		});

		if (value !== undefined) {
			input.setValue(value);
		}

		self.getDom = getDom = function() {
			return input;
		};
	}
});
