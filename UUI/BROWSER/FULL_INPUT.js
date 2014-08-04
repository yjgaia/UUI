/**
 * Full-size input class
 */
UUI.FULL_INPUT = CLASS({

	preset : function() {
		'use strict';
		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.type
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.on

		var
		// name
		name = params.name,

		// type
		type = params.type,

		// placeholder
		placeholder = params.placeholder,

		// value
		value = params.value,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// input style
		inputStyle = params.inputStyle,

		// on
		on = params.on,

		// keydown delay
		keydownDelay,

		// wrapper
		wrapper,

		// input
		input,

		// get input dom.
		getInputDom,

		// get dom.
		getDom,

		// get name.
		getName,

		// get value.
		getValue,

		// set value.
		setValue,

		// select.
		select,

		// focus.
		focus,

		// blur.
		blur,

		// add wrapper style.
		addWrapperStyle,

		// add input style.
		addInputStyle;

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		wrapper = DIV({
			style : {
				padding : 5,
				backgroundColor : '#FFF'
			},
			c : DIV({
				style : {
					position : 'relative'
				},
				c : [

				// span
				SPAN({
					style : {
						visibility : 'hidden'
					},
					c : '.'
				}),

				// input
				input = INPUT({
					style : {
						position : 'absolute',
						left : 0,
						top : 0,
						width : '100%',
						border : 'none',
						background : 'transparent'
					},
					name : name,
					type : type,
					value : value,
					on : on,
					placeholder : placeholder
				})]
			}),
			on : {
				tap : function() {
					input.focus();
				}
			}
		});

		// for VALID_FORM.
		wrapper.isValidWrapper = true;

		self.getInputDom = getInputDom = function() {
			return input;
		};

		self.getDom = getDom = function() {
			return wrapper;
		};

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

		self.focus = focus = function() {
			input.focus();
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
	}
});
