/**
 * Full-size upload form class
 */
UUI.FULL_UPLOAD_FORM = CLASS({

	preset : function() {'use strict';
		return NODE;
	},

	init : function(inner, self, params) {'use strict';
		//REQUIRED: params
		//OPTIONAL: params.wrapperStyle
		//OPTIONAL: params.formStyle
		//OPTIONAL: params.inputStyle
		//OPTIONAL: params.uploadingStyle
		//OPTIONAL: params.box
		//REQUIRED: params.afterUpload
		//OPTIONAL: params.on

		var
		// wrapper style
		wrapperStyle = params.wrapperStyle,

		// form style
		formStyle = params.formStyle,

		// input style
		inputStyle = params.inputStyle,

		// uploading style
		uploadingStyle = params.uploadingStyle,

		// box
		box = params.box,

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
			}), form = FORM({
				action : '/' + box.boxName + '/__UPLOAD?' + CONFIG.version,
				target : '__UPLOAD_FORM_' + self.id,
				method : 'POST',
				enctype : 'multipart/form-data',
				style : {
					padding : 5
				},
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
					borderRadius : 10
				},
				c : ['Uploading...']
			})]
		});

		// for VALID_FORM.
		form.isValidWrapper = true;

		EVENT({
			node : iframe,
			name : 'load'
		}, function(e) {

			var
			// frame
			frame = global['__UPLOAD_FORM_' + self.id],

			// file data set
			fileDataSet = frame !== undefined ? frame.fileDataSet : undefined,

			// error code
			errorCode = frame !== undefined ? frame.errorCode : undefined;

			if (fileDataSet !== undefined || errorCode !== undefined) {

				EACH(fileDataSet, function(fileData, i) {
					fileDataSet[i] = UNPACK_DATA(fileData);
				});

				input.setValue('');

				afterUpload(fileDataSet, errorCode);
			}

			uploading.hide();
		});

		EVENT({
			node : input,
			name : 'change'
		}, function(e) {

			if (input.getValue() !== '') {
				uploading.show();
				form.submit(true);
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

			form.addStyle(style);
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
