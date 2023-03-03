"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[830],{830:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(861),a=t(439),s=t(757),c=t.n(s),i=t(791),o=t(87),u=t(689),p=t(724),f="movie-info-page_mainWrapper__M+PVE",v="movie-info-page_imgWrapper__-9GMX",m="movie-info-page_textWrapper__2cRzt",l="movie-info-page_poster__400sv",d="movie-info-page_title__u9qka",h="movie-info-page_vote__fMOxc",_="movie-info-page_button__lqP1r",g="movie-info-page_movieInfo__xagvD",x=t(184),w=function(){var e,r=(0,i.useState)([]),t=(0,a.Z)(r,2),s=t[0],w=t[1],b=(0,u.UO)().id,j=(null===(e=(0,u.TH)().state)||void 0===e?void 0:e.from)||"/",k=(0,u.s0)(),N=(0,i.useCallback)((function(){return k(j)}),[k,j]);if((0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.uR)(b);case 3:r=e.sent,w(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),t=e.t0.response,console.log(t.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[b]),void 0===s.genres)return"There are no genres for this movie";var y=s.genres.map((function(e){return e.name})).join(", "),Z=null===s.poster_path?"https://seekersguidance.org/wp-content/uploads/2022/10/Movie-Theatre-Film-Cinema.jpg":"https://image.tmdb.org/t/p/w500".concat(s.poster_path);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("button",{className:_,onClick:N,children:[" ","\u2190 Go back"]}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("div",{className:v,children:(0,x.jsx)("img",{className:l,src:Z,alt:"movie information"})}),(0,x.jsxs)("div",{className:m,children:[(0,x.jsx)("h1",{children:s.title}),(0,x.jsx)("h2",{className:d,children:"User score"}),(0,x.jsx)("p",{className:h,children:s.vote_average.toFixed(1)}),(0,x.jsx)("h2",{className:d,children:"Overview"}),(0,x.jsxs)("p",{children:[" ",s.overview]}),(0,x.jsx)("h2",{className:d,children:"Genres"}),(0,x.jsx)("p",{children:y})]})]}),(0,x.jsx)(o.rU,{className:g,state:{from:j},to:"cast",children:"Cast"}),(0,x.jsx)(o.rU,{className:g,state:{from:j},to:"reviews",children:"Reviews"}),(0,x.jsx)(u.j3,{})]})}},724:function(e,r,t){t.d(r,{Cm:function(){return f},LP:function(){return i},TW:function(){return p},uR:function(){return o},z1:function(){return u}});var n=t(861),a=t(757),s=t.n(a),c=t(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"cf961b1b89f4c4a28558be2b04fdd59a"}}),i=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?query=".concat(r,"&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=830.7a005f6e.chunk.js.map