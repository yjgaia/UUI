UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d=n.img,l=n.title,u=void 0===n.spacing?0:n.spacing,s=n.href,f=n.target;o=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:s,target:f}),void 0!==l&&o.prepend(i=DIV({c:void 0===l?"":l})),void 0!==d&&o.prepend(DIV({style:{marginBottom:void 0!==l?u:0},c:d})),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.getImg=a=function(){return d},t.tap=c=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l=n.img,u=n.title,s=void 0===n.spacing?0:n.spacing,f=n.href,p=n.target,E=n.isImgRight;o=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:f,target:p,c:[i=DIV({style:{flt:"left"},c:void 0===u?"":u}),CLEAR_BOTH()]}),void 0!==l&&(l.addStyle({flt:"left"}),void 0===l.getStyle("margin")&&void 0===l.getStyle("marginRight")&&l.addStyle(E!==!0?{marginRight:s}:{marginLeft:s}),E!==!0?o.prepend(l):i.after(l),r=EVENT({name:"resize"},function(){var e=i.getHeight();e>0&&i.addStyle({marginTop:(l.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:l,name:"load"},function(){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=c=function(){return l},t.tap=d=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.CALENDAR=CLASS({preset:function(){"use strict";return UUI.TABLE},init:function(e,t,n,o){"use strict";var i,r,a,c=n.year,d=n.month,l=void 0===n.headerStyle?{}:n.headerStyle,u=n.dayStyle,s=n.dateStyle,f=n.otherMonthDateStyle,p=n.selectedDateStyle,E=n.leftArrowImg,v=n.rightArrowImg;(void 0===c||void 0===d)&&(i=CALENDAR(),void 0===c&&(c=i.getYear()),void 0===d&&(d=i.getMonth())),t.append(TR({c:TD({colspan:7,style:COMBINE([l,{textAlign:"center"}]),c:[r=SPAN(),DIV({style:{flt:"left",cursor:"pointer"},c:void 0===E?"<":E,on:{tap:function(){d-=1,a()}}}),DIV({style:{flt:"right",cursor:"pointer"},c:void 0===v?">":v,on:{tap:function(){d+=1,a()}}}),CLEAR_BOTH()]})})),t.append(TR({c:[TD({style:u,c:"일"}),TD({style:u,c:"월"}),TD({style:u,c:"화"}),TD({style:u,c:"수"}),TD({style:u,c:"목"}),TD({style:u,c:"금"}),TD({style:u,c:"토"})]})),a=RAR(function(){var e,n,i,a=CALENDAR(CREATE_DATE({year:c,month:d,date:1})),l=CALENDAR(CREATE_DATE({year:c,month:d+1,date:0})),u=CALENDAR(CREATE_DATE({year:c,month:d,date:-(a.getDay()-1)})),E=0;r.empty(),r.append(a.getYear()+"년 "+a.getMonth()+"월"),REPEAT(7,function(e){t.removeTR(e)}),REPEAT(a.getDay(),function(r){E%7===0&&t.addTR({key:E/7,tr:e=TR()}),e.append(TD({style:void 0===f?s:f,c:u.getDate()+r,on:{tap:function(e,t){void 0!==i&&n.addStyle(i),n=t,i=void 0===f?s:f,void 0!==p&&t.addStyle(p),void 0!==o&&o(CALENDAR(CREATE_DATE({year:c,month:d-1,date:u.getDate()+r})))}}})),E+=1}),REPEAT({start:a.getDate(),end:l.getDate()},function(r){E%7===0&&t.addTR({key:E/7,tr:e=TR()}),e.append(TD({style:s,c:r,on:{tap:function(e,t){void 0!==i&&n.addStyle(i),n=t,i=s,void 0!==p&&t.addStyle(p),void 0!==o&&o(CALENDAR(CREATE_DATE({year:c,month:d,date:r})))}}})),E+=1}),REPEAT(42-E,function(r){E%7===0&&t.addTR({key:E/7,tr:e=TR()}),e.append(TD({style:void 0===f?s:f,c:r+1,on:{tap:function(e,t){void 0!==i&&n.addStyle(i),n=t,i=void 0===f?s:f,void 0!==p&&t.addStyle(p),void 0!==o&&o(CALENDAR(CREATE_DATE({year:c,month:d+1,date:r+1})))}}})),E+=1})})}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p,E=n.name,v=n.label,m=void 0===n.spacing?0:n.spacing,g=n.value,y=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:E,type:"checkbox",value:g}),SPAN({style:{marginLeft:m,flt:"left",cursor:"pointer"},c:v,on:{tap:function(){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=u=function(e){i.addStyle(e)},void 0!==y&&u(y),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(){var e=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),e},t.checkIsChecked=p=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p=n.name,E=n.type,v=n.placeholder,m=n.capture,g=n.accept,y=n.value,A=n.inputStyle;o=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===E||"datetime"===E||"datetime-local"===E||"month"===E||"time"===E||"week"===E?void 0:"transparent"},name:p,type:E,value:y,capture:m,accept:g,placeholder:v})]}),on:{tap:function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})}}}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.focus=l=function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})},t.blur=u=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=s=function(e){i.addStyle(e)},void 0!==A&&s(A),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_RADIO=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p,E=n.name,v=n.label,m=void 0===n.spacing?0:n.spacing,g=n.value,y=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:E,type:"radio",value:g}),SPAN({style:{marginLeft:m,flt:"left",cursor:"pointer"},c:v,on:{tap:function(){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addInputStyle=u=function(e){i.addStyle(e)},void 0!==y&&u(y),t.on=s=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=f=function(){var e=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),e},t.checkIsChecked=p=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p,E=n.name,v=n.value,m=n.options,g=n.selectStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:E,value:v,c:m})}),e.setWrapperDom(o),t.getName=r=function(){return E},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select()},t.blur=l=function(){i.blur()},t.addSelectStyle=u=function(e){i.addStyle(e)},void 0!==g&&u(g),t.addOption=s=function(e){i.append(e)},t.removeAllOptions=f=function(){i.empty()},t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i=void 0===n?void 0:n.value;o=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==i&&o.setValue(i),e.setDom(o)}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p=n.name,E=n.placeholder,v=n.value,m=n.textareaStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:p,placeholder:E,value:v})}),e.setWrapperDom(o),t.getName=r=function(){return p},t.getValue=a=function(){return i.getValue()},t.setValue=c=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=d=function(){i.select()},t.focus=l=function(){i.focus()},t.blur=u=function(){i.blur()},t.addTextareaStyle=s=function(e){i.addStyle(e)},void 0!==m&&s(m),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p=n.box,E=n.capture,v=n.accept,m=n.isMultiple,g=void 0!==n.callbackURL?n.callbackURL:"http://"+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__UPLOAD_CALLBACK",y=n.formStyle,A=n.inputStyle,T=n.uploadingStyle,N=n.uploadOverSizeFile,S=n.uploadSuccess;o=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[a=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),c=UUI.PANEL({style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10,color:"#fff"},c:"Uploading..."})]}),GET({port:CONFIG.webServerPort,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},function(e){a.after(i=FORM({action:"http://"+e+":"+CONFIG.webServerPort+"/__UPLOAD?boxName="+p.boxName+"&callbackURL="+g,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:y,c:[r=INPUT({type:"file",name:"file",capture:E,accept:v,isMultiple:m,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},A])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:r,name:"change"},function(){""!==r.getValue()&&(c.show(),void 0!==i&&i.submit(!0))})}),EVENT({node:a,name:"load"},function(){var e,n,o=global["__UPLOAD_FORM_"+t.id],i=void 0!==o?o.fileDataSetStr:void 0,a=void 0!==o?o.maxUploadFileMB:void 0;void 0!==a?(void 0!==N&&N(a),n=r.getValue(),r.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})):void 0!==i&&(e=PARSE_STR(decodeURIComponent(i)),EACH(e,function(t,n){e[n]=UNPACK_DATA(t)}),void 0!==S&&S(m!==!0?e[0]:e,t),n=r.getValue(),r.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})),c.hide()}),e.setWrapperDom(o),t.select=d=function(){void 0!==r&&(r.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))},t.addFormStyle=l=function(e){void 0!==i?i.addStyle(e):EXTEND({origin:y,extend:e})},void 0!==y&&l(y),t.addInputStyle=u=function(e){void 0!==r?r.addStyle(e):EXTEND({origin:A,extend:e})},void 0!==A&&u(A),t.addUploadingStyle=s=function(e){c.addStyle(e)},void 0!==T&&s(T),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:r,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=n.img,c=n.href,d=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:c,target:d,c:a}),e.setDom(o),t.getImg=i=function(){return a},t.tap=r=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u=void 0===n?void 0:n.isRequiringClearBoth,s=[],f={};void 0===i&&(i={}),e.setDom(o=UL()),t.addItem=a=function(e){var n=e.key,a=e.item,c=e.isFirst;void 0!==i[n]?(a.insertBefore(i[n]),s[FIND({array:s,value:i[n]})]=a,i[n].remove()):c===!0&&s.length>0?(a.insertBefore(s[0]),s.unshift(a)):(t.append(a),s.push(a)),i[n]=a,u===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(e,t){a({key:t,item:e})}),t.removeItem=c=function(e){var t=i[e],n=f[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:s,value:t}),REMOVE({data:i,name:e}),REMOVE({data:f,name:e})},t.addRemoveItemHandler=d=function(e,t){void 0===f[e]&&(f[e]=[]),f[e].push(t)},t.removeAllItems=l=function(){EACH(i,function(e,t){var n=f[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),i={},s=[],f={}}}}),UUI.LOADING=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p,E=n.style,v=n.contentStyle,m=n.indicator,g=n.msg,y=n.on;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},E]),contentStyle:v,isCannotClose:!0,c:[void 0===m?"":m,P({style:void 0===m?{}:{marginTop:10},c:g})],on:y}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=c=function(e){o.after(e)},t.before=d=function(e){o.before(e)},t.remove=l=function(){o.remove()},t.empty=u=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addStyle=f=function(e){o.addStyle(e)},t.addContentStyle=p=function(e){o.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p,E,v,m,g,y,A,T,N,S,C=void 0===n?void 0:n.c,h=void 0===n?void 0:n.style,V=void 0===n?void 0:n.contentStyle,D=void 0===n?void 0:n.xStyle,I=void 0===n?void 0:n.xImg,L=void 0===n?void 0:n.isCannotClose;void 0===I&&L!==!0&&(I=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),L===!0?"":UUI.IMG_BUTTON({style:COMBINE([{position:"absolute"},void 0===D?{top:-20,right:-20,padding:10}:D]),img:I,on:{tap:function(){T()},mouseover:function(){g({opacity:.8})},mouseout:function(){g({opacity:1})}}})]}).appendTo(BODY),l=RAR(function(){var e,t=(WIN_WIDTH()-o.getWidth())/2+SCROLL_LEFT(),n=(WIN_HEIGHT()-o.getHeight())/2+SCROLL_TOP();o.addStyle({position:"absolute",left:0>t?0:t,top:0>n?0:n}),(e=function(t){EACH(t,function(t){t.type===IMG&&EVENT({node:t,name:"load"},function(){l()}),void 0!==t.getChildren&&e(t.getChildren())})})(o.getChildren())}),o.on("show",l),r=EVENT({name:"resize"},l),a=EVENT({name:"scroll"},l),c=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&L!==!0&&T()}),o.on("remove",function(){r.remove(),a.remove(),c.remove()}),t.getNode=d=function(){return o},t.append=u=function(e){i.append(e),l()},void 0!==C&&(CHECK_IS_ARRAY(C)===!0?EACH(C,function(e){u(e)}):u(C)),t.prepend=s=function(e){i.prepend(e),l()},t.after=f=function(e){o.after(e),l()},t.before=p=function(e){o.before(e),l()},t.remove=E=function(){o.remove()},t.empty=v=function(){i.empty()},t.getChildren=m=function(){return i.getChildren()},t.addStyle=g=function(e){o.addStyle(e),l()},void 0!==h&&g(h),t.addContentStyle=y=function(e){i.addStyle(e),l()},void 0!==V&&y(V),t.on=A=function(e,n){EVENT({node:t,lowNode:o,name:e},n)},t.close=T=function(){EVENT.fireAll({node:t,name:"close"})!==!1&&E()},t.getLeft=N=function(){return o.getLeft()},t.getTop=S=function(){return o.getTop()}},afterInit:function(e,t,n){"use strict";var o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,function(e,n){t.on(n,e)})}}),UUI.NOTICE=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,c,d,l,u,s,f,p=n.style,E=n.contentStyle,v=n.isCannotClose,m=n.on,g=n.msg;o=UUI.MODAL({style:COMBINE([{textAlign:"center"},p]),contentStyle:E,isCannotClose:!0,on:m,c:g}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=c=function(e){o.after(e)},t.before=d=function(e){o.before(e)},t.remove=l=function(){o.remove()},t.empty=u=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addContentStyle=f=function(e){o.addContentStyle(e)},v!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c,d=void 0===n?void 0:n.trs,l=[],u={};void 0===d&&(d={}),e.setDom(o=TABLE()),t.addTR=i=function(e){var n=e.key,o=e.tr,i=e.isFirst;void 0!==d[n]?(o.insertBefore(d[n]),l[FIND({array:l,value:d[n]})]=o,d[n].remove()):i===!0&&l.length>0?(o.insertBefore(l[0]),l.unshift(o)):(t.append(o),l.push(o)),d[n]=o},EACH(d,function(e){l.push(e),t.append(e)}),t.removeTR=r=function(e){var t=d[e],n=u[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:l,value:t}),REMOVE({data:d,name:e}),REMOVE({data:u,name:e})},t.addRemoveTRHandler=a=function(e,t){void 0===u[e]&&(u[e]=[]),u[e].push(t)},t.removeAllTRs=c=function(){EACH(d,function(e,t){var n=u[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),d={},l=[],u={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,c=n.title,d=n.href,l=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:d,target:l,c:i=SPAN({c:void 0===c?void 0===d?"":d:c})}),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.tap=a=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return FORM},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.errorMsgs,c=void 0===n?void 0:n.errorMsgStyle,d=[];t.on("remove",function(){EACH(d,function(e){e.remove()})}),t.showErrors=o=function(e){var n=COPY(e),o=function(e){EACH(e.getChildren(),function(e){var t,i,r,l;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==a&&(r=a[t][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),e.after(l=P({style:c,c:r})),REMOVE({data:n,name:t}),d.push(DELAY(3,function(e){l.remove(),REMOVE({array:d,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=i=function(e){var t={};return EACH(e,function(e,n){var o;void 0!==a&&(o=a[n][e.type],"function"==typeof o&&(o=o(void 0!==e.validParam?e.validParam:e.validParams)),t[n]=o)}),t},t.getErrorMsgStyle=r=function(){return c}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=void 0===n?void 0:n.contentStyle;o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})})}),e.setWrapperDom(o),e.setContentDom(i),t.addContentStyle=r=function(e){i.addStyle(e)},void 0!==a&&r(a)}});