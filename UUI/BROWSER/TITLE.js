/*
 * Title class
 */
UUI.TITLE = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.icon
		//OPTIONAL: params.title
		//OPTIONAL: params.spacing
		//OPTIONAL: params.style
		//OPTIONAL: params.isIconRight
		//OPTIONAL: params.on

		let icon = params.icon;
		let title = params.title;
		let spacing = params.spacing === undefined ? 0 : params.spacing;
		let isIconRight = params.isIconRight;
		
		let titleDom;
		let div = DIV({
			c : [titleDom = DIV({
				style : {
					flt : 'left'
				},
				c : title === undefined ? '' : title
			}), CLEAR_BOTH()]
		});

		if (icon !== undefined) {

			icon.addStyle({
				flt : 'left'
			});

			if (icon.getStyle('margin') === undefined && icon.getStyle('marginRight') === undefined) {
				icon.addStyle(isIconRight !== true ? {
					marginRight : spacing
				} : {
					marginLeft : spacing
				});
			}

			if (isIconRight !== true) {
				div.prepend(icon);
			} else {
				titleDom.after(icon);
			}

			let resizeEvent = EVENT({
				name : 'resize'
			}, (e) => {

				let titleDomHeight = titleDom.getHeight();

				if (titleDomHeight > 0) {
					titleDom.addStyle({
						marginTop : (icon.getHeight() - titleDom.getHeight()) / 2
					});
				}
			});

			EVENT_ONCE({
				node : icon,
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

		let getIcon = self.getIcon = () => {
			return icon;
		};
	}
});
