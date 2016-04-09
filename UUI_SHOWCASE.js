require(process.env.UPPERCASE_PATH + '/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'UUI_SHOWCASE',
		title : 'UUI SHOWCASE',
		isDevMode : true,
		webServerPort : 8409
	},
	NODE_CONFIG : {
		isNotUsingCPUClustering : true
	}
});
