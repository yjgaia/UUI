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
