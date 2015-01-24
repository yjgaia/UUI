/**
 * Table class
 */
UUI.TABLE = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style
		//OPTIONAL: params.trs
		//OPTIONAL: params.on

		var
		// trs
		trs = params === undefined ? undefined : params.trs,

		// tr stack
		trStack = [],

		// remove tr handlers
		removeTRHandlers = {},

		// table
		table,

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

		inner.setDom( table = TABLE());

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

				trStack[FIND({
					array : trStack,
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
				array : trStack,
				value : tr
			});
			REMOVE({
				data : trs,
				name : key
			});
			REMOVE({
				data : removeTRHandlers,
				name : key
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
