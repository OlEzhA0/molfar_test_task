(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),l=n.n(c),s=n(1),o=n(3),i=n.n(o),u=n(6),m=n(2),E=n(12),v=function(){var e=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./api/events.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_POPUP":return!0;case"CLOSE_POPUP":return!1;default:return e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_STATUS":return t.status;default:return e}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_EVENTS":return t.events;default:return e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADED_STATUS":return t.status;default:return e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING_ERROR":return"Oops, something went wrong, please, try later";default:return e}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_POPUP_ID":return t.id;default:return e}},g=function(e){return{type:"LOADING_STATUS",status:e}},h=function(e){return{type:"CURRENT_POPUP_ID",id:e}},O=Object(m.c)({popupStatus:_,isLoading:f,events:d,isLoaded:p,errorMessage:N,currentPopupId:b}),I=Object(m.d)(O,Object(m.a)(E.a)),k=(n(26),n(13)),C=n(4),P=n.n(C),w=(n(27),n(28),n(29),function(e){return e.popupStatus}),y=function(e){return e.events},j=function(e){return e.isLoading},D=function(e){return e.isLoaded},L=function(e){return e.errorMessage},A=function(e){return e.currentPopupId},S=(n(30),function(e){var t=e.currentInfo;return r.a.createElement("div",{className:"Event__InfoWrapper"},r.a.createElement("img",{src:t.imageUrl,alt:"calendar",className:"Event__Icons"}),r.a.createElement("div",{className:"Event__CalendarInfo"},r.a.createElement("p",{className:"Event__Descr"},t.infoDate),r.a.createElement("p",{className:"Event__Descr"},t.moreInfo),r.a.createElement("a",{href:t.link,className:"Event__Link"},t.linkText)))}),T=(n(31),function(e){var t=e.about;return r.a.createElement("div",{className:"Event__About"},r.a.createElement("p",{className:"Event__AboutTitle"},"About"),r.a.createElement("p",{className:"Event__AboutSnippet"},t))}),B=function(){var e=Object(a.useState)(!1),t=Object(k.a)(e,2),n=t[0],c=t[1],l=Object(s.b)(),o=Object(s.c)(w),i=Object(s.c)(A),u=Object(s.c)(y),m=u.find((function(e){return e.id===i}))||u[0],E=function(){l(h(null)),l({type:"CLOSE_POPUP"}),c(!1)};return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:"CloseButton"},r.a.createElement("button",{className:"CloseButton__btn",onClick:function(){return E()}})),r.a.createElement("label",{className:"Event__BackMemorial"},r.a.createElement("span",{className:"Event__MainText"},r.a.createElement("img",{src:"images/icons/back.svg",alt:"arrow left",className:"Event__BackIcon"}),"Back to memorial"),r.a.createElement("button",{className:"Event__BackMemorial--btn",onClick:E}))),r.a.createElement("div",{className:P()({Event:!0,EventDetails:!0,"EventDetails--open":o})},r.a.createElement("label",{className:"Event__MoreInfoButton"},r.a.createElement("span",{className:"Event__MainDot"},"."),r.a.createElement("button",{className:"Event__MoreInfoButton--btn",onClick:function(){return c(!n)}})),r.a.createElement("div",{className:P()({Info__Container:!0,"Info__Container--open":n})},r.a.createElement("ul",{className:"Info__List"},r.a.createElement("li",{className:"Info__Item"},r.a.createElement("img",{src:"images/icons/mail.svg",alt:"mail",className:"Info__Icons"}),r.a.createElement("a",{href:"https://www.molfar.io/contacts",className:"Info__Link"},"Contact owner")),r.a.createElement("li",{className:"Info__Item"},r.a.createElement("img",{src:"images/icons/flag.svg",alt:"mail",className:"Info__Icons"}),r.a.createElement("a",{href:"https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=smoothie@molfar.io",className:"Info__Link"},"Report this event")))),r.a.createElement("div",{className:"Event__InfoContainer"},r.a.createElement("h2",{className:"Event__Title"},m.title),r.a.createElement("div",{className:"Event__PlaceAndDescr"},r.a.createElement("div",{className:"Event__Information"},r.a.createElement(S,{currentInfo:m.calendar}),r.a.createElement(S,{currentInfo:m.address})),r.a.createElement(T,{about:m.about})),r.a.createElement("div",{className:"Event__ButtonContainer"},r.a.createElement("button",{type:"button",className:"Event__Button",onClick:E},r.a.createElement("img",{src:"images/icons/checkMark.svg",alt:"check mark",className:"Event__CheckMark"}),"Attending")))))},U=(n(32),function(){return r.a.createElement("div",{className:"SpinnerContainer"},r.a.createElement("div",{className:"lds-roller"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),R=(n(33),n(34),function(e){var t=e.id,n=Object(s.b)();return r.a.createElement("div",{className:"ButtonForDetails"},r.a.createElement("button",{type:"button",onClick:function(){n({type:"OPEN_POPUP"}),n(h(t))},className:"ButtonForDetails__Button"},"Show details"))}),x=function(){var e=Object(s.c)(y);return r.a.createElement(r.a.Fragment,null,e.map((function(e){return r.a.createElement("div",{className:"EventCart",key:e.id},r.a.createElement("div",{className:"EventCart__Container"},r.a.createElement("p",{className:"EventCart__Title"},e.title),r.a.createElement(R,{id:e.id})))})))};var M=function(){var e=Object(s.c)(w),t=Object(s.c)(j),n=Object(s.c)(D),c=Object(s.c)(L),l=Object(s.b)();return Object(a.useEffect)((function(){l(function(){var e=Object(u.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(g(!0)),e.prev=1,e.next=4,v();case 4:n=e.sent,t({type:"LOAD_EVENTS",events:n}),t({type:"LOADED_STATUS",status:!0}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"LOADING_ERROR"});case 12:t(g(!1));case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[l]),r.a.createElement(r.a.Fragment,null,t&&r.a.createElement(U,null),!n&&c&&r.a.createElement("p",{className:"ErrorText"},c),n&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(B,null),r.a.createElement("div",{className:P()({Layout:!0,"Layout--shadow":e})})))};l.a.render(r.a.createElement(s.a,{store:I},r.a.createElement(M,null)),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.67888e78.chunk.js.map