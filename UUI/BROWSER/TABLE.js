/**
 * Table class
 */
UUI.TABLE = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.style
		//OPTIONAL: params.c
		//OPTIONAL: params.trs
		//OPTIONAL: params.on

		var
		// style
		style = params === undefined ? undefined : params.style,

		// children
		children = params === undefined ? undefined : params.c,

		// trs
		trs = params === undefined ? undefined : params.trs,

		// on
		on = params === undefined ? undefined : params.on,

		// tr stack
		trStack = [],

		// remove tr handlers
		removeTRHandlers = {},

		// table
		table,

		// get dom.
		getDom,

		// add tr.
		addTR,

		// remove tr.
		removeTR,

		// add remove tr handler.
		addRemoveTRHandler,

		// remove all trs.
		removeAllTRs;

		if (trs === undefined) {
			trs = {};
		}

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
		}

		table = TABLE({
			style : style,
			c : children,
			on : on
		});

		self.getDom = getDom = function() {
			return table;
		};

		self.addTR = addTR = function(params) {
			//REQUIRED: params
			//REQUIRED: params.key
			//REQUIRED: params.tr
			//OPTIONAL: params.isFirst

			var
			// key
			key = params.key,

			// tr
			tr = params.tr,

			// is first
			isFirst = params.isFirst;

			if (trs[key] !== undefined) {

				tr.insertBefore(trs[key]);

				trStack[FIND_KEY({
					data : trStack,
					value : trs[key]
				})] = tr;

				trs[key].remove();

			} else if (isFirst === true && trStack.length > 0) {
				tr.insertBefore(trStack[0]);
				trStack.unshift(tr);
			} else {
				table.append(tr);
				trStack.push(tr);
			}

			trs[key] = tr;
		};

		EACH(trs, function(tr, key) {
			trStack.push(tr);

			table.append(tr);
		});

		self.removeTR = removeTR = function(key) {
			//REQUIRED: key

			var
			// tr
			tr = trs[key],

			// handlers
			handlers = removeTRHandlers[key];

			if (tr !== undefined) {
				tr.remove();
			}

			if (handlers !== undefined) {
				EACH(handlers, function(handler) {
					handler();
				});
			}

			REMOVE({
				data : trStack,
				value : tr
			});
			REMOVE({
				data : trs,
				key : key
			});
			REMOVE({
				data : removeTRHandlers,
				key : key
			});
		};

		self.addRemoveTRHandler = addRemoveTRHandler = function(key, removeTRHandler) {
			//REQUIRED: key
			//REQUIRED: removeTRHandler

			if (removeTRHandlers[key] === undefined) {
				removeTRHandlers[key] = [];
			}

			removeTRHandlers[key].push(removeTRHandler);
		};

		self.removeAllTRs = removeAllTRs = function() {

			EACH(trs, function(tr, key) {

				var
				// handlers
				handlers = removeTRHandlers[key];

				tr.remove();

				if (handlers !== undefined) {
					EACH(handlers, function(handler) {
						handler();
					});
				}
			});

			trs = {};
			trStack = [];
			removeTRHandlers = {};
		};
	}
});
