(this["webpackJsonpmy-hw"]=this["webpackJsonpmy-hw"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={reviews:"Message_reviews__2QzMx",comment:"Message_comment__3c-G8",commentBubble:"Message_commentBubble__2eKSC",commentText:"Message_commentText__2pmP7",author:"Message_author__1RUC4",time:"Message_time__25PZQ",avatar:"Message_avatar__2Ub_Q",imgAvatar:"Message_imgAvatar__21XmT",nameText:"Message_nameText__1J1or",submitBtn:"Message_submitBtn__2Go69",inputField:"Message_inputField__3PlNY"}},,function(e,t,n){e.exports={btnDelete:"Affairs_btnDelete__3MIqW",button:"Affairs_button__31jPN",active:"Affairs_active__1CZ_z",affair:"Affairs_affair__2huL8",high:"Affairs_high__u5fBp",low:"Affairs_low__3qC4x",middle:"Affairs_middle__208Bg",nameText:"Affairs_nameText__2JqrZ",priorityText:"Affairs_priorityText__qai7I",clnAll:"Affairs_clnAll__uxuIe",clnHigh:"Affairs_clnHigh__3UcOw",clnMiddle:"Affairs_clnMiddle__GbYg9",clnLow:"Affairs_clnLow__3hBuc"}},function(e,t,n){e.exports={link:"Header_link__2yZwA",active:"Header_active__1mIyg",block:"Header_block__hU4dD",header:"Header_header__c-BMv"}},,,function(e,t,n){e.exports={main:"Greeting_main__3QAVm",error:"Greeting_error__UT2Hh",notErrorInput:"Greeting_notErrorInput__3AX_w",errorInput:"Greeting_errorInput__2LFtm",addBtn:"Greeting_addBtn__1BtLI",totalUsers:"Greeting_totalUsers__1unQQ"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__tQNHW",errorInput:"SuperInputText_errorInput__1xvr7",error:"SuperInputText_error__h_oNm"}},function(e,t,n){e.exports={work:"HW8_work__J4EE-",up:"HW8_up__22hh-",age:"HW8_age__14tjz",down:"HW8_down__3f-Py"}},,,function(e,t,n){e.exports={default:"SuperButton_default__2PQlW",red:"SuperButton_red__1UKvw",button:"SuperButton_button__jTDUa",blink:"SuperButton_blink__5NcSR"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__3kQJx",checkbox:"SuperCheckbox_checkbox__3zkl4",spanClassName:"SuperCheckbox_spanClassName__3ZPpH"}},,,function(e,t,n){e.exports={App:"App_App__fpIQU"}},function(e,t,n){e.exports={blue:"HW4_blue__3D12d",column:"HW4_column__757eb",testSpanError:"HW4_testSpanError__xp-68"}},,,function(e,t,n){},,function(e,t,n){e.exports={span:"SuperEditableSpan_span__3K_FF"}},,,,,,function(e,t,n){},,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(31),s=n.n(r),i=(n(38),n(26)),o=n.n(i),l=n(13),j=n(12),u=n.n(j),b=n(3),d=n(9),h=n.n(d),O=n(0);var x=function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:h.a.reviews,children:[Object(O.jsxs)("figure",{className:h.a.avatar,children:[Object(O.jsx)("img",{className:h.a.imgAvatar,src:e.avatar}),Object(O.jsx)("figcaption",{className:h.a.nameText,children:e.name})]}),Object(O.jsx)("div",{className:h.a.comment,children:Object(O.jsxs)("div",{className:h.a.commentBubble,children:[Object(O.jsx)("h1",{className:h.a.commentText,children:e.message}),Object(O.jsx)("h3",{className:h.a.author,children:e.name}),Object(O.jsx)("h3",{className:h.a.time,children:e.time})]})})]}),Object(O.jsxs)("div",{className:h.a.inputMessageContainer,children:[Object(O.jsx)("input",{type:"text",className:h.a.inputField}),Object(O.jsx)("button",{className:h.a.submitBtn,children:"send"})]})]})},m=1,_="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",f="some text",v="22:00";var g=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 1",Object(O.jsx)(x,{id:m,avatar:_,name:p,message:f,time:v})]})},N=n(2),k=n(11),C=n.n(k);var w=function(e){return Object(O.jsxs)("div",{className:C.a.affair,children:[Object(O.jsx)("div",{className:C.a.nameText,children:e.affair.name}),Object(O.jsx)("div",{className:C.a.priorityText,children:e.affair.priority}),Object(O.jsx)("button",{className:C.a.btnDelete,onClick:function(){e.deleteAffairCallback(e.affair.id)},children:"Delete"})]})};var y=function(e){var t=e.data.map((function(t){return Object(O.jsx)(w,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t.id)}));return Object(O.jsxs)("div",{children:[t,Object(O.jsx)("button",{className:C.a.clnAll,onClick:function(){e.setFilter("all")},children:"All"}),Object(O.jsx)("button",{className:C.a.clnHigh,onClick:function(){e.setFilter("high")},children:"High"}),Object(O.jsx)("button",{className:C.a.clnMiddle,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(O.jsx)("button",{className:C.a.clnLow,onClick:function(){e.setFilter("low")},children:"Low"})]})},S=[{id:1,name:"React",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:4,name:"work",priority:"high"},{id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(a.useState)(S),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)("all"),s=Object(N.a)(r,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 2",Object(O.jsx)(y,{data:l,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e))},filter:i}),Object(O.jsx)("hr",{})]})},T=n(21),I=n(15),B=n.n(I),M=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,c=e.error,r=e.totalUsers,s=e.onEnter,i=c?B.a.errorInput:B.a.notErrorInput;return Object(O.jsxs)("div",{className:B.a.main,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{value:t,onChange:n,className:i,onBlur:n,onKeyDown:s}),Object(O.jsx)("div",{className:B.a.error,children:c})]}),Object(O.jsx)("button",{className:B.a.addBtn,onClick:a,disabled:!t,children:"add"}),Object(O.jsx)("div",{className:B.a.totalUsers,children:r})]})},E=function(e){var t=e.users,n=e.addUserCallback,c=Object(a.useState)(""),r=Object(N.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(""),l=Object(N.a)(o,2),j=l[0],u=l[1],b=function(){n(s),alert("Hello ".concat(s," !")),i("")},d=t.length;return Object(O.jsx)(M,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&u("")):(s&&i(""),u("input your name"))},addUser:b,error:j,totalUsers:d,onEnter:function(e){"Enter"===e.key&&s&&b()}})},H=n(50);var F=function(){var e=Object(a.useState)([]),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 3",Object(O.jsx)(E,{users:n,addUserCallback:function(e){var t={_id:Object(H.a)(),name:e};c([].concat(Object(T.a)(n),[t]))}}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},U=n(6),P=n(5),W=n(18),D=n.n(W),J=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,c=e.onEnter,r=e.error,s=e.className,i=e.spanClassName,o=Object(P.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(D.a.error," ").concat(i||""),j="".concat(D.a.errorInput," ").concat(r?D.a.errorInput:D.a.superInput," ").concat(s);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",Object(U.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),c&&"Enter"===e.key&&c()},className:j},o)),r&&Object(O.jsx)("span",{className:l,children:r})]})},G=n(27),L=n.n(G),Q=n(22),K=n.n(Q),Z=function(e){var t=e.red,n=e.className,a=Object(P.a)(e,["red","className"]),c="".concat(K.a.button," ").concat(t?K.a.red:K.a.default," ").concat(n);return Object(O.jsx)("button",Object(U.a)({className:c},a))},q=n(23),z=n.n(q),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,c=(e.spanClassName,e.children),r=Object(P.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(z.a.checkbox," ").concat(a||"");return Object(O.jsxs)("label",{className:z.a.label,children:[Object(O.jsx)("input",Object(U.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},r)),c&&Object(O.jsx)("span",{className:z.a.spanClassName,children:c})]})};var X=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1],r=n?"":"error",s=function(){r?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),o=Object(N.a)(i,2),l=o[0],j=o[1];return Object(O.jsxs)("div",{children:["homeworks 4",Object(O.jsxs)("div",{className:L.a.column,children:[Object(O.jsx)(J,{value:n,onChangeText:c,onEnter:s,error:r}),Object(O.jsx)(J,{className:L.a.blue}),Object(O.jsx)(Z,{children:"default"}),Object(O.jsx)(Z,{red:!0,onClick:s,children:"delete "}),Object(O.jsx)(Z,{disabled:!0,children:"disabled"}),Object(O.jsx)(R,{checked:l,onChangeChecked:j,children:"some text "}),Object(O.jsx)(R,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]})]})},Y=n(32),V=n.n(Y),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,r=Object(P.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(N.a)(s,2),o=i[0],l=i[1],j=c||{},u=j.children,b=j.onDoubleClick,d=j.className,h=Object(P.a)(j,["children","onDoubleClick","className"]);"\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",d);return Object(O.jsx)(O.Fragment,{children:o?Object(O.jsx)(J,Object(U.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},r)):Object(O.jsx)("span",Object(U.a)(Object(U.a)({onDoubleClick:function(e){l(!0),b&&b(e)},className:V.a.span},h),{},{children:u||r.value}))})};function ee(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function te(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ne=function(){var e=Object(a.useState)(""),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 6",Object(O.jsx)("div",{children:Object(O.jsx)($,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(O.jsx)(Z,{onClick:function(){ee("editable-span-value",n)},children:"save"}),Object(O.jsx)(Z,{onClick:function(){c(te("editable-span-value",""))},children:"restore"}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ae=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(g,{}),Object(O.jsx)(A,{}),Object(O.jsx)(F,{}),Object(O.jsx)(X,{}),Object(O.jsx)(ne,{})]})};var ce=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"404"}),Object(O.jsx)("div",{children:"Page not found!"}),Object(O.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var re=function(){return Object(O.jsx)("div",{children:"JuniorPlus"})};var se=function(){return Object(O.jsx)("div",{children:"Junior"})},ie="/pre-junior",oe="/junior",le="/junior-plus";var je=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(O.jsx)(b.a,{to:ie})}}),Object(O.jsx)(b.b,{path:ie,render:function(){return Object(O.jsx)(ae,{})}}),Object(O.jsx)(b.b,{path:oe,render:function(){return Object(O.jsx)(se,{})}}),Object(O.jsx)(b.b,{path:le,render:function(){return Object(O.jsx)(re,{})}}),Object(O.jsx)(b.b,{render:function(){return Object(O.jsx)(ce,{})}})]})})};var ue=function(){return Object(O.jsxs)("div",{className:u.a.header,children:[Object(O.jsx)(l.b,{to:ie,className:u.a.link,activeClassName:u.a.active,children:"pre-junior"}),Object(O.jsx)(l.b,{to:oe,className:u.a.link,activeClassName:u.a.active,children:"junior"}),Object(O.jsx)(l.b,{to:le,className:u.a.link,activeClassName:u.a.active,children:"junior +"}),Object(O.jsxs)("div",{className:u.a.block,children:[" ",Object(O.jsx)("span",{className:u.a.sp})]})]})};var be=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)(ue,{}),Object(O.jsx)(je,{})]})})},de=n(30),he=n.n(de),Oe=function(e){var t=e.options,n=e.className,a=e.onChange,c=e.onChangeOption,r=Object(P.a)(e,["options","className","onChange","onChangeOption"]),s=t?t.map((function(e,t){return Object(O.jsx)("option",{className:he.a.option,value:e,children:e},e+"-"+t)})):[],i=he.a.select+(n?""+n:"");return Object(O.jsx)("select",Object(U.a)(Object(U.a)({className:i,onChange:function(e){a&&a(e),c&&c(e.currentTarget.value)}},r),{},{children:s}))},xe=function(e){e.type;var t=e.name,n=e.options,a=e.value,c=e.onChange,r=e.onChangeOption,s=(Object(P.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),r&&r(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"radio",name:e[n],checked:a===e,value:e,onChange:s}),e]},t+"-"+n)})):[];return Object(O.jsx)(O.Fragment,{children:i})},me=["x","y","z"];var _e=function(){var e=Object(a.useState)(me[1]),t=Object(N.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 7",Object(O.jsx)("div",{children:Object(O.jsx)(Oe,{options:me,value:n,onChangeOption:c})}),Object(O.jsx)("div",{children:Object(O.jsx)(xe,{name:"radio",options:me,value:n,onChangeOption:c})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})},pe=function(e,t){switch(t.type){case"sort":var n=Object(T.a)(e).sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));return"up"===t.payload?n:n.reverse();case"check":return e.filter((function(e){return e.age>=t.payload}));default:return e}},fe=n(19),ve=n.n(fe),ge=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var Ne=function(){var e=Object(a.useState)(ge),t=Object(N.a)(e,2),n=t[0],c=t[1],r=n.map((function(e){return Object(O.jsxs)("div",{className:ve.a.work,children:[Object(O.jsx)("span",{children:e.name}),Object(O.jsx)("span",{children:e.age})]},e._id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 8",r,Object(O.jsx)("div",{children:Object(O.jsx)(Z,{onClick:function(){return c(pe(ge,{type:"sort",payload:"up"}))},className:ve.a.up,children:"sort up"})}),Object(O.jsx)("div",{children:Object(O.jsx)(Z,{onClick:function(){return c(pe(ge,{type:"check",payload:18}))},className:ve.a.age,children:"check 18"})}),Object(O.jsx)("div",{children:Object(O.jsx)(Z,{onClick:function(){return c(pe(ge,{type:"sort",payload:"down"}))},className:ve.a.down,children:"sort down"})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ke=function(){var e=Object(a.useState)(0),t=Object(N.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(N.a)(r,2),i=s[0],o=s[1],l=Object(a.useState)(!1),j=Object(N.a)(l,2),u=j[0],b=j[1],d=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(O.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(O.jsx)("br",{});return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{onMouseEnter:function(){b(!0)},onMouseLeave:function(){b(!1)},children:h}),u?Object(O.jsx)("div",{children:x}):Object(O.jsx)("br",{}),Object(O.jsx)(Z,{onClick:function(){d();var e=+setInterval((function(){o(new Date)}),1e3);c(e)},children:"start"}),Object(O.jsx)(Z,{onClick:d,children:"stop"})]})};var Ce=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 9",Object(O.jsx)(ke,{}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var we=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("hr",{}),"homeworks 10",Object(O.jsx)("div",{children:Object(O.jsx)(Z,{onClick:function(){console.log("loading...")},children:"set loading..."})}),Object(O.jsx)("hr",{}),Object(O.jsx)("hr",{})]})};var ye=function(){return Object(O.jsxs)("div",{className:o.a.App,children:[Object(O.jsx)("div",{className:o.a.hwName,children:"homeworks: "}),Object(O.jsx)(be,{}),Object(O.jsx)(_e,{}),Object(O.jsx)(Ne,{}),Object(O.jsx)(Ce,{}),Object(O.jsx)(we,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.5911d2ef.chunk.js.map