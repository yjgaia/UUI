/*
 * IMG Button class
 */
UUI.IMG_BUTTON = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//OPTIONAL: params.icon
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		let icon = params.icon;
		let href = params.href;
		let target = params.target;

		let a = A({
			style : {
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none'
			},
			href : href,
			target : target,
			c : icon
		});

		inner.setDom(a);

		let getIcon = self.getIcon = () => {
			return icon;
		};

		let tap = self.tap = () => {
			EVENT.fireAll({
				node : self,
				name : 'tap'
			});
		};
	}
});
