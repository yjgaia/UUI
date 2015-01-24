/**
 * Panel(wrapper layer + content layer) class
 */
UUI.PANEL = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.on

		var
		// content style
		contentStyle = params === undefined ? undefined : params.contentStyle,

		// wrapper
		wrapper,

		// content
		content,

		// add content style.
		addContentStyle;

		wrapper = DIV({
			c : content = DIV()
		});

		inner.setWrapperDom(wrapper);
		inner.setContentDom(content);

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}
	}
});
