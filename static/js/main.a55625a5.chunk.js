(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(89)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),s=a.n(r),l=(a(29),a(91)),o=a(93),i=a(92),u=(a(31),a(90)),m=(a(33),a(37),function(){return c.a.createElement("div",{className:"not-found-page"},"404 not found :(",c.a.createElement(u.a,{to:"/"},c.a.createElement("p",null,"Back to home")))}),p=(a(39),a(2)),d=a.n(p),f=a(4),E=a(5),h=(a(43),a(20)),v=a.n(h).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),b=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(f.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/users");case 2:t=e.sent,console.log(t),200===t.status&&r(t.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){s()},[]),c.a.createElement("div",{className:"users-list"},"Users List",a.map(function(e){return c.a.createElement(u.a,{to:"users/".concat(e.id),key:e.id},c.a.createElement("div",{className:"users-list__item"},c.a.createElement("span",null,e.id||"-"),c.a.createElement("span",null,e.name||"-")))}))},g=function(){return c.a.createElement("div",{className:"home-page"},"HomePage",c.a.createElement(b,null))},y=(a(64),a(21)),j=a.n(y),w=function(e){var t=e.history;return c.a.createElement("div",{className:"login-page"},"LoginPage",c.a.createElement("div",{className:"login-page__form"},c.a.createElement(j.a,{appId:"323230384960442",autoLoad:!0,fields:"name,email,picture",onClick:function(){return c.a.createElement("button",null,"Login")},callback:function(e){localStorage.isLogin="true",console.log(e),t.push("/home")}}),!1))},O=(a(66),a(68),function(e){var t=e.id,a=Object(n.useState)({}),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/users/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},{}),c.a.createElement("div",{className:"users-detail"},c.a.createElement("div",{className:"users-detail__item"},c.a.createElement("p",null,"Id: ",s.id),c.a.createElement("p",null,"Name: ",s.name),c.a.createElement("p",null,"Username: ",s.username),c.a.createElement("p",null,"Email: ",s.email),s.address&&c.a.createElement("div",{className:"users-detail__address"},"Address:",c.a.createElement("p",null,"Street: ",s.address.street),c.a.createElement("p",null,"Suite: ",s.address.suite),c.a.createElement("p",null,"City: ",s.address.city),c.a.createElement("p",null,"Zip: ",s.address.zipcode)),c.a.createElement("p",null,"Phone: ",s.phone),c.a.createElement("p",null,"Website: ",s.website),s.company&&c.a.createElement("div",{className:"users-detail__company"},"Company:",c.a.createElement("p",null,"Name: ",s.company.name),c.a.createElement("p",null,"Catch Phrase: ",s.company.catchPhrase),c.a.createElement("p",null,"Bs: ",s.company.bs))))}),N=(a(70),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/posts?userId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"posts-list"},"Posts",s.map(function(e){return c.a.createElement(u.a,{to:"/posts/".concat(e.id),key:e.id},c.a.createElement("div",{className:"posts-list__item"},c.a.createElement("span",null,e.id||"-"),c.a.createElement("span",null,e.title||"-")))}))}),k=(a(72),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/albums?userId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"albums"},"Albums",s.map(function(e){return c.a.createElement(u.a,{to:"/photos-list/".concat(e.id),key:e.id},c.a.createElement("div",{className:"albums__item"},c.a.createElement("span",null,e.id||"-"),c.a.createElement("span",null,e.title||"-")))}))}),_=function(e){var t=e.match.params.id;return c.a.createElement("div",{className:"user-page"},c.a.createElement(O,{id:t}),c.a.createElement(N,{id:t}),c.a.createElement(k,{id:t}))},x=(a(74),a(76),a(78),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/comments?postId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"comments-list"},s.map(function(e){return c.a.createElement("div",{className:"comments-list__item",key:e.id},c.a.createElement("p",null,c.a.createElement("span",null,e.name||"-")),c.a.createElement("p",null,e.email||"-"),c.a.createElement("p",null,e.body||"-"))}))}),P=function(e){var t=e.id,a=Object(n.useState)({}),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/posts/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},{}),c.a.createElement("div",{className:"posts-detail"},c.a.createElement("div",{className:"posts-detail__item"},c.a.createElement("p",null,"Title: ",s.title),c.a.createElement("p",null,"Body: ",s.body)),c.a.createElement("div",{className:"posts-detail__comments"},"Comments",c.a.createElement(x,{id:t})))},S=function(e){var t=e.match;return c.a.createElement("div",{className:"posts-detail-page"},c.a.createElement(P,{id:t.params.id}))},I=(a(80),a(82),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/albums/".concat(t,"/photos?_limit=10"));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},[]),c.a.createElement("div",{className:"photos"},"Photos of album ",t," Detail",s.map(function(e){return c.a.createElement(u.a,{to:"/photos-detail/".concat(e.id),key:e.id},c.a.createElement("div",{className:"photos__item"},c.a.createElement("img",{src:e.thumbnailUrl,alt:e.title}),c.a.createElement("p",null,"Album ID: ",e.albumId),c.a.createElement("p",null,"ID: ",e.id),c.a.createElement("p",null,"Title: ",e.title),c.a.createElement("p",null,"url: ",e.url),c.a.createElement("p",null,"Thumbnail Url: ",e.thumbnailUrl)))}))}),D=function(e){var t=e.match;return c.a.createElement("div",{className:"photos-page"},"PhotosPage",c.a.createElement(I,{id:t.params.id}))},U=(a(84),a(86),function(e){var t=e.id,a=Object(n.useState)({}),r=Object(E.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/photos/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},{}),c.a.createElement("div",{className:"photos-detail"},"PhotosDetail ",t," Detail",c.a.createElement("div",{className:"photos-detail__item"},c.a.createElement("img",{src:s.thumbnailUrl,alt:s.title}),c.a.createElement("p",null,"ID: ",s.id),c.a.createElement("p",null,"Title: ",s.title)))}),L=function(e){var t=e.match;return c.a.createElement("div",{className:"photos-detail-page"},"PhotosDetailPages",c.a.createElement(U,{id:t.params.id}))},B=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"app"},c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(i.a,{key:"1",path:"/",component:g,exact:!0}),c.a.createElement(i.a,{key:"2",path:"/login",component:w,exact:!0}),c.a.createElement(i.a,{key:"3",path:"/users/:id",component:_,exact:!0}),c.a.createElement(i.a,{key:"4",path:"/posts/:id",component:S,exact:!0}),c.a.createElement(i.a,{key:"5",path:"/photos-list/:id",component:D,exact:!0}),c.a.createElement(i.a,{key:"5",path:"/photos-detail/:id",component:L,exact:!0}),c.a.createElement(i.a,{key:"0",component:m})),!1))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.a55625a5.chunk.js.map