(this["webpackJsonpberlin-traffic-app"]=this["webpackJsonpberlin-traffic-app"]||[]).push([[0],{163:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},434:function(e,t){},436:function(e,t){},446:function(e,t){},448:function(e,t){},458:function(e,t){},460:function(e,t){},485:function(e,t){},487:function(e,t){},488:function(e,t){},493:function(e,t){},495:function(e,t){},514:function(e,t){},526:function(e,t){},529:function(e,t){},546:function(e,t){},627:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(60),i=n.n(r),s=(n(289),n(290),n(36)),l=n(103),o=n.n(l),j=n(104),d=n.n(j),u=n(645),b=n(649),O=n(648),x=n(644),h=n(646),v=n(647),p=n(628),m=n(43),f=n(17),g=n.n(f),S=n(18),w=n.n(S),y=(n(163),n(273)),N=n.n(y),F=n(272),A=n.n(F),I=n(167),k=n(1),E=n(103),B=n(104),C=function(e){e.state;var t=e.ids,n=E(B,"my-awesome-program"),a=Object(c.useState)([]),r=Object(s.a)(a,2),i=r[0],l=r[1];return Object(c.useEffect)((function(){var e=null===t||void 0===t?void 0:t.map((function(e){return n.stop(e).then((function(e){return e})).catch(console.error)}));void 0!==e&&Promise.all(e).then((function(e){l((function(t){return[].concat(Object(I.a)(t),Object(I.a)(e))}))}))}),[]),Object(k.jsxs)("div",{className:"main__div",children:[0===i.length?Object(k.jsx)("p",{children:"No Favourite Stops"}):Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:{margin:"24px"},children:Object(k.jsx)("strong",{children:"Favourite Stops with Availability"})}),Object(k.jsx)(p.a,{elevation:3,className:"paper",children:Object(k.jsx)(x.a,{children:Object(k.jsxs)(u.a,{className:"","aria-label":"simple table",children:[Object(k.jsx)(h.a,{children:Object(k.jsxs)(v.a,{children:[Object(k.jsx)(O.a,{children:"Stops"}),Object(k.jsx)(O.a,{children:"Bus"}),Object(k.jsx)(O.a,{children:"Tram"}),Object(k.jsx)(O.a,{children:"Ferry"}),Object(k.jsx)(O.a,{children:"Suburban"}),Object(k.jsx)(O.a,{children:"Express"}),Object(k.jsx)(O.a,{children:"Regional"}),Object(k.jsx)(O.a,{children:"See More"}),Object(k.jsx)(O.a,{style:{display:"none"},children:"Mark Favourite"})]})}),Object(k.jsx)(b.a,{children:i.map((function(e){var t,n,c,a,r,i;return void 0!==e?Object(k.jsxs)(v.a,{children:[Object(k.jsx)(O.a,{component:"th",scope:"row",children:null===e||void 0===e?void 0:e.name}),Object(k.jsx)(O.a,{children:!0===(null===e||void 0===e||null===(t=e.products)||void 0===t?void 0:t.bus)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{children:!0===(null===e||void 0===e||null===(n=e.products)||void 0===n?void 0:n.tram)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{children:!0===(null===e||void 0===e||null===(c=e.products)||void 0===c?void 0:c.ferry)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{children:!0===(null===e||void 0===e||null===(a=e.products)||void 0===a?void 0:a.suburban)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsxs)(O.a,{children:[" ",!0===(null===e||void 0===e||null===(r=e.products)||void 0===r?void 0:r.express)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})]}),Object(k.jsx)(O.a,{children:!0===(null===e||void 0===e||null===(i=e.products)||void 0===i?void 0:i.regional)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{children:Object(k.jsx)(m.c,{to:e.id,children:"See more"})})]},e.id):Object(k.jsx)(k.Fragment,{})}))})]})})})]}),Object(k.jsx)("div",{style:{padding:"54px"},children:Object(k.jsx)("strong",{children:"Created By Ujjwal For Fun"})})]})};function J(e){var t=e.data,n=Object(c.useState)({}),a=Object(s.a)(n,2),r=a[0],i=a[1],l=JSON.parse(localStorage.getItem("Favourite")),o=null===l||void 0===l?void 0:l.split("A");t.forEach((function(e){if(null===e.id){var n=t.indexOf(e);t.splice(n,1)}}));return Object(k.jsxs)("div",{className:"main__div",children:[Object(k.jsx)(p.a,{elevation:3,className:"paper",children:Object(k.jsx)(x.a,{children:Object(k.jsxs)(u.a,{className:"","aria-label":"simple table",children:[Object(k.jsx)(h.a,{children:Object(k.jsxs)(v.a,{children:[Object(k.jsx)(O.a,{align:"center",children:"Stops"}),Object(k.jsx)(O.a,{align:"center",children:"Bus"}),Object(k.jsx)(O.a,{align:"center",children:"Tram"}),Object(k.jsx)(O.a,{align:"center",children:"Ferry"}),Object(k.jsx)(O.a,{align:"center",children:"Suburban"}),Object(k.jsx)(O.a,{align:"center",children:"Express"}),Object(k.jsx)(O.a,{align:"center",children:"Regional"}),Object(k.jsx)(O.a,{align:"center",children:"See More"}),Object(k.jsx)(O.a,{align:"center",children:"Mark Favourite"})]})}),Object(k.jsx)(b.a,{children:t.map((function(e){var t,n,c,a,r,s;return Object(k.jsxs)(v.a,{children:[Object(k.jsx)(O.a,{component:"th",scope:"row",children:e.name}),Object(k.jsx)(O.a,{align:"center",children:!0===(null===(t=e.products)||void 0===t?void 0:t.bus)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{align:"center",children:!0===(null===(n=e.products)||void 0===n?void 0:n.tram)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{align:"center",children:!0===(null===(c=e.products)||void 0===c?void 0:c.ferry)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{align:"center",children:!0===(null===(a=e.products)||void 0===a?void 0:a.suburban)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsxs)(O.a,{align:"center",children:[" ",!0===(null===(r=e.products)||void 0===r?void 0:r.express)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})]}),Object(k.jsx)(O.a,{align:"center",children:!0===(null===(s=e.products)||void 0===s?void 0:s.regional)?Object(k.jsx)(g.a,{}):Object(k.jsx)(w.a,{})}),Object(k.jsx)(O.a,{align:"center",children:Object(k.jsx)(m.c,{to:e.id,children:"See more"})}),Object(k.jsx)(O.a,{align:"center",children:"fav"===localStorage.getItem(e.id)?Object(k.jsx)(A.a,{onClick:function(t){var n;n=e.id,localStorage.removeItem(n),null===o||void 0===o||o.splice(o.indexOf(n),1),localStorage.removeItem("Favourite"),null===o||void 0===o||o.forEach((function(e){o.length>0&&e.length>0&&localStorage.setItem("Favourite",JSON.stringify(localStorage.getItem("Favourite")?JSON.parse(localStorage.getItem("Favourite"))+"A"+e:e))})),i({}),window.location.reload()},children:"SetFav"}):Object(k.jsx)(N.a,{onClick:function(t){var n;n=e.id,localStorage.setItem(n,"fav"),localStorage.setItem("Favourite",JSON.stringify(localStorage.getItem("Favourite")?JSON.parse(localStorage.getItem("Favourite"))+"A"+n:n)),i({}),window.location.reload()},children:"RemFav"})})]},e.name)}))})]})})}),Object(k.jsx)(C,{state:r,ids:o})]})}var M=n(650),P=n(652),_=n(653),T=n(654),D=n(274),R=n.n(D),W=function(){var e=Object(c.useState)("Airport"),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){var e=o()(d.a,"my-awesome-program");""!==n&&e.locations(n,{results:5}).then((function(e){j(e)})).catch(console.error)}),[n]),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{style:{position:"sticky",top:0,backgroundColor:"white",padding:"10px",zIndex:1},children:Object(k.jsx)("h1",{style:{marginTop:0},children:"Berlin Transportation APP"})}),Object(k.jsxs)(M.a,{className:"",children:[Object(k.jsx)(P.a,{htmlFor:"input-with-icon-adornment",children:"Enter your stop."}),Object(k.jsx)(_.a,{autoFocus:!0,value:n,onChange:function(e){a(e.target.value)},id:"input-with-icon-adornment",startAdornment:Object(k.jsx)(T.a,{position:"start",children:Object(k.jsx)(R.a,{})})})]}),Object(k.jsx)(J,{data:l})]})},z=n(11),L=n(651),U=function(e){var t=e.data;return Object(k.jsxs)("div",{className:"main__div",children:[Object(k.jsx)("h1",{children:"Possible stops"}),t.length>0?Object(k.jsx)(p.a,{elevation:3,className:"paper",children:Object(k.jsx)(x.a,{component:L.a,children:Object(k.jsxs)(u.a,{className:"","aria-label":"simple table",children:[Object(k.jsx)(h.a,{children:Object(k.jsxs)(v.a,{children:[Object(k.jsx)(O.a,{children:"Direction"}),Object(k.jsx)(O.a,{children:"Platform No."}),Object(k.jsx)(O.a,{children:"Scheduled Date"}),Object(k.jsx)(O.a,{children:"Mode"}),Object(k.jsx)(O.a,{children:"Operator"})]})}),Object(k.jsx)(b.a,{children:t.map((function(e){return Object(k.jsxs)(v.a,{children:[Object(k.jsx)(O.a,{children:null!=e.direction?e.direction:"NA"}),Object(k.jsx)(O.a,{children:null!=e.platform?e.platform:"NA"}),Object(k.jsx)(O.a,{children:null!=e.plannedWhen?new Date(e.plannedWhen).toLocaleString():"NA"}),Object(k.jsx)(O.a,{children:null!=e.line.mode?e.line.mode:"NA"}),Object(k.jsx)(O.a,{children:null!=e.line.operator.name?e.line.operator.name:"NA"})]},e.tripId)}))})]})})}):Object(k.jsx)("h3",{children:"No Data Available"})]})},$=n(103),q=n(104),G=function(){var e=Object(z.e)().stop,t=Object(c.useState)([]),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){$(q,"my-awesome-program").departures(e,{duration:3}).then((function(e){r(e)})).catch(console.error)}),[e]),Object(k.jsx)("div",{children:Object(k.jsx)(U,{data:a})})};var H=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(m.a,{children:Object(k.jsx)("div",{children:Object(k.jsxs)(m.b,{children:[Object(k.jsx)(z.a,{path:"/:stop",children:Object(k.jsx)(G,{})}),Object(k.jsx)(z.a,{exact:!0,path:"/",children:Object(k.jsx)(W,{})})]})})})})},K=n(79),Q=n(61),V=n.n(Q),X=n(275);function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var Z=Object(K.b)("counter/fetchCount",function(){var e=Object(X.a)(V.a.mark((function e(t){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ee=Object(K.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(Z.pending,(function(e){e.status="loading"})).addCase(Z.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),te=ee.actions,ne=(te.increment,te.decrement,te.incrementByAmount,ee.reducer),ce=Object(K.a)({reducer:{counter:ne}}),ae=n(276);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(ae.a,{store:ce,children:Object(k.jsx)(H,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[627,1,2]]]);
//# sourceMappingURL=main.4a694acf.chunk.js.map