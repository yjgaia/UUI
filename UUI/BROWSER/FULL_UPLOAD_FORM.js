/**
 * Full-size upload form class
 */
UUI.FULL_UPLOAD_FORM = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//REQUIRED: params
		//REQUIRED: params.box
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.formStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.uploadingStyle
		//OPTIONAL: params.afterUpload
		//OPTIONAL: params.on

		var
		// box
		box = params.box,

		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// form style
		formStyle = params.formStyle,

		// input style
		inputStyle = params.inputStyle,

		// uploading style
		uploadingStyle = params.uploadingStyle,

		// after upload
		afterUpload = params.afterUpload,

		// on
		on = params.on,

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

		// get dom.
		getDom,

		// select.
		select,

		// add wrapper style.
		addWrapperStyle,

		// add form style.
		addFormStyle,

		// add input style.
		addInputStyle,

		// add uplading style.
		addUploadingStyle;

		if (on !== undefined) {

			EACH(on, function(handler, name) {
				on[name] = function(e) {
					handler(e, self);
				};
			});
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
			}), uploading = UUI.PANEL({
				wrapperStyle : {
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

		GET('__UPLOAD_SERVER_HOST', function(host) {

			var
			// callback url
			callbackURL = global.location.protocol + '//' + global.location.host + '/__UPLOAD_CALLBACK';

			iframe.after( form = FORM({
				action : 'http://' + (host === '' ? global.location.hostname : host) + ':' + CONFIG.uploadServerPort + '?callbackURL=' + callbackURL,
				target : '__UPLOAD_FORM_' + self.id,
				method : 'POST',
				enctype : 'multipart/form-data',
				style : COMBINE_DATA({
					origin : formStyle,
					extend : {
						padding : 5
					}
				}),
				c : [ input = INPUT({
					type : 'file',
					isMultiple : true,
					style : {
						width : '100%',
						height : '100%',
						color : '#000',
						border : 'none'
					},
					on : on
				}), INPUT({
					type : 'submit',
					style : {
						visibility : 'hidden',
						position : 'absolute'
					}
				})]
			}));

			// for VALID_FORM.
			form.isValidWrapper = true;
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

			// error code
			errorCode = frame !== undefined ? frame.errorCode : undefined;

			if (fileDataSetStr !== undefined || errorCode !== undefined) {

				fileDataSet = PARSE_STR(decodeURIComponent(fileDataSetStr));

				EACH(fileDataSet, function(fileData, i) {
					fileDataSet[i] = UNPACK_DATA(fileData);
				});

				input.setValue('');

				if (afterUpload !== undefined) {
					afterUpload(fileDataSet, errorCode);
				}
			}

			uploading.hide();
		});

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

		self.getDom = getDom = function() {
			return wrapper;
		};

		self.select = select = function() {
			input.select();
		};

		self.addWrapperStyle = addWrapperStyle = function(style) {
			//REQUIRED: style

			wrapper.addStyle(style);
		};

		if (wrapperStyle !== undefined) {
			addWrapperStyle(wrapperStyle);
		}

		self.addFormStyle = addFormStyle = function(style) {
			//REQUIRED: style

			if (form !== undefined) {
				form.addStyle(style);
			} else {
				EXTEND_DATA({
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

			input.addStyle(style);
		};

		if (inputStyle !== undefined) {
			addInputStyle(inputStyle);
		}

		self.addUploadingStyle = addUploadingStyle = function(style) {
			//REQUIRED: style

			uploading.addWrapperStyle(style);
		};

		if (uploadingStyle !== undefined) {
			addUploadingStyle(uploadingStyle);
		}
	}
});
