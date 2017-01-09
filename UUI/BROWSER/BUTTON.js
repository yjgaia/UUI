/**
 * Button class
 */
UUI.BUTTON = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.title
		//OPTIONAL: params.spacing
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		var
		// img
		img = params.img,

		// title
		title = params.title,

		// spacing
		spacing = params.spacing === undefined ? 0 : params.spacing,

		// href
		href = params.href,

		// target
		target = params.target,

		// a
		a,

		// title dom
		titleDom,

		// set title.
		setTitle,

		// get img.
		getImg,

		// tap.
		tap;

		a = A({
			style : {
				display : 'block',
				textAlign : 'center',
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none',
				color : 'inherit'
			},
			href : href,
			target : target
		});

		if (title !== undefined) {
			a.prepend( titleDom = DIV({
				c : title === undefined ? '' : title
			}));
		}

		if (img !== undefined) {
			a.prepend(DIV({
				style : {
					marginBottom : title !== undefined ? spacing : 0
				},
				c : img
			}));
		}

		inner.setDom(a);

		self.setTitle = setTitle = function(title) {
			titleDom.empty();
			titleDom.append(title);
		};

		self.getImg = getImg = function() {
			return img;
		};

		self.tap = tap = function() {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
	}
});
