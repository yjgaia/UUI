/**
 * List class
 */
UUI.LIST = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params) {
		'use strict';
		//OPTIONAL: params
		//OPTIONAL: params.c
		//OPTIONAL: params.style
		//OPTIONAL: params.on
		//OPTIONAL: params.items
		//OPTIONAL: params.isRequiringClearBoth

		var
		// is requiring clear both
		isRequiringClearBoth = params === undefined ? undefined : params.isRequiringClearBoth,

		// item stack
		itemStack = [],

		// remove item handlers
		removeItemHandlers = {},

		// ul
		ul,

		// items
		items,

		// clear both
		clearBoth,

		// add item.
		addItem,

		// remove item.
		removeItem,

		// add remove item handler.
		addRemoveItemHandler,

		// remove all items.
		removeAllItems;

		if (items === undefined) {
			items = {};
		}

		inner.setDom( ul = UL());

		self.addItem = addItem = function(params) {
			//REQUIRED: params
			//REQUIRED: params.key
			//REQUIRED: params.item
			//OPTIONAL: params.isFirst

			var
			// key
			key = params.key,

			// item
			item = params.item,

			// is first
			isFirst = params.isFirst;

			if (items[key] !== undefined) {

				item.insertBefore(items[key]);

				itemStack[FIND({
					array : itemStack,
					value : items[key]
				})] = item;

				items[key].remove();

			} else if (isFirst === true && itemStack.length > 0) {
				item.insertBefore(itemStack[0]);
				itemStack.unshift(item);
			} else {
				self.append(item);
				itemStack.push(item);
			}

			items[key] = item;

			if (isRequiringClearBoth === true) {

				if (clearBoth !== undefined) {
					clearBoth.remove();
				}

				clearBoth = CLEAR_BOTH().appendTo(ul);
			}
		};

		if (params !== undefined && params.items !== undefined) {

			EACH(params.items, function(item, key) {
				addItem({
					key : key,
					item : item
				});
			});
		}

		self.removeItem = removeItem = function(key) {
			//REQUIRED: key

			var
			// item
			item = items[key],

			// handlers
			handlers = removeItemHandlers[key];

			if (item !== undefined) {
				item.remove();
			}

			if (handlers !== undefined) {
				EACH(handlers, function(handler) {
					handler();
				});
			}

			REMOVE({
				array : itemStack,
				value : item
			});
			REMOVE({
				data : items,
				name : key
			});
			REMOVE({
				data : removeItemHandlers,
				name : key
			});
		};

		self.addRemoveItemHandler = addRemoveItemHandler = function(key, handler) {
			//REQUIRED: key
			//REQUIRED: handler

			if (removeItemHandlers[key] === undefined) {
				removeItemHandlers[key] = [];
			}

			removeItemHandlers[key].push(handler);
		};

		self.removeAllItems = removeAllItems = function() {

			EACH(items, function(item, key) {

				var
				// handlers
				handlers = removeItemHandlers[key];

				item.remove();

				if (handlers !== undefined) {
					EACH(handlers, function(handler) {
						handler();
					});
				}
			});

			items = {};
			itemStack = [];
			removeItemHandlers = {};
		};
	}
});
