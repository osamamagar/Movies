"use strict";(self.webpackChunkreact_project_movieapp=self.webpackChunkreact_project_movieapp||[]).push([[554],{241:function(e,t,n){n.d(t,{Z:function(){return l}});n(2791);var a=n(184);var s=function(e){var t=e.rating;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:t<50?"position-absolute rate bad":t<70?"position-absolute rate median":"position-absolute rate good",style:t<50?{background:"conic-gradient(red ".concat(t,"%, transparent 0 100%)")}:t<70?{background:"conic-gradient(orange ".concat(t,"%, transparent 0 100%)")}:{background:"conic-gradient(green ".concat(t,"%, transparent 0 100%)")},children:(0,a.jsxs)("span",{children:[t,(0,a.jsx)("small",{children:"%"})]})})})},i=n(9434),c=n(3392),o=n(9806),r=n(1632);function l(e){var t,n=e.movieDetails,l=e.handleNavigate,d=!1,u=(0,i.v9)((function(e){return e.watchList})),m=(0,i.I0)();return null===(t=u.listedMovies)||void 0===t||t.map((function(e,t){e.id==n.id&&(d=!0)})),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"card position-relative mt-3",style:{height:"400px"},children:[(0,a.jsx)(s,{rating:10*n.vote_average}),(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),className:"card-img-top h-75",alt:"...",onClick:function(){return l(n.id)}}),(0,a.jsxs)("div",{className:"card-body position-relative mt-4",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("p",{className:"card-title col-9 my-auto",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:"bold"},children:n.title}),(0,a.jsxs)("div",{className:"col-1 my-auto text-muted",children:[(0,a.jsx)("input",{className:"love",style:{display:"none"},type:"checkbox",defaultChecked:d,id:n.id}),(0,a.jsx)("label",{className:"my-auto love",htmlFor:n.id,onClick:function(){m((0,c.G)(n))},children:(0,a.jsx)(o.G,{className:"fs-5 my-auto",icon:r.m6i})})]})]}),(0,a.jsx)("p",{children:n.release_date})]})]})})}},9032:function(e,t,n){n(2791);var a=n(1632),s=n(9806),i=n(184);t.Z=function(e){for(var t=e.increase,n=e.decrease,c=e.setPage,o=e.totalPages,r=[],l=1;l<=20&&!(l>o);l++)r.push(l);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"fixed-bottom bg-light w-100 d-flex",style:{height:"40px",justifyContent:"center"},children:[(0,i.jsx)("div",{className:"btn btn-warning my-auto mx-4",onClick:function(){n()},children:(0,i.jsx)(s.G,{icon:a.EyR})}),(0,i.jsx)("div",{style:{width:"200px"},children:(0,i.jsx)("p",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:null===r||void 0===r?void 0:r.map((function(e,t){return(0,i.jsx)("span",{className:"my-auto btn",onClick:function(){c(e)},children:e},e)}))})}),(0,i.jsx)("div",{className:"btn btn-warning my-auto mx-4",onClick:function(){t()},children:(0,i.jsx)(s.G,{icon:a.yOZ})})]})})}},554:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(9439),s=n(2791),i=n(2414),c=n(241),o=n(7689),r=n(1243),l=n(9032),d=n(184),u=function(e){var t=e.movieName,n=(0,o.s0)(),u=(0,s.useState)([]),m=(0,a.Z)(u,2),h=m[0],x=m[1],v=(0,s.useState)(1),p=(0,a.Z)(v,2),f=p[0],g=p[1],j=(0,s.useState)(1),b=(0,a.Z)(j,2),N=b[0],y=b[1],w=(0,s.useContext)(i.A),k=w.contextLang;w.setContextLang;(0,s.useEffect)((function(){r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=d31d8bb09970c0c573668146ab0702f3&page=".concat(N,"&query=").concat(t,"&language=").concat(k)).then((function(e){x(e.data.results),g(e.data.total_pages)})).catch((function(e){return console.log(e)}))}),[N,t,k]);var C=function(e){n("/movie-details/".concat(e))};return(0,d.jsxs)("div",{className:"row",children:[null===h||void 0===h?void 0:h.map((function(e,t){return(0,d.jsx)("div",{className:"col-2",children:(0,d.jsx)(c.Z,{movieDetails:e,handleNavigate:C})},e.id)})),(0,d.jsx)(l.Z,{increase:function(){N<f&&y(N+1)},decrease:function(){N>1&&y(N-1)},setPage:function(e){y(e)},totalPages:f})]})};function m(){var e=(0,o.UO)(),t=((0,o.s0)(),(0,s.useContext)(i.A)),n=(t.contextLang,t.setContextLang,(0,s.useState)(e.movieName)),c=(0,a.Z)(n,2),r=c[0],l=c[1],m=(0,s.useState)(e.movieName),h=(0,a.Z)(m,2),x=h[0],v=h[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"d-flex mt-4",children:[(0,d.jsx)("input",{className:"form-control rounded w-75 m-2",placeholder:"search a movie",onChange:function(e){l(e.target.value)},value:r}),(0,d.jsx)("button",{className:"btn btn-warning h-100 m-2 ms-5",style:{width:"150px"},onClick:function(){v(r)},children:"search"})]}),(0,d.jsxs)("h5",{className:"mt-5 m-2",children:["Search results for : ",(0,d.jsx)("span",{style:{fontSize:"16px"},children:r})]}),(0,d.jsx)("hr",{})]}),(0,d.jsx)(u,{movieName:x})]})}}}]);
//# sourceMappingURL=554.b7c50648.chunk.js.map