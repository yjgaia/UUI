/**
 * Vertical center class
 */
UUI.V_CENTER = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.on

		var
		// wrapper style
		wrapperStyle = params === undefined ? undefined : params.wrapperStyle,

		// content style
		contentStyle = params === undefined ? undefined : params.contentStyle,

		// wrapper
		wrapper,

		// content
		content,

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

		// get children.
		getChildren,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		wrapper = TABLE({
			style : {
				width : '100%',
				margin : 0,
				padding : 0
			},
			c : TR({
				style : {
					margin : 0,
					padding : 0
				},
				c : content = TD({
					style : {
						margin : 0,
						padding : 0
					}
				})
			})
		});

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
		};

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
		};

		self.empty = empty = function() {
			content.empty();
		};

		self.getChildren = getChildren = function() {
			return content.getChildren();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}
	}
});
