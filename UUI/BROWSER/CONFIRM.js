/**
 * Confirm class
 */
UUI.CONFIRM = CLASS({

	init : function(inner, self, params, callback) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.okButtonStyle
		//OPTIONAL: params.cancelButtonStyle
		//OPTIONAL: params.on
		//REQUIRED: params.msg
		//REQUIRED: callback

		var
		// style
		style = params.style,
		
		// content style
		contentStyle = params.contentStyle,
		
		// ok button style
		okButtonStyle = params.okButtonStyle,
		
		// cancel button style
		cancelButtonStyle = params.cancelButtonStyle,

		// on
		on = params.on,

		// msg
		msg = params.msg,

		// modal
		modal,
		
		// content
		content,
		
		// ok button
		okButton,
		
		// cancel button
		cancelButton,

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
		
		// get ok button.
		getOkButton,
		
		// get cancel button.
		getCancelButton,

		// add content style.
		addContentStyle,

		// add ok button style.
		addOkButtonStyle,

		// add cancel button style.
		addCancelButtonStyle;

		modal = UUI.MODAL({
			style : COMBINE([{
				textAlign : 'center'
			}, style]),
			on : on,
			c : [content = P({
				style : contentStyle,
				c : msg
			}), okButton = UUI.BUTTON({
				style : okButtonStyle,
				title : MSG({
					en : 'Ok',
					ko : '확인'
				}),
				on : {
					tap : function() {
						callback();
						remove();
					}
				}
			}), cancelButton = UUI.BUTTON({
				style : cancelButtonStyle,
				title : MSG({
					en : 'Close',
					ko : '닫기'
				}),
				on : {
					tap : function() {
						remove();
					}
				}
			}), CLEAR_BOTH()]
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
		
		self.getOkButton = getOkButton = function() {
			return okButton;
		};
		
		self.getCancelButton = getCancelButton = function() {
			return cancelButton;
		};

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addContentStyle(style);
		};
		
		self.addOkButtonStyle = addOkButtonStyle = function(style) {
			//REQUIRED: style
			
			okButton.addStyle(style);
		};
		
		self.addCancelButtonStyle = addCancelButtonStyle = function(style) {
			//REQUIRED: style
			
			cancelButton.addStyle(style);
		};
	}
});
