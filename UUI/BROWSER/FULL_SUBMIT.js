/**
 * Full-size submit class
 */
UUI.FULL_SUBMIT = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.value
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		var
		// value
		value = params === undefined ? undefined : params.value,

		// input
		input,
		
		// get value.
		getValue,

		// set value.
		setValue;

		input = INPUT({
			type : 'submit',
			style : {
				display : 'block',
				border : 'none',
				width : '100%',
				padding : '10px 0',
				cursor : 'pointer'
			}
		});

		if (value !== undefined) {
			input.setValue(value);
		}

		inner.setDom(input);
		
		self.getValue = getValue = function() {
			return input.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			input.setValue(value);
		};
	}
});
