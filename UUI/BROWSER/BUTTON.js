/*
 * Button class
 */
UUI.BUTTON = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.img
		//OPTIONAL: params.title
		//OPTIONAL: params.spacing
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		let img = params.img;
		let title = params.title;
		let spacing = params.spacing === undefined ? 0 : params.spacing;
		let href = params.href;
		let target = params.target;
		
		let titleDom;
		
		let a = A({
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
			a.prepend(titleDom = DIV({
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

		let setTitle = self.setTitle = (title) => {
			titleDom.empty();
			titleDom.append(title);
		};

		let getImg = self.getImg = () => {
			return img;
		};

		let tap = self.tap = () => {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
	}
});
