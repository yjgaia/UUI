/**
 * Notice class
 */
UUI.NOTICE = CLASS({

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.isCannotClose
		//OPTIONAL: params.on
		//REQUIRED: params.msg

		var
		// style
		style = params.style,
		
		// content style
		contentStyle = params.contentStyle,

		// is cannot close
		isCannotClose = params.isCannotClose,

		// on
		on = params.on,

		// msg
		msg = params.msg,

		// modal
		modal,

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

		// add content style.
		addContentStyle;

		modal = UUI.MODAL({
			style : COMBINE([{
				textAlign : 'center'
			}, style]),
			contentStyle : contentStyle,
			isCannotClose : true,
			on : on,
			c : msg
		});

		self.getNode = getNode = function() {
			return modal.getNode();
		};

		self.append = append = function(node) {
			//REQUIRED: node

			modal.append(node);
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			modal.prepend(node);
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
			modal.empty();
		};

		self.getChildren = getChildren = function() {
			return modal.getChildren();
		};

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			modal.addContentStyle(style);
		};

		if (isCannotClose !== true) {
			DELAY(2, function() {
				modal.close();
			});
		}
	}
});
