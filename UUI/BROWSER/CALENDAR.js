/**
 * Calendar class
 */
UUI.CALENDAR = CLASS({

	preset : function() {
		'use strict';

		return UUI.TABLE;
	},

	init : function(inner, self, params, selectDateHandler) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.year
		//OPTIONAL: params.month
		//OPTIONAL: params.headerStyle
		//OPTIONAL: params.dayStyle
		//OPTIONAL: params.dateStyle
		//OPTIONAL: params.otherMonthDateStyle
		//OPTIONAL: params.selectedDateStyle
		//OPTIONAL: params.leftArrowImg
		//OPTIONAL: params.rightArrowImg
		//OPTIONAL: selectDateHandler

		var
		// year
		year = params.year,
		
		// month
		month = params.month,
		
		// header style
		headerStyle = params.headerStyle === undefined ? {} : params.headerStyle,
		
		// day style
		dayStyle = params.dayStyle,
		
		// date style
		dateStyle = params.dateStyle,
		
		// other month date style
		otherMonthDateStyle = params.otherMonthDateStyle,
		
		// selected date style
		selectedDateStyle = params.selectedDateStyle,
		
		// left arrow img
		leftArrowImg = params.leftArrowImg,
		
		// right arrow img
		rightArrowImg = params.rightArrowImg,
		
		// now cal
		nowCal,
		
		// title
		title,
		
		// load dates.
		loadDates;
		
		if (year === undefined || month === undefined) {
			
			nowCal = CALENDAR();
			
			if (year === undefined) {
				year = nowCal.getYear();
			}
			
			if (month === undefined) {
				month = nowCal.getMonth();
			}
		}
		
		// header
		self.append(TR({
			c : TD({
				colspan : 7,
				style : COMBINE([headerStyle, {
					textAlign : 'center'
				}]),
				c : [title = SPAN(),
				
				// left arrow
				DIV({
					style : {
						flt : 'left',
						cursor : 'pointer'
					},
					c : leftArrowImg === undefined ? '<' : leftArrowImg,
					on : {
						tap : function() {
							
							month -= 1;
							
							loadDates();
						}
					}
				}),
				
				// right arrow
				DIV({
					style : {
						flt : 'right',
						cursor : 'pointer'
					},
					c : rightArrowImg === undefined ? '>' : rightArrowImg,
					on : {
						tap : function() {
							
							month += 1;
							
							loadDates();
						}
					}
				}), CLEAR_BOTH()]
			})
		}));
		
		// days
		self.append(TR({
			c : [TD({
				style : dayStyle,
				c : '일'
			}), TD({
				style : dayStyle,
				c : '월'
			}), TD({
				style : dayStyle,
				c : '화'
			}), TD({
				style : dayStyle,
				c : '수'
			}), TD({
				style : dayStyle,
				c : '목'
			}), TD({
				style : dayStyle,
				c : '금'
			}), TD({
				style : dayStyle,
				c : '토'
			})]
		}));
		
		loadDates = RAR(function() {
			
			var
			// first date cal
			firstDateCal = CALENDAR(CREATE_DATE({
				year : year,
				month : month,
				date : 1
			})),
			
			// last date cal
			lastDateCal = CALENDAR(CREATE_DATE({
				year : year,
				month : month + 1,
				date : 0
			})),
			
			// start date cal
			startDateCal = CALENDAR(CREATE_DATE({
				year : year,
				month : month,
				date : -(firstDateCal.getDay() - 1)
			})),
			
			// date count
			dateCount = 0,
			
			// now tr
			nowTR,
			
			// selected date
			selectedDate,
			
			// selected date origin style
			selectedDateOriginStyle;
			
			title.empty();
			title.append(firstDateCal.getYear() + '년 ' + firstDateCal.getMonth() + '월');
			
			REPEAT(7, function(i) {
				self.removeTR(i);
			});
			
			REPEAT(firstDateCal.getDay(), function(i) {
				
				if (dateCount % 7 === 0) {
					self.addTR({
						key : dateCount / 7,
						tr : nowTR = TR()
					});
				}
				
				nowTR.append(TD({
					style : otherMonthDateStyle === undefined ? dateStyle : otherMonthDateStyle,
					c : startDateCal.getDate() + i,
					on : {
						tap : function(e, td) {
							
							if (selectedDateOriginStyle !== undefined) {
								selectedDate.addStyle(selectedDateOriginStyle);
							}
							
							selectedDate = td;
							selectedDateOriginStyle = otherMonthDateStyle === undefined ? dateStyle : otherMonthDateStyle;
							
							if (selectedDateStyle !== undefined) {
								td.addStyle(selectedDateStyle);
							}
							
							if (selectDateHandler !== undefined) {
								
								selectDateHandler(CALENDAR(CREATE_DATE({
									year : year,
									month : month - 1,
									date : startDateCal.getDate() + i
								})));
							}
						}
					}
				}));
				
				dateCount += 1;
			});
			
			REPEAT({
				start : firstDateCal.getDate(),
				end : lastDateCal.getDate()
			}, function(date, i) {
				
				if (dateCount % 7 === 0) {
					self.addTR({
						key : dateCount / 7,
						tr : nowTR = TR()
					});
				}
				
				nowTR.append(TD({
					style : dateStyle,
					c : date,
					on : {
						tap : function(e, td) {
							
							if (selectedDateOriginStyle !== undefined) {
								selectedDate.addStyle(selectedDateOriginStyle);
							}
							
							selectedDate = td;
							selectedDateOriginStyle = dateStyle;
							
							if (selectedDateStyle !== undefined) {
								td.addStyle(selectedDateStyle);
							}
							
							if (selectDateHandler !== undefined) {
								
								selectDateHandler(CALENDAR(CREATE_DATE({
									year : year,
									month : month,
									date : date
								})));
							}
						}
					}
				}));
				
				dateCount += 1;
			});
			
			REPEAT(42 - dateCount, function(i) {
				
				if (dateCount % 7 === 0) {
					self.addTR({
						key : dateCount / 7,
						tr : nowTR = TR()
					});
				}
				
				nowTR.append(TD({
					style : otherMonthDateStyle === undefined ? dateStyle : otherMonthDateStyle,
					c : i + 1,
					on : {
						tap : function(e, td) {
							
							if (selectedDateOriginStyle !== undefined) {
								selectedDate.addStyle(selectedDateOriginStyle);
							}
							
							selectedDate = td;
							selectedDateOriginStyle = otherMonthDateStyle === undefined ? dateStyle : otherMonthDateStyle;
							
							if (selectedDateStyle !== undefined) {
								td.addStyle(selectedDateStyle);
							}
							
							if (selectDateHandler !== undefined) {
								
								selectDateHandler(CALENDAR(CREATE_DATE({
									year : year,
									month : month + 1,
									date : i + 1
								})));
							}
						}
					}
				}));
				
				dateCount += 1;
			});
		});
	}
});
