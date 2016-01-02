/**
 * Calendar class
 */
UUI.CALENDAR = CLASS({

	preset : function() {
		'use strict';

		return UUI.TABLE;
	},

	init : function(inner, self, params, selectDateHandlerOrHandlers) {
		'use strict';
		//REQUIRED: params
		//OPTIONAL: params.year
		//OPTIONAL: params.month
		//OPTIONAL: params.headerStyle
		//OPTIONAL: params.dayStyle
		//OPTIONAL: params.dateStyle
		//OPTIONAL: params.todayDateStyle
		//OPTIONAL: params.otherMonthDateStyle
		//OPTIONAL: params.selectedDateStyle
		//OPTIONAL: params.leftArrowImg
		//OPTIONAL: params.rightArrowImg
		//OPTIONAL: selectDateHandlerOrHandlers
		//OPTIONAL: selectDateHandlerOrHandlers.selectDate
		//OPTIONAL: selectDateHandlerOrHandlers.each

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
		
		// today date style
		todayDateStyle = params.todayDateStyle,
		
		// other month date style
		otherMonthDateStyle = params.otherMonthDateStyle,
		
		// selected date style
		selectedDateStyle = params.selectedDateStyle,
		
		// left arrow img
		leftArrowImg = params.leftArrowImg,
		
		// right arrow img
		rightArrowImg = params.rightArrowImg,
		
		// select date handler.
		selectDateHandler,
		
		// each handler.
		eachHandler,
		
		// now cal
		nowCal = CALENDAR(),
		
		// first date cal
		firstDateCal,
		
		// title
		title,
		
		// load dates.
		loadDates,
		
		// get year.
		getYear,
		
		// get month.
		getMonth;
		
		if (year === undefined || month === undefined) {
			
			if (year === undefined) {
				year = nowCal.getYear();
			}
			
			if (month === undefined) {
				month = nowCal.getMonth();
			}
		}
		
		if (CHECK_IS_DATA(selectDateHandlerOrHandlers) !== true) {
			selectDateHandler = selectDateHandlerOrHandlers;
		} else {
			selectDateHandler = selectDateHandlerOrHandlers.selectDate;
			eachHandler = selectDateHandlerOrHandlers.each;
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
		
		self.getYear = getYear = function() {
			return firstDateCal.getYear();
		};
		
		self.getMonth = getMonth = function() {
			return firstDateCal.getMonth();
		};
		
		loadDates = RAR(function() {
			
			var
			// last date cal
			lastDateCal = CALENDAR(CREATE_DATE({
				year : year,
				month : month + 1,
				date : 0
			})),
			
			// start date cal
			startDateCal,
			
			// date count
			dateCount = 0,
			
			// now tr
			nowTR,
			
			// selected date
			selectedDate,
			
			// selected date origin style
			selectedDateOriginStyle;
			
			firstDateCal = CALENDAR(CREATE_DATE({
				year : year,
				month : month,
				date : 1
			}));
			
			startDateCal = CALENDAR(CREATE_DATE({
				year : year,
				month : month,
				date : -(firstDateCal.getDay() - 1)
			}));
			
			title.empty();
			title.append(firstDateCal.getYear() + '년 ' + firstDateCal.getMonth() + '월');
			
			REPEAT(7, function(i) {
				self.removeTR(i);
			});
			
			REPEAT(firstDateCal.getDay(), function(i) {
				
				var
				// td
				td;
				
				if (dateCount % 7 === 0) {
					self.addTR({
						key : dateCount / 7,
						tr : nowTR = TR()
					});
				}
				
				nowTR.append(td = TD({
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
								})), self);
							}
						}
					}
				}));
				
				if (eachHandler !== undefined) {
					eachHandler(td, CALENDAR(CREATE_DATE({
						year : year,
						month : month - 1,
						date : startDateCal.getDate() + i
					})), self);
				}
				
				dateCount += 1;
			});
			
			REPEAT({
				start : firstDateCal.getDate(),
				end : lastDateCal.getDate()
			}, function(date, i) {
				
				var
				// td
				td;
				
				if (dateCount % 7 === 0) {
					self.addTR({
						key : dateCount / 7,
						tr : nowTR = TR()
					});
				}
				
				nowTR.append(td = TD({
					style : COMBINE([dateStyle,
						todayDateStyle !== undefined &&
						firstDateCal.getYear() === nowCal.getYear() &&
						firstDateCal.getMonth() === nowCal.getMonth() &&
						date === nowCal.getDate() ? todayDateStyle : {}]),
					c : date,
					on : {
						tap : function(e, td) {
							
							if (selectedDateOriginStyle !== undefined) {
								selectedDate.addStyle(selectedDateOriginStyle);
							}
							
							selectedDate = td;
							selectedDateOriginStyle = COMBINE([dateStyle,
								todayDateStyle !== undefined &&
								firstDateCal.getYear() === nowCal.getYear() &&
								firstDateCal.getMonth() === nowCal.getMonth() &&
								date === nowCal.getDate() ? todayDateStyle : {}]);
							
							if (selectedDateStyle !== undefined) {
								td.addStyle(selectedDateStyle);
							}
							
							if (selectDateHandler !== undefined) {
								
								selectDateHandler(CALENDAR(CREATE_DATE({
									year : year,
									month : month,
									date : date
								})), self);
							}
						}
					}
				}));
				
				if (eachHandler !== undefined) {
					eachHandler(td, CALENDAR(CREATE_DATE({
						year : year,
						month : month,
						date : date
					})), self);
				}
				
				dateCount += 1;
			});
			
			REPEAT(42 - dateCount, function(i) {
				
				var
				// td
				td;
				
				if (dateCount % 7 === 0) {
					self.addTR({
						key : dateCount / 7,
						tr : nowTR = TR()
					});
				}
				
				nowTR.append(td = TD({
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
								})), self);
							}
						}
					}
				}));
				
				if (eachHandler !== undefined) {
					eachHandler(td, CALENDAR(CREATE_DATE({
						year : year,
						month : month + 1,
						date : i + 1
					})), self);
				}
				
				dateCount += 1;
			});
		});
	}
});
