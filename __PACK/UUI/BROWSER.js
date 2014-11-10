UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u=n.img,l=n.title,c=void 0===n.spacing?0:n.spacing,s=n.href,f=n.target;o=A({style:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:s,target:f}),void 0!==l&&o.prepend(i=DIV({c:void 0===l?"":l})),void 0!==u&&o.prepend(DIV({style:{marginBottom:void 0!==l?c:0},c:u})),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.getImg=a=function(){return u},t.tap=d=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l=n.img,c=n.title,s=void 0===n.spacing?0:n.spacing,f=n.href,p=n.target,v=n.isImgRight;o=A({style:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:f,target:p,c:[i=DIV({style:{flt:"left"},c:void 0===c?"":c}),CLEAR_BOTH()]}),void 0!==l&&(l.addStyle({flt:"left"}),void 0===l.getStyle("margin")&&void 0===l.getStyle("marginRight")&&l.addStyle(v!==!0?{marginRight:s}:{marginLeft:s}),v!==!0?o.prepend(l):i.after(l),r=EVENT({name:"resize"},function(){var e=i.getHeight();e>0&&i.addStyle({marginTop:(l.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:l,name:"load"},function(){r.fire()}),t.on("show",function(){r.fire()}),t.on("remove",function(){r.remove()})),e.setDom(o),t.setTitle=a=function(e){i.empty(),i.append(e)},t.getImg=d=function(){return l},t.tap=u=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v,m=n.name,E=n.label,g=n.value,y=n.wrapperStyle,S=n.inputStyle;o=DIV({style:{position:"relative"},c:[i=INPUT({style:{flt:"left",marginRight:5},name:m,type:"checkbox",value:g}),SPAN({style:{flt:"left",cursor:"pointer"},c:E,on:{tap:function(){i.toggleCheck(),EVENT.fireAll({node:t,name:"change"})}}}),CLEAR_BOTH()]}),e.setWrapperDom(o),t.getName=r=function(){return m},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.checkIsChecked();i.setValue(e),e===!0?n!==!0&&EVENT.fireAll({node:t,name:"change"}):n===!0&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.blur=l=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addWrapperStyle=c=function(e){o.addStyle(e)},void 0!==y&&c(y),t.addInputStyle=s=function(e){i.addStyle(e)},void 0!==S&&s(S),t.on=f=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)},t.toggleCheck=p=function(){var e=i.toggleCheck();return EVENT.fireAll({node:t,name:"change"}),e},t.checkIsChecked=v=function(){return i.checkIsChecked()},EVENT({node:t,lowNode:i,name:"keyup"},function(e){void 0!==e&&32===e.getKeyCode()&&DELAY(function(){EVENT.fireAll({node:t,name:"change"})})})}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v=n.name,m=n.type,E=n.placeholder,g=n.capture,y=n.accept,S=n.value,N=n.wrapperStyle,C=n.inputStyle;o=DIV({style:{padding:5,backgroundColor:"#fff"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"date"===m||"datetime"===m||"datetime-local"===m||"month"===m||"time"===m||"week"===m?void 0:"transparent"},name:v,type:m,value:S,capture:g,accept:y,placeholder:E})]}),on:{tap:function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})}}}),e.setWrapperDom(o),t.getName=r=function(){return v},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"})},t.focus=l=function(){i.focus(),EVENT.fireAll({node:t,name:"focus"})},t.blur=c=function(){i.blur(),EVENT.fireAll({node:t,name:"blur"})},t.addWrapperStyle=s=function(e){o.addStyle(e)},void 0!==N&&s(N),t.addInputStyle=f=function(e){i.addStyle(e)},void 0!==C&&f(C),t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v,m=n.name,E=n.value,g=n.options,y=n.wrapperStyle,S=n.selectStyle;o=DIV({style:{padding:5,backgroundColor:"#fff",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none",background:"transparent"},name:m,value:E,c:g})}),e.setWrapperDom(o),t.getName=r=function(){return m},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select()},t.blur=l=function(){i.blur()},t.addWrapperStyle=c=function(e){o.addStyle(e)},void 0!==y&&c(y),t.addSelectStyle=s=function(e){i.addStyle(e)},void 0!==S&&s(S),t.addOption=f=function(e){i.append(e)},t.removeAllOptions=p=function(){i.empty()},t.on=v=function(e,n){"focus"===e||"blur"===e||"change"===e||"select"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i=void 0===n?void 0:n.value;o=INPUT({type:"submit",style:{display:"block",border:"none",width:"100%",padding:"10px 0",cursor:"pointer"}}),void 0!==i&&o.setValue(i),e.setDom(o)}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v=n.name,m=n.placeholder,E=n.value,g=n.wrapperStyle,y=n.textareaStyle;o=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:v,placeholder:m,value:E})}),e.setWrapperDom(o),t.getName=r=function(){return v},t.getValue=a=function(){return i.getValue()},t.setValue=d=function(e){var n=i.getValue();i.setValue(e),n!==e&&EVENT.fireAll({node:t,name:"change"})},t.select=u=function(){i.select()},t.focus=l=function(){i.focus()},t.blur=c=function(){i.blur()},t.addWrapperStyle=s=function(e){o.addStyle(e)},void 0!==g&&s(g),t.addTextareaStyle=f=function(e){i.addStyle(e)},void 0!==y&&f(y),t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:i,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v=n.box,m=n.capture,E=n.accept,g=n.isMultiple,y=void 0!==n.callbackURL?n.callbackURL:"http://"+BROWSER_CONFIG.host+":"+BROWSER_CONFIG.port+"/__UPLOAD_CALLBACK",S=n.wrapperStyle,N=n.formStyle,C=n.inputStyle,A=n.uploadingStyle,h=n.uploadOverSizeFile,T=n.uploadSuccess;o=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[a=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+t.id}),d=UUI.PANEL({wrapperStyle:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10,color:"#fff"},c:"Uploading..."})]}),GET({host:BROWSER_CONFIG.host,port:BROWSER_CONFIG.port,uri:"__UPLOAD_SERVER_HOST?defaultHost="+BROWSER_CONFIG.host},function(e){a.after(i=FORM({action:"http://"+e+":"+CONFIG.webServerPort+"/__UPLOAD?boxName="+v.boxName+"&callbackURL="+y,target:"__UPLOAD_FORM_"+t.id,method:"POST",enctype:"multipart/form-data",style:COMBINE([{padding:5},N]),c:[r=INPUT({type:"file",name:"file",capture:m,accept:E,isMultiple:g,style:COMBINE([{width:"100%",height:"100%",color:"#000",border:"none"},C])}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),EVENT({node:r,name:"change"},function(){""!==r.getValue()&&(d.show(),void 0!==i&&i.submit(!0))})}),EVENT({node:a,name:"load"},function(){var e,n,o=global["__UPLOAD_FORM_"+t.id],i=void 0!==o?o.fileDataSetStr:void 0,a=void 0!==o?o.maxUploadFileMB:void 0;void 0!==a?(void 0!==h&&h(a),n=r.getValue(),r.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})):void 0!==i&&(e=PARSE_STR(decodeURIComponent(i)),EACH(e,function(t,n){e[n]=UNPACK_DATA(t)}),void 0!==T&&T(g!==!0?e[0]:e),n=r.getValue(),r.setValue(""),""!==n&&EVENT.fireAll({node:t,name:"change"})),d.hide()}),e.setWrapperDom(o),t.select=u=function(){void 0!==r&&(r.select(),EVENT.fireAll({node:t,name:"select"}),EVENT.fireAll({node:t,name:"focus"}))},t.addWrapperStyle=l=function(e){o.addStyle(e)},void 0!==S&&l(S),t.addFormStyle=c=function(e){void 0!==i?i.addStyle(e):EXTEND({origin:N,extend:e})},void 0!==N&&c(N),t.addInputStyle=s=function(e){void 0!==r?r.addStyle(e):EXTEND({origin:C,extend:e})},void 0!==C&&s(C),t.addUploadingStyle=f=function(e){d.addWrapperStyle(e)},void 0!==A&&f(A),t.on=p=function(e,n){"focus"===e||"blur"===e||"change"===e||"keydown"===e||"keypress"===e||"keyup"===e?EVENT({node:t,lowNode:r,name:e},n):EVENT({node:t,lowNode:o,name:e},n)}}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a=n.img,d=n.href,u=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:d,target:u,c:a}),e.setDom(o),t.getImg=i=function(){return a},t.tap=r=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c=void 0===n?void 0:n.isRequiringClearBoth,s=[],f={};void 0===i&&(i={}),e.setDom(o=UL()),t.addItem=a=function(e){var t=e.key,n=e.item,a=e.isFirst;void 0!==i[t]?(n.insertBefore(i[t]),s[FIND({array:s,value:i[t]})]=n,i[t].remove()):a===!0&&s.length>0?(n.insertBefore(s[0]),s.unshift(n)):(o.append(n),s.push(n)),i[t]=n,c===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(e,t){a({key:t,item:e})}),t.removeItem=d=function(e){var t=i[e],n=f[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:s,value:t}),REMOVE({data:i,name:e}),REMOVE({data:f,name:e})},t.addRemoveItemHandler=u=function(e,t){void 0===f[e]&&(f[e]=[]),f[e].push(t)},t.removeAllItems=l=function(){EACH(i,function(e,t){var n=f[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),i={},s=[],f={}}}}),UUI.LOADING=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v=n.wrapperStyle,m=n.contentStyle,E=n.indicator,g=n.msg,y=n.on;o=UUI.MODAL({wrapperStyle:COMBINE([{textAlign:"center"},v]),contentStyle:m,isCannotClose:!0,c:[void 0===E?"":E,P({style:void 0===E?{}:{marginTop:10},c:g})],on:y}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=d=function(e){o.after(e)},t.before=u=function(e){o.before(e)},t.remove=l=function(){o.remove()},t.empty=c=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addWrapperStyle=f=function(e){o.addWrapperStyle(e)},t.addContentStyle=p=function(e){o.addContentStyle(e)}}}),UUI.MODAL=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v,m,E,g,y,S,N,C=void 0===n?void 0:n.c,A=void 0===n?void 0:n.wrapperStyle,h=void 0===n?void 0:n.contentStyle,T=void 0===n?void 0:n.xStyle,V=void 0===n?void 0:n.xImg,I=void 0===n?void 0:n.isCannotClose,S=void 0===n?void 0:n.on;void 0===V&&I!==!0&&(V=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),I===!0?"":UUI.IMG_BUTTON({style:COMBINE([{position:"absolute"},void 0===T?{top:-20,right:-20,padding:10}:T]),img:V,on:{tap:function(){N()},mouseover:function(){g({opacity:.8})},mouseout:function(){g({opacity:1})}}})]}).appendTo(BODY),l=RAR(function(){var e,t=(WIN_WIDTH()-o.getWidth())/2+SCROLL_LEFT(),n=(WIN_HEIGHT()-o.getHeight())/2+SCROLL_TOP();o.addStyle({position:"absolute",left:0>t?0:t,top:0>n?0:n}),(e=function(t){EACH(t,function(t){t.type===IMG&&EVENT({node:t,name:"load"},function(){l()}),void 0!==t.getChildren&&e(t.getChildren())})})(o.getChildren())}),o.on("show",l),r=EVENT({name:"resize"},l),a=EVENT({name:"scroll"},l),d=EVENT({name:"keydown"},function(e){27===e.getKeyCode()&&I!==!0&&N()}),o.on("remove",function(){r.remove(),a.remove(),d.remove()}),t.getNode=u=function(){return o},t.append=c=function(e){i.append(e),l()},void 0!==C&&(CHECK_IS_ARRAY(C)===!0?EACH(C,function(e){c(e)}):c(C)),t.prepend=s=function(e){i.prepend(e),l()},t.after=f=function(e){o.after(e),l()},t.before=p=function(e){o.before(e),l()},t.remove=v=function(){o.remove()},t.empty=m=function(){i.empty()},t.getChildren=E=function(){return i.getChildren()},t.addWrapperStyle=g=function(e){o.addStyle(e),l()},void 0!==A&&g(A),t.addContentStyle=y=function(e){i.addStyle(e),l()},void 0!==h&&y(h),t.on=S=function(e,n){EVENT({node:t,lowNode:o,name:e},n)},t.close=N=function(){EVENT.fireAll({node:t,name:"close"})!==!1&&v()}},afterInit:function(e,t,n){"use strict";var o;void 0!==n&&CHECK_IS_DATA(n)===!0&&(o=n.on),void 0!==o&&EACH(o,function(e,n){t.on(n,e)})}}),UUI.NOTICE=CLASS({init:function(e,t,n){"use strict";var o,i,r,a,d,u,l,c,s,f,p,v=n.wrapperStyle,m=n.contentStyle,E=n.isCannotClose,g=n.on,y=n.msg;o=UUI.MODAL({wrapperStyle:COMBINE([{textAlign:"center"},v]),contentStyle:m,isCannotClose:!0,on:g,c:y}),t.getNode=i=function(){return o.getNode()},t.append=r=function(e){o.append(e)},t.prepend=a=function(e){o.prepend(e)},t.after=d=function(e){o.after(e)},t.before=u=function(e){o.before(e)},t.remove=l=function(){o.remove()},t.empty=c=function(){o.empty()},t.getChildren=s=function(){return o.getChildren()},t.addWrapperStyle=f=function(e){o.addWrapperStyle(e)},t.addContentStyle=p=function(e){o.addContentStyle(e)},E!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d=void 0===n?void 0:n.wrapperStyle,u=void 0===n?void 0:n.contentStyle;o=DIV({c:i=DIV()}),e.setWrapperDom(o),e.setContentDom(i),t.addWrapperStyle=r=function(e){o.addStyle(e)},void 0!==d&&r(d),t.addContentStyle=a=function(e){i.addStyle(e)},void 0!==u&&a(u)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u=void 0===n?void 0:n.trs,l=[],c={};void 0===u&&(u={}),e.setDom(o=TABLE()),t.addTR=i=function(e){var t=e.key,n=e.tr,i=e.isFirst;void 0!==u[t]?(n.insertBefore(u[t]),l[FIND({array:l,value:u[t]})]=n,u[t].remove()):i===!0&&l.length>0?(n.insertBefore(l[0]),l.unshift(n)):(o.append(n),l.push(n)),u[t]=n},EACH(u,function(e){l.push(e),o.append(e)}),t.removeTR=r=function(e){var t=u[e],n=c[e];void 0!==t&&t.remove(),void 0!==n&&EACH(n,function(e){e()}),REMOVE({array:l,value:t}),REMOVE({data:u,name:e}),REMOVE({data:c,name:e})},t.addRemoveTRHandler=a=function(e,t){void 0===c[e]&&(c[e]=[]),c[e].push(t)},t.removeAllTRs=d=function(){EACH(u,function(e,t){var n=c[t];e.remove(),void 0!==n&&EACH(n,function(e){e()})}),u={},l=[],c={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d=n.title,u=n.href,l=n.target;o=A({style:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},href:u,target:l,c:i=SPAN({c:void 0===d?void 0===u?"":u:d})}),e.setDom(o),t.setTitle=r=function(e){i.empty(),i.append(e)},t.tap=a=function(){EVENT.fireAll({node:t,name:"tap"})}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d,u,l=void 0===n?void 0:n.errorMsgs,c=void 0===n?void 0:n.errorMsgStyle,s=[];o=FORM(),t.on("remove",function(){EACH(s,function(e){e.remove()})}),e.setDom(o),t.getData=i=function(){var e={},n=function(t){EACH(t.getChildren(),function(t){void 0!==t.getValue&&void 0!==t.getName&&void 0!==t.getName()&&(e[t.getName()]=t.getValue()),n(t)})};return n(t),e},t.setData=r=function(e){var n=function(t){EACH(t.getChildren(),function(t){var o;void 0!==t.setValue&&void 0!==t.getName&&void 0!==t.getName()&&(o=e[t.getName()],t.setValue(void 0===o?"":o)),n(t)})};n(t)},t.submit=a=function(){o.submit()},t.showErrors=d=function(e){var n=COPY(e),o=function(e){EACH(e.getChildren(),function(e){var t,i,r,a;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),i=n[t],void 0!==i&&void 0!==l&&(r=l[t][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),e.after(a=P({style:c,c:r})),REMOVE({data:n,name:t}),s.push(DELAY(2,function(e){a.remove(),REMOVE({array:s,value:e})})))),o(e)})};o(t)},t.getErrorMsgs=u=function(e){var n=COPY(e),o=[],i=function(e){EACH(e.getChildren(),function(e){var t,r,a;void 0!==e.getValue&&void 0!==e.getName&&(t=e.getName(),r=n[t],void 0!==r&&void 0!==l&&(a=l[t][r.type],"function"==typeof a&&(a=a(void 0!==r.validParam?r.validParam:r.validParams)),o.push(a),REMOVE({data:n,name:t}))),i(e)})};return i(t),o}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(e,t,n){"use strict";var o,i,r,a,d=void 0===n?void 0:n.wrapperStyle,u=void 0===n?void 0:n.contentStyle;o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})})}),e.setWrapperDom(o),e.setContentDom(i),t.addWrapperStyle=r=function(e){o.addStyle(e)},void 0!==d&&r(d),t.addContentStyle=a=function(e){i.addStyle(e)},void 0!==u&&a(u)}});