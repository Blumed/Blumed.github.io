import{s as S,n as p}from"./scheduler.hhBapi99.js";import{S as g,i as C,e as h,t as b,s as I,c as u,a as _,b as k,d as f,f as j,k as v,g as y,h as r,j as H}from"./index.dGa3a5jV.js";function E(a){let e,t;return{c(){e=h("p"),t=b(a[1])},l(n){e=u(n,"P",{});var s=_(e);t=k(s,a[1]),s.forEach(f)},m(n,s){y(n,e,s),r(e,t)},p(n,s){s&2&&H(t,n[1])},d(n){n&&f(e)}}}function q(a){let e,t,n,s,o,i=typeof a[1]<"u"&&E(a);return{c(){e=h("section"),t=h("div"),n=h("h1"),s=b(a[0]),o=I(),i&&i.c(),this.h()},l(l){e=u(l,"SECTION",{class:!0});var c=_(e);t=u(c,"DIV",{class:!0});var d=_(t);n=u(d,"H1",{});var m=_(n);s=k(m,a[0]),m.forEach(f),o=j(d),i&&i.l(d),d.forEach(f),c.forEach(f),this.h()},h(){v(t,"class","container"),v(e,"class","section hero svelte-vzv6i9")},m(l,c){y(l,e,c),r(e,t),r(t,n),r(n,s),r(t,o),i&&i.m(t,null)},p(l,[c]){c&1&&H(s,l[0]),typeof l[1]<"u"?i?i.p(l,c):(i=E(l),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},i:p,o:p,d(l){l&&f(e),i&&i.d()}}}function z(a,e,t){let{title:n}=e,{content:s}=e;return a.$$set=o=>{"title"in o&&t(0,n=o.title),"content"in o&&t(1,s=o.content)},[n,s]}class O extends g{constructor(e){super(),C(this,e,z,q,S,{title:0,content:1})}}export{O as H};
