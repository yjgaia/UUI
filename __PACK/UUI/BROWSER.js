UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d=n.img,u=n.title,l=void 0===n.spacing?0:n.spacing,s=n.href,f=n.target;o=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:s,target:f}),void 0!==u&&o.prepend(i=DIV({c:void 0===u?"":u})),void 0!==d&&o.prepend(DIV({style:{marginBottom:void 0!==u?l:0},c:d})),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.getImg=a=function(){return d},t.tap=c=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u=n.img,l=n.title,s=void 0===n.spacing?0:n.spacing,f=n.href,E=n.target,p=n.isImgRight;o=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:f,target:E,c:[i=DIV({style:{flt:"left"},c:void 0===l?"":l}),CLEAR_BOTH()]}),void 0!==u&&(u.addStyle({flt:"left"}),void 0===u.getStyle("margin")&&void 0===u.getStyle("marginRight")&&u.addStyle(p!==!0?{marginRight:s}:{marginLeft:s}),p!==!0?o.prepend(u):i.after(u),r=EVENT({name:"resize"},function(){var e=i.getHeight();e>0&&i.addStyle({marginTop:(u.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:u,name:"load"},function(){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=c=function(){return u},t.tap=d=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.CALENDAR=CLASS({preset:function(){"use strict";return UUI.TABLE},init:function(e,t,n,o){"use strict";var i,r,a,c,d,u,l,s,f=n.year,E=n.month,p=void 0===n.headerStyle?{}:n.headerStyle,v=n.dayStyle,g=n.dateStyle,m=n.otherMonthDateStyle,y=n.selectedDateStyle,A=n.leftArrowImg,T=n.rightArrowImg;(void 0===f||void 0===E)&&(a=CALENDAR(),void 0===f&&(f=a.getYear()),void 0===E&&(E=a.getMonth())),CHECK_IS_DATA(o)!==!0?i=o:(i=o.selectDate,r=o.each),t.append(TR({c:TD({colspan:7,style:COMBINE([p,{textAlign:"center"}]),c:[d=SPAN(),DIV({style:{flt:"left",cursor:"pointer"},c:void 0===A?"<":A,on:{tap:function(){E-=1,u()}}}),DIV({style:{flt:"right",cursor:"pointer"},c:void 0===T?">":T,on:{tap:function(){E+=1,u()}}}),CLEAR_BOTH()]})})),t.append(TR({c:[TD({style:v,c:"일"}),TD({style:v,c:"월"}),TD({style:v,c:"화"}),TD({style:v,c:"수"}),TD({style:v,c:"목"}),TD({style:v,c:"금"}),TD({style:v,c:"토"})]})),t.getYear=l=function(){return c.getYear()},t.getMonth=s=function(){return c.getMonth()},u=RAR(function(){var e,n,o,a,u=CALENDAR(CREATE_DATE({year:f,month:E+1,date:0})),l=0;c=CALENDAR(CREATE_DATE({year:f,month:E,date:1})),e=CALENDAR(CREATE_DATE({year:f,month:E,date:-(c.getDay()-1)})),d.empty(),d.append(c.getYear()+"년 "+c.getMonth()+"월"),REPEAT(7,function(e){t.removeTR(e)}),REPEAT(c.getDay(),function(c){var d;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(d=TD({style:void 0===m?g:m,c:e.getDate()+c,on:{tap:function(n,r){void 0!==a&&o.addStyle(a),o=r,a=void 0===m?g:m,void 0!==y&&r.addStyle(y),void 0!==i&&i(CALENDAR(CREATE_DATE({year:f,month:E-1,date:e.getDate()+c})),t)}}})),void 0!==r&&r(d,CALENDAR(CREATE_DATE({year:f,month:E-1,date:e.getDate()+c})),t),l+=1}),REPEAT({start:c.getDate(),end:u.getDate()},function(e){var c;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(c=TD({style:g,c:e,on:{tap:function(n,r){void 0!==a&&o.addStyle(a),o=r,a=g,void 0!==y&&r.addStyle(y),void 0!==i&&i(CALENDAR(CREATE_DATE({year:f,month:E,date:e})),t)}}})),void 0!==r&&r(c,CALENDAR(CREATE_DATE({year:f,month:E,date:e})),t),l+=1}),REPEAT(42-l,function(e){var c;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(c=TD({style:void 0===m?g:m,c:e+1,on:{tap:function(n,r){void 0!==a&&o.addStyle(a),o=r,a=void 0===m?g:m,void 0!==y&&r.addStyle(y),void 0!==i&&i(CALENDAR(CREATE_DATE({year:f,month:E+1,date:e+1})),t)}}})),void 0!==r&&r(c,CALENDAR(CREATE_DATE({year:f,month:E+1,date:e+1})),t),l+=1})})}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E,p=n.name,v=n.label,g=void 0===n.spacing?0:n.spacing,m=n.value,y=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:p,type:"checkbox",value:m}),SPAN({style:{marginLeft:g,flt:"left",cursor:"pointer"},c:v,on:{tap:function(){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=u=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=l=function(e){i.addStyle(e)},void 0!==y&&l(y),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(){var e=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),e},t.checkIsChecked=E=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E=n.name,p=n.type,v=n.placeholder,g=n.capture,m=n.accept,y=n.value,A=n.inputStyle;o=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===p||"datetime"===p||"datetime-local"===p||"month"===p||"time"===p||"week"===p?void 0:"transparent"},name:E,type:p,value:y,capture:g,accept:m,placeholder:v})]}),on:{tap:function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})}}}),e.setWrapperDom(o),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.focus=u=function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=s=function(e){i.addStyle(e)},void 0!==A&&s(A),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_RADIO=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E,p=n.name,v=n.label,g=void 0===n.spacing?0:n.spacing,m=n.value,y=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:p,type:"radio",value:m}),SPAN({style:{marginLeft:g,flt:"left",cursor:"pointer"},c:v,on:{tap:function(){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=u=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=l=function(e){i.addStyle(e)},void 0!==y&&l(y),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(){var e=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),e},t.checkIsChecked=E=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E,p=n.name,v=n.value,g=n.options,m=n.selectStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:p,value:v,c:g})}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select()},t.blur=u=function(){i.blur()},t.addSelectStyle=l=function(e){i.addStyle(e)},void 0!==m&&l(m),t.addOption=s=function(e){i.append(e)},t.removeAllOptions=f=function(){i.empty()},t.on=E=function(e,n){"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.value;o=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==a&&o.setValue(a),e.setDom(o),t.getValue=i=function(){return o.getValue()},t.setValue=r=function(e){o.setValue(e)}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E=n.name,p=n.placeholder,v=n.value,g=n.textareaStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:E,placeholder:p,value:v})}),e.setWrapperDom(o),e.setContentDom(i),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select()},t.focus=u=function(){i.focus()},t.blur=l=function(){i.blur()},t.addTextareaStyle=s=function(e){i.addStyle(e)},void 0!==g&&s(g),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n,o){"use strict";var i,r,a,c,d,u,l,s,f,E,p,v,g=n.box,m=n.capture,y=n.accept,A=n.isMultiple,T=void 0!==n.callbackURL?n.callbackURL:"http://"+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__CORS_CALLBACK",N=n.formStyle,C=n.inputStyle,S=n.uploadingStyle;void 0!==o&&(i=o.success,r=o.overSizeFile),a=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[u=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),l=UUI.PANEL({style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10,color:"#fff"},c:"Uploading..."})]}),GET({port:CONFIG.webServerPort,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},function(e){u.after(c=FORM({action:"http://"+e+":"+CONFIG.webServerPort+"/__UPLOAD?boxName="+g.boxName+"&callbackURL="+T,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:N,c:[d=INPUT({type:"file",name:"file",capture:m,accept:y,isMultiple:A,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},C])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:d,name:"change"},function(){""!==d.getValue()&&(l.show(),void 0!==c&&c.submit(!0))})}),EVENT({node:u,name:"load"},function(){var e,n,o=global["__UPLOAD_FORM_"+t.id],a=void 0!==o?o.fileDataSetStr:void 0,c=void 0!==o?o.maxUploadFileMB:void 0;void 0!==c?(void 0!==r&&r(c),n=d.getValue(),d.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})):void 0!==a&&(e=PARSE_STR(decodeURIComponent(a)),EACH(e,function(t,n){e[n]=UNPACK_DATA(t)}),void 0!==i&&i(A!==!0?e[0]:e,t),n=d.getValue(),d.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})),l.hide()}),e.setWrapperDom(a),t.select=s=function(){void 0!==d&&(d.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))},t.addFormStyle=f=function(e){void 0!==c?c.addStyle(e):EXTEND({origin:N,extend:e})},void 0!==N&&f(N),t.addInputStyle=E=function(e){void 0!==d?d.addStyle(e):EXTEND({origin:C,extend:e})},void 0!==C&&E(C),t.addUploadingStyle=p=function(e){l.addStyle(e)},void 0!==S&&p(S),t.on=v=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:d,name:e},n):EVENT({node:t,lowNode:a,name:e},n)}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=n.img,c=n.href,d=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:c,target:d,c:a}),e.setDom(o),t.getImg=i=function(){return a},t.tap=r=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l=void 0===n?void 0:n.isRequiringClearBoth,s=[],f={};void 0===i&&(i={}),e.setDom(o=UL()),t.addItem=a=function(e){var n=e.key,a=e.item,c=e.isFirst;void 0!==i[n]?(a.insertBefore(i[n]),s[FIND({array:s,value:i[n]})]=a,i[n].remove()):c===!0&&s.length>0?(a.insertBefore(s[0]),s.unshift(a)):(t.append(a),s.push(a)),i[n]=a,l===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(e,t){a({key:t,item:e})}),t.removeItem=c=function(e){var t=i[e],n=f[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:s,value:t}),REMOVE({data:i,name:e}),REMOVE({data:f,name:e})},t.addRemoveItemHandler=d=function(e,t){void 0===f[e]&&(f[e]=[]),f[e].push(t)},t.removeAllItems=u=function(){EACH(i,function(e,t){var n=f[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),i={},s=[],f={}}}}),UUI.LOADING=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E,p=n.style,v=n.contentStyle,g=n.indicator,m=n.msg,y=n.on;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},p]),contentStyle:v,isCannotClose:!0,c:[void 0===g?"":g,P({style:void 0===g?{}:{marginTop:10},c:m})],on:y}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=c=function(e){o.after(e)},t.before=d=function(e){o.before(e)},t.remove=u=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addStyle=f=function(e){o.addStyle(e)},t.addContentStyle=E=function(e){o.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E,p,v,g,m,y,A,T,N,C,S=void 0===n?void 0:n.c,h=void 0===n?void 0:n.style,D=void 0===n?void 0:n.contentStyle,V=void 0===n?void 0:n.xStyle,I=void 0===n?void 0:n.xImg,R=void 0===n?void 0:n.isCannotClose;void 0===I&&R!==!0&&(I=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),R===!0?"":UUI.IMG_BUTTON({style:COMBINE([{position:"absolute"},void 0===V?{top:-20,right:-20,padding:10}:V]),img:I,on:{tap:function(){T()},mouseover:function(){m({opacity:.8})},mouseout:function(){m({opacity:1})}}})]}).appendTo(BODY),u=RAR(function(){var e,t=(WIN_WIDTH()-o.getWidth())/2+SCROLL_LEFT(),n=(WIN_HEIGHT()-o.getHeight())/2+SCROLL_TOP();o.addStyle({position:"absolute",left:0>t?0:t,top:0>n?0:n}),(e=function(t){EACH(t,function(t){t.type===IMG&&EVENT({node:t,name:"load"},function(){u()}),void 0!==t.getChildren&&e(t.getChildren())})})(o.getChildren())}),o.on("show",u),r=EVENT({name:"resize"},u),a=EVENT({name:"scroll"},u),c=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&R!==!0&&T()}),o.on("remove",function(){r.remove(),a.remove(),c.remove()}),t.getNode=d=function(){return o},t.append=l=function(e){i.append(e),u()},void 0!==S&&(CHECK_IS_ARRAY(S)===!0?EACH(S,function(e){l(e)}):l(S)),t.prepend=s=function(e){i.prepend(e),u()},t.after=f=function(e){o.after(e),u()},t.before=E=function(e){o.before(e),u()},t.remove=p=function(){o.remove()},t.empty=v=function(){i.empty()},t.getChildren=g=function(){return i.getChildren()},t.addStyle=m=function(e){o.addStyle(e),u()},void 0!==h&&m(h),t.addContentStyle=y=function(e){i.addStyle(e),u()},void 0!==D&&y(D),t.on=A=function(e,n){EVENT({node:t,lowNode:o,name:e},n)},t.close=T=function(){EVENT.fireAll({node:t,name:"close"})!==!1&&p()},t.getLeft=N=function(){return o.getLeft()},t.getTop=C=function(){return o.getTop()}},afterInit:function(e,t,n){"use strict";var o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,function(e,n){t.on(n,e)})}}),UUI.NOTICE=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,c,d,u,l,s,f,E=n.style,p=n.contentStyle,v=n.isCannotClose,g=n.on,m=n.msg;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},E]),contentStyle:p,isCannotClose:!0,on:g,c:m}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=c=function(e){o.after(e)},t.before=d=function(e){o.before(e)},t.remove=u=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addContentStyle=f=function(e){o.addContentStyle(e)},v!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d=void 0===n?void 0:n.trs,u=[],l={};void 0===d&&(d={}),e.setDom(o=TABLE()),t.addTR=i=function(e){var n=e.key,o=e.tr,i=e.isFirst;void 0!==d[n]?(o.insertBefore(d[n]),u[FIND({array:u,value:d[n]})]=o,d[n].remove()):i===!0&&u.length>0?(o.insertBefore(u[0]),u.unshift(o)):(t.append(o),u.push(o)),d[n]=o},EACH(d,function(e){u.push(e),t.append(e)}),t.removeTR=r=function(e){var t=d[e],n=l[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:u,value:t}),REMOVE({data:d,name:e}),REMOVE({data:l,name:e})},t.addRemoveTRHandler=a=function(e,t){void 0===l[e]&&(l[e]=[]),l[e].push(t)},t.removeAllTRs=c=function(){EACH(d,function(e,t){var n=l[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),d={},u=[],l={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c=n.title,d=n.href,u=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:d,target:u,c:i=SPAN({c:void 0===c?void 0===d?"":d:c})}),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.tap=a=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.TITLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d=n.img,u=n.title,l=void 0===n.spacing?0:n.spacing,s=n.isImgRight;o=DIV({c:[i=DIV({style:{flt:"left"},c:void 0===u?"":u}),CLEAR_BOTH()]}),void 0!==d&&(d.addStyle({flt:"left"}),void 0===d.getStyle("margin")&&void 0===d.getStyle("marginRight")&&d.addStyle(s!==!0?{marginRight:l}:{marginLeft:l}),s!==!0?o.prepend(d):i.after(d),r=EVENT({name:"resize"},function(){var e=i.getHeight();e>0&&i.addStyle({marginTop:(d.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:d,name:"load"},function(){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=c=function(){return d}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return FORM},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.errorMsgs,c=void 0===n?void 0:n.errorMsgStyle,d=[];t.on("remove",function(){EACH(d,function(e){e.remove()})}),t.showErrors=o=function(e){var n=COPY(e),o=function(e){EACH(e.getChildren(),function(e){var t,i,r,u;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==a&&(r=a[t][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),e.after(u=P({style:c,c:r})),REMOVE({data:n,name:t}),d.push(DELAY(3,function(e){u.remove(),REMOVE({array:d,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=i=function(e){var t={};return EACH(e,function(e,n){var o;void 0!==a&&(o=a[n][e.type],"function"==typeof o&&(o=o(void 0!==e.validParam?e.validParam:e.validParams)),t[n]=o)}),t},t.getErrorMsgStyle=r=function(){return c}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})})}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}});