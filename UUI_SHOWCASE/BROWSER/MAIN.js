UUI_SHOWCASE.MAIN = METHOD({

	run : function(params) {
		'use strict';

		/**
		 * 테스트 결과
		 * IE 5.5 (SP1): 아직 테스트 하지 못함
		 * Firefox 3.0: 아직 테스트 하지 못함
		 * Opera 9.5 (SP1): 아직 테스트 하지 못함
		 */
		
		var
		// wrapper
		wrapper = DIV({
			style : {
				padding : 20,
				width : 200
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
				tap : function() {
					
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
				tap : function() {
					
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
				tap : function() {
					
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
		
		var
		// list
		list = UUI.LIST({
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
		list.addRemoveItemHandler('b', function() {
			console.log('b가 지워졌습니다.');
		});
		
		// 아이템 제거
		list.removeItem('b');
		
		// 모든 아이템 제거
		list.removeAllItems();
		
		var
		// table
		table = UUI.TABLE({
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
		table.addRemoveTRHandler('b', function() {
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
		
		var
		// loading
		loading = UUI.LOADING({
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
		DELAY(3, function() {
			loading.remove();
		});
	}
});
