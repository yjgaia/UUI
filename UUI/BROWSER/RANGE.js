/*
 * Range input class
 */
UUI.RANGE = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.value
		//OPTIONAL: params.thumbStyle
		//OPTIONAL: params.trackStyle
		//OPTIONAL: params.on

		let name = params.name;
		let value = params.value;
		let thumbStyle = params.thumbStyle;
		let trackStyle = params.trackStyle;

		let input;
		let track;
		let thumb;
		let wrapper = DIV({
			style : {
				padding : 5
			},
			c : DIV({
				style : {
					position : 'relative'
				},
				c : [
					
				track = DIV({
					style : trackStyle,
					c : thumb = DIV({
						style : EXTEND({
							origin : {
								position : 'absolute',
								cursor : 'pointer'
							},
							extend : thumbStyle
						})
					})
				}),

				// input
				input = INPUT({
					style : {
						position : 'fixed',
						left : -999999,
						top : -999999
					},
					name : name,
					value : value
				})]
			}),
			on : {
				tap : () => {

					input.focus();

					EVENT.fireAll({
						node : self,
						name : 'focus'
					});
				}
			}
		});
		
		self.on('show', () => {
			thumb.addStyle({
				top : (track.getHeight() - thumb.getHeight()) / 2
			});
		});

		inner.setWrapperDom(wrapper);

		let getName = self.getName = () => {
			return name;
		};

		let getValue = self.getValue = () => {
			return input.getValue();
		};

		let setValue = self.setValue = (value) => {
			//REQUIRED: value

			let originValue = input.getValue();

			input.setValue(value);

			if (originValue !== value) {

				EVENT.fireAll({
					node : self,
					name : 'change'
				});
			}
		};

		let select = self.select = () => {

			input.select();

			EVENT.fireAll({
				node : self,
				name : 'select'
			});

			EVENT.fireAll({
				node : self,
				name : 'focus'
			});
		};

		let focus = self.focus = () => {

			input.focus();

			EVENT.fireAll({
				node : self,
				name : 'focus'
			});
		};

		let blur = self.blur = () => {

			input.blur();

			EVENT.fireAll({
				node : self,
				name : 'blur'
			});
		};

		let on = self.on = (eventName, eventHandler) => {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			if (eventName === 'focus' || eventName === 'blur' || eventName === 'change' || eventName === 'keydown' || eventName === 'keypress' || eventName === 'keyup') {

				EVENT({
					node : self,
					lowNode : input,
					name : eventName
				}, eventHandler);

			} else {

				EVENT({
					node : self,
					lowNode : wrapper,
					name : eventName
				}, eventHandler);
			}
		};
	}
});
