/*
 * Button Horizontal class
 */
UUI.BUTTON_H = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.icon
		//OPTIONAL: params.title
		//OPTIONAL: params.spacing
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.isIconRight
		//OPTIONAL: params.on

		let icon = params.icon;
		let title = params.title;
		let spacing = params.spacing === undefined ? 0 : params.spacing;
		let href = params.href;
		let target = params.target;
		let isIconRight = params.isIconRight;
		
		let style = params.style;
		let width;
		if (style !== undefined) {
			width = style.width;
		}

		let titleDom;
		let a = A({
			style : {
				display : 'block',
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none',
				color : 'inherit'
			},
			href : href,
			target : target,
			c : [ titleDom = DIV({
				style : {
					flt : 'left',
					whiteSpace : 'nowrap'
				}
			}), CLEAR_BOTH()]
		});
		
		let resizeEvent;

		let setIcon = self.setIcon = (_icon) => {
			//REQUIRED: icon
			
			if (icon !== undefined) {
				icon.remove();
			}
			
			icon = _icon;
			
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
				a.prepend(icon);
			} else {
				titleDom.after(icon);
			}
			
			if (resizeEvent === undefined) {
				
				resizeEvent = EVENT({
					name : 'resize'
				}, (e) => {
					
					let titleDomWidth = titleDom.getWidth();
					let titleDomHeight = titleDom.getHeight();
					
					if (titleDomHeight > 0 && icon.getHeight() > 0) {
						titleDom.addStyle({
							marginTop : (icon.getHeight() - titleDom.getHeight()) / 2
						});
					}
					
					if (width === undefined && titleDomWidth > 0 && icon.getWidth() > 0) {
						a.addStyle({
						    width : icon.getWidth() + spacing + titleDomWidth + 1
						});
					}
				});
	
				self.on('show', () => {
					resizeEvent.fire();
				});
	
				self.on('remove', () => {
					resizeEvent.remove();
				});
				
				DELAY(() => {
					resizeEvent.fire();
				});
			}
			
			EVENT_ONCE({
				node : icon,
				name : 'load'
			}, (e) => {
				resizeEvent.fire();
			});
		};

		if (icon !== undefined) {
			setIcon(icon);
		}

		inner.setDom(a);

		let setTitle = self.setTitle = (title) => {
			//REQUIRED: title
			
			titleDom.empty();
			titleDom.append(title);
			
			if (width === undefined && icon !== undefined) {
				a.addStyle({
				    width : icon.getWidth() + spacing + titleDom.getWidth() + 1
				});
			}
		};
		
		if (title !== undefined) {
		    setTitle(title);
		}

		let getTitle = self.getTitle = () => {
			return title;
		};

		let getIcon = self.getIcon = () => {
			return icon;
		};

		let tap = self.tap = () => {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
		
		let hideTitle = self.hideTitle = () => {
			icon.addStyle({
				marginRight : 0,
				marginLeft : 0
			});
			titleDom.hide();
		};
		
		let showTitle = self.showTitle = () => {
			
			if (icon.getStyle('margin') === undefined && icon.getStyle('marginRight') === undefined) {
				icon.addStyle(isIconRight !== true ? {
					marginRight : spacing
				} : {
					marginLeft : spacing
				});
			}
			
			titleDom.show();
		};
	}
});
