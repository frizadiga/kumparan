(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(89)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(19),s=a.n(r),l=(a(29),a(91)),o=a(93),i=a(92),u=(a(31),a(90)),m=(a(33),[{path:"/",text:"Home"},{path:"/menu",text:"Menu"}]),p=function(){return c.a.createElement("div",{className:"bottom-bar"},!!m&&m.map(function(e,t){return c.a.createElement(u.a,{to:e.path,key:t},c.a.createElement("div",{className:"bottom-bar__item"},e.text))}))},d=(a(37),function(){return c.a.createElement("div",{className:"not-found-page"},"404 not found :(",c.a.createElement(u.a,{to:"/"},c.a.createElement("p",null,"Back to home")))}),f=(a(39),a(2)),E=a.n(f),h=a(4),v=a(5),b=(a(43),a(20)),g=a.n(b).a.create({baseURL:"https://jsonplaceholder.typicode.com/"}),y=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1],s=function(){var e=Object(h.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/users");case 2:t=e.sent,console.log(t),200===t.status&&r(t.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){s()},[]),c.a.createElement("div",{className:"users-list"},"Users List",a.map(function(e){return c.a.createElement(u.a,{to:"users/".concat(e.id),key:e.id},c.a.createElement("div",{className:"users-list__item"},c.a.createElement("span",null,e.name||"-")))}))},N=function(){return c.a.createElement("div",{className:"home-page"},"HomePage",c.a.createElement(y,null))},_=(a(64),a(21)),j=a.n(_),w=function(e){var t=e.history;return c.a.createElement("div",{className:"login-page"},"LoginPage",c.a.createElement("div",{className:"login-page__form"},c.a.createElement(j.a,{appId:"323230384960442",autoLoad:!0,fields:"name,email,picture",onClick:function(){return c.a.createElement("button",null,"Login")},callback:function(e){localStorage.isLogin="true",console.log(e),t.push("/home")}}),!1))},O=(a(66),a(68),function(e){var t=e.id,a=Object(n.useState)({}),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/users/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},{}),c.a.createElement("div",{className:"users-detail"},c.a.createElement("div",{className:"users-detail__item"},c.a.createElement("p",null,"Name: ",s.name),c.a.createElement("p",null,"Username: ",s.username),c.a.createElement("p",null,"Email: ",s.email),s.address&&c.a.createElement("div",{className:"users-detail__address"},"Address:",c.a.createElement("p",null,"Street: ",s.address.street),c.a.createElement("p",null,"Suite: ",s.address.suite),c.a.createElement("p",null,"City: ",s.address.city),c.a.createElement("p",null,"Zip: ",s.address.zipcode)),c.a.createElement("p",null,"Phone: ",s.phone),c.a.createElement("p",null,"Website: ",s.website),s.company&&c.a.createElement("div",{className:"users-detail__company"},"Company:",c.a.createElement("p",null,"Name: ",s.company.name),c.a.createElement("p",null,"Catch Phrase: ",s.company.catchPhrase),c.a.createElement("p",null,"Bs: ",s.company.bs))))}),k=(a(70),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/posts?userId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"posts-list"},"Posts",s.map(function(e){return c.a.createElement(u.a,{to:"/posts/".concat(e.id),key:e.id},c.a.createElement("div",{className:"posts-list__item"},c.a.createElement("span",{className:"posts-list__title"},e.title||"-")))}))}),x=(a(72),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/albums?userId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"albums-list"},"Albums",s.map(function(e){return c.a.createElement(u.a,{to:"/photos-list/".concat(e.id),key:e.id},c.a.createElement("div",{className:"albums-list__item"},c.a.createElement("span",null,e.title||"-")))}))}),S=function(e){var t=e.match.params.id;return c.a.createElement("div",{className:"user-page"},c.a.createElement(O,{id:t}),c.a.createElement(k,{id:t}),c.a.createElement(x,{id:t}))},P=(a(74),a(76),a(78),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/comments?postId=".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"comments-list"},s.map(function(e){return c.a.createElement("div",{className:"comments-list__item",key:e.id},c.a.createElement("p",{className:"comments-list__name"},e.name||"-"),c.a.createElement("p",null,e.email||"-"),c.a.createElement("p",{className:"comments-list__body"},'"',e.body||"-",'"'))}))}),I=function(e){var t=e.id,a=Object(n.useState)({}),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/posts/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},{}),c.a.createElement("div",{className:"posts-detail"},c.a.createElement("div",{className:"posts-detail__item"},c.a.createElement("p",{className:"posts-detail__title"},s.title),c.a.createElement("p",{className:"posts-detail__body"},s.body,".")),c.a.createElement("div",{className:"posts-detail__comments"},"Comments",c.a.createElement(P,{id:t})))},U=function(e){var t=e.match;return c.a.createElement("div",{className:"posts-detail-page"},c.a.createElement(I,{id:t.params.id}))},D=(a(80),a(82),function(e){var t=e.id,a=Object(n.useState)([]),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/albums/".concat(t,"/photos?_limit=10"));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},[]),c.a.createElement("div",{className:"photos"},"Photos of album ",t," Detail",s.map(function(e){return c.a.createElement(u.a,{to:"/photos-detail/".concat(e.id),key:e.id},c.a.createElement("div",{className:"photos__item"},c.a.createElement("img",{src:e.thumbnailUrl,alt:e.title}),c.a.createElement("p",null,"Album ID: ",e.albumId),c.a.createElement("p",null,"ID: ",e.id),c.a.createElement("p",null,"Title: ",e.title),c.a.createElement("p",null,"url: ",e.url),c.a.createElement("p",null,"Thumbnail Url: ",e.thumbnailUrl)))}))}),L=function(e){var t=e.match;return c.a.createElement("div",{className:"photos-page"},"PhotosPage",c.a.createElement(D,{id:t.params.id}))},C=(a(84),a(86),function(e){var t=e.id,a=Object(n.useState)({}),r=Object(v.a)(a,2),s=r[0],l=r[1],o=function(){var e=Object(h.a)(E.a.mark(function e(){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g("/photos/".concat(t));case 2:a=e.sent,console.log(a),200===a.status&&l(a.data);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){console.log("now",e),o()},{}),c.a.createElement("div",{className:"photos-detail"},"PhotosDetail ",t," Detail",c.a.createElement("div",{className:"photos-detail__item"},c.a.createElement("img",{src:s.thumbnailUrl,alt:s.title}),c.a.createElement("p",null,"ID: ",s.id),c.a.createElement("p",null,"Title: ",s.title)))}),B=function(e){var t=e.match;return c.a.createElement("div",{className:"photos-detail-page"},c.a.createElement(C,{id:t.params.id}))},A=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("main",{className:"app"},c.a.createElement(l.a,null,c.a.createElement("div",null,c.a.createElement(o.a,null,c.a.createElement(i.a,{key:"1",path:"/",component:N,exact:!0}),c.a.createElement(i.a,{key:"2",path:"/login",component:w,exact:!0}),c.a.createElement(i.a,{key:"3",path:"/users/:id",component:S,exact:!0}),c.a.createElement(i.a,{key:"4",path:"/posts/:id",component:U,exact:!0}),c.a.createElement(i.a,{key:"5",path:"/photos-list/:id",component:L,exact:!0}),c.a.createElement(i.a,{key:"5",path:"/photos-detail/:id",component:B,exact:!0}),c.a.createElement(i.a,{key:"0",component:d})),c.a.createElement(p,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.b2ed57e7.chunk.js.map