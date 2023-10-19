"use strict";(self.webpackChunkreact_project_movieapp=self.webpackChunkreact_project_movieapp||[]).push([[423],{241:function(e,t,n){n.d(t,{Z:function(){return l}});n(2791);var a=n(184);var s=function(e){var t=e.rating;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:t<50?"position-absolute rate bad":t<70?"position-absolute rate median":"position-absolute rate good",style:t<50?{background:"conic-gradient(red ".concat(t,"%, transparent 0 100%)")}:t<70?{background:"conic-gradient(orange ".concat(t,"%, transparent 0 100%)")}:{background:"conic-gradient(green ".concat(t,"%, transparent 0 100%)")},children:(0,a.jsxs)("span",{children:[t,(0,a.jsx)("small",{children:"%"})]})})})},i=n(9434),c=n(3392),r=n(9806),o=n(1632);function l(e){var t,n=e.movieDetails,l=e.handleNavigate,d=!1,u=(0,i.v9)((function(e){return e.watchList})),h=(0,i.I0)();return null===(t=u.listedMovies)||void 0===t||t.map((function(e,t){e.id==n.id&&(d=!0)})),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"card position-relative mt-3",style:{height:"400px"},children:[(0,a.jsx)(s,{rating:10*n.vote_average}),(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),className:"card-img-top h-75",alt:"...",onClick:function(){return l(n.id)}}),(0,a.jsxs)("div",{className:"card-body position-relative mt-4",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("p",{className:"card-title col-9 my-auto",style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:"bold"},children:n.title}),(0,a.jsxs)("div",{className:"col-1 my-auto text-muted",children:[(0,a.jsx)("input",{className:"love",style:{display:"none"},type:"checkbox",defaultChecked:d,id:n.id}),(0,a.jsx)("label",{className:"my-auto love",htmlFor:n.id,onClick:function(){h((0,c.G)(n))},children:(0,a.jsx)(r.G,{className:"fs-5 my-auto",icon:o.m6i})})]})]}),(0,a.jsx)("p",{children:n.release_date})]})]})})}},9032:function(e,t,n){n(2791);var a=n(1632),s=n(9806),i=n(184);t.Z=function(e){for(var t=e.increase,n=e.decrease,c=e.setPage,r=e.totalPages,o=[],l=1;l<=20&&!(l>r);l++)o.push(l);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"fixed-bottom bg-light w-100 d-flex",style:{height:"40px",justifyContent:"center"},children:[(0,i.jsx)("div",{className:"btn btn-warning my-auto mx-4",onClick:function(){n()},children:(0,i.jsx)(s.G,{icon:a.EyR})}),(0,i.jsx)("div",{style:{width:"200px"},children:(0,i.jsx)("p",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:null===o||void 0===o?void 0:o.map((function(e,t){return(0,i.jsx)("span",{className:"my-auto btn",onClick:function(){c(e)},children:e},e)}))})}),(0,i.jsx)("div",{className:"btn btn-warning my-auto mx-4",onClick:function(){t()},children:(0,i.jsx)(s.G,{icon:a.yOZ})})]})})}},2423:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(9439),s=n(2791),i=n(241),c=n(7689),r=n(9032),o=n(1243),l=n(2414),d=n(184),u=function(){var e=(0,c.s0)(),t=(0,s.useState)([]),n=(0,a.Z)(t,2),u=n[0],h=n[1],m=(0,s.useState)(1),x=(0,a.Z)(m,2),p=x[0],v=x[1],g=(0,s.useState)(1),f=(0,a.Z)(g,2),j=f[0],b=f[1],N=(0,s.useContext)(l.A),w=N.contextLang;N.setContextLang;(0,s.useEffect)((function(){o.Z.get("https://api.themoviedb.org/3/movie/popular?api_key=d31d8bb09970c0c573668146ab0702f3&page=".concat(j,"&language=").concat(w)).then((function(e){h(e.data.results),v(e.data.total_pages)})).catch((function(e){return console.log(e)}))}),[j]);var y=function(t){e("/movie-details/".concat(t))};return(0,d.jsxs)("div",{className:"row",dir:"ar"===w?"rtl":"ltr",children:[null===u||void 0===u?void 0:u.map((function(e,t){return(0,d.jsx)("div",{className:"col-2",children:(0,d.jsx)(i.Z,{movieDetails:e,handleNavigate:y})},e.id)})),(0,d.jsx)(r.Z,{increase:function(){j<500&&b(j+1)},decrease:function(){j>1&&b(j-1)},setPage:function(e){b(e)},totalPages:p})]})};function h(){var e=(0,c.s0)(),t=(0,s.useContext)(l.A),n=t.contextLang,i=(t.setContextLang,(0,s.useState)("")),r=(0,a.Z)(i,2),o=r[0],h=r[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"container mb-3 rounded",style:{backgroundColor:"Gainsboro",height:"200px"},dir:"ar"===n?"rtl":"ltr",children:["ar"===n?(0,d.jsx)("h1",{className:"m-2 pt-2",children:"\u0645\u0631\u062d\u0628\u064b\u0627 \u0628\u0643 \u0641\u064a \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0627\u0644\u062e\u0627\u0635 \u0628\u0646\u0627"}):(0,d.jsx)("h1",{className:"m-2 pt-2",children:"Welcome to our movies app"}),"ar"===n?(0,d.jsx)("p",{className:"m-3",children:"\u0627\u0628\u062d\u062b \u0639\u0645\u0627 \u062a\u0631\u064a\u062f\u060c \u0648\u0627\u0643\u062a\u0634\u0641 \u0627\u0644\u0645\u0632\u064a\u062f \u0645\u0646 \u0627\u0644\u0623\u0641\u0644\u0627\u0645 \u0648\u0627\u0644\u0628\u0631\u0627\u0645\u062c \u0627\u0644\u062a\u0644\u0641\u0632\u064a\u0648\u0646\u064a\u0629"}):(0,d.jsx)("p",{className:"m-3",children:"search what ever you want, discover more movies and TV shows"}),(0,d.jsxs)("div",{className:"d-flex mt-4",children:[(0,d.jsx)("input",{className:"form-control rounded w-75 m-2",placeholder:"ar"===n?"\u0627\u0628\u062d\u062b \u0639\u0646 \u0641\u064a\u0644\u0645":"search a movie",onChange:function(e){h(e.target.value)},value:o}),(0,d.jsx)("button",{className:"btn btn-warning h-100 m-2 ms-5",style:{width:"150px"},onClick:0===o.length||""===o.trim()?function(){}:function(){return function(t){e("/search/".concat(t))}(o)},children:"search"})]})]}),"ar"===n?(0,d.jsx)("h2",{children:"\u0627\u0634\u0647\u0631 \u0627\u0644\u0627\u0641\u0644\u0627\u0645"}):(0,d.jsx)("h2",{children:"Popular Movies"}),(0,d.jsx)("hr",{}),(0,d.jsx)(u,{})]})}}}]);
//# sourceMappingURL=423.0b664bcd.chunk.js.map