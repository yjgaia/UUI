/**
 * IMG Button class
 */
UUI.IMG_BUTTON = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		var
		// img
		img = params.img,

		// href
		href = params.href,

		// target
		target = params.target,

		// a
		a,

		// get img.
		getImg,

		// tap.
		tap;

		a = A({
			style : {
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none'
			},
			href : href,
			target : target,
			c : img
		});

		inner.setDom(a);

		self.getImg = getImg = function() {
			return img;
		};

		self.tap = tap = function() {
			a.tap();
		};
	}
});
