(this.webpackJsonproboto=this.webpackJsonproboto||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=(a(12),a(3)),s=a(4),i=a(6),u=a(5),h=function(e){var t=e.name,a=e.email,n=e.id;return r.a.createElement("div",{className:" dib pa4 ma2 br4 shadow-5 tc bg-blue grow"},r.a.createElement("img",{src:"https:\\robohash.org/".concat(n,"?size=200x200"),alt:"robot"}),r.a.createElement("p",null,t),r.a.createElement("p",null,a))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,a){return r.a.createElement(h,{key:a,id:t[a].id,name:t[a].name,email:t[a].email})})))},f=function(e){var t=e.searchchange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 br3 bg-lightest-blue ",type:"search",placeholder:"search robots",onChange:t}))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"800px",scrollBehavior:"auto"}},e.children)},p=(a(13),a(14),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={robots:[],searchfield:""},e.onsearchchange=function(t){e.setState({searchfield:t.target.value})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"ROBOFRIEND"),r.a.createElement(f,{searchchange:this.onsearchchange}),r.a.createElement(d,null,r.a.createElement(m,{robots:t})))}}]),a}(n.Component));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.686036b4.chunk.js.map