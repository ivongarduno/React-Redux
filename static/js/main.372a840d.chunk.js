(this["webpackJsonpprueba-runa"]=this["webpackJsonpprueba-runa"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(6),u=a(3),o=a(13),m=a(7),i={results:[]},p=Object(u.c)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HERO":return t.payload?Object(m.a)({},e,{results:t.payload}):Object(m.a)({},e);default:return Object(m.a)({},e)}}}),h=Object(u.d)(p,Object(u.a)(o.a)),d=a(5),E=a(14),b=a(15),f=a(17),g=a(16),v=a(18),N=(a(29),function(e){var t=e.hero,a=t.id,n=t.name,c=t.image,l=t.biography,s=t.work,u="".concat(c.url),o=l["first-appearance"],m=l["full-name"];return r.a.createElement("div",{key:a,className:"card-wrap"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card_front"},r.a.createElement("img",{className:"card_img",src:u,alt:""}),r.a.createElement("h2",{className:"card_title"},n)),r.a.createElement("div",{className:"card_back"},r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"Full Name:")," ",m),r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"First Appearance:")," ",o),r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"Publisher:")," ",l.publisher),r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"Occupation:")," ",s.occupation),r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"Occupation:")," ",l.alignment))))}),O=(a(30),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(f.a)(this,Object(g.a)(t).call(this,e))).hanldeChange=function(e){var t=e.target.name,n=e.target.value;console.log(n),a.setState(Object(d.a)({},"".concat(t),n))},a.handleGet=function(e){e.preventDefault(),a.props.fetchGetHero(a.state.text),a.setState({text:""})},a.state={text:""},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.results;return console.log(e),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-form"},r.a.createElement("img",{src:"../../img/dc-logo.jpg",alt:""}),r.a.createElement("form",{onSubmit:this.handleGet,className:"form-search"},r.a.createElement("input",{name:"text",placeholder:"Ex: Batman",value:this.state.text,onChange:this.hanldeChange}),r.a.createElement("button",{type:"submit",className:"btn btn-2"},"Buscar"))),r.a.createElement("div",{className:"container-results"},e.map((function(e){return r.a.createElement(N,{hero:e,key:e.id})}))))}}]),t}(n.Component)),j=Object(s.b)((function(e){return{results:e.results.results}}),{fetchGetHero:function(e){return console.log(e),function(t){(function(e){return fetch("https://www.superheroapi.com/api.php/10221041764491302/search/"+e).then((function(e){return e.json()})).then((function(e){return e.results}))})(e).then((function(e){t({type:"GET_HERO",payload:e})}))}}})(O),x=(a(31),function(){return r.a.createElement(s.a,{store:h},r.a.createElement("main",{className:"main"},r.a.createElement(j,null)))});l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.372a840d.chunk.js.map