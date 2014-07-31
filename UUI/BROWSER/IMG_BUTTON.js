/**
 * IMG Button class
 */
UUI.IMG_BUTTON = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
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

		// style
		style = params.style,

		// on
		on = params.on,

		// a
		a,

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
			style : COMBINE([{
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none'
			}, style]),
			href : href,
			target : target,
			on : on,
			c : img
		});

		self.getImg = getImg = function() {
			return img;
		};

		self.getDom = getDom = function() {
			return a;
		};

		self.tap = tap = function() {
			a.tap();
		};
	}
});
