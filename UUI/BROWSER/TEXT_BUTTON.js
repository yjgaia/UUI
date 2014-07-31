/**
 * Text Button class
 */
UUI.TEXT_BUTTON = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.title
		//OPTIONAL: params.href
		//OPTIONAL: params.target
		//OPTIONAL: params.style
		//OPTIONAL: params.on

		var
		// title
		title = params.title,

		// href
		href = params.href,

		// target
		target = params.target,

		// style
		style = params.style,

		// on
		on = params.on,

		// a
		a,

		// span
		span,

		// set title.
		setTitle,

		// get dom.
		getDom,

		// tap.
		tap;

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		a = A({
			style : COMBINE([{
				cursor : 'pointer',
				textDecoration : 'none',
				touchCallout : 'none',
				userSelect : 'none'
			}, style]),
			href : href,
			target : target,
			on : on,
			c : span = SPAN({
				c : title === undefined ? (href === undefined ? '' : href) : title
			})
		});

		self.setTitle = setTitle = function(title) {
			span.empty();
			span.append(title);
		};

		self.getDom = getDom = function() {
			return a;
		};

		self.tap = tap = function() {
			a.tap();
		};
	}
});
