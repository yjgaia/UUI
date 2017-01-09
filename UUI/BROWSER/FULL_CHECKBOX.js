/**
 * Full-size checkbox class
 */
UUI.FULL_CHECKBOX = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//REQUIRED: params.label
		//OPTIONAL: params.spacing
		//OPTIONAL: params.value
		//OPTIONAL: params.style
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// label
		label = params.label,
		
		// spacing
		spacing = params.spacing === undefined ? 0 : params.spacing,

		// value
		value = params.value,

		// input style
		inputStyle = params.inputStyle,

		// wrapper
		wrapper,

		// input
		input,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// blur.
		blur,

		// add input style.
		addInputStyle,

		// on.
		on,

		// toggle check.
		toggleCheck,

		// check is checked.
		checkIsChecked;

		wrapper = DIV({
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
					tap : function(e) {

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

		self.getName = getName = function() {
			return name;
		};

		self.getValue = getValue = function() {
			return input.getValue();
		};

		self.setValue = setValue = function(value) {
			//REQUIRED: value

			var
			// checked
			checked = input.checkIsChecked();

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

		self.select = select = function() {

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

		self.blur = blur = function() {

			input.blur();

			EVENT.fireAll({
				node : self,
				name : 'blur'
			});
		};

		self.addInputStyle = addInputStyle = function(style) {
			//REQUIRED: style

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.on = on = function(eventName, eventHandler) {
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

		self.toggleCheck = toggleCheck = function(e) {

			var
			// checked
			checked = input.toggleCheck();

			EVENT.fireAll({
				node : self,
				name : 'change'
			});

			return checked;
		};

		self.checkIsChecked = checkIsChecked = function() {
			return input.checkIsChecked();
		};

		EVENT({
			node : self,
			lowNode : input,
			name : 'keyup'
		}, function(e) {
			if (e !== undefined && e.getKey() === 'Enter') {
				DELAY(function() {
					EVENT.fireAll({
						node : self,
						name : 'change'
					});
				});
			}
		});
	}
});
