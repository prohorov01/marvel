(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[5],{41:function(t,e,n){"use strict";var r=n.p+"static/media/error.42292aa1.gif",c=n(2);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:r,alt:"Error"})}},43:function(t,e,n){"use strict";var r=n(4),c=n.n(r),a=n(7),s=n(5),i=n(0);e.a=function(){var t=function(){var t=Object(i.useState)(!1),e=Object(s.a)(t,2),n=e[0],r=e[1],o=Object(i.useState)(null),u=Object(s.a)(o,2),l=u[0],p=u[1],b=Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var n,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"aplication/json"},r(!0),t.prev=4,t.next=7,fetch(e,{method:n,body:a,headers:s});case 7:return i=t.sent,t.next=10,i.json();case 10:if(o=t.sent,i.ok){t.next=13;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 13:return r(!1),t.abrupt("return",o);case 17:throw t.prev=17,t.t0=t.catch(4),r(!1),p(t.t0.massage),t.t0;case 22:case"end":return t.stop()}}),t,null,[[4,17]])})));return function(e){return t.apply(this,arguments)}}(),[]);return{loading:n,clearError:Object(i.useCallback)((function(){return p(null)}),[]),request:b,error:l}}(),e=t.loading,n=t.request,r=t.error,o=t.clearError,u="https://gateway.marvel.com:443/v1/public/",l="apikey=a9fcceddf72b2bba2170a4db6fd36de0",p=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,n("".concat(u,"characters?limit=9&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(j));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters?name=").concat(e,"&").concat(l));case 2:return r=t.sent,t.abrupt("return",r.data.results.map(j));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"characters/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",j(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=Object(a.a)(c.a.mark((function t(){var e,r,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,n("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(e,"&").concat(l));case 3:return r=t.sent,t.abrupt("return",r.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(e){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n("".concat(u,"comics/").concat(e,"?").concat(l));case 2:return r=t.sent,t.abrupt("return",h(r.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,homepage:t.urls[0].url,wiki:t.urls[1].url,comics:t.comics.items}},h=function(t){var e;return{id:t.id,title:t.title,description:t.description||"There is no description",pageCount:t.pageCount?"".concat(t.pageCount," p."):"No information about the number of pages",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"not available"}};return{loading:e,error:r,clearError:o,getAllCharacters:p,getCharacterByName:b,getCharacter:m,getAllComic:d,getComic:f}}},46:function(t,e,n){},47:function(t,e,n){"use strict";n(46);var r=n.p+"static/media/Avengers.4065c8f9.png",c=n.p+"static/media/Avengers_logo.9eaf2193.png",a=n(2);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:r,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},64:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var r=n(8),c=n(5),a=n(0),s=n(12),i=n(43),o=n(23),u=n(41),l=(n(64),n(2)),p=function(){var t=Object(a.useState)([]),e=Object(c.a)(t,2),n=e[0],p=e[1],b=Object(a.useState)(!1),m=Object(c.a)(b,2),d=m[0],f=m[1],j=Object(a.useState)(0),h=Object(c.a)(j,2),v=h[0],g=h[1],O=Object(a.useState)(!1),x=Object(c.a)(O,2),w=x[0],_=x[1],k=Object(i.a)(),y=k.loading,C=k.error,N=k.getAllComic,A=function(t,e){f(!e),N(t).then(E)};Object(a.useEffect)((function(){A(v,!0)}),[]);var E=function(t){var e=!1;t.length<8&&(e=!0),p([].concat(Object(r.a)(n),Object(r.a)(t))),f(!1),g(v+8),_(e)};var S=function(t){var e=t.map((function(t,e){return Object(l.jsx)("li",{className:"comics__item",children:Object(l.jsxs)(s.b,{to:"/comics/".concat(t.id),children:[Object(l.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(l.jsx)("div",{className:"comics__item-name",children:t.title}),Object(l.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(l.jsx)("ul",{className:"comics__grid",children:e})}(n),T=C?Object(l.jsx)(u.a,{}):null,q=y&&!d?Object(l.jsx)(o.a,{}):null;return Object(l.jsxs)("div",{className:"comics__list",children:[T,q,S,Object(l.jsx)("button",{disabled:d,style:{display:w?"none":"block"},className:"button button__main button__long",onClick:function(){return A(v)},children:Object(l.jsx)("div",{className:"inner",children:"load more"})})]})},b=n(47);e.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b.a,{}),Object(l.jsx)(p,{})]})}}}]);
//# sourceMappingURL=5.baa8fd68.chunk.js.map