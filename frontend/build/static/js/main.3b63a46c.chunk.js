(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t,n){e.exports=n(40)},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),s=n(14),c=n(13),o=n(20),u=n(11),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:null,events:null},t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.name,r=t.userEvents,i=t.linkId,s=t.link,c=t.rating;switch(n){case"SET_USER":return Object(u.a)({},e,{name:a,events:r});case"SET_RATING":return Object(u.a)({},e,{events:e.events.map((function(e){return e.id===i?Object(u.a)({},e,{rating:c}):e}))});case"LINK_EVENT":return Object(u.a)({},e,{events:[].concat(Object(o.a)(e.events),[s])});case"UNLINK_EVENT":return Object(u.a)({},e,{events:e.events.filter((function(e){return e.id!==i}))});default:return e}},d=n(7),h=n.n(d),v=n(1),f=n(2),m=n(4),p=n(3),g=n(5),b=n(21),y="https://events-calendar-morelia.herokuapp.com",E=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z/,k=function e(t){switch(typeof t){case"object":return t&&Object.keys(t).forEach((function(n){t[n]=e(t[n])})),t;case"string":return t.match(E)?new Date(t.slice(0,19)):t;default:return t}},O=function(e){var t=e.method,n=void 0===t?"GET":t,a=e.path,r=void 0===a?"":a,i=e.body,s=void 0===i?null:i,c=Object(b.a)(e,["method","path","body"]),o={method:n,headers:new Headers({Accept:"application/json","Content-Type":"application/json"}),body:s&&JSON.stringify(s),mode:"cors",cache:"default"};return fetch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.keys(t).map((function(e){return"/".concat(e,"/").concat(t[e])})).join("");return"".concat(y).concat(n,"/").concat(e)}(r,c),o).then((function(e){return e.json()})).then((function(e){if("ok"!==e.status)throw Error(e.status);return e.payload})).then(k)},C=function(){return O({path:"events"})},j=function(e,t){return O({method:"POST",path:"users",body:{name:e,email:t}})},N=function(e){return O({users:e})},S={create:function(e,t){return O({method:"POST",path:"userevents",events:t.id,users:e.name})},update:function(e,t){return O({method:"PUT",userevents:e,body:{rating:t}})},delete:function(e){return O({method:"DELETE",userevents:e})}},I=(n(33),n(8)),R=n(10),w=n.n(R),L=(n(34),{false:"\u2606",true:"\u2605"}),T=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleRateClick=function(e){var t=e.target.dataset.rate,a=n.props.onChange;a&&a(+t)},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.value;return r.a.createElement("div",{className:"Rating"},r.a.createElement("button",{"data-rate":"1",type:"button",onClick:this.handleRateClick},L[e>0]),r.a.createElement("button",{"data-rate":"2",type:"button",onClick:this.handleRateClick},L[e>1]),r.a.createElement("button",{"data-rate":"3",type:"button",onClick:this.handleRateClick},L[e>2]),r.a.createElement("button",{"data-rate":"4",type:"button",onClick:this.handleRateClick},L[e>3]),r.a.createElement("button",{"data-rate":"5",type:"button",onClick:this.handleRateClick},L[e>4]))}}]),t}(r.a.Component);T.defaultProps={value:null,onChange:null};n(35);var _=function(e){return new Date(864e5*Math.floor(e/864e5))},D=function(e){return Math.floor(e%864e5)},U=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleShowMore=function(){var e=n.state.extended;n.setState({extended:!e})},n.handleLinkBtnClick=function(){var e,t;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e=n.state.scheduled,!(t=n.props.onChange(Object(I.a)(n),{scheduled:!e}))){a.next=5;break}return a.next=5,h.a.awrap(t.then((function(){n.setState({scheduled:!e})})));case 5:case"end":return a.stop()}}))},n.handleRatingClick=function(e){n.props.onChange(Object(I.a)(n),{rating:e})},n.state={extended:!!e.extended,rating:e.rating||null,scheduled:!!e.scheduled,logged:!1},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"updateState",value:function(e){var t=e.scheduled,n=e.rating,a=e.logged;this.setState({scheduled:t,rating:n,logged:a})}},{key:"formattedSchedule",value:function(){if(this.isSingleDay){var e=this.props.info,t=e.begins,n=e.ends;return D(t)===D(n)?"".concat(this.beginDay.toDateString(),", at ").concat(w()("hh:mm",t)):"".concat(this.beginDay.toDateString(),", from ").concat(w()("hh:mm",t)," to ").concat(w()("hh:mm",n))}var a=this.props.info,r=a.begins,i=a.ends;return D(r)||D(i)?"From ".concat(r.toDateString()," to ").concat(i.toDateString()):"From ".concat(w()("dd/MM/yyyy at hh:mm",r)," to ").concat(w()("dd/MM/yyyy at hh:mm",i))}},{key:"render",value:function(){var e=this.props.info,t=e.title,n=e.description,a=e.category,i=this.state,s=i.extended,c=i.scheduled,o=i.rating,u=i.logged;return r.a.createElement("div",{className:"Event"},r.a.createElement("div",{className:"time-line"}),r.a.createElement("div",{className:"schedule"},this.formattedSchedule()),r.a.createElement("div",{className:"title"},t),r.a.createElement("div",{className:"description",style:s?{}:{display:"none"}},s?n:""),r.a.createElement("div",{className:"category"},a),r.a.createElement("button",{type:"button",className:"btn ".concat(c?"scheduled":"add"),style:u?{}:{display:"none"},onClick:this.handleLinkBtnClick},r.a.createElement("span",null,c?"- schedule":"+ schedule")),r.a.createElement("button",{type:"button",className:"more",onClick:this.handleShowMore},s?"Show less":"Show more"),r.a.createElement("div",{className:"rating",style:u&&c?{}:{display:"none"}},r.a.createElement(T,{value:o,onChange:this.handleRatingClick})))}},{key:"id",get:function(){return this.props.info.id}},{key:"beginDay",get:function(){return _(this.props.info.begins)}},{key:"endDay",get:function(){return _(this.props.info.ends)}},{key:"isSingleDay",get:function(){return Math.floor(this.beginDay)===Math.floor(this.endDay)}}]),t}(r.a.Component);U.defaultProps={extended:!1,rating:null,scheduled:!1};var x=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={events:null},n.eventNodes={},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"updateEvent",value:function(e,t){var n=t.scheduled,a=t.rating,r=t.logged;this.eventNodes[e].current.updateState({scheduled:n,rating:a,logged:r})}},{key:"render",value:function(){var e=this,t=this.props.onChange,n=this.state.events;return r.a.createElement("div",{className:"events-list"},n?n.map((function(n){var a=n.id;return e.eventNodes[a]=e.eventNodes[a]||r.a.createRef(),r.a.createElement(U,{key:a,ref:e.eventNodes[a],info:n,onChange:t})})):"Loading...")}},{key:"eventsInfo",set:function(e){this.setState({events:e})}}]),t}(r.a.Component),M=(n(36),null),V=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleClose=function(){n.setState({visible:!1})},M=M||Object(I.a)(n),n.state={message:e.message||"",visible:!!e.visible},n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.state,t=e.message,n=e.visible;return r.a.createElement("div",{className:"ErrorMsg ".concat(n?"":"hidden")},r.a.createElement("button",{className:"closeBtn",type:"button",onClick:this.handleClose},"\u274c"),r.a.createElement("div",{className:"message"},t))}}]),t}(r.a.Component),F=function(e){M&&(M.setState({message:e,visible:!0}),setInterval((function(){M.setState({visible:!1})}),1e4))};V.defaultProps={message:"",visible:!1};n(37);var P=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).hideForm=function(){n.setState({formVisible:!1})},n.handleLogClick=function(e){var t=e.target;n.nameInput.current.value="",n.emailInput.current.value="",n.setState({formVisible:!0,login:!!t.dataset.login})},n.handleSubmitClick=function(){""!==n.nameInput.current.value?(n.state.login?n.doLogin():n.doSignup()).catch((function(e){var t=e.message;F(t)})).finally(n.hideForm):n.hideForm()},n.state={formVisible:!1,login:!0},n.nameInput=r.a.createRef(),n.emailInput=r.a.createRef(),n.scheduleMemo=null,n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(){this.state.formVisible&&this.nameInput.current.focus();var e=this.props,t=e.name;(0,e.onChange)(t,this.schedule)}},{key:"addEvent",value:function(e){var t=e.id,n=e.event_id,a=e.rating;(0,this.props.linkEvent)({id:t,event_id:n,rating:a})}},{key:"removeEvent",value:function(e){var t=e.id;(0,this.props.unlinkEvent)(t)}},{key:"changeRating",value:function(e){var t=e.id,n=e.rating;(0,this.props.setRating)(t,n)}},{key:"doSignup",value:function(){var e,t,n=this;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return e=this.nameInput.current.value,t=this.emailInput.current.value,a.abrupt("return",j(e,t).then((function(e){var t=e.name;(0,n.props.setUser)(t)})));case 3:case"end":return a.stop()}}),null,this)}},{key:"doLogin",value:function(){var e,t=this;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.nameInput.current.value,n.abrupt("return",N(e).then((function(e){var n=e.name,a=e.userevents;(0,t.props.setUser)(n,a)})));case 2:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state,t=e.login,n=e.formVisible;return r.a.createElement("div",{className:"User"},r.a.createElement("div",{className:"name",style:this.name?{}:{fontSize:"0.9rem",color:"lightgrey"}},this.name?"Welcome ".concat(this.name,"!"):"Login to save your schedule  \u27a1"),r.a.createElement("button",{type:"button",className:"login","data-login":!0,onClick:this.handleLogClick},"Login"),r.a.createElement("button",{type:"button",className:"signup",onClick:this.handleLogClick},"Signup"),r.a.createElement("div",{className:"form",style:n?{}:{display:"none"}},r.a.createElement("input",{type:"input",className:"name-in",ref:this.nameInput,placeholder:"Name"}),r.a.createElement("input",{type:"email",className:"email-in",ref:this.emailInput,placeholder:"email",style:t?{display:"none"}:{}}),r.a.createElement("button",{type:"button",className:"submit",onClick:this.handleSubmitClick},t?"Log In":"Sign Up"),r.a.createElement("button",{type:"button",className:"cancel",onClick:this.hideForm},"Cancel")))}},{key:"name",get:function(){return this.props.name}},{key:"schedule",get:function(){var e=this.props.events,t={};return e?(e.forEach((function(e){var n=e.id,a=e.event_id,r=e.rating;t[a]={id:n,rating:r}})),t):t}}]),t}(r.a.Component);P.defaultProps={name:null,events:null};var A=Object(s.b)((function(e){return{name:e.name,events:e.events}}),(function(e){return{setUser:function(t,n){return e(function(e,t){return{type:"SET_USER",name:e,userEvents:t}}(t,n))},setRating:function(t,n){return e(function(e,t){return{type:"SET_RATING",linkId:e,rating:t}}(t,n))},linkEvent:function(t){return e(function(e){return{type:"LINK_EVENT",link:e}}(t))},unlinkEvent:function(t){return e(function(e){return{type:"UNLINK_EVENT",linkId:e}}(t))}}}),null,{forwardRef:!0})(P),B=(n(38),function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(p.a)(t).call(this,e))).addEventToUser=function(e){return S.create(n.user.current,e).then((function(e){n.user.current.addEvent(e)})).catch((function(e){var t=e.message;F(t)}))},n.removeEventFromUser=function(e){var t=n.user.current.schedule;return S.delete(t[e.id].id).then((function(e){n.user.current.removeEvent(e)})).catch((function(e){var t=e.message;F(t)}))},n.setEventRating=function(e,t){var a=n.user.current.schedule;return S.update(a[e.id].id,t).then((function(e){n.user.current.changeRating(e)})).catch((function(e){var t=e.message;F(t)}))},n.handleOnUserChange=function(){var e=n.user.current,t=e.schedule,a=e.name,r=n.eventsList.current;n.eventsInfo.forEach((function(e){var n=e.id,i=t[n];r.updateEvent(n,{scheduled:!!i,rating:i?i.rating:null,logged:!!a})}))},n.handleOnEventChange=function(e,t){var a=t.scheduled,r=t.rating;if(n.user.current.name){if(void 0!==a)return a?n.addEventToUser(e):n.removeEventFromUser(e);if(void 0!==r)return n.setEventRating(e,r)}return null},n.user=r.a.createRef(),n.eventsList=r.a.createRef(),n.eventsInfo=null,n}return Object(g.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.fetchEvents()}},{key:"fetchEvents",value:function(){var e=this;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(C().then((function(t){e.eventsList.current&&(e.eventsInfo=t.sort((function(e,t){return e.begins-t.begins})),e.eventsList.current.eventsInfo=e.eventsInfo)})));case 2:case"end":return t.stop()}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-header"},r.a.createElement(A,{ref:this.user,onChange:this.handleOnUserChange}),r.a.createElement("h1",null,"Events")),r.a.createElement(x,{ref:this.eventsList,onChange:this.handleOnEventChange}),r.a.createElement(V,null))}}]),t}(r.a.Component)),K=(n(39),Object(c.b)(l,{formVisible:!1},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));Object(i.render)(r.a.createElement(s.a,{store:K},r.a.createElement(B,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3b63a46c.chunk.js.map