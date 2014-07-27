/**
 * Full-size input class
 */
UUI.FULL_INPUT = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.type
		//OPTIONAL: params.placeholder
		//OPTIONAL: params.value
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.on
		//OPTIONAL: params.isHidePlaceholder

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

		// is hide placeholder
		isHidePlaceholder = params.isHidePlaceholder,

		// keydown delay
		keydownDelay,

		// placeholder style
		placeholderStyle = COMBINE_DATA({
			origin : {
				position : 'absolute',
				top : 0,
				color : '#999',
				cursor : 'text'
			},
			extend : inputStyle !== undefined && inputStyle.textAlign === 'center' ? {
				left : 0,
				width : '100%',
				textAlign : 'center'
			} : {
				left : value === undefined ? 0 : value.length,
			}
		}),

		// wrapper
		wrapper,

		// input
		input,

		// placeholder button
		placeholderButton,

		// replace placeholder button.
		replacePlaceholderButton,

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
		addInputStyle,

		// show.
		show,

		// hide.
		hide,

		// check is show.
		checkIsShow;

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

				// placeholder
				placeholderButton = UUI.TEXT_BUTTON({
					style : placeholderStyle,
					title : placeholder
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
					on : {
						change : function(e) {

							if (replacePlaceholderButton !== undefined) {
								replacePlaceholderButton();
							}

							if (on !== undefined && on.change !== undefined) {
								on.change(e, self);
							}
						},
						keydown : function(e) {

							keydownDelay = DELAY(function() {
								replacePlaceholderButton();
							});

							if (on !== undefined && on.keydown !== undefined) {
								on.keydown(e, self);
							}
						},
						keyup : function(e) {

							replacePlaceholderButton();

							if (on !== undefined && on.keyup !== undefined) {
								on.keyup(e, self);
							}
						}
					}
				})]
			})
		});

		replacePlaceholderButton = RAR(function() {

			var
			// value
			value = input.getValue(),

			// count
			count = 0,

			// font size str
			fontSizeStr = input.getStyle('fontSize'),

			// font size
			fontSize = fontSizeStr === undefined ? 12 : INTEGER(fontSizeStr);

			if (input.getStyle('textAlign') === 'center') {

				placeholderButton.addStyle({
					left : 0,
					width : '100%',
					textAlign : 'center'
				});

				if (value === '') {
					placeholderButton.show();
				} else {
					placeholderButton.hide();
				}

			} else if (isHidePlaceholder === true) {

				placeholderButton.addStyle({
					left : 0,
					width : 'auto',
					textAlign : 'left'
				});

				if (value === '') {
					placeholderButton.show();
				} else {
					placeholderButton.hide();
				}

			} else {

				REPEAT(value.length, function(i) {

					var
					// c
					c = value.charAt(i);

					if (escape(c).length > 4) {
						count += 1.8;
					} else {
						count += 1;
					}
				});

				placeholderButton.addStyle({
					left : count * fontSize / 1.6 + (count > 0 ? 5 : 0),
					width : 'auto',
					textAlign : 'left'
				});
			}
		});

		wrapper.addRemoveHandler(function() {
			if (keydownDelay !== undefined) {
				keydownDelay.remove();
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
			placeholderButton.addStyle(style);
			placeholderButton.addStyle(placeholderStyle);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}
	}
});
