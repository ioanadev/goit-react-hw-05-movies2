"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[442],{498:function(n,t,e){e.d(t,{j:function(){return r}});var c=e(184),r=function(){return(0,c.jsx)("h1",{children:"Error loading movies"})}},17:function(n,t,e){e.d(t,{e:function(){return o}});var c=e(87),r=e(184),o=function(n){var t=n.movies;return(0,r.jsx)(r.Fragment,{children:t.length>0&&t.map((function(n){return(0,r.jsx)("li",{children:(0,r.jsx)(c.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},442:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var c=e(439),r=e(791),o=e(773),u=e(498),a=e(17),i=e(184),s=function(){var n=(0,r.useState)(""),t=(0,c.Z)(n,2),e=t[0],s=t[1],f=(0,r.useState)([]),l=(0,c.Z)(f,2),h=l[0],m=l[1],d=(0,r.useState)(!1),v=(0,c.Z)(d,2),p=v[0],j=v[1];(0,r.useEffect)((function(){e&&(0,o.WK)(e).then((function(n){console.log(n.results),m(n.results),j(!1)})).catch((function(n){console.log(n),j(!0)}))}),[e]);return(0,i.jsxs)("main",{children:[(0,i.jsx)("div",{className:"searchbar",children:(0,i.jsxs)("form",{className:"form",onSubmit:function(n){n.preventDefault(),s(n.target.value),console.loc(e)},children:[(0,i.jsx)("button",{type:"submit",className:"search-button",children:(0,i.jsx)("span",{className:"search-button-label",children:"Search"})}),(0,i.jsx)("input",{className:"input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:e,onChange:function(n){return s(n.target.value)}})]})}),p&&(0,i.jsx)(u.j,{}),(0,i.jsx)("ul",{children:0!==e&&(0,i.jsx)(a.e,{movies:h})})]})}},773:function(n,t,e){e.d(t,{xc:function(){return a},Y5:function(){return o},Hx:function(){return i},WK:function(){return s},YK:function(){return u}});var c="0507af1e31361aabd0924a524e62c663",r="https://api.themoviedb.org/3/",o=function(n){return fetch("".concat(r,"movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))},u=function(){return fetch("".concat(r,"trending/movie/day?api_key=").concat(c)).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()}))},i=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))},s=function(n){return fetch("".concat(r,"search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=442.bd370711.chunk.js.map