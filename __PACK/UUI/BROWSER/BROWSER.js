UUI.BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c=n.img,l=n.title,f=void 0===n.spacing?0:n.spacing,p=n.href,s=n.target,v=n.style,g=n.on;void 0!==g&&EACH(g,function(t,n){g[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{display:"block",textAlign:"center",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:v}),href:p,target:s,on:g}),void 0!==l&&o.prepend(i=DIV({c:void 0===l?"":l})),void 0!==c&&o.prepend(DIV({style:{marginBottom:void 0!==l?f:0},c:c})),e.setTitle=r=function(t){i.empty(),i.append(t)},e.getImg=d=function(){return c},e.getDom=u=function(){return o},e.tap=a=function(){void 0!==g&&void 0!==g.tap&&g.tap()}}}),UUI.BUTTON_H=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l=n.img,f=n.title,p=void 0===n.spacing?0:n.spacing,s=n.href,v=n.target,g=n.style,y=n.isImgRight,m=n.on;void 0!==m&&EACH(m,function(t,n){m[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{display:"block",cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:g}),href:s,target:v,on:m,c:[i=DIV({style:{flt:"left"},c:void 0===f?"":f}),CLEAR_BOTH()]}),void 0!==l&&(l.addStyle({flt:"left"}),void 0===l.getStyle("margin")&&void 0===l.getStyle("marginRight")&&l.addStyle(y!==!0?{marginRight:p}:{marginLeft:p}),y!==!0?o.prepend(l):i.after(l),r=EVENT({name:"resize"},function(){var t=i.getHeight();t>0&&i.addStyle({marginTop:(l.getHeight()-i.getHeight())/2})}),EVENT_ONCE({node:l,name:"load"},function(){r.fire()}),l.addShowHandler(function(){r.fire()}),l.addRemoveHandler(function(){r.remove()})),e.setTitle=d=function(t){i.empty(),i.append(t)},e.getImg=u=function(){return l},e.getDom=a=function(){return o},e.tap=c=function(){void 0!==m&&void 0!==m.tap&&m.tap()}}}),UUI.FULL_CHECKBOX=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v=n.name,g=n.label,y=n.value,m=n.wrapperStyle,S=n.inputStyle,E=n.on;void 0!==E&&EACH(E,function(t,n){E[n]=function(n){t(n,e)}}),o=DIV({style:{position:"relative"},on:{tap:function(t){i.toggleCheck(),t.stop()}},c:[i=INPUT({style:{flt:"left",marginRight:5},name:v,type:"checkbox",on:COMBINE_DATA({origin:{tap:function(t){t.stop()}},extend:void 0!==E?E:{}}),value:y}),r=SPAN({style:{flt:"left",cursor:"pointer"},c:g}),CLEAR_BOTH()]}),o.isValidWrapper=!0,e.getDom=d=function(){return o},e.getName=u=function(){return v},e.getValue=a=function(){return i.getValue()},e.setValue=c=function(t){i.setValue(t)},e.select=l=function(){i.select()},e.blur=f=function(){i.blur()},e.addWrapperStyle=p=function(t){o.addStyle(t)},void 0!==m&&p(m),e.addInputStyle=s=function(t){i.addStyle(t)},void 0!==S&&s(S)}}),UUI.FULL_INPUT=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v,g=n.name,y=n.type,m=n.placeholder,S=n.value,E=n.wrapperStyle,A=n.inputStyle,C=n.on;void 0!==C&&EACH(C,function(t,n){C[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,backgroundColor:"#FFF"},c:DIV({style:{position:"relative"},c:[SPAN({style:{visibility:"hidden"},c:"."}),i=INPUT({style:{position:"absolute",left:0,top:0,width:"100%",border:"none",background:"transparent"},name:g,type:y,value:S,on:C,placeholder:m})]})}),o.isValidWrapper=!0,e.getInputDom=r=function(){return i},e.getDom=d=function(){return o},e.getName=u=function(){return g},e.getValue=a=function(){return i.getValue()},e.setValue=c=function(t){i.setValue(t)},e.select=l=function(){i.select()},e.focus=f=function(){i.focus()},e.blur=p=function(){i.blur()},e.addWrapperStyle=s=function(t){o.addStyle(t)},void 0!==E&&s(E),e.addInputStyle=v=function(t){i.addStyle(t)},void 0!==A&&v(A)}}),UUI.FULL_SELECT=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v=n.name,g=n.value,y=n.options,m=n.wrapperStyle,S=n.selectStyle,E=n.on;void 0!==E&&EACH(E,function(t,n){E[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative"},c:i=SELECT({style:{width:"100%",border:"none"},on:E,name:v})}),o.isValidWrapper=!0,e.getDom=r=function(){return o},e.getName=d=function(){return v},e.getValue=u=function(){return i.getValue()},e.setValue=a=function(t){i.setValue(t)},void 0!==g&&a(g),e.select=c=function(){i.select()},e.blur=l=function(){i.blur()},e.addWrapperStyle=f=function(t){o.addStyle(t)},void 0!==m&&f(m),e.addSelectStyle=p=function(t){i.addStyle(t)},void 0!==S&&p(S),e.addOption=s=function(t){i.append(t)},void 0!==y&&EACH(y,function(t){s(t)})}}),UUI.FULL_SUBMIT=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r=void 0===n?void 0:n.style,d=void 0===n?void 0:n.value,u=void 0===n?void 0:n.on;void 0!==u&&EACH(u,function(t,n){u[n]=function(n){t(n,e)}}),o=INPUT({type:"submit",style:COMBINE_DATA({origin:{border:"none",width:"100%",padding:"10px 0",cursor:"pointer"},extend:r}),on:u}),void 0!==d&&o.setValue(d),e.getDom=i=function(){return o}}}),UUI.FULL_TEXTAREA=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v,g=n.name,y=n.placeholder,m=n.value,S=n.wrapperStyle,E=n.textareaStyle,A=n.on;void 0!==A&&EACH(A,function(t,n){A[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,backgroundColor:"#FFF",position:"relative",height:100},c:i=TEXTAREA({style:{width:"100%",height:"100%",backgroundColor:"transparent",border:"none"},name:g,placeholder:y,on:A,value:m})}),o.isValidWrapper=!0,e.getTextareaDom=r=function(){return i},e.getDom=d=function(){return o},e.getName=u=function(){return g},e.getValue=a=function(){return i.getValue()},e.setValue=c=function(t){i.setValue(t)},e.select=l=function(){i.select()},e.focus=f=function(){i.focus()},e.blur=p=function(){i.blur()},e.addWrapperStyle=s=function(t){o.addStyle(t)},void 0!==S&&s(S),e.addTextareaStyle=v=function(t){i.addStyle(t)},void 0!==E&&v(E)}}),UUI.FULL_UPLOAD_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v=(n.box,n.wrapperStyle),g=n.formStyle,y=n.inputStyle,m=n.uploadingStyle,S=n.afterUpload,E=n.on;void 0!==E&&EACH(E,function(t,n){E[n]=function(n){t(n,e)}}),o=DIV({style:{padding:5,background:"#FFF",position:"relative"},c:[d=IFRAME({style:{display:"none"},name:"__UPLOAD_FORM_"+e.id}),u=UUI.PANEL({wrapperStyle:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"none"},contentStyle:{backgroundColor:"#000",position:"absolute",top:"50%",left:"50%",width:100,marginLeft:-55,marginTop:-13,padding:5,textAlign:"center",borderRadius:10,color:"#fff"},c:"Uploading..."})]}),GET("__UPLOAD_SERVER_HOST",function(t){var n=global.location.protocol+"//"+global.location.host+"/__UPLOAD_CALLBACK";d.after(i=FORM({action:"http://"+(""===t?global.location.hostname:t)+":"+CONFIG.uploadServerPort+"?callbackURL="+n,target:"__UPLOAD_FORM_"+e.id,method:"POST",enctype:"multipart/form-data",style:COMBINE_DATA({origin:g,extend:{padding:5}}),c:[r=INPUT({type:"file",isMultiple:!0,style:{width:"100%",height:"100%",color:"#000",border:"none"},on:E}),INPUT({type:"submit",style:{visibility:"hidden",position:"absolute"}})]})),i.isValidWrapper=!0}),EVENT({node:d,name:"load"},function(){var t,n=global["__UPLOAD_FORM_"+e.id],o=void 0!==n?n.fileDataSetStr:void 0,i=void 0!==n?n.errorCode:void 0;(void 0!==o||void 0!==i)&&(t=PARSE_STR(decodeURIComponent(o)),EACH(t,function(e,n){t[n]=UNPACK_DATA(e)}),r.setValue(""),void 0!==S&&S(t,i)),u.hide()}),EVENT({node:r,name:"change"},function(){""!==r.getValue()&&(u.show(),void 0!==i&&i.submit(!0))}),e.getDom=a=function(){return o},e.select=c=function(){r.select()},e.addWrapperStyle=l=function(t){o.addStyle(t)},void 0!==v&&l(v),e.addFormStyle=f=function(t){void 0!==i?i.addStyle(t):EXTEND_DATA({origin:g,extend:t})},void 0!==g&&f(g),e.addInputStyle=p=function(t){r.addStyle(t)},void 0!==y&&p(y),e.addUploadingStyle=s=function(t){u.addWrapperStyle(t)},void 0!==m&&s(m)}}),UUI.IMG_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u=n.img,a=n.href,c=n.target,l=n.style,f=n.on;void 0!==f&&EACH(f,function(t,n){f[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:l}),href:a,target:c,on:f,c:u}),e.getImg=i=function(){return u},e.getDom=r=function(){return o},e.tap=d=function(){o.tap()}}}),UUI.LIST=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f=void 0===n?void 0:n.style,p=void 0===n?void 0:n.c,s=void 0===n?void 0:n.on,v=void 0===n?void 0:n.isRequiringClearBoth,g=[],y={};void 0===i&&(i={}),void 0!==s&&EACH(s,function(t,n){s[n]=function(n){t(n,e)}}),o=UL({style:f,c:p,on:s}),e.getDom=d=function(){return o},e.addItem=u=function(t){var e=t.key,n=t.item,d=t.isFirst;void 0!==i[e]?(n.insertBefore(i[e]),g[FIND_KEY({data:g,value:i[e]})]=n,i[e].remove()):d===!0&&g.length>0?(n.insertBefore(g[0]),g.unshift(n)):(o.append(n),g.push(n)),i[e]=n,v===!0&&(void 0!==r&&r.remove(),r=CLEAR_BOTH().appendTo(o))},void 0!==n&&void 0!==n.items&&EACH(n.items,function(t,e){u({key:e,item:t})}),e.removeItem=a=function(t){var e=i[t],n=y[t];void 0!==e&&e.remove(),void 0!==n&&EACH(n,function(t){t()}),REMOVE({data:g,value:e}),REMOVE({data:i,key:t}),REMOVE({data:y,key:t})},e.addRemoveItemHandler=c=function(t,e){void 0===y[t]&&(y[t]=[]),y[t].push(e)},e.removeAllItems=l=function(){EACH(i,function(t,e){var n=y[e];t.remove(),void 0!==n&&EACH(n,function(t){t()})}),i={},g=[],y={}}}}),UUI.LOADING=CLASS({init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v=n.wrapperStyle,g=n.contentStyle,y=n.indicator,m=n.msg,S=n.on;o=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:v}),contentStyle:g,isCannotClose:!0,c:[void 0===y?"":y,P({style:void 0===y?{}:{marginTop:10},c:m})],on:S}),e.getDom=i=function(){return o.getDom()},e.append=r=function(t){o.append(t)},e.prepend=d=function(t){o.prepend(t)},e.after=u=function(t){o.after(t)},e.before=a=function(t){o.before(t)},e.remove=c=function(){o.remove()},e.empty=l=function(){o.empty()},e.getChildren=f=function(){return o.getChildren()},e.addWrapperStyle=p=function(t){o.addWrapperStyle(t)},e.addContentStyle=s=function(t){o.addContentStyle(t)}}}),UUI.MODAL=CLASS({init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v,g,y,m,S,E,A=void 0===n?void 0:n.c,C=void 0===n?void 0:n.wrapperStyle,D=void 0===n?void 0:n.contentStyle,h=void 0===n?void 0:n.xStyle,I=void 0===n?void 0:n.xImg,T=void 0===n?void 0:n.isCannotClose,U=void 0===n?void 0:n.on;void 0!==U&&EACH(U,function(t,n){U[n]=function(n){t(n,e)}}),void 0===I&&T!==!0&&(I=IMG({src:UUI.R("x.png")})),o=DIV({c:[i=DIV(),T===!0?"":UUI.IMG_BUTTON({style:COMBINE_DATA({origin:{position:"absolute"},extend:void 0===h?{top:-20,right:-20,padding:10}:h}),img:I,on:{tap:function(){E()},mouseover:function(){m({opacity:.8})},mouseout:function(){m({opacity:1})}}})],on:U}).appendTo(BODY),a=RAR(function(){var t,e=(WIN_WIDTH()-o.getWidth())/2+SCROLL_LEFT(),n=(WIN_HEIGHT()-o.getHeight())/2+SCROLL_TOP();o.addStyle({position:"absolute",left:0>e?0:e,top:0>n?0:n}),(t=function(e){EACH(e,function(e){e.type===IMG&&EVENT({node:e,name:"load"},function(){a()}),void 0!==e.getChildren&&t(e.getChildren())})})(o.getChildren())}),o.addShowHandler(a),r=EVENT({name:"resize"},a),d=EVENT({name:"scroll"},a),u=EVENT({name:"keydown"},function(t){27===t.getKeyCode()&&T!==!0&&E()}),o.addRemoveHandler(function(){r.remove(),d.remove(),u.remove()}),e.getDom=c=function(){return o},e.append=l=function(t){i.append(t),a()},void 0!==A&&EACH(A,function(t){l(t)}),e.prepend=f=function(t){i.prepend(t),a()},e.after=p=function(t){o.after(t),a()},e.before=s=function(t){o.before(t),a()},e.remove=v=function(){o.remove()},e.empty=g=function(){i.empty()},e.getChildren=y=function(){return i.getChildren()},e.addWrapperStyle=m=function(t){o.addStyle(t),a()},void 0!==C&&m(C),e.addContentStyle=S=function(t){i.addStyle(t),a()},void 0!==D&&S(D),e.close=E=function(){void 0!==U&&void 0!==U.close?U.close(e)!==!1&&v():v()}}}),UUI.NOTICE=CLASS({init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p,s,v=n.wrapperStyle,g=n.contentStyle,y=n.isCannotClose,m=n.on,S=n.msg;o=UUI.MODAL({wrapperStyle:COMBINE_DATA({origin:{textAlign:"center"},extend:v}),contentStyle:g,isCannotClose:!0,on:m,c:S}),e.getDom=i=function(){return o.getDom()},e.append=r=function(t){o.append(t)},e.prepend=d=function(t){o.prepend(t)},e.after=u=function(t){o.after(t)},e.before=a=function(t){o.before(t)},e.remove=c=function(){o.remove()},e.empty=l=function(){o.empty()},e.getChildren=f=function(){return o.getChildren()},e.addWrapperStyle=p=function(t){o.addWrapperStyle(t)},e.addContentStyle=s=function(t){o.addContentStyle(t)},y!==!0&&DELAY(2,function(){o.close()})}}),UUI.PANEL=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p=void 0===n?void 0:n.c,s=void 0===n?void 0:n.wrapperStyle,v=void 0===n?void 0:n.contentStyle,g=void 0===n?void 0:n.on;void 0!==g&&EACH(g,function(t,n){g[n]=function(n){t(n,e)}}),o=DIV({c:i=DIV(),on:g}),e.getDom=r=function(){return o},e.append=d=function(t){i.append(t)},void 0!==p&&EACH(p,function(t){d(t)}),e.prepend=u=function(t){i.prepend(t)},e.empty=a=function(){i.empty()},e.getChildren=c=function(){return i.getChildren()},e.addWrapperStyle=l=function(t){o.addStyle(t)},void 0!==s&&l(s),e.addContentStyle=f=function(t){i.addStyle(t)},void 0!==v&&f(v)}}),UUI.TABLE=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c=void 0===n?void 0:n.style,l=void 0===n?void 0:n.c,f=void 0===n?void 0:n.trs,p=void 0===n?void 0:n.on,s=[],v={};void 0===f&&(f={}),void 0!==p&&EACH(p,function(t,n){p[n]=function(n){t(n,e)}}),o=TABLE({style:c,c:l,on:p}),e.getDom=i=function(){return o},e.addTR=r=function(t){var e=t.key,n=t.tr,i=t.isFirst;void 0!==f[e]?(n.insertBefore(f[e]),s[FIND_KEY({data:s,value:f[e]})]=n,f[e].remove()):i===!0&&s.length>0?(n.insertBefore(s[0]),s.unshift(n)):(o.append(n),s.push(n)),f[e]=n},EACH(f,function(t){s.push(t),o.append(t)}),e.removeTR=d=function(t){var e=f[t],n=v[t];void 0!==e&&e.remove(),void 0!==n&&EACH(n,function(t){t()}),REMOVE({data:s,value:e}),REMOVE({data:f,key:t}),REMOVE({data:v,key:t})},e.addRemoveTRHandler=u=function(t,e){void 0===v[t]&&(v[t]=[]),v[t].push(e)},e.removeAllTRs=a=function(){EACH(f,function(t,e){var n=v[e];t.remove(),void 0!==n&&EACH(n,function(t){t()})}),f={},s=[],v={}}}}),UUI.TEXT_BUTTON=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a=n.title,c=n.href,l=n.target,f=n.style,p=n.on;void 0!==p&&EACH(p,function(t,n){p[n]=function(n){t(n,e)}}),o=A({style:COMBINE_DATA({origin:{cursor:"pointer",textDecoration:"none",touchCallout:"none",userSelect:"none"},extend:f}),href:c,target:l,on:p,c:i=SPAN({c:void 0===a?void 0===c?"":c:a})}),e.setTitle=r=function(t){i.empty(),i.append(t)},e.getDom=d=function(){return o},e.tap=u=function(){o.tap()}}}),UUI.VALID_FORM=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l=void 0===n?void 0:n.errorMsgs,f=void 0===n?void 0:n.on,p=void 0===n?void 0:n.c,s=void 0===n?void 0:n.style,v=void 0===n?void 0:n.errorMsgStyle,g=[];void 0!==f&&EACH(f,function(t,n){f[n]=function(n){t(n,e)}}),o=FORM({style:s,c:p,on:f}),o.addRemoveHandler(function(){EACH(g,function(t){t.remove()})}),e.getDom=i=function(){return o},e.getData=r=function(){return o.getData()},e.setData=d=function(t){return o.setData(t)},e.submit=u=function(){o.submit()},e.showErrors=a=function(t){var n=COPY_DATA(t),o=function(t){EACH(t.getChildren(),function(t){var e,i,r,d;void 0!==t.getValue&&void 0!==t.getName&&(e=t.getName(),i=n[e],void 0!==i&&void 0!==l&&(r=l[e][i.type],"function"==typeof r&&(r=r(void 0!==i.validParam?i.validParam:i.validParams)),(t.getParent().getParent().isValidWrapper===!0?t.getParent().getParent():t.getParent().isValidWrapper===!0?t.getParent():t).after(d=P({style:v,c:r})),REMOVE({data:n,key:e}),g.push(DELAY(2,function(t){d.remove(),REMOVE({data:g,value:t})})))),o(t)})};o(e)},e.getErrorMsgs=c=function(t){var n=COPY_DATA(t),o=[],i=function(t){EACH(t.getChildren(),function(t){var e,r,d;void 0!==t.getValue&&void 0!==t.getName&&(e=t.getName(),r=n[e],void 0!==r&&void 0!==l&&(d=l[e][r.type],"function"==typeof d&&(d=d(void 0!==r.validParam?r.validParam:r.validParams)),o.push(d),REMOVE({data:n,key:e}))),i(t)})};return i(e),o}}}),UUI.V_CENTER=CLASS({preset:function(){"use strict";return NODE},init:function(t,e,n){"use strict";var o,i,r,d,u,a,c,l,f,p=void 0===n?void 0:n.c,s=void 0===n?void 0:n.wrapperStyle,v=void 0===n?void 0:n.contentStyle,g=void 0===n?void 0:n.on;void 0!==g&&EACH(g,function(t,n){g[n]=function(n){t(n,e)}}),o=TABLE({style:{width:"100%",margin:0,padding:0},c:TR({style:{margin:0,padding:0},c:i=TD({style:{margin:0,padding:0}})}),on:g}),e.getDom=r=function(){return o},e.append=d=function(t){i.append(t)},void 0!==p&&EACH(p,function(t){d(t)}),e.prepend=u=function(t){i.prepend(t)},e.empty=a=function(){i.empty()},e.getChildren=c=function(){return i.getChildren()},e.addWrapperStyle=l=function(t){o.addStyle(t)},void 0!==s&&l(s),e.addContentStyle=f=function(t){i.addStyle(t)},void 0!==v&&f(v)}});