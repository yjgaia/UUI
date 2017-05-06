/*
 * Full-size checkbox class
 */
UUI.FULL_CHECKBOX = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.name
		//REQUIRED: params.label
		//OPTIONAL: params.spacing
		//OPTIONAL: params.value
		//OPTIONAL: params.style
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.on

		let name = params.name;
		let label = params.label;
		let spacing = params.spacing === undefined ? 0 : params.spacing;
		let value = params.value;
		let inputStyle = params.inputStyle;

		let input;
		let wrapper = DIV({
			style : {
				position : 'relative'
			},
			c : [ input = INPUT({
				style : {
					flt : 'left',
					marginRight : 5
				},
				name : name,
				type : 'checkbox',
				value : value
			}), SPAN({
				style : {
					marginLeft : spacing,
					flt : 'left',
					cursor : 'pointer'
				},
				c : label,
				on : {
					tap : (e) => {

						input.toggleCheck();

						EVENT.fireAll({
							node : self,
							name : 'change'
						});
					}
				}
			}), CLEAR_BOTH()]
		});

		inner.setWrapperDom(wrapper);

		self.getName = getName = () => {
			return name;
		};

		self.getValue = getValue = () => {
			return input.getValue();
		};

		self.setValue = setValue = (value) => {
			//REQUIRED: value

			let checked = input.checkIsChecked();

			input.setValue(value);

			if (value === true) {

				if (checked !== true) {

					EVENT.fireAll({
						node : self,
						name : 'change'
					});
				}

			} else {

				if (checked === true) {

					EVENT.fireAll({
						node : self,
						name : 'change'
					});
				}
			}
		};

		self.select = select = () => {

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

		self.blur = blur = () => {

			input.blur();

			EVENT.fireAll({
				node : self,
				name : 'blur'
			});
		};

		self.addInputStyle = addInputStyle = (style) => {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.on = on = (eventName, eventHandler) => {
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

		self.toggleCheck = toggleCheck = (e) => {

			let checked = input.toggleCheck();

			EVENT.fireAll({
				node : self,
				name : 'change'
			});

			return checked;
		};

		self.checkIsChecked = checkIsChecked = () => {
			return input.checkIsChecked();
		};

		EVENT({
			node : self,
			lowNode : input,
			name : 'keyup'
		}, (e) => {
			if (e !== undefined && e.getKey() === ' ') {
				DELAY(() => {
					EVENT.fireAll({
						node : self,
						name : 'change'
					});
				});
			}
		});
	}
});
