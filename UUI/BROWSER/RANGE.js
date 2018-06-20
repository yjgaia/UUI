/*
 * Range input class
 */
UUI.RANGE = CLASS({

	preset : () => {
		return NODE;
	},

	init : (inner, self, params) => {
		//REQUIRED: params
		//REQUIRED: params.name
		//OPTIONAL: params.min
		//OPTIONAL: params.max
		//OPTIONAL: params.step
		//OPTIONAL: params.value
		//OPTIONAL: params.thumbStyle
		//OPTIONAL: params.trackStyle

		let name = params.name;
		let min = params.min;
		let max = params.max;
		let step = params.step;
		let value = params.value;
		let thumbStyle = params.thumbStyle;
		let trackStyle = params.trackStyle;
		
		if (min === undefined) {
			min = 0;
		}
		if (max === undefined) {
			max = 100;
		}
		if (step === undefined) {
			step = 1;
		}
		if (value === undefined) {
			value = 0;
		}
		
		let beforeValue = value;

		let track;
		let thumb;
		let wrapper = DIV({
			style : {
				padding : '10px 5px'
			},
			c : track = DIV({
				style : EXTEND({
					origin : {
						position : 'relative'
					},
					extend : trackStyle
				}),
				c : thumb = DIV({
					style : EXTEND({
						origin : {
							position : 'absolute',
							cursor : 'pointer'
						},
						extend : thumbStyle
					})
				})
			})
		});
		
		self.on('show', () => {
			
			thumb.addStyle({
				marginLeft : -thumb.getWidth() / 2,
				top : (track.getHeight() - thumb.getHeight()) / 2
			});
			
			thumb.on('touchstart', (e) => {
				
				let startLeft = thumb.getLeft();
				
				let touchmoveEvent = EVENT('touchmove', (e) => {
					
					let trackWidth = track.getWidth();
					
					let left = e.getLeft() - startLeft;
					if (left < 0) {
						left = 0;
					}
					if (left > trackWidth) {
						left = trackWidth;
					}
					
					value = (left / trackWidth) * (max - min) + min;
					value = Math.round(value / step) * step;
					
					left = (value - min) / (max - min) * trackWidth;
					
					thumb.addStyle({
						left : left
					});
					
					if (beforeValue !== value) {
						self.fireEvent('change');
						beforeValue = value;
					}
					
					e.stop();
				});
				
				let touchendEvent = EVENT('touchend', (e) => {
					touchmoveEvent.remove();
					touchendEvent.remove();
					
					e.stop();
				});
				
				e.stop();
			});
		});

		inner.setWrapperDom(wrapper);

		let getName = self.getName = () => {
			return name;
		};

		let getValue = self.getValue = () => {
			return value;
		};

		let setValue = self.setValue = (_value) => {
			//REQUIRED: _value

			value = _value;
			
			if (beforeValue !== value) {
				self.fireEvent('change');
				beforeValue = value;
			}
		};

		let on = self.on = (eventName, eventHandler) => {
			//REQUIRED: eventName
			//REQUIRED: eventHandler

			EVENT({
				node : self,
				lowNode : wrapper,
				name : eventName
			}, eventHandler);
		};
	}
});
