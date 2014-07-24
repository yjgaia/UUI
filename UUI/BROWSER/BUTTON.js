/**
 * Button class
 */
UUI.BUTTON = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
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

		// style
		style = params.style,

		// on
		on = params.on,

		// a
		a,

		// title dom
		titleDom,

		// set title.
		setTitle,

		// get img.
		getImg,

		// get dom.
		getDom,

		// tap.
		tap;

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		a = A({
			style : COMBINE_DATA({
				origin : {
					display : 'block',
					textAlign : 'center',
					cursor : 'pointer',
					textDecoration : 'none',
					touchCallout : 'none',
					userSelect : 'none'
				},
				extend : style
			}),
			href : href,
			target : target,
			on : on
		});

		if (title !== undefined) {
			a.prepend( titleDom = DIV({
				c : [title === undefined ? '' : title]
			}));
		}

		if (img !== undefined) {
			a.prepend(DIV({
				style : {
					marginBottom : title !== undefined ? spacing : 0
				},
				c : [img]
			}));
		}

		self.setTitle = setTitle = function(title) {
			titleDom.empty();
			titleDom.append(title);
		};

		self.getImg = getImg = function() {
			return img;
		};

		self.getDom = getDom = function() {
			return a;
		};

		self.tap = tap = function() {
			if (on !== undefined && on.tap !== undefined) {
				on.tap();
			}
		};
	}
});
