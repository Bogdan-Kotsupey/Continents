(this["webpackJsonpgraphql-continents"]=this["webpackJsonpgraphql-continents"]||[]).push([[0],{35:function(n,e,t){},38:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r,c=t(4),a=t.n(c),o=t(24),i=t.n(o),s=(t(35),t(25)),d=t(57),j=t(55),l=t(6),h=a.a.createContext({data:{}}),u=function(n){var e=n.children,t=Object(d.a)(Object(j.a)(r||(r=Object(s.a)(["\n    query {\n      children: continents {\n        name\n        code\n        children: countries {\n          name\n          code\n          children: languages {\n            name\n            code\n          }\n        }\n      }\n    }\n  "])))),c=t.loading,a=t.error,o=t.data;if(c)return Object(l.jsx)("p",{children:"Loading..."});if(a)return Object(l.jsx)("p",{children:"Error :("});var i={data:o};return Object(l.jsx)(h.Provider,{value:i,children:e})},b=(t(38),t(29)),O=function n(e){var t=e.obj,r=e.str,a=e.indicator,o=Object(c.useContext)(h).treeClose,i=Object(c.useState)(!1),s=Object(b.a)(i,2),d=s[0],j=s[1];return Object(c.useEffect)((function(){t.hasOwnProperty("name")||j(!0)}),[]),Object(l.jsxs)("div",{className:"group ".concat(r),children:[t.hasOwnProperty("name")&&Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("button",{onClick:function(){return t.children,void(!t.hasOwnProperty("children")&&a?(o(j,t.children),console.log(6)):j(!0))},className:"node",children:t.name})}),t.hasOwnProperty("children")&&t.children.length>0&&t.children.map((function(e,t,r){return Object(l.jsx)(l.Fragment,{children:d&&Object(l.jsx)(n,{obj:e,indicator:t===r.length-1},t)})}))]})};var p=function(){var n=Object(c.useContext)(h).data;return Object(l.jsx)(O,{obj:n,str:"continents"})},x=t(54),m=t(56),f=t(53),g=new x.a({uri:"https://countries.trevorblades.com/",cache:new m.a});i.a.render(Object(l.jsx)(f.a,{client:g,children:Object(l.jsx)(u,{children:Object(l.jsx)(p,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cccd4b39.chunk.js.map