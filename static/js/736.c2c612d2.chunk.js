"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{7527:function(n,t,e){e.d(t,{Df:function(){return i},q5:function(){return f},sJ:function(){return s},x7:function(){return o},yo:function(){return p}});var r=e(4165),a=e(5861),c=e(1243),u="89cdef6951461333339e0f595b8c2655";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(u,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},9736:function(n,t,e){e.r(t),e.d(t,{default:function(){return d}});var r,a=e(3433),c=e(9439),u=e(2791),i=e(7689),o=e(7527),s=e(168),p=e(6444).ZP.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 500px);\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 24px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 24px;\n"]))),f=e(184),d=function(){var n=(0,i.UO)().movieId,t=(0,u.useState)([]),e=(0,c.Z)(t,2),r=e[0],s=e[1];return(0,u.useEffect)((function(){(0,o.yo)(n).then((function(n){return s((0,a.Z)(n.cast))})).catch((function(n){console.error(n.message)}))}),[n]),(0,f.jsx)(p,{children:r&&r.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:a?"https://image.tmdb.org/t/p/original".concat(a):"https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png",alt:"name",width:"200",height:"300"}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Name:"})," ",e]}),(0,f.jsxs)("p",{children:[(0,f.jsx)("b",{children:"Character:"})," ",r]})]})]},t)}))})}}}]);
//# sourceMappingURL=736.c2c612d2.chunk.js.map