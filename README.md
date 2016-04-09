# UUI
UPPERCASE User Interface BOX for web applications.

## BUTTON
이미지가 위에, 글자가 아래에 오는 버튼을 생성합니다.
```javascript
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
```

## BUTTON_H
이미지가 왼쪽에, 글자가 오른쪽에 오는 버튼을 생성합니다. `isImgRight`를 `true`로 설정하면, 이미지가 오른쪽에 오게됩니다.
```javascript
UUI.BUTTON_H({
	style : {
		border : '1px solid #666',
		background : '#ccc',
		color : '#000',
		padding : 5
	},
	// isImgRight : true, // 이미지를 오른쪽으로
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
```

## IMG_BUTTON
이미지 버튼을 생성합니다.
```javascript
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
```

## TEXT_BUTTON
텍스트 버튼을 생성합니다.
```javascript
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
```

## LIST
아이템을 관리할 수 있도록 `UL`을 확장한 `NODE`입니다.
```javascript
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
```

## TABLE
열을 관리할 수 있도록 `TABLE`을 확장한 `NODE`입니다.
```javascript
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
```

## PANEL
외부와 내부가 분리되어 있는 `DOM`을 생성합니다.
```javascript
UUI.PANEL({
	style : {
		padding : 10,
		background : 'red'
	},
	contentStyle : {
		padding : 10,
		background : 'blue'
	},
	c : 'This is Panel.'
}).appendTo(wrapper);
```

## V_CENTER
세로 중앙 정렬의 `DOM`을 생성합니다.
```javascript
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
```

## MODAL
화면 가운데에 뜨는 모들을 생성합니다. `xImg` 설정을 통해 모들 종료 버튼의 이미지를 지정할 수 있습니다. 지정하지 않으면 `UUI` 기본 종료 버튼이 뜨게 됩니다.
```javascript
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
```

## NOTICE
화면 가운데에 특정 메시지를 출력하고, 잠시 후 삭제되는 모들을 생성합니다.
```javascript
UUI.NOTICE({
	style : {
		border : '1px solid #666',
		background : '#ccc',
		color : '#000',
		padding : '5px 8px'
	},
	msg : '저장되었습니다.'
});
```

## LOADING
화면 가운데에 로딩중 메시지를 출력하는 모들을 생성합니다. `indicator` 설정을 통해 로딩중 이미지를 출력할 수 있습니다.
```javascript
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
```

## VALID_FORM

## FULL_CHECKBOX

## FULL_INPUT

## FULL_RADIO

## FULL_SELECT

## FULL_SUBMIT

## FULL_TEXTAREA

## FULL_UPLOAD_FORM

## CALENDAR

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)