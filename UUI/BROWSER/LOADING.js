/**
 * Loading class
 */
UUI.LOADING = CLASS({

	init : function(inner, self, params) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.indicator
		//REQUIRED: params.msg
		//OPTIONAL: params.on

		var
		// style
		style = params.style,

		// content style
		contentStyle = params.contentStyle,

		// indicator
		indicator = params.indicator,

		// msg
		msg = params.msg,

		// on
		on = params.on,

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

		// add style.
		addStyle,

		// add content style.
		addContentStyle;

		modal = UUI.MODAL({
			style : COMBINE([{
				textAlign : 'center'
			}, style]),
			contentStyle : contentStyle,
			isCannotClose : true,
			c : [indicator === undefined ? '' : indicator, P({
				style : indicator === undefined ? {} : {
					marginTop : 10
				},
				c : msg
			})],
			on : on
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

		self.addStyle = addStyle = function(style) {
			//REQUIRED: style

			modal.addStyle(style);
		};

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			modal.addContentStyle(style);
		};
	}
});
