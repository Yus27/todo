(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{45:function(e,t,n){e.exports=n(85)},50:function(e,t,n){},69:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(19),s=n.n(r),i=(n(50),n(27)),c=n(14),l=n.n(c),u=n(8),d=n(9),p=n(10),h=n(12),g=n(11),f=n(13),m=n(20),v=n.n(m),C=(n(69),n(70),n(22)),b=n(16),w=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(g.a)(t).call(this,e))).onChange=function(e){n.setState({value:e.target.value})},n.onFormSubmit=function(e){e.preventDefault(),""!==n.state.value&&(n.props.onAddTodo(n.state.value),n.setState({value:""}))},n.state={value:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(b.a,{onSubmit:this.onFormSubmit},a.a.createElement(b.a.Control,{type:"text",placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c...",value:this.state.value,onChange:this.onChange}))}}]),t}(a.a.Component),O=n(17),y=n(21),T=n(42),k=n(43),j=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).handleChangeCategory=function(e){n.props.onChangeCurrentCategory(e.target.value)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t;e=this.props.showCompleted?"outline-primary":"outline-secondary",t=this.props.draggable?"outline-primary":"outline-secondary";var n=this.props.categories.map((function(e,t){return a.a.createElement("option",{key:e.id,value:e.id},"".concat(e.catTitle))}));return a.a.createElement("div",{style:{display:"flex"}},a.a.createElement(b.a.Control,{as:"select",value:this.props.currentCategory,onChange:this.handleChangeCategory},n),a.a.createElement(O.a,{variant:e,style:{width:"100%",marginLeft:"10px"},onClick:this.props.onChangeShowCompleted},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"),a.a.createElement(O.a,{variant:t,style:{width:"100%",marginLeft:"10px"},onClick:this.props.onChangeDraggable},"\u041f\u0435\u0440\u0435\u0434\u0432\u0438\u0433\u0430\u0442\u044c"),a.a.createElement(O.a,{style:{width:"100%",marginLeft:"10px"},onClick:this.props.onSortTodosInAlphabeticalOrder},"\u041e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),a.a.createElement(O.a,{style:{marginLeft:"10px"},onClick:this.props.onRefresh},a.a.createElement(y.Icon,{icon:T.refresh})),a.a.createElement(O.a,{variant:"primary",style:{marginLeft:"10px"},onClick:this.props.logout},a.a.createElement(y.Icon,{icon:k.signOut})))}}]),t}(a.a.Component),E=n(25),S=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(E.a,{variant:this.props.variant},this.props.msg)}}]),t}(a.a.Component),x=n(31),I=n(44),D=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(a)))).handleTodoClick=function(e){n.props.onChangeTodoCompleted(n.props.todo)},n.handleFocus=function(e){},n.handleTodoDelete=function(e){n.props.onDelete(n.props.todo)},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e;return e=this.props.todo.isCompleted?"secondary":"primary",a.a.createElement(C.a.Item,{style:{display:"flex"}},a.a.createElement(O.a,{variant:e,style:{width:this.props.width},onClick:this.handleTodoClick,onFocus:this.handleFocus},"".concat(this.props.todo.title)),a.a.createElement(O.a,{style:{marginLeft:"10px"},onClick:this.handleTodoDelete},a.a.createElement(y.Icon,{icon:I.remove})))}}]),t}(a.a.Component),A=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(h.a)(this,Object(g.a)(t).call(this))).sortTodos=function(e){var t=e.slice();return t.sort((function(e,t){return e.order>t.order?1:-1})),t},e.onSortEnd=function(t){var n=t.oldIndex,o=t.newIndex;if(n!==o){var a=e.visibleTodos[n],r=e.visibleTodos.slice();r.splice(n,1);var s=r.slice();s.splice(o,0,a);var i=s.slice(),c=s.map((function(e){return e.order}));c.sort((function(e,t){return e>t?1:-1}));for(var l=0;l<i.length;l++)i[l].order=c[l];e.props.onSortEnd(i)}},e.TodosOfCategory=null,e.sortedTodos=null,e.visibleTodos=null,e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;if(this.TodosOfCategory=this.props.todos.filter((function(t){return+t.category===+e.props.currentCategory})),this.sortedTodos=this.sortTodos(this.TodosOfCategory),this.visibleTodos=this.sortedTodos.filter((function(t){return e.props.showCompleted||!t.isCompleted})),this.props.draggable){var t=Object(x.b)((function(t){var n=t.value;return(a.a.createElement("div",null,a.a.createElement(D,{key:n.id,todo:n,showCompleted:e.props.showCompleted,onChangeTodoCompleted:e.props.onChangeTodoCompleted,onDelete:e.props.onDelete,width:"80%"})))})),n=Object(x.a)((function(e){var n=e.items;return a.a.createElement("div",null,n.map((function(e,n){return a.a.createElement(t,{key:e.id,index:n,value:e})})))}));return a.a.createElement(n,{items:this.visibleTodos,onSortEnd:this.onSortEnd})}return this.visibleTodos.map((function(t,n){return a.a.createElement(D,{key:t.id,todo:t,showCompleted:e.props.showCompleted,onChangeTodoCompleted:e.props.onChangeTodoCompleted,onDelete:e.props.onDelete,width:"100%"})}))}}]),t}(a.a.Component),L=n(6),P=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target.name,o=e.target.value;n.setState(Object(L.a)({},t,o))},n.handlseSubmit=function(e){e.preventDefault(),n.props.loginSubmit(n.state.login,n.state.password)},n.state={login:"",password:""},n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(b.a,{onSubmit:this.handlseSubmit},a.a.createElement(b.a.Group,{controlId:"formBasicEmail"},a.a.createElement(b.a.Label,null,"\u041b\u043e\u0433\u0438\u043d"),a.a.createElement(b.a.Control,{name:"login",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d",onChange:this.handleInputChange,value:this.state.login})),a.a.createElement(b.a.Group,{controlId:"formBasicPassword"},a.a.createElement(b.a.Label,null,"\u041f\u0430\u0440\u043e\u043b\u044c"),a.a.createElement(b.a.Control,{name:"password",type:"password",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",onChange:this.handleInputChange,value:this.state.password})),a.a.createElement(O.a,{variant:"primary",type:"submit"},"\u0412\u0445\u043e\u0434")),this.props.wrongLoginOrPassword&&a.a.createElement(E.a,{variant:"danger"},"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"))}}]),t}(a.a.Component),F="https://boiling-woodland-05459.herokuapp.com/api/",U="https://boiling-woodland-05459.herokuapp.com/categories/",M="https://boiling-woodland-05459.herokuapp.com/auth/token/",B=function(e){function t(){var e;Object(d.a)(this,t),(e=Object(h.a)(this,Object(g.a)(t).call(this))).handleTimer=function(){null!==e.state.token&&(e.state.loading||e.refreshTodos(!1))},e.setToken=function(t){null===t?localStorage.removeItem("token"):localStorage.setItem("token",t),e.setState((function(e){return Object(u.a)({},e,{token:t,wrongLoginOrPassword:!1})}))},e.getTokenInfo=function(){return{headers:{Authorization:"Token "+e.state.token}}},e.login=function(t,n){var o,a,r;return l.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,o={username:t,password:n},s.next=4,l.a.awrap(v.a.post(M+"login/",o));case 4:a=s.sent,r=a.data.auth_token,e.setToken(r),e.refreshTodos(!0),s.next=13;break;case 10:s.prev=10,s.t0=s.catch(0),e.setState((function(e){return Object(u.a)({},e,{wrongLoginOrPassword:!0})}));case 13:case"end":return s.stop()}}),null,null,[[0,10]])},e.logout=function(){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.a.awrap(v.a.post(M+"logout/",null,e.getTokenInfo()));case 3:e.setToken(null),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),null,null,[[0,6]])},e.removeOldTodos=function(t){var n=e.state.todos.filter((function(e){var n=e.id;return-1!==t.findIndex((function(e){return e.id===n}))}));e.setState((function(e){return Object(u.a)({},e,{todos:n})}))},e.addNewTodos=function(t){var n=t.filter((function(t){var n=t.id;return-1===e.state.todos.findIndex((function(e){return e.id===n}))}));e.setState((function(e){return Object(u.a)({},e,{todos:e.todos.concat(n)})}))},e.getTodosFromAPI=function(){var t,n;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,l.a.awrap(v.a.get(F,e.getTokenInfo()));case 3:return t=o.sent,n=t.data.slice(),o.abrupt("return",n);case 8:throw o.prev=8,o.t0=o.catch(0),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c");case 11:case"end":return o.stop()}}),null,null,[[0,8]])},e.getCategoriesFromAPI=function(){var t,n;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,l.a.awrap(v.a.get(U,e.getTokenInfo()));case 3:t=o.sent,n=t.data.slice(),e.setState((function(e){return Object(u.a)({},e,{categories:n})})),o.next=11;break;case 8:throw o.prev=8,o.t0=o.catch(0),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0434\u0430\u043d\u043d\u044b\u043c \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0439");case 11:case"end":return o.stop()}}),null,null,[[0,8]])},e.compareDates=function(e,t){},e.updateTodosToAPI=function(t){var n,o;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(0!==e.state.todos.length){a.next=2;break}return a.abrupt("return");case 2:if(a.prev=2,n=t.filter((function(t){var n=t.id,o=e.state.todos.findIndex((function(e){return e.id===n}));return-1!==o&&Date.parse(t.lastChangeDateTime)>Date.parse(e.state.todos[o].lastChangeDateTime)})),console.log("newersFromAPI",n),o=e.state.todos.filter((function(e){var n=e.id,o=t.findIndex((function(e){return e.id===n}));return-1!==o&&Date.parse(e.lastChangeDateTime)>Date.parse(t[o].lastChangeDateTime)})),console.log("newersFromLocal",o),0===o.length){a.next=10;break}return a.next=10,l.a.awrap(v.a.put(F,o,e.getTokenInfo()));case 10:0!==n.length&&e.setState((function(e){return Object(u.a)({},e,{todos:n})})),a.next=16;break;case 13:throw a.prev=13,a.t0=a.catch(2),new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445");case 16:case"end":return a.stop()}}),null,null,[[2,13]])},e.refreshTodos=function(){var t,n,o=arguments;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=o.length>0&&void 0!==o[0]&&o[0],e.setState((function(e){return Object(u.a)({},e,{loading:!0})})),a.prev=2,a.next=5,l.a.awrap(e.getTodosFromAPI());case 5:return n=a.sent,e.removeOldTodos(n),a.prev=7,a.next=10,l.a.awrap(e.updateTodosToAPI(n));case 10:e.addNewTodos(n),e.setState((function(e){return Object(u.a)({},e,{loading:!1,isError:!1,errorMessage:""})})),a.next=18;break;case 14:a.prev=14,a.t0=a.catch(7),console.log(a.t0.message),e.setState((function(e){return Object(u.a)({},e,{loading:!1,isError:!1,errorMessage:"",todos:n})}));case 18:t&&e.getCategoriesFromAPI(),a.next=25;break;case 21:a.prev=21,a.t1=a.catch(2),console.log(a.t1.message),e.setToken(null);case 25:case"end":return a.stop()}}),null,null,[[2,21],[7,14]])},e.onChangeTodoCompleted=function(t){var n=new Date,o={id:t.id,title:t.title,isCompleted:!t.isCompleted,lastChangeDateTime:n.toISOString(),order:t.order,category:t.category};e.setState((function(e){return Object(u.a)({},e,{todos:e.todos.map((function(e){return e.id===o.id?o:e}))})}))},e.onDelete=function(t){return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e.setState((function(e){return Object(u.a)({},e,{loading:!0})})),n.prev=1,n.next=4,l.a.awrap(v.a.delete(F+t.id+"/",e.getTokenInfo()));case 4:e.setState((function(e){return Object(u.a)({},e,{loading:!1,todos:e.todos.filter((function(e){return e.id!==t.id}))})})),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(1),console.log(n.t0.message);case 10:case"end":return n.stop()}}),null,null,[[1,7]])},e.onChangeShowCompleted=function(){e.setState((function(e){return Object(u.a)({},e,{showCompleted:!e.showCompleted})}))},e.onChangeDraggable=function(){e.setState((function(e){return Object(u.a)({},e,{draggable:!e.draggable})}))},e.onChangeCurrentCategory=function(t){e.setState((function(e){return Object(u.a)({},e,{currentCategory:t})}))},e.onAddTodo=function(t){var n,o,a,r,s,c,d,p,h,g;return l.a.async((function(f){for(;;)switch(f.prev=f.next){case 0:if(void 0!==(n=e.state.todos.find((function(e){return e.title.toUpperCase()===t.toUpperCase()})))&&n.category===e.state.currentCategory){f.next=22;break}return o=e.state.todos.map((function(e){return e.order})),a=Math.max.apply(Math,Object(i.a)(o)),r=new Date,s={title:t,isCompleted:!1,lastChangeDateTime:r.toISOString(),order:a+1,category:e.state.currentCategory},e.setState((function(e){return Object(u.a)({},e,{loading:!0})})),f.prev=7,f.next=10,l.a.awrap(v.a.post(F,s,e.getTokenInfo()));case 10:c=f.sent,d=c.data,(p=e.state.todos.slice()).push(d),e.setState((function(e){return Object(u.a)({},e,{todos:p,loading:!1})})),f.next=20;break;case 17:f.prev=17,f.t0=f.catch(7),console.log(f.t0.message);case 20:f.next=23;break;case 22:void 0!==n&&n.category===e.state.currentCategory&&n.isCompleted&&(h=new Date,g={id:n.id,title:n.title,isCompleted:!1,lastChangeDateTime:h.toISOString(),order:n.order,category:n.category},e.setState((function(e){return Object(u.a)({},e,{todos:e.todos.map((function(e){return e.id===g.id?g:e}))})})));case 23:case"end":return f.stop()}}),null,null,[[7,17]])},e.changeTodos=function(t){e.setState((function(e){return Object(u.a)({},e,{todos:e.todos.map((function(e){var n=t.find((function(t){return t.id===e.id}));return void 0===n?e:Object(u.a)({},e,{order:n.order})}))})}))},e.sortTodosInAlphabeticalOrder=function(){var t=e.state.todos.slice();t.sort((function(e,t){return e.title.toUpperCase()>t.title.toUpperCase()?1:e.title.toUpperCase()===t.title.toUpperCase()?0:e.title.toUpperCase()<t.title.toUpperCase()?-1:0})),t=t.map((function(e,t,n){return Object(u.a)({},e,{order:t})})),e.setState((function(e){return Object(u.a)({},e,{todos:t,loading:!1})}))},e.state={token:localStorage.getItem("token"),wrongLoginOrPassword:!1,loading:!0,isError:!1,errorMessage:"",showCompleted:!1,draggable:!1,currentCategory:1,categories:[],todos:[]};return e.timer=setInterval(e.handleTimer,6e4),e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){null!==this.state.token&&this.refreshTodos(!0)}},{key:"componentDidUpdate",value:function(e,t,n){t.token!==this.state.token&&(null!==this.state.token?this.refreshTodos(!0):this.setState((function(e){return Object(u.a)({},e,{categories:[],todos:[]})})))}},{key:"render",value:function(){return null===this.state.token?a.a.createElement(P,{loginSubmit:this.login,wrongLoginOrPassword:this.state.wrongLoginOrPassword}):(e=this.state.isError?a.a.createElement(S,{msg:this.state.errorMessage,variant:"danger"}):this.state.loading?a.a.createElement(S,{msg:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...",variant:"info"}):a.a.createElement(a.a.Fragment,null,a.a.createElement(C.a.Item,null,a.a.createElement(j,{showCompleted:this.state.showCompleted,draggable:this.state.draggable,onChangeShowCompleted:this.onChangeShowCompleted,onChangeDraggable:this.onChangeDraggable,onRefresh:this.refreshTodos,categories:this.state.categories,currentCategory:this.state.currentCategory,onChangeCurrentCategory:this.onChangeCurrentCategory,onSortTodosInAlphabeticalOrder:this.sortTodosInAlphabeticalOrder,logout:this.logout})),a.a.createElement(A,{todos:this.state.todos,currentCategory:this.state.currentCategory,showCompleted:this.state.showCompleted,draggable:this.state.draggable,onChangeTodoCompleted:this.onChangeTodoCompleted,onDelete:this.onDelete,onSortEnd:this.changeTodos}),a.a.createElement(C.a.Item,null,a.a.createElement(w,{onAddTodo:this.onAddTodo}))),a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},e)));var e}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.45bf1f47.chunk.js.map