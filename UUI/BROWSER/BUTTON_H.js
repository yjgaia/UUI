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
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.isIconRight
		//OPTIONAL: params.on

		let icon = params.icon;
		let title = params.title;
		let spacing = params.spacing === undefined ? 0 : params.spacing;
		let href = params.href;
		let target = params.target;
		let isIconRight = params.isIconRight;
		
		let style = params.style;
		let contentStyle = params.contentStyle;
		let width;
		if (style !== undefined) {
			width = style.width;
		}

		let iconDom;
		let titleDom;
		let content;
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
			c : content = TABLE({
				style : EXTEND({
					origin : {
						width : '100%'
					},
					extend : contentStyle
				}),
				c : TR({
					style : {
						margin : 0,
						padding : 0
					},
					c : isIconRight === true ? [titleDom = TD({
						style : {
							margin : 0,
							padding : 0,
							whiteSpace : 'nowrap'
						}
					}), iconDom = TD({
						style : {
							margin : 0,
							padding : 0
						}
					})] : [iconDom = TD({
						style : {
							margin : 0,
							padding : 0
						}
					}), titleDom = TD({
						style : {
							margin : 0,
							padding : 0,
							whiteSpace : 'nowrap'
						}
					})]
				})
			})
		});
		
		let resizeEvent;

		let setIcon = self.setIcon = (_icon) => {
			//REQUIRED: icon
			
			icon = _icon;
			
			iconDom.empty();
			iconDom.append(icon);

			titleDom.addStyle(isIconRight === true ? {
				paddingRight : spacing
			} : {
				paddingLeft : spacing
			});
			
			if (resizeEvent === undefined) {
				
				resizeEvent = EVENT({
					name : 'resize'
				}, (e) => {
					if (width === undefined) {
						a.addStyle({
						    width : iconDom.getWidth() + titleDom.getWidth()
						});
					}
				});
	
				self.on('remove', () => {
					resizeEvent.remove();
					resizeEvent = undefined;
				});
	
				self.on('show', () => {
					if (resizeEvent !== undefined) {
						resizeEvent.fire();
					}
				});
				
				DELAY(() => {
					if (resizeEvent !== undefined) {
						resizeEvent.fire();
					}
				});
			}
			
			EVENT_ONCE({
				node : icon,
				name : 'load'
			}, (e) => {
				if (resizeEvent !== undefined) {
					resizeEvent.fire();
				}
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
			
			if (width === undefined) {
				a.addStyle({
				    width : iconDom.getWidth() + titleDom.getWidth()
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
			titleDom.hide();
		};
		
		let showTitle = self.showTitle = () => {
			titleDom.show();
		};
	}
});
