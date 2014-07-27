/**
 * Panel(wrapper layer + content layer) class
 */
UUI.PANEL = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.on

		var
		// children
		children = params === undefined ? undefined : (params.c === undefined || CHECK_IS_ARRAY(params.c) === true ? params.c : [params.c]),

		// wrapper style
		wrapperStyle = params === undefined ? undefined : params.wrapperStyle,

		// content style
		contentStyle = params === undefined ? undefined : params.contentStyle,

		// on
		on = params === undefined ? undefined : params.on,

		// wrapper
		wrapper,

		// content
		content,

		// get dom.
		getDom,

		// append.
		append,

		// prepend.
		prepend,

		// empty.
		empty,

		// get children.
		getChildren,

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle;

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		wrapper = DIV({
			c : [ content = DIV()],
			on : on
		});

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
		};

		if (children !== undefined) {
			EACH(children, function(child, i) {
				append(child);
			});
		}

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
