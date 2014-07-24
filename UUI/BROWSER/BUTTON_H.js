/**
 * Button Horizontal class
 */
UUI.BUTTON_H = CLASS({

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

		// evt
		evt,

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
					cursor : 'pointer',
					textDecoration : 'none',
					touchCallout : 'none',
					userSelect : 'none'
				},
				extend : style
			}),
			href : href,
			target : target,
			on : on,
			c : [ titleDom = DIV({
				style : {
					flt : 'left'
				},
				c : [title === undefined ? '' : title]
			}), CLEAR_BOTH()]
		});

		if (img !== undefined) {

			img.addStyle({
				flt : 'left'
			});

			if (img.getStyle('margin') === undefined && img.getStyle('marginRight') === undefined) {
				img.addStyle({
					marginRight : spacing
				});
			}

			a.prepend(img);

			evt = EVENT({
				node : img,
				name : 'load'
			}, function(e) {
				titleDom.addStyle({
					marginTop : (img.getHeight() - titleDom.getHeight()) / 2
				});

				evt.remove();
			});
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
