(this.webpackJsonplolchest=this.webpackJsonplolchest||[]).push([[0],{19:function(e,t,n){e.exports=n(38)},24:function(e,t,n){},25:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),o=n.n(c),i=(n(24),n(25),n(3)),l=n(2),u=n(1),s=n.n(u),p=n(4),f=n(40),m=(n(33),Object(i.b)((function(e){return{filterInput:e.champions.filterInput}}),{toggleChampion:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"TOGGLE_CHAMPION",payload:e})}catch(r){console.log("Opps. Something went wrong.",r)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.champData,n=t.id,r=t.name,c=t.chestAvaliable,o=e.toggleChampion,i=e.filterInput,l=n&&n.toUpperCase().includes(i)||r.toUpperCase().includes(i)?"":"disabled";return a.a.createElement("div",{className:"champion-card ".concat(l," ").concat(!1===c?"bg-green":"")},a.a.createElement("img",{src:"http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/".concat(n,".png"),alt:r,className:"".concat(!1===c?"disabled":""),onClick:function(){return o(n)}}))}))),d=(n(34),function(e){var t=e.data,n=t.title,r=t.champions;return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,n),a.a.createElement("div",{className:"selection"},r&&Object.values(r).map((function(e){return a.a.createElement("div",{key:e.id},a.a.createElement(m,{champData:e}))}))))}),g=(n(35),Object(i.b)((function(e){return{filterInput:e.champions.filterInput}}),{updateFilter:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"UPDATE_FILTER",payload:e})}catch(r){console.log("Opps. Something went wrong.")}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.updateFilter,n=e.filterInput;return Object(r.useEffect)((function(){t(n)}),[t,n]),a.a.createElement("div",{className:"searchbar"},a.a.createElement("input",{type:"text",value:n,onChange:function(e){return t(e.target.value)},placeholder:"SEARCH CHAMPION E.G. ZYRA"}))}))),h=(n(36),Object(i.b)((function(e){return{current:e.profiles.current}}),{resetProfile:function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){var n,r,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json");case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.next=9,JSON.parse(localStorage.getItem("current"));case 9:a=e.sent,c=Object(l.a)({},a,{champions:r.data}),t({type:"RESET_PROFILE",payload:c}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("Opps. Something went wrong.",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}()},removeProfile:function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,JSON.parse(localStorage.getItem("current"));case 3:n=e.sent,t({type:"REMOVE_PROFILE",payload:n.id}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Opps. Something went wrong.",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.resetProfile,n=e.removeProfile,r=e.current;return a.a.createElement(a.a.Fragment,null,r.id&&a.a.createElement("div",{className:"profile-action"},a.a.createElement("div",{className:"btn action-btn warning",onClick:t},"RESET"),a.a.createElement("div",{className:"btn action-btn danger",onClick:n},"DELETE")))}))),E=n(18),O=(n(37),Object(i.b)(null,{addProfile:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){var r,a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json");case 3:return r=t.sent,t.next=6,r.json();case 6:a=t.sent,c={id:Object(f.a)(),title:e,champions:a.data},n({type:"ADD_PROFILE",payload:c}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log("Opps. Something went wrong.",t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},selectProfile:function(e){return function(){var t=Object(p.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{n({type:"SELECT_PROFILE",payload:e})}catch(r){console.log("Opps. Something went wrong.",r)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.profiles,n=t.profiles,c=t.current,o=e.addProfile,i=e.selectProfile,l=Object(r.useState)(""),u=Object(E.a)(l,2),s=u[0],p=u[1];return a.a.createElement("div",{className:"menu"},a.a.createElement("div",null,a.a.createElement("h1",null,"PROFILES"),a.a.createElement("ul",null,n&&n.map((function(e){return a.a.createElement("li",{key:e.id,className:c.id===e.id?"active":"",onClick:function(){return i(e)}},e.title)})))),a.a.createElement("div",{className:"form-group"},a.a.createElement("input",{type:"text",maxLength:16,value:s,onChange:function(e){return p(e.target.value)}}),a.a.createElement("div",{className:"btn add-btn success",onClick:function(){o(s),p("")}},"+")))}))),v=Object(i.b)((function(e){return{profiles:e.profiles}}),{fetchProfileData:function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("profiles")){e.next=8;break}return e.next=4,JSON.parse(localStorage.getItem("profiles"));case 4:n=e.sent,t({type:"FETCH_PROFILE_DATA",payload:n}),e.next=9;break;case 8:return e.abrupt("return");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Opps. Something went wrong.",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},fetchCurrentData:function(){return function(){var e=Object(p.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!localStorage.getItem("current")){e.next=8;break}return e.next=4,JSON.parse(localStorage.getItem("current"));case 4:n=e.sent,t({type:"FETCH_CURRENT_DATA",payload:n}),e.next=9;break;case 8:return e.abrupt("return");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Opps. Something went wrong.",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.fetchProfileData,n=e.fetchCurrentData,c=e.profiles;return Object(r.useEffect)((function(){t(),n()}),[t,n]),a.a.createElement("div",{className:"main"},a.a.createElement(O,{profiles:c}),a.a.createElement("div",{className:"content"},a.a.createElement(g,null),c.profiles.length?"":a.a.createElement("div",null,"NO PROFILE FOUND. CREATE A PROFILE TO GET STARTED!"),a.a.createElement(d,{data:c.current}),a.a.createElement(h,null)))})),b=n(5),S=n(16),y=n(17),w={champions:{},filterInput:""},j=n(8),I=n(13),N={profiles:[],current:{}},x=Object(b.combineReducers)({champions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case"UPDATE_FILTER":return Object(l.a)({},e,{filterInput:r.toUpperCase()});default:return e}},profiles:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0,r=n.type,a=n.payload;switch(r){case"FETCH_PROFILE_DATA":return Object(l.a)({},t,{profiles:a});case"FETCH_CURRENT_DATA":return Object(l.a)({},t,{current:a});case"ADD_PROFILE":return localStorage.setItem("profiles",JSON.stringify([].concat(Object(I.a)(t.profiles),[a]))),localStorage.setItem("current",JSON.stringify(a)),Object(l.a)({},t,{profiles:[].concat(Object(I.a)(t.profiles),[a]),current:a});case"SELECT_PROFILE":return localStorage.setItem("current",JSON.stringify(a)),Object(l.a)({},t,{current:a});case"TOGGLE_CHAMPION":var c=Object(j.a)({},a,Object(l.a)({},t.current.champions[a],{chestAvaliable:void 0!==t.current.champions[a].chestAvaliable&&!t.current.champions[a].chestAvaliable})),o=Object(l.a)({},t.current,{champions:Object(l.a)({},t.current.champions,{},c)});return e=t.profiles.map((function(e){return e.id===o.id?o:e})),localStorage.setItem("profiles",JSON.stringify(e)),localStorage.setItem("current",JSON.stringify(o)),Object(l.a)({},t,{current:o,profiles:e});case"RESET_PROFILE":return e=t.profiles.map((function(e){return e.id===a.id?a:e})),localStorage.setItem("profiles",JSON.stringify(e)),localStorage.setItem("current",JSON.stringify(a)),Object(l.a)({},t,{current:a,profiles:e});case"REMOVE_PROFILE":var i=(e=t.profiles.filter((function(e){return e.id!==a})))[0]?Object(l.a)({},e[0]):{};return localStorage.setItem("profiles",JSON.stringify(e)),localStorage.setItem("current",JSON.stringify(i)),Object(l.a)({},t,{current:i,profiles:e});default:return t}}}),R=[y.a],k=Object(b.createStore)(x,{},Object(S.composeWithDevTools)(b.applyMiddleware.apply(void 0,R)));var P=function(){return a.a.createElement(i.a,{store:k},a.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.da261cec.chunk.js.map