(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{26:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(27),s=n.n(c),i=n(18);n(35),n(37);i.a.initializeApp({apiKey:"AIzaSyAx2tU7EtDGaiTioB2JYiYExXleTd6XjLg",authDomain:"let-me-ask-5f558.firebaseapp.com",databaseURL:"https://let-me-ask-5f558-default-rtdb.firebaseio.com",projectId:"let-me-ask-5f558",storageBucket:"let-me-ask-5f558.appspot.com",messagingSenderId:"770879551260",appId:"1:770879551260:web:0cf04a1a4ef62ea1732cd9"});var o=i.a.auth(),u=i.a.database(),l=n(14),d=n(6),j=n(5),b=n.n(j),h=n(9),p=n(8),m=n.p+"static/media/ilu.7612c0d2.svg",f=n.p+"static/media/Vector.1c65da7c.svg",x=n.p+"static/media/google-icon.df15d8e5.svg",O=n(29),v=n(30),g=(n(42),n(1)),k=["isOutLined"];function w(e){var t=e.isOutLined,n=void 0!==t&&t,a=Object(v.a)(e,k);return Object(g.jsx)("button",Object(O.a)({className:"button ".concat(n?"outlined":"")},a))}var y=Object(a.createContext)({});function C(e){var t=Object(a.useState)(),n=Object(p.a)(t,2),r=n[0],c=n[1];function s(){return(s=Object(h.a)(b.a.mark((function e(){var t,n,a,r,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new i.a.auth.GoogleAuthProvider,e.next=3,o.signInWithPopup(t);case 3:if(n=e.sent,console.log(n),!n.user){e.next=10;break}if(a=n.user,r=a.displayName,s=a.photoURL,u=a.uid,r&&s){e.next=9;break}throw new Error("Missing information from Google Account.");case 9:c({id:u,name:r,avatar:s});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){var e=o.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,a=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");c({id:a,name:t,avatar:n})}}));return function(){e()}}),[]),Object(g.jsx)(y.Provider,{value:{user:r,signInWithGoogle:function(){return s.apply(this,arguments)}},children:e.children})}function N(){return Object(a.useContext)(y)}var A=Object(a.createContext)({});function q(e){var t=Object(a.useState)("dark"),n=Object(p.a)(t,2),r=n[0],c=n[1];return Object(g.jsx)(A.Provider,{value:{theme:r,toggleTheme:function(){c("dark"===r?"light":"dark")}},children:e.children})}function S(){return Object(a.useContext)(A)}function I(){var e=Object(d.f)(),t=N(),n=t.user,r=t.signInWithGoogle,c=Object(a.useState)(""),s=Object(p.a)(c,2),i=s[0],o=s[1],l=S(),j=l.theme,O=l.toggleTheme;function v(){return(v=Object(h.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,r();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(){return(k=Object(h.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,u.ref("rooms/".concat(i)).get();case 5:if((a=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!a.val().endedAt){t.next=12;break}return alert("Room already closed."),t.abrupt("return");case 12:e.push("/rooms/".concat(i));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-auth",className:j,children:[Object(g.jsxs)("aside",{children:[Object(g.jsx)("img",{src:m,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(g.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(g.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"main-content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsxs)("button",{onClick:function(){return v.apply(this,arguments)},className:"create-room",children:[Object(g.jsx)("img",{src:x,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(g.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(g.jsxs)("form",{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(g.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return o(e.target.value)},value:i}),Object(g.jsx)(w,{type:"submit",children:"Entrar na sala"}),Object(g.jsxs)("label",{className:"switch",children:[Object(g.jsx)("input",{onClick:O,type:"checkbox"}),Object(g.jsx)("span",{className:"slider round"}),j]})]})]})})]})}function L(){var e=N().user,t=Object(d.f)(),n=Object(a.useState)(""),r=Object(p.a)(n,2),c=r[0],s=r[1],i=S().theme;function o(){return(o=Object(h.a)(b.a.mark((function n(a){var r,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),""!==c.trim()){n.next=3;break}return n.abrupt("return");case 3:return r=u.ref("rooms"),n.next=6,r.push({title:c,authorId:null===e||void 0===e?void 0:e.id});case 6:s=n.sent,t.push("/rooms/".concat(s.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-auth",className:i,children:[Object(g.jsxs)("aside",{children:[Object(g.jsx)("img",{src:m,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(g.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(g.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"main-content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsx)("h2",{children:"Criar uma nova sala"}),Object(g.jsxs)("form",{onSubmit:function(e){return o.apply(this,arguments)},children:[Object(g.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:c}),Object(g.jsx)(w,{type:"submit",children:"Criar sala"})]}),Object(g.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(g.jsx)(l.b,{to:"/",children:"clique aqui"})]})]})})]})}n(26);function H(e){var t=e.content,n=e.author,a=e.children,r=e.isAnswered,c=void 0!==r&&r,s=e.isHighlighted,i=void 0!==s&&s;return Object(g.jsxs)("div",{className:"question ".concat(c?"answered":""," ").concat(i&&!c?"highlighted":""),children:[Object(g.jsx)("p",{children:t}),Object(g.jsxs)("footer",{children:[Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("img",{src:n.avatar,alt:n.name}),Object(g.jsx)("span",{children:n.name})]}),Object(g.jsx)("div",{children:a})]})]})}var E=n.p+"static/media/copy.2f36f99e.svg";n(48);function D(e){return Object(g.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:E,alt:"Copy room code"})}),Object(g.jsxs)("span",{children:["Sala #",e.code]})]})}function G(e){var t=N().user,n=Object(a.useState)([]),r=Object(p.a)(n,2),c=r[0],s=r[1],i=Object(a.useState)(""),o=Object(p.a)(i,2),l=o[0],d=o[1];return Object(a.useEffect)((function(){var n=u.ref("rooms/".concat(e));return n.on("value",(function(e){var n,a=e.val(),r=null!==(n=a.questions)&&void 0!==n?n:{},c=Object.entries(r).map((function(e){var n,a,r,c=Object(p.a)(e,2),s=c[0],i=c[1];return{id:s,content:i.content,author:i.author,isHighlighted:i.isHighlighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(a=Object.entries(null!==(r=i.likes)&&void 0!==r?r:{}).find((function(e){var n=Object(p.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===a?void 0:a[0]}}));d(a.title),s(c)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:c,title:l}}function T(){var e=N().user,t=Object(a.useState)(""),n=Object(p.a)(t,2),r=n[0],c=n[1],s=Object(d.g)().id,i=G(s),o=i.title,l=i.questions;function j(){return(j=Object(h.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==r.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return a={content:r,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,u.ref("rooms/".concat(s,"/questions")).push(a);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return(m=Object(h.a)(b.a.mark((function t(n,a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}return t.next=3,u.ref("rooms/".concat(s,"/questions/").concat(n,"/likes/").concat(a)).remove();case 3:t.next=7;break;case 5:return t.next=7,u.ref("rooms/".concat(s,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-room",children:[Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsx)(D,{code:s})]})}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"room-title",children:[Object(g.jsxs)("h1",{children:["Sala ",o]}),l.length>0&&Object(g.jsxs)("span",{children:[l.length," pergunta(s)"]})]}),Object(g.jsxs)("form",{onSubmit:function(e){return j.apply(this,arguments)},children:[Object(g.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return c(e.target.value)},value:r}),Object(g.jsxs)("div",{className:"form-footer",children:[e?Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("img",{src:e.avatar,alt:e.name}),Object(g.jsx)("span",{children:e.name})]}):Object(g.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(g.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(g.jsx)(w,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),Object(g.jsx)("div",{className:"question-list",children:l.map((function(e){return Object(g.jsx)(H,{author:e.author,content:e.content,isHighlighted:e.isHighlighted,isAnswered:e.isAnswered,children:!e.isAnswered&&Object(g.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return m.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(g.jsx)("span",{children:e.likeCount}),Object(g.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}n(49);var M=n.p+"static/media/NotFound.b6cb33ac.svg";function P(){return Object(g.jsxs)("div",{className:"not-found",children:[Object(g.jsx)("img",{src:M,alt:"not found"}),Object(g.jsx)("h1",{children:"Pagina n\xe3o encontrada, sentimos muito! :("})]})}var R=n.p+"static/media/delete.22ba6e00.svg",z=n.p+"static/media/check.5dfa6ed6.svg",B=n.p+"static/media/answer.4502a8d5.svg";function U(){var e=Object(d.f)(),t=Object(d.g)().id,n=G(t),a=n.title,r=n.questions;function c(){return(c=Object(h.a)(b.a.mark((function n(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return(s=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que voc\xea deseja excluir esta pergunta?")){e.next=3;break}return e.next=3,u.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(h.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-room",children:[Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)(D,{code:t}),Object(g.jsx)(w,{isOutLined:!0,onClick:function(){return c.apply(this,arguments)},children:"Encerrar Sala"})]})]})}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"room-title",children:[Object(g.jsxs)("h1",{children:["Sala ",a]}),r.length>0&&Object(g.jsxs)("span",{children:[r.length," pergunta(s)"]})]}),Object(g.jsx)("div",{className:"question-list",children:r.map((function(e){return Object(g.jsxs)(H,{author:e.author,content:e.content,isHighlighted:e.isHighlighted,isAnswered:e.isAnswered,children:[Object(g.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(g.jsx)("img",{src:z,alt:"Mensagem lida"})}),Object(g.jsx)("button",{type:"button",onClick:function(){return function(e){return o.apply(this,arguments)}(e.id)},children:Object(g.jsx)("img",{src:B,alt:"Dar destaque"})}),Object(g.jsx)("button",{type:"button",onClick:function(){return function(e){return s.apply(this,arguments)}(e.id)},children:Object(g.jsx)("img",{src:R,alt:"Remover pergunta"})})]},e.id)}))})]})]})}n(50),n(51),n(52),n(53),n(54),n(55);var V=function(){return Object(g.jsx)(l.a,{children:Object(g.jsx)(q,{children:Object(g.jsx)(C,{children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{path:"/",exact:!0,component:I}),Object(g.jsx)(d.a,{path:"/rooms/new",exact:!0,component:L}),Object(g.jsx)(d.a,{path:"/rooms/:id",component:T}),Object(g.jsx)(d.a,{path:"/admin/rooms/:id",component:U}),Object(g.jsx)(d.a,{component:P})]})})})})};n(56);s.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(V,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.280ce0ce.chunk.js.map