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
		//OPTIONAL: params.value
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// label
		label = params.label,

		// value
		value = params.value,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

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

		// add wrapper style.
		addWrapperStyle,

		// add input style.
		addInputStyle,

		// on.
		on;

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
					flt : 'left',
					cursor : 'pointer'
				},
				c : label,
				on : {
					tap : function(e) {
						input.toggleCheck();
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

			input.setValue(value);
		};

		self.select = select = function() {
			input.select();
		};

		self.blur = blur = function() {
			input.blur();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

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
	}
});
