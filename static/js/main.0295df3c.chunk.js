(this["webpackJsonpgraphql-continents"]=this["webpackJsonpgraphql-continents"]||[]).push([[0],{35:function(e,n,t){},36:function(e,n,t){},39:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c,a=t(2),s=t.n(a),r=t(24),i=t.n(r),o=(t(35),t(25)),l=t(29),u=t(60),d=(t(36),t(6)),j=function(e,n,t){var c=Object(u.a)();return function(){return Object(d.jsx)("div",{id:c,className:"group",vlaue:1,children:e.map((function(e,a,s){var r=Object(u.a)(),i=Object(u.a)(),o=Object(u.a)();return Object(d.jsxs)("div",{id:r,className:"item",value:2,children:[Object(d.jsx)("button",{className:"node",id:i,value:3,onClick:function(){return function(e,n,t,c,a){if(c||n!==t.length-1)c&&(document.getElementById(e).style.display="block");else{var s=document.getElementById(a).parentNode,r=document.getElementById(s.className).parentNode,i=document.getElementById(s.className).children;r.style.display="none",console.log(i),[].forEach.call(i,(function(e){e.lastChild.style.display="none"}))}}(o,a,s,t,c)},children:e.name}),t&&Object(d.jsx)("div",{value:4,id:o,style:{display:"none"},className:c,children:Object(d.jsx)(n,Object(l.a)({},e))})]},r)}))})}},b=t(59),O=t(57),m=s.a.createContext({asList:function(){},data:{}}),h=function(e){var n=e.children,t=Object(b.a)(Object(O.a)(c||(c=Object(o.a)(["\n  query {\n    continents {\n      code\n      name\n      countries {\n        code\n        name\n        languages {\n          name\n          code\n        }\n      }\n    }\n  }\n"])))),a=t.loading,s=t.error,r=t.data;if(a)return Object(d.jsx)("p",{children:"Loading..."});if(s)return Object(d.jsx)("p",{children:"Error :("});var i={data:r,AsList:j};return Object(d.jsx)(m.Provider,{value:i,children:n})},v=function(e){var n=Object(a.useContext)(m).AsList,t=n(e.languages,n,!1);return Object(d.jsx)(t,{})},f=function(e){var n=(0,Object(a.useContext)(m).AsList)(e.countries,v,!0);return Object(d.jsx)(n,{})};t(39);var p=function(){var e=Object(a.useContext)(m),n=e.data,t=(0,e.AsList)(n.continents,f,!0);return Object(d.jsx)(t,{})},x=t(56),g=t(58),y=t(55),N=new x.a({uri:"https://countries.trevorblades.com/",cache:new g.a});i.a.render(Object(d.jsx)(y.a,{client:N,children:Object(d.jsx)(h,{children:Object(d.jsx)(p,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.0295df3c.chunk.js.map