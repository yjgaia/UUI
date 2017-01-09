/**
 * Full-size upload form class
 */
UUI.FULL_UPLOAD_FORM = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params, handlers) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.box
		//OPTIONAL: params.accept
		//OPTIONAL: params.isMultiple
		//OPTIONAL: params.style
		//OPTIONAL: params.formStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.uploadingStyle
		//OPTIONAL: params.on
		//OPTIONAL: handlers
		//OPTIONAL: handlers.success
		//OPTIONAL: handlers.overSizeFile

		var
		// box
		box = params.box,
		
		// accept
		accept = params.accept,

		// is multiple
		isMultiple = params.isMultiple,

		// callback url
		callbackURL = params.callbackURL !== undefined ? params.callbackURL : (BROWSER_CONFIG.isSecure === true ? 'https://' : 'http://') + BROWSER_CONFIG.host + ':' + BROWSER_CONFIG.port + '/__CORS_CALLBACK',

		// form style
		formStyle = params.formStyle,

		// input style
		inputStyle = params.inputStyle,

		// uploading style
		uploadingStyle = params.uploadingStyle,
		
		// success handler.
		successHandler,

		// over size file handler.
		overSizeFileHandler,
		
		// upload progress room
		uploadProgressRoom,

		// wrapper
		wrapper,

		// form
		form,

		// input
		input,

		// iframe
		iframe,

		// uploading
		uploading,
		
		// uploading progress
		uploadingProgress,

		// select.
		select,

		// add form style.
		addFormStyle,

		// add input style.
		addInputStyle,

		// add uplading style.
		addUploadingStyle,

		// on.
		on;
		
		if (handlers !== undefined) {
			successHandler = handlers.success;
			overSizeFileHandler = handlers.overSizeFile;
		}

		wrapper = DIV({
			style : {
				padding : 5,
				background : '#FFF',
				position : 'relative'
			},
			c : [ iframe = IFRAME({
				style : {
					display : 'none'
				},
				name : '__UPLOAD_FORM_' + self.id
			}), uploading = UUI.V_CENTER({
				style : {
					display : 'none',
					position : 'absolute',
					top : 0,
					left : 0,
					backgroundColor : RGBA([0, 0, 0, 0.5]),
					color : '#fff',
					textAlign : 'center'
				},
				c : ['Uploading...', uploadingProgress = SPAN({
					style : {
						marginLeft : 10
					}
				})]
			})]
		});

		GET({
			isSecure : BROWSER_CONFIG.isSecure,
			port : BROWSER_CONFIG.port,
			uri : '__UPLOAD_SERVER_HOST?defaultHost=' + BROWSER_CONFIG.host
		}, function(host) {
			
			var
			// upload key
			uploadKey = RANDOM_STR(20);

			iframe.after( form = FORM({
				action : (BROWSER_CONFIG.isSecure === true ? 'https://' : 'http://') + host + ':' + BROWSER_CONFIG.port + '/__UPLOAD?boxName=' + box.boxName + '&callbackURL=' + callbackURL + '&uploadKey=' + uploadKey,
				target : '__UPLOAD_FORM_' + self.id,
				method : 'POST',
				enctype : 'multipart/form-data',
				style : formStyle,
				c : [ input = INPUT({
					type : 'file',
					name : 'file',
					accept : accept,
					isMultiple : isMultiple,
					style : COMBINE([{
						width : '100%',
						height : '100%',
						color : '#000',
						border : 'none'
					}, inputStyle])
				}), INPUT({
					type : 'submit',
					style : {
						visibility : 'hidden',
						position : 'absolute'
					}
				})]
			}));

			EVENT({
				node : input,
				name : 'change'
			}, function(e) {

				if (input.getValue() !== '') {
					
					uploading.addStyle({
						width : wrapper.getWidth(),
						height : wrapper.getHeight()
					});
					
					uploading.show();
					
					if (uploadProgressRoom !== undefined) {
						uploadProgressRoom.exit();
					}
					uploadProgressRoom = box.ROOM('uploadProgressRoom/' + uploadKey);
					uploadProgressRoom.on('progress', function(info) {
						uploadingProgress.empty();
						uploadingProgress.append('(' + info.bytesRecieved + '/' + info.bytesExpected + ')');
					});

					if (form !== undefined) {
						form.submit();
					}
				}
			});
		});

		EVENT({
			node : iframe,
			name : 'load'
		}, function(e) {

			var
			// frame
			frame = global['__UPLOAD_FORM_' + self.id],

			// file data set str
			fileDataSetStr = frame !== undefined ? frame.fileDataSetStr : undefined,

			// file data set
			fileDataSet,

			// max upload file MB
			maxUploadFileMB = frame !== undefined ? frame.maxUploadFileMB : undefined,

			// origin value
			originValue;

			if (maxUploadFileMB !== undefined) {

				if (overSizeFileHandler !== undefined) {
					overSizeFileHandler(maxUploadFileMB);
				}

				originValue = input.getValue();

				input.setValue('');

				if (originValue !== '') {

					EVENT.fireAll({
						node : self,
						name : 'change'
					});
				}

			} else if (fileDataSetStr !== undefined) {

				fileDataSet = PARSE_STR(decodeURIComponent(fileDataSetStr));

				EACH(fileDataSet, function(fileData, i) {
					fileDataSet[i] = UNPACK_DATA(fileData);
				});

				if (successHandler !== undefined) {
					successHandler(isMultiple !== true ? fileDataSet[0] : fileDataSet, self);
				}

				originValue = input.getValue();

				input.setValue('');

				if (originValue !== '') {

					EVENT.fireAll({
						node : self,
						name : 'change'
					});
				}
			}

			uploading.hide();
			
			if (uploadProgressRoom !== undefined) {
				uploadProgressRoom.exit();
				uploadProgressRoom = undefined;
			}
		});

		inner.setWrapperDom(wrapper);

		self.select = select = function() {

			if (input !== undefined) {

				input.select();

				EVENT.fireAll({
					node : self,
					name : 'select'
				});

				EVENT.fireAll({
					node : self,
					name : 'focus'
				});
			}
		};

		self.addFormStyle = addFormStyle = function(style) {
			//REQUIRED: style

			if (form !== undefined) {
				form.addStyle(style);
			} else {
				EXTEND({
					origin : formStyle,
					extend : style
				});
			}
		};

		if (formStyle !== undefined) {
			addFormStyle(formStyle);
		}

		self.addInputStyle = addInputStyle = function(style) {
			//REQUIRED: style

			if (input !== undefined) {
				input.addStyle(style);
			} else {
				EXTEND({
					origin : inputStyle,
					extend : style
				});
			}
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.addUploadingStyle = addUploadingStyle = function(style) {
			//REQUIRED: style

			uploading.addStyle(style);
		};

		if (uploadingStyle !== undefined) {
			addUploadingStyle(uploadingStyle);
		}

		self.on = on = function(eventName, eventHandler) {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			if (eventName === 'focus' || eventName === 'blur' || eventName === 'change' || eventName === 'keydown' || eventName === 'keypress' || eventName === 'keyup') {

				EVENT({
					node : self,
					lowNode : input,
					name : eventName
				}, eventHandler);

			} else {

				EVENT({
					node : self,
					lowNode : wrapper,
					name : eventName
				}, eventHandler);
			}
		};
	}
});
