(this["webpackJsonpmy-hw"]=this["webpackJsonpmy-hw"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={reviews:"Message_reviews__2QzMx",comment:"Message_comment__3c-G8",commentBubble:"Message_commentBubble__2eKSC",commentText:"Message_commentText__2pmP7",author:"Message_author__1RUC4",time:"Message_time__25PZQ",avatar:"Message_avatar__2Ub_Q",imgAvatar:"Message_imgAvatar__21XmT",nameText:"Message_nameText__1J1or",submitBtn:"Message_submitBtn__2Go69",inputField:"Message_inputField__3PlNY"}},,function(e,t,n){e.exports={btnDelete:"Affairs_btnDelete__3MIqW",button:"Affairs_button__31jPN",active:"Affairs_active__1CZ_z",affair:"Affairs_affair__2huL8",high:"Affairs_high__u5fBp",low:"Affairs_low__3qC4x",middle:"Affairs_middle__208Bg",nameText:"Affairs_nameText__2JqrZ",priorityText:"Affairs_priorityText__qai7I",clnAll:"Affairs_clnAll__uxuIe",clnHigh:"Affairs_clnHigh__3UcOw",clnMiddle:"Affairs_clnMiddle__GbYg9",clnLow:"Affairs_clnLow__3hBuc"}},function(e,t,n){e.exports={link:"Header_link__2yZwA",active:"Header_active__1mIyg",block:"Header_block__hU4dD",header:"Header_header__c-BMv"}},,,function(e,t,n){e.exports={main:"Greeting_main__3QAVm",error:"Greeting_error__UT2Hh",notErrorInput:"Greeting_notErrorInput__3AX_w",errorInput:"Greeting_errorInput__2LFtm",addBtn:"Greeting_addBtn__1BtLI",totalUsers:"Greeting_totalUsers__1unQQ"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__tQNHW",errorInput:"SuperInputText_errorInput__1xvr7",error:"SuperInputText_error__h_oNm"}},function(e,t,n){e.exports={work:"HW8_work__J4EE-",up:"HW8_up__22hh-",age:"HW8_age__14tjz",down:"HW8_down__3f-Py"}},,,function(e,t,n){e.exports={default:"SuperButton_default__2PQlW",red:"SuperButton_red__1UKvw",button:"SuperButton_button__jTDUa",blink:"SuperButton_blink__5NcSR"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__3kQJx",checkbox:"SuperCheckbox_checkbox__3zkl4",spanClassName:"SuperCheckbox_spanClassName__3ZPpH"}},,,function(e,t,n){e.exports={App:"App_App__fpIQU"}},function(e,t,n){e.exports={blue:"HW4_blue__3D12d",column:"HW4_column__757eb",testSpanError:"HW4_testSpanError__xp-68"}},,,function(e,t,n){},,function(e,t,n){e.exports={span:"SuperEditableSpan_span__3K_FF"}},,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),s=n.n(r),i=(n(38),n(26)),o=n.n(i),j=n(9),l=n.n(j),u=n(0);var b=function(e){return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:l.a.reviews,children:[Object(u.jsxs)("figure",{className:l.a.avatar,children:[Object(u.jsx)("img",{className:l.a.imgAvatar,src:e.avatar}),Object(u.jsx)("figcaption",{className:l.a.nameText,children:e.name})]}),Object(u.jsx)("div",{className:l.a.comment,children:Object(u.jsxs)("div",{className:l.a.commentBubble,children:[Object(u.jsx)("h1",{className:l.a.commentText,children:e.message}),Object(u.jsx)("h3",{className:l.a.author,children:e.name}),Object(u.jsx)("h3",{className:l.a.time,children:e.time})]})})]}),Object(u.jsxs)("div",{className:l.a.inputMessageContainer,children:[Object(u.jsx)("input",{type:"text",className:l.a.inputField}),Object(u.jsx)("button",{className:l.a.submitBtn,children:"send"})]})]})},d=1,h="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",O="Some Name",x="some text",m="22:00";var _=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 1",Object(u.jsx)(b,{id:d,avatar:h,name:O,message:x,time:m})]})},p=n(2),f=n(11),v=n.n(f);var g=function(e){return Object(u.jsxs)("div",{className:v.a.affair,children:[Object(u.jsx)("div",{className:v.a.nameText,children:e.affair.name}),Object(u.jsx)("div",{className:v.a.priorityText,children:e.affair.priority}),Object(u.jsx)("button",{className:v.a.btnDelete,onClick:function(){e.deleteAffairCallback(e.affair.id)},children:"Delete"})]})};var N=function(e){var t=e.data.map((function(t){return Object(u.jsx)(g,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t.id)}));return Object(u.jsxs)("div",{children:[t,Object(u.jsx)("button",{className:v.a.clnAll,onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{className:v.a.clnHigh,onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{className:v.a.clnMiddle,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{className:v.a.clnLow,onClick:function(){e.setFilter("low")},children:"Low"})]})},k=[{id:1,name:"React",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:4,name:"work",priority:"high"},{id:5,name:"html & css",priority:"middle"}];var C=function(){var e=Object(a.useState)(k),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(p.a)(r,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 2",Object(u.jsx)(N,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e))},filter:i}),Object(u.jsx)("hr",{})]})},w=n(21),y=n(15),S=n.n(y),A=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?S.a.errorInput:S.a.notErrorInput;return Object(u.jsxs)("div",{className:S.a.main,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:i,onBlur:n,onKeyDown:s}),Object(u.jsx)("div",{className:S.a.error,children:c})]}),Object(u.jsx)("button",{className:S.a.addBtn,onClick:a,disabled:!t,children:"add"}),Object(u.jsx)("div",{className:S.a.totalUsers,children:r})]})},T=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(p.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),j=Object(p.a)(o,2),l=j[0],b=j[1],d=function(){n(s),alert("Hello ".concat(s," !")),i("")},h=t.length;return Object(u.jsx)(A,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),l&&b("")):(s&&i(""),b("input your name"))},addUser:d,error:l,totalUsers:h,onEnter:function(e){"Enter"===e.key&&s&&d()}})},I=n(50);var B=function(){var e=Object(a.useState)([]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 3",Object(u.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(I.a)(),name:e};c([].concat(Object(w.a)(n),[t]))}}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},M=n(6),E=n(5),H=n(18),F=n.n(H),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(E.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(F.a.error," ").concat(i||""),l="".concat(F.a.errorInput," ").concat(r?F.a.errorInput:F.a.superInput," ").concat(s);return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:l},o)),r&&Object(u.jsx)("span",{className:j,children:r})]})},P=n(27),W=n.n(P),D=n(22),J=n.n(D),G=function(e){var t=e.red,n=e.className,a=Object(E.a)(e,["red","className"]),c="".concat(J.a.button," ").concat(t?J.a.red:J.a.default," ").concat(n);return Object(u.jsx)("button",Object(M.a)({className:c},a))},L=n(23),Q=n.n(L),K=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(E.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(a||"");return Object(u.jsxs)("label",{className:Q.a.label,children:[Object(u.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(u.jsx)("span",{className:Q.a.spanClassName,children:c})]})};var Z=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(p.a)(i,2),j=o[0],l=o[1];return Object(u.jsxs)("div",{children:["homeworks 4",Object(u.jsxs)("div",{className:W.a.column,children:[Object(u.jsx)(U,{value:n,onChangeText:c,onEnter:s,error:r}),Object(u.jsx)(U,{className:W.a.blue}),Object(u.jsx)(G,{children:"default"}),Object(u.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(G,{disabled:!0,children:"disabled"}),Object(u.jsx)(K,{checked:j,onChangeChecked:l,children:"some text "}),Object(u.jsx)(K,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]})]})},q=n(13),z=n(12),R=n.n(z),X=n(3),Y=n(32),V=n.n(Y),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(E.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(p.a)(s,2),o=i[0],j=i[1],l=c||{},b=l.children,d=l.onDoubleClick,h=l.className,O=Object(E.a)(l,["children","onDoubleClick","className"]);"\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",h);return Object(u.jsx)(u.Fragment,{children:o?Object(u.jsx)(U,Object(M.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},r)):Object(u.jsx)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:V.a.span},O),{},{children:b||r.value}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 6",Object(u.jsx)("div",{children:Object(u.jsx)($,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(u.jsx)(G,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(u.jsx)(G,{onClick:function(){c(te("editable-span-value",""))},children:"restore"}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ae=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{}),Object(u.jsx)(C,{}),Object(u.jsx)(B,{}),Object(u.jsx)(Z,{}),Object(u.jsx)(ne,{})]})};var ce=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:"404"}),Object(u.jsx)("div",{children:"Page not found!"}),Object(u.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var re=function(){return Object(u.jsx)("div",{children:"JuniorPlus"})};var se=function(){return Object(u.jsx)("div",{children:"Junior"})},ie="/pre-junior",oe="/junior",je="/junior-plus";var le=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(X.d,{children:[Object(u.jsx)(X.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(X.a,{to:ie})}}),Object(u.jsx)(X.b,{path:ie,render:function(){return Object(u.jsx)(ae,{})}}),Object(u.jsx)(X.b,{path:oe,render:function(){return Object(u.jsx)(se,{})}}),Object(u.jsx)(X.b,{path:je,render:function(){return Object(u.jsx)(re,{})}}),Object(u.jsx)(X.b,{render:function(){return Object(u.jsx)(ce,{})}})]})})};var ue=function(){return Object(u.jsxs)("div",{className:R.a.header,children:[Object(u.jsx)(q.b,{to:ie,className:R.a.link,activeClassName:R.a.active,children:"pre-junior"}),Object(u.jsx)(q.b,{to:oe,className:R.a.link,activeClassName:R.a.active,children:"junior"}),Object(u.jsx)(q.b,{to:je,className:R.a.link,activeClassName:R.a.active,children:"junior +"}),Object(u.jsxs)("div",{className:R.a.block,children:[" ",Object(u.jsx)("span",{className:R.a.sp})]})]})};var be=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(q.a,{children:[Object(u.jsx)(ue,{}),Object(u.jsx)(le,{})]})})},de=n(30),he=n.n(de),Oe=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(E.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(u.jsx)("option",{className:he.a.option,value:e,children:e},e+"-"+t)})):[],i=he.a.select+(n?""+n:"");return Object(u.jsx)("select",Object(M.a)(Object(M.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},xe=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(E.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"radio",name:e[n],checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(u.jsx)(u.Fragment,{children:i})},me=["x","y","z"];var _e=function(){var e=Object(a.useState)(me[1]),t=Object(p.a)(e,2),n=t[0],c=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 7",Object(u.jsx)("div",{children:Object(u.jsx)(Oe,{options:me,value:n,onChangeOption:c})}),Object(u.jsx)("div",{children:Object(u.jsx)(xe,{name:"radio",options:me,value:n,onChangeOption:c})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})},pe=function(e,t){switch(t.type){case"sort":var n=Object(w.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},fe=n(19),ve=n.n(fe),ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Ne=function(){var e=Object(a.useState)(ge),t=Object(p.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(u.jsxs)("div",{className:ve.a.work,children:[Object(u.jsx)("span",{children:e.name}),Object(u.jsx)("span",{children:e.age})]},e._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 8",r,Object(u.jsx)("div",{children:Object(u.jsx)(G,{onClick:function(){return c(pe(ge,{type:"sort",payload:"up"}))},className:ve.a.up,children:"sort up"})}),Object(u.jsx)("div",{children:Object(u.jsx)(G,{onClick:function(){return c(pe(ge,{type:"check",payload:18}))},className:ve.a.age,children:"check 18"})}),Object(u.jsx)("div",{children:Object(u.jsx)(G,{onClick:function(){return c(pe(ge,{type:"sort",payload:"down"}))},className:ve.a.down,children:"sort down"})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ke=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(p.a)(r,2),i=s[0],o=s[1],j=Object(a.useState)(!1),l=Object(p.a)(j,2),b=l[0],d=l[1],h=function(){clearInterval(n)},O=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(u.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(u.jsx)("br",{});return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:O}),b?Object(u.jsx)("div",{children:x}):Object(u.jsx)("br",{}),Object(u.jsx)(G,{onClick:function(){h();var e=+setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(u.jsx)(G,{onClick:h,children:"stop"})]})};var Ce=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 9",Object(u.jsx)(ke,{}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var we=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("hr",{}),"homeworks 10",Object(u.jsx)("div",{children:Object(u.jsx)(G,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(u.jsx)("hr",{}),Object(u.jsx)("hr",{})]})};var ye=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{className:o.a.hwName,children:"homeworks: "}),Object(u.jsx)(_,{}),Object(u.jsx)(C,{}),Object(u.jsx)(B,{}),Object(u.jsx)(Z,{}),Object(u.jsx)(be,{}),Object(u.jsx)(_e,{}),Object(u.jsx)(Ne,{}),Object(u.jsx)(Ce,{}),Object(u.jsx)(we,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.862d94b3.chunk.js.map