/*! For license information please see 83.c0e80a61.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{2383:function(t,r,e){e.d(r,{DC:function(){return f},IV:function(){return v},LI:function(){return h},Mc:function(){return p},wH:function(){return d}});var n,o,i,a,c,u=e(5861);function s(){s=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var i=r&&r.prototype instanceof m?r:m,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:O(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=f;var p="suspendedStart",v="suspendedYield",d="executing",y="completed",g={};function m(){}function x(){}function w(){}var b={};l(b,a,(function(){return this}));var L=Object.getPrototypeOf,j=L&&L(L(N([])));j&&j!==e&&n.call(j,a)&&(b=j);var E=w.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function O(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===y){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=Z(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?y:v,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=y,n.method="throw",n.arg=s.arg)}}}function Z(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,Z(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,g):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return x.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=l(w,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},r.awrap=function(t){return{__await:t}},_(k.prototype),l(k.prototype,c,(function(){return this})),r.AsyncIterator=k,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new k(f(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(E),l(E,u,"Generator"),l(E,a,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),g}},r}var l=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"e6c6b5e7c078fa3d9f19a91134816f70",language:"en-US"}}),f=function(){return(n=n||(0,u.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/trending/movie/day");case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},h=function(t){return(o=o||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/search/movie",{params:{query:r,page:1,include_adult:!1}});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},p=function(t){return(i=i||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/movie/".concat(r));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},v=function(t){return(a=a||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/movie/".concat(r,"/credits"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)},d=function(t){return(c=c||(0,u.Z)(s().mark((function t(r){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.get("/movie/".concat(r,"/reviews"));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}},8083:function(t,r,e){e.r(r),e.d(r,{default:function(){return Z}});var n,o,i,a,c,u=e(5861),s=e(9439),l=e(2791),f=e(7692),h=e(7689),p=e(168),v=e(5867),d=e(1087),y=v.ZP.div(n||(n=(0,p.Z)(["\n  padding: 20px;\n  text-align: left;\n"]))),g=(0,v.ZP)(d.OL)(o||(o=(0,p.Z)(["\n  text-decoration: none;\n  color: #0074cc; /* Button text color */\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 16px; /* Button text font size */\n  padding: 5px 10px; /* Button padding */\n  border: 1px solid #0074cc; /* Button border */\n  border-radius: 4px; /* Button border radius */\n  transition: color 0.3s, background-color 0.3s; /* Transition for text and background color */\n\n  &:hover {\n    color: #fff; /* Text color on hover */\n    background-color: #0074cc; /* Background color on hover */\n  }\n\n  svg {\n    font-size: 24px; /* Icon size */\n  }\n"]))),m=e(2383),x=e(8683),w=v.ZP.div(i||(i=(0,p.Z)(["\n  padding-top: 20px;\n  padding-bottom: 5px;\n  display: flex;\n  gap: 20px;\n  border-bottom: 1px solid gray;\n"]))),b=v.ZP.div(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),L=v.ZP.div(c||(c=(0,p.Z)(["\n  margin-top: 20px;\n  font-size: 18px; \n  \n  ul {\n    list-style: none;\n    padding: 0;\n    \n    li {\n      margin-bottom: 10px; \n      \n      a {\n        text-decoration: none;\n        color: #0074cc; \n        transition: color 0.3s;\n        \n        &:hover {\n          color: #004080; \n        }\n      }\n    }\n  }\n"]))),j=e(3435),E=e(184),_=function(t){var r,e,n,o,i=t.data,a=(0,h.TH)(),c=(0,h.UO)().movieId,u=i.poster_path,s=i.original_title,l=i.vote_average,f=i.overview,p=i.genres.map((function(t){return t.name})).join(" "),v="https://image.tmdb.org/t/p/w200".concat(u),y=10*l.toFixed(1),g=(0,j.q_)({from:{opacity:0,transform:"translateY(10px)"},to:{opacity:1,transform:"translateY(0)"},delay:300}),m=(0,j.q_)({from:{opacity:0,transform:"translateY(10px)"},to:{opacity:1,transform:"translateY(0)"},delay:1300}),_=(0,j.q_)({from:{opacity:0,transform:"translateY(10px)"},to:{opacity:1,transform:"translateY(0)"},delay:1800}),k=(0,j.q_)({from:{opacity:0,transform:"translateY(10px)"},to:{opacity:1,transform:"translateY(0)"},delay:2300});return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(w,{children:[(0,E.jsx)(j.q.img,{style:g,src:v,alt:s}),(0,E.jsxs)(b,{children:[(0,E.jsx)(j.q.h2,{style:g,children:s}),(0,E.jsxs)(j.q.p,{style:m,children:["User Score: ",y,"%"]}),(0,E.jsx)(j.q.h3,{style:_,children:"Overview"}),(0,E.jsx)(j.q.div,{style:(0,x.Z)((0,x.Z)({},_),{},{maxWidth:"500px"}),children:(0,E.jsx)("p",{children:f})}),(0,E.jsx)(j.q.h3,{style:k,children:"Genres"}),(0,E.jsx)(j.q.p,{style:k,children:p})]})]}),(0,E.jsxs)(L,{children:["Additional information",(0,E.jsxs)("ul",{children:[(0,E.jsx)("li",{children:(0,E.jsx)(d.rU,{to:"/movies/".concat(c,"/cast"),state:{from:null!==(r=null===(e=a.state)||void 0===e?void 0:e.from)&&void 0!==r?r:"/"},children:"Cast"})}),(0,E.jsx)("li",{children:(0,E.jsx)(d.rU,{to:"/movies/".concat(c,"/reviews"),state:{from:null!==(n=null===(o=a.state)||void 0===o?void 0:o.from)&&void 0!==n?n:"/"},children:"Reviews"})})]})]})]})},k=e(1454);function O(){O=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{s({},"")}catch(t){s=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var h="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function g(){}function m(){}function x(){}var w={};s(w,a,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(N([])));L&&L!==e&&n.call(L,a)&&(w=L);var j=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){s(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=h;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=Z(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=f(r,e,n);if("normal"===s.type){if(o=n.done?d:p,s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function Z(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,Z(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=f(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function P(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function G(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function N(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=x,o(j,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:m,configurable:!0}),m.displayName=s(x,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,s(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},E(_.prototype),s(_.prototype,c,(function(){return this})),r.AsyncIterator=_,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new _(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),s(j,u,"Generator"),s(j,a,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=N,S.prototype={constructor:S,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(G),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),G(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;G(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:N(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}var Z=function(){var t,r,e=(0,l.useState)(null),n=(0,s.Z)(e,2),o=n[0],i=n[1],a=(0,l.useState)(!1),c=(0,s.Z)(a,2),p=c[0],v=c[1],d=(0,h.UO)().movieId,x=(0,h.TH)();return(0,l.useEffect)((function(){var t;!function(){(t=t||(0,u.Z)(O().mark((function t(){var r;return O().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,v(!0),t.next=4,(0,m.Mc)(d);case 4:r=t.sent,i(r),t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",alert("Sorry, please try again"));case 12:return t.prev=12,v(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})))).apply(this,arguments)}()}),[d]),(0,E.jsxs)(y,{children:[(0,E.jsxs)(g,{to:null!==(t=null===(r=x.state)||void 0===r?void 0:r.from)&&void 0!==t?t:"/",children:[(0,E.jsx)(f.YiX,{}),"Go back"]}),p&&(0,E.jsx)(k.a,{}),o&&(0,E.jsx)(_,{data:o}),(0,E.jsx)(l.Suspense,{fallback:(0,E.jsx)(k.a,{}),children:(0,E.jsx)(h.j3,{})})]})}}}]);
//# sourceMappingURL=83.c0e80a61.chunk.js.map