/*
 * Title class
 */
UUI.TITLE = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.title
		//OPTIONAL: params.spacing
		//OPTIONAL: params.style
		//OPTIONAL: params.isImgRight
		//OPTIONAL: params.on

		let img = params.img;
		let title = params.title;
		let spacing = params.spacing === undefined ? 0 : params.spacing;
		let isImgRight = params.isImgRight;
		
		let titleDom;
		let div = DIV({
			c : [titleDom = DIV({
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

			let resizeEvent = EVENT({
				name : 'resize'
			}, (e) => {

				let titleDomHeight = titleDom.getHeight();

				if (titleDomHeight > 0) {
					titleDom.addStyle({
						marginTop : (img.getHeight() - titleDom.getHeight()) / 2
					});
				}
			});

			EVENT_ONCE({
				node : img,
				name : 'load'
			}, (e) => {
				resizeEvent.fire();
			});

			self.on('show', () => {
				resizeEvent.fire();
			});

			self.on('remove', () => {
				resizeEvent.remove();
			});
		}

		inner.setDom(div);

		let setTitle = self.setTitle = (title) => {
			titleDom.empty();
			titleDom.append(title);
		};

		let getImg = self.getImg = () => {
			return img;
		};
	}
});
