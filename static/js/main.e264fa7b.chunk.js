(this["webpackJsonpreact-stock"]=this["webpackJsonpreact-stock"]||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(22),o=a.n(c),i=a(10),l=a(6),d=a(11),s=a(12),p=a(13),u=(a(30),a(17));var h={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},m={color:"#fff",textDecoration:"none"},f=function(){return n.a.createElement("header",{style:h},n.a.createElement("h1",null,"\ubc30\ub2f9\ub960"),n.a.createElement(u.b,{style:m,to:"/"},"Home")," | ",n.a.createElement(u.b,{style:m,to:"/about"},"About"))};var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"About"),n.a.createElement("p",null,"This is the TodoList app v1.0.0 It is part of a React crash cource"))},_=a(8),v=a(52),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:a.props.todo.completed?"line-through":"none"}},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=(e.id,e.title),a=e.code,r=e.date,c=e.price,o=e.share,i=e.rate,l=e.share_after_tax;return n.a.createElement("div",{style:this.getStyle()},n.a.createElement("p",null,t," ",a," ",r," ",c," ",o," ",i," ",l))}}]),t}(r.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.todos.map((function(e){return n.a.createElement(E,{todo:e})}))}}]),t}(r.Component);Object(v.a)({table:{minWidth:650}});function g(e,t,a,r,n){return{name:e,calories:t,fat:a,carbs:r,protein:n}}g("Frozen yoghurt",159,6,24,4),g("Ice cream sandwich",237,9,37,4.3),g("Eclair",262,16,24,6),g("Cupcake",305,3.7,67,4.3),g("Gingerbread",356,16,49,3.9);var y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={todos:[{id:1,title:"\ub86f\ub370\ub9ac\uce20",code:"033590",date:"2019-12",price:6230,share:84,rate:1.35,share_after_tax:71,completed:!1},{id:2,title:"\ub86f\ub370\ub9ac\uce20",code:"033590",date:"2020.06",price:6230,share:158,rate:2.545,share_after_tax:134,completed:!1},{id:3,title:"\ub86f\ub370\ub9ac\uce20",code:"033590",date:"2020.12.",price:6230,share:158,rate:2.54,share_after_tax:134,completed:!1},{id:4,title:"NH\ud504\ub77c\uc784\ub9ac\uce20",code:"388100",date:"2020.05.",price:6030,share:125,rate:2.07,share_after_tax:106,completed:!1},{id:5,title:"NH\ud504\ub77c\uc784\ub9ac\uce20",code:"388100",date:"2020.09.",price:6030,share:125,rate:2.07,share_after_tax:106,completed:!1},{id:6,title:"\uc2e0\ud55c\uc54c\ud30c\ub9ac\uce20",code:"293940",date:"2020.03",price:7570,share:140,rate:1.85,share_after_tax:118,completed:!1},{id:7,title:"\uc2e0\ud55c\uc54c\ud30c\ub9ac\uce20",code:"293940",date:"2020.09",price:7570,share:140,rate:1.85,share_after_tax:118,completed:!1},{id:8,title:"\uc774\ub9ac\uce20\ucf54\ud06c\ub819",code:"088260",date:"2019.12",price:6820,share:169,rate:2.48,share_after_tax:143,completed:!1},{id:9,title:"\uc774\ub9ac\uce20\ucf54\ud06c\ub819",code:"088260",date:"2020.06",price:6820,share:170,rate:2.49,share_after_tax:144,completed:!1},{id:10,title:"\uc774\ub9ac\uce20\ucf54\ud06c\ub819",code:"088260",date:"2020.12",price:6820,share:170,rate:2.49,share_after_tax:144,completed:!1}]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(u.a,null,n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"container"},n.a.createElement(f,null),n.a.createElement(_.a,{exact:!0,path:"/",render:function(t){return n.a.createElement(n.a.Fragment,null,"\ub9ac\uce20\uba85"," ","\ubc30\ub2f9\uc2dc\uae30"," ","\ud604\uc7ac\uc8fc\uac00"," ","\ubc30\ub2f9\uae08"," ","\ubc30\ub2f9\ub960"," ","\ubc30\ub2f9\uae08(\uc138\ud6c4)",n.a.createElement(x,{todos:e.state.todos}))}}),n.a.createElement(_.a,{path:"/about",component:b}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e264fa7b.chunk.js.map