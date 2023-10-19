"use strict";(self.webpackChunkreact_project_movieapp=self.webpackChunkreact_project_movieapp||[]).push([[61],{1140:function(e,n,t){t.d(n,{Z:function(){return r}});var s=t(9806),a=t(1632),i=t(6850),c=t(184);function r(e){for(var n=e.rating,t=[],r=0;r<5;r++)n>=1?(t.push((0,c.jsx)(s.G,{icon:a.Tab,style:{color:"black"},className:"color-info"},r)),n-=1):0<n?(t.push((0,c.jsx)(s.G,{icon:a.pG1,style:{color:"black"}},r)),n=0):t.push((0,c.jsx)(s.G,{icon:i.Tab,style:{color:"black"}},r));return(0,c.jsx)("div",{className:"rating ",children:t})}},241:function(e,n,t){t.d(n,{Z:function(){return o}});t(2791);var s=t(184);var a=function(e){var n=e.rating;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:n<50?"position-absolute rate bad":n<70?"position-absolute rate median":"position-absolute rate good",style:n<50?{background:"conic-gradient(red ".concat(n,"%, transparent 0 100%)")}:n<70?{background:"conic-gradient(orange ".concat(n,"%, transparent 0 100%)")}:{background:"conic-gradient(green ".concat(n,"%, transparent 0 100%)")},children:(0,s.jsxs)("span",{children:[n,(0,s.jsx)("small",{children:"%"})]})})})},i=t(9434),c=t(3392),r=t(9806),l=t(1632);function o(e){var n,t=e.movieDetails,o=e.handleNavigate,d=!1,u=(0,i.v9)((function(e){return e.watchList})),m=(0,i.I0)();return null===(n=u.listedMovies)||void 0===n||n.map((function(e,n){e.id==t.id&&(d=!0)})),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"card position-relative mt-3",style:{height:"400px"},children:[(0,s.jsx)(a,{rating:10*t.vote_average}),(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),className:"card-img-top h-75",alt:"...",onClick:function(){return o(t.id)}}),(0,s.jsxs)("div",{className:"card-body position-relative mt-4",children:[(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("p",{className:"card-title col-9 my-auto",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:"bold"},children:t.title}),(0,s.jsxs)("div",{className:"col-1 my-auto text-muted",children:[(0,s.jsx)("input",{className:"love",style:{display:"none"},type:"checkbox",defaultChecked:d,id:t.id}),(0,s.jsx)("label",{className:"my-auto love",htmlFor:t.id,onClick:function(){m((0,c.G)(t))},children:(0,s.jsx)(r.G,{className:"fs-5 my-auto",icon:l.m6i})})]})]}),(0,s.jsx)("p",{children:t.release_date})]})]})})}},9032:function(e,n,t){t(2791);var s=t(1632),a=t(9806),i=t(184);n.Z=function(e){for(var n=e.increase,t=e.decrease,c=e.setPage,r=e.totalPages,l=[],o=1;o<=20&&!(o>r);o++)l.push(o);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"fixed-bottom bg-light w-100 d-flex",style:{height:"40px",justifyContent:"center"},children:[(0,i.jsx)("div",{className:"btn btn-warning my-auto mx-4",onClick:function(){t()},children:(0,i.jsx)(a.G,{icon:s.EyR})}),(0,i.jsx)("div",{style:{width:"200px"},children:(0,i.jsx)("p",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:null===l||void 0===l?void 0:l.map((function(e,n){return(0,i.jsx)("span",{className:"my-auto btn",onClick:function(){c(e)},children:e},e)}))})}),(0,i.jsx)("div",{className:"btn btn-warning my-auto mx-4",onClick:function(){n()},children:(0,i.jsx)(a.G,{icon:s.yOZ})})]})})}},5061:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var s=t(9439),a=t(2791),i=t(7689),c=t(1243),r=t(1140),l=t(2414),o=t(9806),d=t(1632),u=t(9434),m=t(3392),x=t(241),h=t(9032),j=t(184),v=function(e){var n=e.movieId,t=(0,i.s0)(),r=(0,a.useState)([]),o=(0,s.Z)(r,2),d=o[0],u=o[1],m=(0,a.useState)(1),v=(0,s.Z)(m,2),g=v[0],p=v[1],f=(0,a.useState)(1),b=(0,s.Z)(f,2),N=b[0],y=b[1],w=(0,a.useContext)(l.A),k=w.contextLang;w.setContextLang;(0,a.useEffect)((function(){c.Z.get(" https://api.themoviedb.org/3/movie/".concat(n,"/recommendations?api_key=d31d8bb09970c0c573668146ab0702f3&page=").concat(N,"&language=").concat(k)).then((function(e){u(e.data.results),p(e.data.total_pages)})).catch((function(e){return console.log(e)}))}),[N,n,k]);var _=function(e){t("/movie-details/".concat(e))};return(0,j.jsxs)("div",{className:"row",children:[null===d||void 0===d?void 0:d.map((function(e,n){return(0,j.jsx)("div",{className:"col-2",children:(0,j.jsx)(x.Z,{movieDetails:e,handleNavigate:_})},e.id)})),(0,j.jsx)(h.Z,{increase:function(){N<g&&y(N+1)},decrease:function(){N>1&&y(N-1)},setPage:function(e){y(e)},totalPages:g})]})};function g(){var e,n=!1,t=(0,a.useContext)(l.A),x=t.contextLang,h=(t.setContextLang,(0,a.useState)(null)),g=(0,s.Z)(h,2),p=g[0],f=g[1],b=(0,i.UO)().id,N=(0,u.v9)((function(e){return e.watchList})),y=(0,u.I0)();(0,a.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(b,"?api_key=d31d8bb09970c0c573668146ab0702f3&language=").concat(x)).then((function(e){f(e.data)})).catch((function(e){return console.error(e)}))}),[b,x]),null===N||void 0===N||null===(e=N.listedMovies)||void 0===e||e.map((function(e,t){e.id==(null===p||void 0===p?void 0:p.id)&&(n=!0)}));return p?(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("div",{className:"container",dir:"ar"===x?"rtl":"ltr",children:(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-md-4 ",children:(0,j.jsx)("div",{className:"card",children:(0,j.jsx)("img",{className:"card-img-top ",src:"".concat("https://image.tmdb.org/t/p/w500","/").concat(p.poster_path),alt:p.title})})}),(0,j.jsxs)("div",{className:"col-md-8 ",children:[(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("h3",{className:"col title-details",children:p.title}),(0,j.jsxs)("div",{className:"col my-auto text-muted",children:[(0,j.jsx)("input",{className:"love",style:{display:"none"},type:"checkbox",defaultChecked:n,id:p.id}),(0,j.jsx)("label",{className:"my-auto love",style:{marginLeft:"450px"},htmlFor:p.id,onClick:function(){y((0,m.G)(p))},children:(0,j.jsx)(o.G,{className:"fs-3 my-auto",icon:d.m6i})})]})]}),(0,j.jsx)("p",{className:"release-date-details",children:p.release_date}),(0,j.jsx)(r.Z,{rating:p.vote_average/2}),(0,j.jsx)("p",{children:p.vote_count}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("p",{className:"overview-details",children:p.overview}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsxs)("div",{className:"row",children:[(0,j.jsxs)("div",{className:"col",children:[(0,j.jsx)("h6",{children:"Production Countries:"}),(0,j.jsx)("ul",{children:p.production_countries.map((function(e){return(0,j.jsx)("li",{children:e.name},e.iso_3166_1)}))}),(0,j.jsx)("br",{}),(0,j.jsx)("h6",{children:"Languages Available:"}),(0,j.jsx)("ul",{children:p.spoken_languages.map((function(e){return(0,j.jsx)("li",{children:e.name},e.iso_639_1)}))})]}),(0,j.jsxs)("div",{className:"col-7 text-center",children:[(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{}),p.genres.length>0&&p.genres[0]&&(0,j.jsx)("button",{className:"btn btn-warning mx-4 ",children:(0,j.jsx)("p",{className:"my-auto",children:p.genres[0].name})}),p.genres.length>1&&p.genres[1]&&(0,j.jsx)("button",{className:"btn btn-warning",children:(0,j.jsx)("p",{className:"my-auto",children:p.genres[1].name})}),p.genres.length>2&&p.genres[2]&&(0,j.jsx)("button",{className:"btn btn-warning mx-4",children:(0,j.jsx)("p",{className:"my-auto",children:p.genres[2].name})})]}),(0,j.jsx)("br",{}),(0,j.jsx)("br",{})]})]})]})}),(0,j.jsxs)("div",{className:"container",children:[(0,j.jsx)("hr",{}),(0,j.jsx)("h2",{children:"Recommendations"}),(0,j.jsx)(v,{movieId:p.id})]})]}):(0,j.jsx)("div",{children:"Loading..."})}}}]);
//# sourceMappingURL=61.58245402.chunk.js.map