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
		//OPTIONAL: params.style
		//OPTIONAL: params.value
		//OPTIONAL: params.on

		var
		// value
		value = params === undefined ? undefined : params.value,

		// input
		input;

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
	}
});
