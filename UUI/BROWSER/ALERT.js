/**
 * Alert class
 */
UUI.ALERT = CLASS({

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.buttonStyle
		//OPTIONAL: params.on
		//REQUIRED: params.msg

		var
		// style
		style = params.style,
		
		// content style
		contentStyle = params.contentStyle,
		
		// button style
		buttonStyle = params.buttonStyle,

		// on
		on = params.on,

		// msg
		msg = params.msg,

		// modal
		modal,
		
		// content
		content,
		
		// button
		button,

		// get node.
		getNode,

		// append.
		append,

		// prepend.
		prepend,

		// after.
		after,

		// before.
		before,

		// remove.
		remove,

		// empty.
		empty,

		// get children.
		getChildren,
		
		// get button.
		getButton,

		// add content style.
		addContentStyle,

		// add button style.
		addButtonStyle;

		modal = UUI.MODAL({
			style : COMBINE([{
				textAlign : 'center'
			}, style]),
			on : on,
			c : [content = P({
				style : contentStyle,
				c : msg
			}), button = UUI.BUTTON({
				style : buttonStyle,
				title : MSG({
					en : 'Close',
					ko : '닫기'
				}),
				on : {
					tap : function() {
						remove();
					}
				}
			})]
		});

		self.getNode = getNode = function() {
			return modal.getNode();
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
		};

		self.after = after = function(node) {
			//REQUIRED: node

			modal.after(node);
		};

		self.before = before = function(node) {
			//REQUIRED: node

			modal.before(node);
		};

		self.remove = remove = function() {
			modal.remove();
		};

		self.empty = empty = function() {
			content.empty();
		};

		self.getChildren = getChildren = function() {
			return content.getChildren();
		};

		self.getButton = getButton = function() {
			return button;
		};

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addContentStyle(style);
		};
		
		self.addButtonStyle = addButtonStyle = function(style) {
			//REQUIRED: style
			
			button.addStyle(style);
		};
	}
});
