/**
 * Title class
 */
UUI.TITLE = CLASS({

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
		//OPTIONAL: params.style
		//OPTIONAL: params.isImgRight
		//OPTIONAL: params.on

		var
		// img
		img = params.img,

		// title
		title = params.title,

		// spacing
		spacing = params.spacing === undefined ? 0 : params.spacing,

		// is img right
		isImgRight = params.isImgRight,
		
		// div
		div,

		// title dom
		titleDom,

		// resize event
		resizeEvent,

		// set title.
		setTitle,

		// get img.
		getImg,

		// tap.
		tap;

		div = DIV({
			c : [ titleDom = DIV({
				style : {
					flt : 'left'
				},
				c : title === undefined ? '' : title
			}), CLEAR_BOTH()]
		});

		if (img !== undefined) {

			img.addStyle({
				flt : 'left'
			});

			if (img.getStyle('margin') === undefined && img.getStyle('marginRight') === undefined) {
				img.addStyle(isImgRight !== true ? {
					marginRight : spacing
				} : {
					marginLeft : spacing
				});
			}

			if (isImgRight !== true) {
				div.prepend(img);
			} else {
				titleDom.after(img);
			}

			resizeEvent = EVENT({
				name : 'resize'
			}, function(e) {

				var
				// title dom height
				titleDomHeight = titleDom.getHeight();

				if (titleDomHeight > 0) {
					titleDom.addStyle({
						marginTop : (img.getHeight() - titleDom.getHeight()) / 2
					});
				}
			});

			EVENT_ONCE({
				node : img,
				name : 'load'
			}, function(e) {
				resizeEvent.fire();
			});

			self.on('show', function() {
				resizeEvent.fire();
			});

			self.on('remove', function() {
				resizeEvent.remove();
			});
		}

		inner.setDom(div);

		self.setTitle = setTitle = function(title) {
			titleDom.empty();
			titleDom.append(title);
		};

		self.getImg = getImg = function() {
			return img;
		};
	}
});
