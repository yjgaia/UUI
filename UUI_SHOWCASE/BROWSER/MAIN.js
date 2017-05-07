UUI_SHOWCASE.MAIN = METHOD({

	run : (params) => {
		
		let wrapper = DIV({
			style : {
				padding : 20,
				width : 250
			},
			c : H1({
				style : {
					color : '#999',
					fontSize : 20
				},
				c : 'UUI SHOWCASE'
			})
		}).appendTo(BODY);
		
		wrapper.append(BR());
		
		UUI.BUTTON({
			style : {
				border : '1px solid #666',
				background : '#ccc',
				color : '#000',
				padding : 5
			},
			img : IMG({
				src : UUI_SHOWCASE.R('doge.jpg')
			}),
			title : 'UUI GitHub 저장소',
			msg : 'BTNcafe',
			href : 'https://github.com/Hanul/UUI',
			target : '_blank'
		}).appendTo(wrapper);
		
		wrapper.append(BR());
		
		UUI.BUTTON_H({
			style : {
				border : '1px solid #666',
				background : '#ccc',
				color : '#000',
				padding : 5
			},
			img : IMG({
				src : UUI_SHOWCASE.R('save.png')
			}),
			spacing : 5,
			title : '저장하기',
			on : {
				tap : () => {
					
					UUI.NOTICE({
						style : {
							border : '1px solid #666',
							background : '#ccc',
							color : '#000',
							padding : '5px 8px'
						},
						msg : '저장되었습니다.'
					});
				}
			}
		}).appendTo(wrapper);
		
		wrapper.append(BR());
		
		UUI.IMG_BUTTON({
			img : IMG({
				src : UUI_SHOWCASE.R('save.png')
			}),
			on : {
				tap : () => {
					
					UUI.NOTICE({
						style : {
							border : '1px solid #666',
							background : '#ccc',
							color : '#000',
							padding : '5px 8px'
						},
						msg : '저장되었습니다.'
					});
				}
			}
		}).appendTo(wrapper);
		
		wrapper.append(' ');
		
		UUI.TEXT_BUTTON({
			style : {
				border : '1px solid #666',
				background : '#ccc',
				color : '#000',
				padding : 5
			},
			title : '저장하기',
			on : {
				tap : () => {
					
					UUI.NOTICE({
						style : {
							border : '1px solid #666',
							background : '#ccc',
							color : '#000',
							padding : '5px 8px'
						},
						msg : '저장되었습니다.'
					});
				}
			}
		}).appendTo(wrapper);
		
		wrapper.append(BR());
		wrapper.append(BR());
		
		let list = UUI.LIST({
			items : {
				a : LI({
					c : 'a 입니다.'
				}),
				b : LI({
					c : 'b 입니다.'
				}),
				c : LI({
					c : 'c 입니다.'
				})
			}
		}).appendTo(wrapper);
		
		// 아이템 추가
		list.addItem({
			key : 'd',
			item : LI({
				c : 'd 입니다.'
			}),
			isFirst : true
		});
		
		// 특정 아이템이 제거 되었을 때 실행되는 핸들러
		list.addRemoveItemHandler('b', () => {
			console.log('b가 지워졌습니다.');
		});
		
		// 아이템 제거
		list.removeItem('b');
		
		// 모든 아이템 제거
		list.removeAllItems();
		
		let table = UUI.TABLE({
			trs : {
				a : TR({
					c : TD({
						c : 'a 입니다.'
					})
				}),
				b : TR({
					c : TD({
						c : 'b 입니다.'
					})
				}),
				c : TR({
					c : TD({
						c : 'c 입니다.'
					})
				})
			}
		}).appendTo(wrapper);
		
		// 열 추가
		table.addTR({
			key : 'd',
			tr : TR({
				c : TD({
					c : 'd 입니다.'
				})
			}),
			isFirst : true
		});
		
		// 특정 열이 제거 되었을 때 실행되는 핸들러
		table.addRemoveTRHandler('b', () => {
			console.log('b가 지워졌습니다.');
		});
		
		// 열 제거
		table.removeTR('b');
		
		// 모든 열 제거
		table.removeAllTRs();
		
		UUI.PANEL({
			style : {
				padding : 10,
				background : 'red'
			},
			contentStyle : {
				padding : 10,
				background : 'blue'
			},
			c : 'This is a panel.'
		}).appendTo(wrapper);
		
		wrapper.append(BR());
		
		UUI.V_CENTER({
			style : {
				height : 50,
				background : 'green'
			},
			contentStyle : {
				padding : 10
			},
			c : 'Middle'
		}).appendTo(wrapper);
		
		UUI.MODAL({
			style : {
				background : 'purple',
				padding : 10
			},
			xImg : IMG({
				src : UUI_SHOWCASE.R('cancel.png')
			}),
			c : 'This is a modal.'
		});
		
		let loading = UUI.LOADING({
			style : {
				background : 'brown',
				padding : 10
			},
			indicator : IMG({
				src : UUI_SHOWCASE.R('loading.gif')
			}),
			msg : 'Loading...'
		});
		
		// loaded
		DELAY(3, () => {
			loading.remove();
		});
		
		wrapper.append(BR());
		
		UUI.VALID_FORM({
			errorMsgs : {
				name : {
					good : 'Good Name!'
				}
			},
			errorMsgStyle : {
				marginTop : 5,
				color : 'red'
			},
			style : {
				background : 'gray',
				padding : 10
			},
			c : [UUI.FULL_INPUT({
				name : 'name',
				placeholder : 'Name',
				isOffAutocomplete : true
			}), UUI.FULL_SELECT({
				style : {
					marginTop : 10
				},
				name : 'age',
				options : [OPTION({
					value : 28,
					c : '28'
				}), OPTION({
					value : 29,
					c : '29'
				}), OPTION({
					value : 30,
					c : '30'
				})],
				value : 29
			}), UUI.FULL_CHECKBOX({
				style : {
					marginTop : 10
				},
				name : 'dog',
				label : 'Dog'
			}), UUI.FULL_CHECKBOX({
				name : 'cat',
				label : 'Cat'
			}), UUI.FULL_TEXTAREA({
				style : {
					marginTop : 10
				},
				name : 'intoduce',
				placeholder : 'Intoduce'
			}), UUI.CALENDAR({
				headerStyle : {
					fontSize : 20,
					padding : '10px 15px',
					fontWeight : 'bold'
				},
				dayStyle : {
					backgroundColor : '#999',
					color : '#fff',
					padding : 5,
					textAlign : 'center',
					fontWeight : 'bold'
				},
				dateStyle : {
					backgroundColor : '#eee',
					fontSize : 15,
					color : '#000',
					fontWeight : 'bold',
					padding : '8px 0',
					border : '1px solid #fff',
					textAlign : 'center',
					cursor : 'pointer'
				},
				todayDateStyle : {
					backgroundColor : '#ccc'
				},
				selectedDateStyle : {
					backgroundColor : '#999'
				},
				otherMonthDateStyle : {
					backgroundColor : '#eee',
					fontSize : 15,
					color : '#ccc',
					padding : '8px 0',
					border : '1px solid #fff',
					textAlign : 'center',
					cursor : 'pointer'
				}
			}, (selectedCal) => {
				console.log(selectedCal.getYear() + '-' + selectedCal.getMonth() + '-' + selectedCal.getDate());
			}), UUI.FULL_UPLOAD_FORM({
				style : {
					marginTop : 10
				},
				box : UUI_SHOWCASE
			}, {
				overSizeFile : (maxUploadFileMB) => {
					alert('Max upload file size is ' + maxUploadFileMB + 'mb.');
				},
				success : (fileData, form) => {
					
					if (
					fileData.type === 'image/png' ||
					fileData.type === 'image/jpeg' ||
					fileData.type === 'image/gif') {
					
						form.after(IMG({
							src : UUI_SHOWCASE.RF(fileData.id)
						}));
					}
				}
			}), UUI.FULL_SUBMIT({
				style : {
					marginTop : 10
				},
				value : 'Submit'
			})],
			on : {
				submit : (e, form) => {
					
					console.log(form.getData());
					
					form.showErrors({
						name : {
							type : 'good'
						}
					});
				}
			}
		}).appendTo(wrapper);
		
		UUI.CONFIRM({
			style : {
				background : '#fff',
				color : '#000',
				borderRadius : 20
			},
			contentStyle : {
				padding : 15
			},
			okButtonStyle : {
				flt : 'left',
				borderTop : '1px solid #999',
				padding : '15px 0',
				width : '50%'
			},
			cancelButtonStyle : {
				flt : 'right',
				marginLeft : -1,
				borderLeft : '1px solid #999',
				borderTop : '1px solid #999',
				padding : '15px 0',
				width : '50%'
			},
			msg : '이것은 확인 창입니다.\n닫기 버튼으로 종료할 수 있습니다.'
		}, () => {
			
			UUI.ALERT({
				style : {
					background : '#fff',
					color : '#000',
					borderRadius : 20
				},
				contentStyle : {
					padding : 15
				},
				buttonStyle : {
					borderTop : '1px solid #999',
					padding : 15
				},
				msg : '확인을 누르셨습니다.\n닫기 버튼으로 종료할 수 있습니다.'
			});
		});
		
		UUI.PROMPT({
			style : {
				background : '#fff',
				color : '#000',
				borderRadius : 20
			},
			contentStyle : {
				padding : 15
			},
			inputStyle : {
				padding : 10,
				borderTop : '1px solid #999',
			},
			okButtonStyle : {
				flt : 'left',
				borderTop : '1px solid #999',
				padding : '15px 0',
				width : '50%'
			},
			cancelButtonStyle : {
				flt : 'right',
				marginLeft : -1,
				borderLeft : '1px solid #999',
				borderTop : '1px solid #999',
				padding : '15px 0',
				width : '50%'
			},
			msg : '이것은 입력 창입니다.\n닫기 버튼으로 종료할 수 있습니다.'
		}, (value) => {
			
			UUI.ALERT({
				style : {
					background : '#fff',
					color : '#000',
					borderRadius : 20
				},
				contentStyle : {
					padding : 15
				},
				buttonStyle : {
					borderTop : '1px solid #999',
					padding : 15
				},
				msg : value + '를 입력하셨습니다.\n닫기 버튼으로 종료할 수 있습니다.'
			});
		});
	}
});
