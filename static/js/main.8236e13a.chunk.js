(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{26:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),a=n(27),i=n.n(a),s=n(18),o=(n(35),n(37),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/NLW",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APP_ID});s.a.initializeApp(o);var u=s.a.auth(),d=s.a.database(),l=n(14),j=n(6),b=n(5),h=n.n(b),O=n(9),p=n(8),m=n.p+"static/media/ilu.7612c0d2.svg",f=n.p+"static/media/Vector.1c65da7c.svg",x=n.p+"static/media/google-icon.df15d8e5.svg",v=n(29),g=n(30),S=(n(42),n(1)),_=["isOutLined"];function C(e){var t=e.isOutLined,n=void 0!==t&&t,r=Object(g.a)(e,_);return Object(S.jsx)("button",Object(v.a)({className:"button ".concat(n?"outlined":"")},r))}var E=Object(r.createContext)({});function T(e){var t=Object(r.useState)(),n=Object(p.a)(t,2),c=n[0],a=n[1];function i(){return(i=Object(O.a)(h.a.mark((function e(){var t,n,r,c,i,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new s.a.auth.GoogleAuthProvider,e.next=3,u.signInWithPopup(t);case 3:if(n=e.sent,console.log(n),!n.user){e.next=10;break}if(r=n.user,c=r.displayName,i=r.photoURL,o=r.uid,c&&i){e.next=9;break}throw new Error("Missing information from Google Account.");case 9:a({id:o,name:c,avatar:i});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=u.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,r=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");a({id:r,name:t,avatar:n})}}));return function(){e()}}),[]),Object(S.jsx)(E.Provider,{value:{user:c,signInWithGoogle:function(){return i.apply(this,arguments)}},children:e.children})}function k(){return Object(r.useContext)(E)}var A=Object(r.createContext)({});function w(e){var t=Object(r.useState)("dark"),n=Object(p.a)(t,2),c=n[0],a=n[1];return Object(S.jsx)(A.Provider,{value:{theme:c,toggleTheme:function(){a("dark"===c?"light":"dark")}},children:e.children})}function N(){return Object(r.useContext)(A)}function P(){var e=Object(j.f)(),t=k(),n=t.user,c=t.signInWithGoogle,a=Object(r.useState)(""),i=Object(p.a)(a,2),s=i[0],o=i[1],u=N(),l=u.theme,b=u.toggleTheme;function v(){return(v=Object(O.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,c();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return(g=Object(O.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,d.ref("rooms/".concat(s)).get();case 5:if((r=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!r.val().endedAt){t.next=12;break}return alert("Room already closed."),t.abrupt("return");case 12:e.push("/rooms/".concat(s));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log(b),Object(S.jsxs)("div",{id:"page-auth",className:l,children:[Object(S.jsxs)("aside",{children:[Object(S.jsx)("img",{src:m,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(S.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(S.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(S.jsx)("main",{children:Object(S.jsxs)("div",{className:"main-content",children:[Object(S.jsx)("img",{src:f,alt:"Letmeask"}),Object(S.jsxs)("button",{onClick:function(){return v.apply(this,arguments)},className:"create-room",children:[Object(S.jsx)("img",{src:x,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(S.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(S.jsxs)("form",{onSubmit:function(e){return g.apply(this,arguments)},children:[Object(S.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return o(e.target.value)},value:s}),Object(S.jsx)(C,{type:"submit",children:"Entrar na sala"}),Object(S.jsxs)("label",{className:"switch",children:[Object(S.jsx)("input",{onClick:b,type:"checkbox"}),Object(S.jsx)("span",{className:"slider round"}),l]})]})]})})]})}function R(){var e=k().user,t=Object(j.f)(),n=Object(r.useState)(""),c=Object(p.a)(n,2),a=c[0],i=c[1],s=N().theme;function o(){return(o=Object(O.a)(h.a.mark((function n(r){var c,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==a.trim()){n.next=3;break}return n.abrupt("return");case 3:return c=d.ref("rooms"),n.next=6,c.push({title:a,authorId:null===e||void 0===e?void 0:e.id});case 6:i=n.sent,t.push("/rooms/".concat(i.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(S.jsxs)("div",{id:"page-auth",className:s,children:[Object(S.jsxs)("aside",{children:[Object(S.jsx)("img",{src:m,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(S.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(S.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(S.jsx)("main",{children:Object(S.jsxs)("div",{className:"main-content",children:[Object(S.jsx)("img",{src:f,alt:"Letmeask"}),Object(S.jsx)("h2",{children:"Criar uma nova sala"}),Object(S.jsxs)("form",{onSubmit:function(e){return o.apply(this,arguments)},children:[Object(S.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return i(e.target.value)},value:a}),Object(S.jsx)(C,{type:"submit",children:"Criar sala"})]}),Object(S.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(S.jsx)(l.b,{to:"/",children:"clique aqui"})]})]})})]})}n(26);function D(e){var t=e.content,n=e.author,r=e.children,c=e.isAnswered,a=void 0!==c&&c,i=e.isHighlighted,s=void 0!==i&&i;return Object(S.jsxs)("div",{className:"question ".concat(a?"answered":""," ").concat(s&&!a?"highlighted":""),children:[Object(S.jsx)("p",{children:t}),Object(S.jsxs)("footer",{children:[Object(S.jsxs)("div",{className:"user-info",children:[Object(S.jsx)("img",{src:n.avatar,alt:n.name}),Object(S.jsx)("span",{children:n.name})]}),Object(S.jsx)("div",{children:r})]})]})}var y=n.p+"static/media/copy.2f36f99e.svg";n(48);function L(e){return Object(S.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:y,alt:"Copy room code"})}),Object(S.jsxs)("span",{children:["Sala #",e.code]})]})}function H(e){var t=k().user,n=Object(r.useState)([]),c=Object(p.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(""),o=Object(p.a)(s,2),u=o[0],l=o[1];return Object(r.useEffect)((function(){var n=d.ref("rooms/".concat(e));return n.on("value",(function(e){var n,r=e.val(),c=null!==(n=r.questions)&&void 0!==n?n:{},a=Object.entries(c).map((function(e){var n,r,c,a=Object(p.a)(e,2),i=a[0],s=a[1];return{id:i,content:s.content,author:s.author,isHighlighted:s.isHighlighted,isAnswered:s.isAnswered,likeCount:Object.values(null!==(n=s.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(c=s.likes)&&void 0!==c?c:{}).find((function(e){var n=Object(p.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]}}));l(r.title),i(a)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:a,title:u}}function W(){var e=k().user,t=Object(r.useState)(""),n=Object(p.a)(t,2),c=n[0],a=n[1],i=Object(j.g)().id,s=H(i),o=s.title,u=s.questions;function l(){return(l=Object(O.a)(h.a.mark((function t(n){var r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==c.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return r={content:c,author:{name:e.name,avatar:e.avatar},isHighlighted:!1,isAnswered:!1},t.next=8,d.ref("rooms/".concat(i,"/questions")).push(r);case 8:a("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(O.a)(h.a.mark((function t(n,r){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,d.ref("rooms/".concat(i,"/questions/").concat(n,"/likes/").concat(r)).remove();case 3:t.next=7;break;case 5:return t.next=7,d.ref("rooms/".concat(i,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(S.jsxs)("div",{id:"page-room",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("img",{src:f,alt:"Letmeask"}),Object(S.jsx)(L,{code:i})]})}),Object(S.jsxs)("main",{children:[Object(S.jsxs)("div",{className:"room-title",children:[Object(S.jsxs)("h1",{children:["Sala ",o]}),u.length>0&&Object(S.jsxs)("span",{children:[u.length," pergunta(s)"]})]}),Object(S.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(S.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar?",onChange:function(e){return a(e.target.value)},value:c}),Object(S.jsxs)("div",{className:"form-footer",children:[e?Object(S.jsxs)("div",{className:"user-info",children:[Object(S.jsx)("img",{src:e.avatar,alt:e.name}),Object(S.jsx)("span",{children:e.name})]}):Object(S.jsxs)("span",{children:["Para enviar uma pergunta, ",Object(S.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(S.jsx)(C,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),Object(S.jsx)("div",{className:"question-list",children:u.map((function(e){return Object(S.jsx)(D,{author:e.author,content:e.content,isHighlighted:e.isHighlighted,isAnswered:e.isAnswered,children:!e.isAnswered&&Object(S.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return b.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(S.jsx)("span",{children:e.likeCount}),Object(S.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(S.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}n(49);var I=n.p+"static/media/NotFound.b6cb33ac.svg";function K(){return Object(S.jsxs)("div",{className:"not-found",children:[Object(S.jsx)("img",{src:I,alt:"not found"}),Object(S.jsx)("h1",{children:"Pagina n\xe3o encontrada, sentimos muito! :("})]})}var U=n.p+"static/media/delete.22ba6e00.svg",q=n.p+"static/media/check.5dfa6ed6.svg",F=n.p+"static/media/answer.4502a8d5.svg";function B(){var e=Object(j.f)(),t=Object(j.g)().id,n=H(t),r=n.title,c=n.questions;function a(){return(a=Object(O.a)(h.a.mark((function n(){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.ref("rooms/".concat(t)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function i(){return(i=Object(O.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que voc\xea deseja excluir esta pergunta?")){e.next=3;break}return e.next=3,d.ref("rooms/".concat(t,"/questions/").concat(n)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function s(){return(s=Object(O.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.ref("rooms/".concat(t,"/questions/").concat(n)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function o(){return(o=Object(O.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.ref("rooms/".concat(t,"/questions/").concat(n)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(S.jsxs)("div",{id:"page-room",children:[Object(S.jsx)("header",{children:Object(S.jsxs)("div",{className:"content",children:[Object(S.jsx)("img",{src:f,alt:"Letmeask"}),Object(S.jsxs)("div",{className:"flex",children:[Object(S.jsx)(L,{code:t}),Object(S.jsx)(C,{isOutLined:!0,onClick:function(){return a.apply(this,arguments)},children:"Encerrar Sala"})]})]})}),Object(S.jsxs)("main",{children:[Object(S.jsxs)("div",{className:"room-title",children:[Object(S.jsxs)("h1",{children:["Sala ",r]}),c.length>0&&Object(S.jsxs)("span",{children:[c.length," pergunta(s)"]})]}),Object(S.jsx)("div",{className:"question-list",children:c.map((function(e){return Object(S.jsxs)(D,{author:e.author,content:e.content,isHighlighted:e.isHighlighted,isAnswered:e.isAnswered,children:[Object(S.jsx)("button",{type:"button",onClick:function(){return function(e){return s.apply(this,arguments)}(e.id)},children:Object(S.jsx)("img",{src:q,alt:"Mensagem lida"})}),Object(S.jsx)("button",{type:"button",onClick:function(){return function(e){return o.apply(this,arguments)}(e.id)},children:Object(S.jsx)("img",{src:F,alt:"Dar destaque"})}),Object(S.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(S.jsx)("img",{src:U,alt:"Remover pergunta"})})]},e.id)}))})]})]})}n(50),n(51),n(52),n(53),n(54),n(55);var V=function(){return Object(S.jsx)(l.a,{children:Object(S.jsx)(w,{children:Object(S.jsx)(T,{children:Object(S.jsxs)(j.c,{children:[Object(S.jsx)(j.a,{path:"/",exact:!0,component:P}),Object(S.jsx)(j.a,{path:"/rooms/new",exact:!0,component:R}),Object(S.jsx)(j.a,{path:"/rooms/:id",component:W}),Object(S.jsx)(j.a,{path:"/admin/rooms/:id",component:B}),Object(S.jsx)(j.a,{component:K})]})})})})};n(56);i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(V,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.8236e13a.chunk.js.map