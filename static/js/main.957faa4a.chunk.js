(this["webpackJsonpprueba-runa"]=this["webpackJsonpprueba-runa"]||[]).push([[0],{19:function(e,t,a){e.exports=a(32)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=a(6),o=a(3),u=a(13),i=a(7),m={results:[]},p=Object(o.c)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_HERO":return t.payload?Object(i.a)({},e,{results:t.payload}):Object(i.a)({},e);default:return Object(i.a)({},e)}}}),h=Object(o.d)(p,Object(o.a)(u.a)),d=a(5),f=a(14),b=a(15),E=a(17),g=a(16),v=a(18),O=(a(29),function(e){var t=e.hero,a=t.id,n=t.name,c=t.image,l=t.biography,s=t.work,o="".concat(c.url),u=l["first-appearance"];return r.a.createElement("div",{key:a,className:"card-wrap"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card_front"},r.a.createElement("img",{className:"card_img",src:o,alt:""}),r.a.createElement("h2",{className:"card_title"},n)),r.a.createElement("div",{className:"card_back"},r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"First Appearance:")," ",u),r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"Publisher:")," ",l.publisher),r.a.createElement("p",{className:"card_text"},r.a.createElement("b",null,"Occupation:")," ",s.occupation))))}),j=(a(30),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).hanldeChange=function(e){var t=e.target.name,n=e.target.value;console.log(n),a.setState(Object(d.a)({},"".concat(t),n))},a.handleGet=function(e){e.preventDefault(),a.props.fetchGetHero(a.state.text),a.setState({text:""})},a.state={text:""},a}return Object(v.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props.results;return console.log(e),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container-form"},r.a.createElement("img",{src:"../../img/dc-logo.jpg",alt:""}),r.a.createElement("form",{onSubmit:this.handleGet,className:"form-search"},r.a.createElement("input",{name:"text",placeholder:"Ex: Batman",value:this.state.text,onChange:this.hanldeChange}),r.a.createElement("button",{type:"submit",className:"btn btn-2"},"Buscar"))),r.a.createElement("div",{className:"container-results"},e.map((function(e){return r.a.createElement(O,{hero:e})}))))}}]),t}(n.Component)),N=Object(s.b)((function(e){return{results:e.results.results}}),{fetchGetHero:function(e){return console.log(e),function(t){(function(e){return fetch("https://www.superheroapi.com/api.php/10221041764491302/search/"+e).then((function(e){return e.json()})).then((function(e){return e.results}))})(e).then((function(e){t({type:"GET_HERO",payload:e})}))}}})(j),x=(a(31),function(){return r.a.createElement(s.a,{store:h},r.a.createElement("main",{className:"main"},r.a.createElement(N,null)))});l.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.957faa4a.chunk.js.map