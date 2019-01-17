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
		
		let iconDom;
		let titleDom;
		let div = DIV({
			c : TABLE({
				style : {
					width : '100%'
				},
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
						},
						c : title
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
						},
						c : title
					})]
				})
			})
		});

		if (icon !== undefined) {
			
			iconDom.append(icon);

			titleDom.addStyle(isIconRight === true ? {
				paddingRight : spacing
			} : {
				paddingLeft : spacing
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
