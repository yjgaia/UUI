/**
 * Modal class
 */
UUI.MODAL = CLASS({

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.xStyle
		//OPTIONAL: params.xImg
		//OPTIONAL: params.isCannotClose
		//OPTIONAL: params.on

		var
		// children
		children = params === undefined ? undefined : params.c,

		// wrapper style
		wrapperStyle = params === undefined ? undefined : params.wrapperStyle,

		// content style
		contentStyle = params === undefined ? undefined : params.contentStyle,

		// x style
		xStyle = params === undefined ? undefined : params.xStyle,

		// x img
		xImg = params === undefined ? undefined : params.xImg,

		// is cannot close
		isCannotClose = params === undefined ? undefined : params.isCannotClose,

		// on
		on = params === undefined ? undefined : params.on,

		// wrapper
		wrapper,

		// content
		content,

		// resize event
		resizeEvent,

		// scroll event
		scrollEvent,

		// esc event
		escEvent,

		// get node.
		getNode,

		// move to center.
		moveToCenter,

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

		// add wrapper style.
		addWrapperStyle,

		// add content style.
		addContentStyle,

		// on.
		on,

		// close.
		close;

		if (xImg === undefined && isCannotClose !== true) {
			xImg = IMG({
				src : UUI.R('x.png')
			});
		}

		wrapper = DIV({
			c : [ content = DIV(), isCannotClose === true ? '' : UUI.IMG_BUTTON({
				style : COMBINE([{
					position : 'absolute'
				}, xStyle === undefined ? {
					top : -20,
					right : -20,
					padding : 10
				} : xStyle]),
				img : xImg,
				on : {
					tap : function(e) {
						close();
					},
					mouseover : function() {
						addWrapperStyle({
							opacity : 0.8
						});
					},
					mouseout : function() {
						addWrapperStyle({
							opacity : 1
						});
					}
				}
			})]
		}).appendTo(BODY);

		moveToCenter = RAR(function() {

			var
			// left
			left = (WIN_WIDTH() - wrapper.getWidth()) / 2,

			// top
			top = (WIN_HEIGHT() - wrapper.getHeight()) / 2,

			// find.
			find;

			wrapper.addStyle({
				position : 'fixed',
				left : left < 0 ? 0 : left,
				top : top < 0 ? 0 : top
			});

			find = function(children) {
				EACH(children, function(child) {

					if (child.type === IMG) {
						EVENT({
							node : child,
							name : 'load'
						}, function() {
							moveToCenter();
						});
					}

					if (child.getChildren !== undefined) {
						find(child.getChildren());
					}
				});
			};

			find(wrapper.getChildren());
		});

		wrapper.on('show', moveToCenter);

		resizeEvent = EVENT({
			name : 'resize'
		}, moveToCenter);

		scrollEvent = EVENT({
			name : 'scroll'
		}, moveToCenter);

		escEvent = EVENT({
			name : 'keydown'
		}, function(e) {

			if (e.getKeyCode() === 27 && isCannotClose !== true) {
				close();
			}
		});

		wrapper.on('remove', function() {
			resizeEvent.remove();
			scrollEvent.remove();
			escEvent.remove();
		});

		self.getNode = getNode = function() {
			return wrapper;
		};

		self.append = append = function(node) {
			//REQUIRED: node

			content.append(node);
			moveToCenter();
		};

		if (children !== undefined) {

			if (CHECK_IS_ARRAY(children) === true) {

				EACH(children, function(child, i) {
					append(child);
				});

			} else {
				append(children);
			}
		}

		self.prepend = prepend = function(node) {
			//REQUIRED: node

			content.prepend(node);
			moveToCenter();
		};

		self.after = after = function(node) {
			//REQUIRED: node

			wrapper.after(node);
			moveToCenter();
		};

		self.before = before = function(node) {
			//REQUIRED: node

			wrapper.before(node);
			moveToCenter();
		};

		self.remove = remove = function() {
			wrapper.remove();
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
			moveToCenter();
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addContentStyle = addContentStyle = function(style) {
			//REQUIRED: style

			content.addStyle(style);
			moveToCenter();
		};

		if (contentStyle !== undefined) {
			addContentStyle(contentStyle);
		}

		self.on = on = function(eventName, eventHandler) {
			EVENT({
				node : self,
				lowNode : wrapper,
				name : eventName
			}, eventHandler);
		};

		self.close = close = function() {

			if (EVENT.fireAll({
				node : self,
				name : 'close'
			}) !== false) {
				remove();
			}
		};
	},

	afterInit : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.contentStyle
		//OPTIONAL: params.xStyle
		//OPTIONAL: params.xImg
		//OPTIONAL: params.isCannotClose
		//OPTIONAL: params.on

		var
		// on
		on;

		// init params.
		if (params !== undefined && CHECK_IS_DATA(params) === true) {
			on = params.on;
		}

		if (on !== undefined) {
			EACH(on, function(handler, name) {
				self.on(name, handler);
			});
		}
	}
});
