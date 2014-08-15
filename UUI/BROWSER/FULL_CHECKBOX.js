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

		// label dom
		labelDom,

		// get dom.
		getDom,

		// append.
		append,

		// append to.
		appendTo,

		// prepend.
		prepend,

		// prepend to.
		prependTo,

		// after.
		after,

		// insert after.
		insertAfter,

		// before.
		before,

		// insert before.
		insertBefore,

		// remove.
		remove,

		// empty.
		empty,

		// get parent.
		getParent,

		// set parent.
		setParent,

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
			on : {
				tap : function(e) {
					input.toggleCheck();
					e.stop();
				}
			},
			c : [ input = INPUT({
				style : {
					flt : 'left',
					marginRight : 5
				},
				name : name,
				type : 'checkbox',
				on : {
					tap : function(e) {
						e.stop();
					}
				},
				value : value
			}), labelDom = SPAN({
				style : {
					flt : 'left',
					cursor : 'pointer'
				},
				c : label
			}), CLEAR_BOTH()]
		});

		// for VALID_FORM.
		wrapper.isValidWrapper = true;

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

		self.on = on = function(name, handler) {
			//REQUIRED: name
			//REQUIRED: handler

			input.on(name, handler);
		};
	}
});
