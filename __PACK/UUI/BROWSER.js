UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c=n.img,u=n.title,l=void 0===n.spacing?0:n.spacing,s=n.href,f=n.target;o=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:s,target:f}),void 0!==u&&o.prepend(i=DIV({c:void 0===u?"":u})),void 0!==c&&o.prepend(DIV({style:{marginBottom:void 0!==u?l:0},c:c})),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.getImg=a=function(){return c},t.tap=d=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c,u=n.img,l=n.title,s=void 0===n.spacing?0:n.spacing,f=n.href,p=n.target,E=n.isImgRight;o=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:f,target:p,c:[i=DIV({style:{flt:"left"},c:void 0===l?"":l}),CLEAR_BOTH()]}),void 0!==u&&(u.addStyle({flt:"left"}),void 0===u.getStyle("margin")&&void 0===u.getStyle("marginRight")&&u.addStyle(E!==!0?{marginRight:s}:{marginLeft:s}),E!==!0?o.prepend(u):i.after(u),r=EVENT({name:"resize"},function(e){var t=i.getHeight();t>0&&i.addStyle({marginTop:(u.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:u,name:"load"},function(e){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=d=function(){return u},t.tap=c=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.CALENDAR=CLASS({preset:function(){"use strict";return UUI.TABLE},init:function(e,t,n,o){"use strict";var i,r,a,d,c,u,l,s=n.year,f=n.month,p=n.date,E=void 0===n.headerStyle?{}:n.headerStyle,v=n.dayStyle,g=n.dateStyle,m=n.todayDateStyle,y=n.otherMonthDateStyle,A=n.selectedDateStyle,T=n.leftArrowImg,S=n.rightArrowImg,N=CALENDAR();(void 0===s||void 0===f)&&(void 0===s&&(s=N.getYear()),void 0===f&&(f=N.getMonth())),CHECK_IS_DATA(o)!==!0?i=o:(i=o.selectDate,r=o.each),t.append(TR({c:TD({colspan:7,style:COMBINE([E,{textAlign:"center"}]),c:[d=SPAN(),DIV({style:{flt:"left",cursor:"pointer"},c:void 0===T?"<":T,on:{tap:function(){f-=1,c()}}}),DIV({style:{flt:"right",cursor:"pointer"},c:void 0===S?">":S,on:{tap:function(){f+=1,c()}}}),CLEAR_BOTH()]})})),t.append(TR({c:[TD({style:v,c:"일"}),TD({style:v,c:"월"}),TD({style:v,c:"화"}),TD({style:v,c:"수"}),TD({style:v,c:"목"}),TD({style:v,c:"금"}),TD({style:v,c:"토"})]})),t.getYear=u=function(){return a.getYear()},t.getMonth=l=function(){return a.getMonth()},c=RAR(function(){var e,n,o,c,u=CALENDAR(CREATE_DATE({year:s,month:f+1,date:0})),l=0;a=CALENDAR(CREATE_DATE({year:s,month:f,date:1})),e=CALENDAR(CREATE_DATE({year:s,month:f,date:-(a.getDay()-1)})),d.empty(),d.append(a.getYear()+"년 "+a.getMonth()+"월"),REPEAT(7,function(e){t.removeTR(e)}),REPEAT(a.getDay(),function(a){var d;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(d=TD({style:void 0===y?g:y,c:e.getDate()+a,on:{tap:function(n,r){void 0!==c&&o.addStyle(c),o=r,c=void 0===y?g:y,void 0!==A&&r.addStyle(A),void 0!==i&&i(CALENDAR(CREATE_DATE({year:s,month:f-1,date:e.getDate()+a})),t)}}})),void 0!==r&&r(d,CALENDAR(CREATE_DATE({year:s,month:f-1,date:e.getDate()+a})),t),l+=1}),REPEAT({start:a.getDate(),end:u.getDate()},function(e,d){var u;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(u=TD({style:COMBINE([g,void 0!==m&&a.getYear()===N.getYear()&&a.getMonth()===N.getMonth()&&e===N.getDate()?m:{}]),c:e,on:{tap:function(n,r){void 0!==c&&o.addStyle(c),o=r,c=COMBINE([g,void 0!==m&&a.getYear()===N.getYear()&&a.getMonth()===N.getMonth()&&e===N.getDate()?m:{}]),void 0!==A&&r.addStyle(A),void 0!==i&&i(CALENDAR(CREATE_DATE({year:s,month:f,date:e})),t)}}})),a.getYear()===N.getYear()&&a.getMonth()===N.getMonth()&&e===p&&(void 0!==c&&o.addStyle(c),o=u,c=COMBINE([g,void 0!==m&&a.getYear()===N.getYear()&&a.getMonth()===N.getMonth()&&e===N.getDate()?m:{}]),void 0!==A&&u.addStyle(A)),void 0!==r&&r(u,CALENDAR(CREATE_DATE({year:s,month:f,date:e})),t),l+=1}),REPEAT(42-l,function(e){var a;l%7===0&&t.addTR({key:l/7,tr:n=TR()}),n.append(a=TD({style:void 0===y?g:y,c:e+1,on:{tap:function(n,r){void 0!==c&&o.addStyle(c),o=r,c=void 0===y?g:y,void 0!==A&&r.addStyle(A),void 0!==i&&i(CALENDAR(CREATE_DATE({year:s,month:f+1,date:e+1})),t)}}})),void 0!==r&&r(a,CALENDAR(CREATE_DATE({year:s,month:f+1,date:e+1})),t),l+=1})})}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p,E=n.name,v=n.label,g=void 0===n.spacing?0:n.spacing,m=n.value,y=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:E,type:"checkbox",value:m}),SPAN({style:{marginLeft:g,flt:"left",cursor:"pointer"},c:v,on:{tap:function(e){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=u=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=l=function(e){i.addStyle(e)},void 0!==y&&l(y),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(e){var n=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),n},t.checkIsChecked=p=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p=n.name,E=n.type,v=n.placeholder,g=n.capture,m=n.accept,y=n.value,A=n.inputStyle;o=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===E||"datetime"===E||"datetime-local"===E||"month"===E||"time"===E||"week"===E?void 0:"transparent"},name:p,type:E,value:y,capture:g,accept:m,placeholder:v})]}),on:{tap:function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})}}}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.focus=u=function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=s=function(e){i.addStyle(e)},void 0!==A&&s(A),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p,E=n.name,v=n.value,g=n.options,m=n.selectStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:E,value:v,c:g})}),e.setWrapperDom(o),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select()},t.blur=u=function(){i.blur()},t.addSelectStyle=l=function(e){i.addStyle(e)},void 0!==m&&l(m),t.addOption=s=function(e){i.append(e)},t.removeAllOptions=f=function(){i.empty()},t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.value;o=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==a&&o.setValue(a),e.setDom(o),t.getValue=i=function(){return o.getValue()},t.setValue=r=function(e){o.setValue(e)}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p=n.name,E=n.placeholder,v=n.value,g=n.textareaStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:p,placeholder:E,value:v})}),e.setWrapperDom(o),e.setContentDom(i),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=c=function(){i.select()},t.focus=u=function(){i.focus()},t.blur=l=function(){i.blur()},t.addTextareaStyle=s=function(e){i.addStyle(e)},void 0!==g&&s(g),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n,o){"use strict";var i,r,a,d,c,u,l,s,f,p,E,v,g,m,y=n.box,A=n.capture,T=n.accept,S=n.isMultiple,N=void 0!==n.callbackURL?n.callbackURL:(BROWSER_CONFIG.isSecure===!0?"https://":"http://")+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__CORS_CALLBACK",C=n.formStyle,h=n.inputStyle,D=n.uploadingStyle;void 0!==o&&(i=o.success,r=o.overSizeFile),d=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[l=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),s=UUI.V_CENTER({style:{display:"none",position:"absolute",top:0,left:0,backgroundColor:RGBA([0,0,0,.5]),color:"#fff",textAlign:"center"},c:["Uploading...",f=SPAN({style:{marginLeft:10}})]})]}),GET({isSecure:BROWSER_CONFIG.isSecure,port:BROWSER_CONFIG.port,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},function(e){var n=RANDOM_STR(20);l.after(c=FORM({action:(BROWSER_CONFIG.isSecure===!0?"https://":"http://")+e+":"+BROWSER_CONFIG.port+"/__UPLOAD?boxName="+y.boxName+"&callbackURL="+N+"&uploadKey="+n,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:C,c:[u=INPUT({type:"file",name:"file",capture:A,accept:T,isMultiple:S,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},h])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:u,name:"change"},function(e){""!==u.getValue()&&(s.addStyle({width:d.getWidth(),height:d.getHeight()}),s.show(),void 0!==a&&a.exit(),a=y.ROOM("uploadProgressRoom/"+n),a.on("progress",function(e){f.empty(),f.append("("+e.bytesRecieved+"/"+e.bytesExpected+")")}),void 0!==c&&c.submit(!0))})}),EVENT({node:l,name:"load"},function(e){var n,o,d=global["__UPLOAD_FORM_"+t.id],c=void 0!==d?d.fileDataSetStr:void 0,l=void 0!==d?d.maxUploadFileMB:void 0;void 0!==l?(void 0!==r&&r(l),o=u.getValue(),u.setValue(""),""!==o&&EVENT.fireAll({node:t,name:"change"})):void 0!==c&&(n=PARSE_STR(decodeURIComponent(c)),EACH(n,function(e,t){n[t]=UNPACK_DATA(e)}),void 0!==i&&i(S!==!0?n[0]:n,t),o=u.getValue(),u.setValue(""),""!==o&&EVENT.fireAll({node:t,name:"change"})),s.hide(),void 0!==a&&(a.exit(),a=void 0)}),e.setWrapperDom(d),t.select=p=function(){void 0!==u&&(u.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))},t.addFormStyle=E=function(e){void 0!==c?c.addStyle(e):EXTEND({origin:C,extend:e})},void 0!==C&&E(C),t.addInputStyle=v=function(e){void 0!==u?u.addStyle(e):EXTEND({origin:h,extend:e})},void 0!==h&&v(h),t.addUploadingStyle=g=function(e){s.addStyle(e)},void 0!==D&&g(D),t.on=m=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:u,name:e},n):EVENT({node:t,lowNode:d,name:e},n)}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=n.img,d=n.href,c=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:d,target:c,c:a}),e.setDom(o),t.getImg=i=function(){return a},t.tap=r=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l=void 0===n?void 0:n.isRequiringClearBoth,s=[],f={};void 0===i&&(i={}),e.setDom(o=UL()),t.addItem=a=function(e){var n=e.key,a=e.item,d=e.isFirst;void 0!==i[n]?(a.insertBefore(i[n]),s[FIND({array:s,value:i[n]})]=a,i[n].remove()):d===!0&&s.length>0?(a.insertBefore(s[0]),s.unshift(a)):(t.append(a),s.push(a)),i[n]=a,l===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(e,t){a({key:t,item:e})}),t.removeItem=d=function(e){var t=i[e],n=f[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:s,value:t}),REMOVE({data:i,name:e}),REMOVE({data:f,name:e})},t.addRemoveItemHandler=c=function(e,t){void 0===f[e]&&(f[e]=[]),f[e].push(t)},t.removeAllItems=u=function(){EACH(i,function(e,t){var n=f[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),i={},s=[],f={}}}}),UUI.LOADING=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p,E=n.style,v=n.contentStyle,g=n.indicator,m=n.msg,y=n.on;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},E]),contentStyle:v,isCannotClose:!0,c:[void 0===g?"":g,P({style:void 0===g?{}:{marginTop:10},c:m})],on:y}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=d=function(e){o.after(e)},t.before=c=function(e){o.before(e)},t.remove=u=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addStyle=f=function(e){o.addStyle(e)},t.addContentStyle=p=function(e){o.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p,E,v,g,m,y,A,T,S,N=void 0===n?void 0:n.c,C=void 0===n?void 0:n.style,h=void 0===n?void 0:n.contentStyle,D=void 0===n?void 0:n.xStyle,R=void 0===n?void 0:n.xImg,I=void 0===n?void 0:n.isCannotClose;void 0===R&&I!==!0&&(R=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),I===!0?"":UUI.IMG_BUTTON({style:COMBINE([{lineHeight:0,position:"absolute"},void 0===D?{top:-10,right:-10}:D]),img:R,on:{tap:function(e){A()},mouseover:function(){g({opacity:.8})},mouseout:function(){g({opacity:1})}}})]}).appendTo(BODY),c=RAR(function(){var e,t=(WIN_WIDTH()-o.getWidth())/2,n=(WIN_HEIGHT()-o.getHeight())/2;o.addStyle({position:"fixed",left:0>t?0:t,top:0>n?0:n}),(e=function(t){EACH(t,function(t){t.type===IMG&&EVENT({node:t,name:"load"},function(){c()}),void 0!==t.getChildren&&e(t.getChildren())})})(o.getChildren())}),o.on("show",c),r=EVENT({name:"resize"},c),a=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&I!==!0&&A()}),o.on("remove",function(){r.remove(),a.remove()}),t.getNode=d=function(){return o},t.append=u=function(e){i.append(e),c()},void 0!==N&&(CHECK_IS_ARRAY(N)===!0?EACH(N,function(e,t){u(e)}):u(N)),t.prepend=l=function(e){i.prepend(e),c()},t.after=s=function(e){o.after(e),c()},t.before=f=function(e){o.before(e),c()},t.remove=p=function(){o.remove()},t.empty=E=function(){i.empty()},t.getChildren=v=function(){return i.getChildren()},t.addStyle=g=function(e){o.addStyle(e),c()},void 0!==C&&g(C),t.addContentStyle=m=function(e){i.addStyle(e),c()},void 0!==h&&m(h),t.on=y=function(e,n){EVENT({node:t,lowNode:o,name:e},n)},t.close=A=function(){EVENT.fireAll({node:t,name:"close"})!==!1&&p()},t.getLeft=T=function(){return o.getLeft()},t.getTop=S=function(){return o.getTop()}},afterInit:function(e,t,n){"use strict";var o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,function(e,n){t.on(n,e)})}}),UUI.NOTICE=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,c,u,l,s,f,p=n.style,E=n.contentStyle,v=n.isCannotClose,g=n.on,m=n.msg;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},p]),contentStyle:E,isCannotClose:!0,on:g,c:m}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=d=function(e){o.after(e)},t.before=c=function(e){o.before(e)},t.remove=u=function(){o.remove()},t.empty=l=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addContentStyle=f=function(e){o.addContentStyle(e)},v!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c=void 0===n?void 0:n.trs,u=[],l={};void 0===c&&(c={}),e.setDom(o=TABLE()),t.addTR=i=function(e){var n=e.key,o=e.tr,i=e.isFirst;void 0!==c[n]?(o.insertBefore(c[n]),u[FIND({array:u,value:c[n]})]=o,c[n].remove()):i===!0&&u.length>0?(o.insertBefore(u[0]),u.unshift(o)):(t.append(o),u.push(o)),c[n]=o},EACH(c,function(e,n){u.push(e),t.append(e)}),t.removeTR=r=function(e){var t=c[e],n=l[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:u,value:t}),REMOVE({data:c,name:e}),REMOVE({data:l,name:e})},t.addRemoveTRHandler=a=function(e,t){void 0===l[e]&&(l[e]=[]),l[e].push(t)},t.removeAllTRs=d=function(){EACH(c,function(e,t){var n=l[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),c={},u=[],l={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d=n.title,c=n.href,u=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:c,target:u,c:i=SPAN({c:void 0===d?void 0===c?"":c:d})}),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.tap=a=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.TITLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,c=n.img,u=n.title,l=void 0===n.spacing?0:n.spacing,s=n.isImgRight;o=DIV({c:[i=DIV({style:{flt:"left"},c:void 0===u?"":u}),CLEAR_BOTH()]}),void 0!==c&&(c.addStyle({flt:"left"}),void 0===c.getStyle("margin")&&void 0===c.getStyle("marginRight")&&c.addStyle(s!==!0?{marginRight:l}:{marginLeft:l}),s!==!0?o.prepend(c):i.after(c),r=EVENT({name:"resize"},function(e){var t=i.getHeight();t>0&&i.addStyle({marginTop:(c.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:c,name:"load"},function(e){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=d=function(){return c}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return FORM},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.errorMsgs,d=void 0===n?void 0:n.errorMsgStyle,c=[];t.on("remove",function(){EACH(c,function(e){e.remove()})}),t.showErrors=o=function(e){var n=COPY(e),o=function(e){EACH(e.getChildren(),function(e){var t,i,r,u;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==a&&(r=a[t][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),e.after(u=P({style:d,c:r})),REMOVE({data:n,name:t}),c.push(DELAY(3,function(e){u.remove(),REMOVE({array:c,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=i=function(e){var t={};return EACH(e,function(e,n){var o;void 0!==a&&(o=a[n][e.type],"function"==typeof o&&(o=o(void 0!==e.validParam?e.validParam:e.validParams)),t[n]=o)}),t},t.getErrorMsgStyle=r=function(){return d}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})})}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}});