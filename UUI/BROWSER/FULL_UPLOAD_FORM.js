/**
 * Full-size upload form class
 */
UUI.FULL_UPLOAD_FORM = CLASS({

	preset : function() {
		'use strict';

		return NODE;
	},

	init : function(inner, self, params, callbackOrHandlers) {
		'use strict';
		//REQUIRED: params
		//REQUIRED: params.box
		//OPTIONAL: params.capture
		//OPTIONAL: params.accept
		//OPTIONAL: params.isMultiple
		//OPTIONAL: params.style
		//OPTIONAL: params.formStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.uploadingStyle
		//OPTIONAL: params.uploadOverSizeFile
		//OPTIONAL: params.uploadSuccess
		//OPTIONAL: params.on

		var
		// box
		box = params.box,

		// capture
		capture = params.capture,

		// accept
		accept = params.accept,

		// is multiple
		isMultiple = params.isMultiple,

		// callback url
		callbackURL = params.callbackURL !== undefined ? params.callbackURL : 'http://' + BROWSER_CONFIG.host + ':' + CONFIG.webServerPort + '/__UPLOAD_CALLBACK',

		// form style
		formStyle = params.formStyle,

		// input style
		inputStyle = params.inputStyle,

		// uploading style
		uploadingStyle = params.uploadingStyle,

		// upload over size file
		uploadOverSizeFile = params.uploadOverSizeFile,

		// upload sucess
		uploadSuccess = params.uploadSuccess,

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
			}), uploading = UUI.PANEL({
				style : {
					position : 'absolute',
					top : 0,
					left : 0,
					width : '100%',
					height : '100%',
					display : 'none'
				},
				contentStyle : {
					backgroundColor : '#000',
					position : 'absolute',
					top : '50%',
					left : '50%',
					width : 100,
					marginLeft : -55,
					marginTop : -13,
					padding : 5,
					textAlign : 'center',
					borderRadius : 10,
					color : '#fff'
				},
				c : 'Uploading...'
			})]
		});

		GET({
			port : CONFIG.webServerPort,
			uri : '__UPLOAD_SERVER_HOST?defaultHost=' + BROWSER_CONFIG.host
		}, function(host) {

			iframe.after( form = FORM({
				action : 'http://' + host + ':' + CONFIG.webServerPort + '/__UPLOAD?boxName=' + box.boxName + '&callbackURL=' + callbackURL,
				target : '__UPLOAD_FORM_' + self.id,
				method : 'POST',
				enctype : 'multipart/form-data',
				style : COMBINE([{
					padding : 5
				}, formStyle]),
				c : [ input = INPUT({
					type : 'file',
					name : 'file',
					capture : capture,
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
					uploading.show();

					if (form !== undefined) {
						form.submit(true);
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

				if (uploadOverSizeFile !== undefined) {
					uploadOverSizeFile(maxUploadFileMB);
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

				if (uploadSuccess !== undefined) {
					uploadSuccess(isMultiple !== true ? fileDataSet[0] : fileDataSet);
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
