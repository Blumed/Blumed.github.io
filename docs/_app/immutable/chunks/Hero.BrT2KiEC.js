import{s as M,b as H,n as I,a as S}from"./scheduler.zokAAFfB.js";import{S as N,i as O,e as m,t as k,s as q,c as _,a as y,b as E,d,f as C,n as c,g as b,h,j as G}from"./index.BfCDx0ga.js";function j(o){let e,n;return{c(){e=m("p"),n=k(o[1])},l(t){e=_(t,"P",{});var i=y(e);n=E(i,o[1]),i.forEach(d)},m(t,i){b(t,e,i),h(e,n)},p(t,i){i&2&&G(n,t[1])},d(t){t&&d(e)}}}function D(o){let e,n;return{c(){e=m("img"),this.h()},l(t){e=_(t,"IMG",{class:!0,src:!0,alt:!0,loading:!0}),this.h()},h(){c(e,"class","hero-background-image"),S(e.src,n=o[2])||c(e,"src",n),c(e,"alt","Happy friends at a great day farm"),c(e,"loading","eager")},m(t,i){b(t,e,i)},p(t,i){i&4&&!S(e.src,n=t[2])&&c(e,"src",n)},d(t){t&&d(e)}}}function P(o){let e,n,t,i,u,f,g,p,l=typeof o[1]<"u"&&j(o),a=typeof o[2]<"u"&&D(o);return{c(){e=m("section"),n=m("div"),t=m("h1"),i=k(o[0]),u=q(),l&&l.c(),f=q(),a&&a.c(),p=k(`




/* todo
 remove italics
 */`),this.h()},l(s){e=_(s,"SECTION",{class:!0});var r=y(e);n=_(r,"DIV",{class:!0});var v=y(n);t=_(v,"H1",{class:!0});var B=y(t);i=E(B,o[0]),B.forEach(d),u=C(v),l&&l.l(v),v.forEach(d),f=C(r),a&&a.l(r),r.forEach(d),p=E(s,`




/* todo
 remove italics
 */`),this.h()},h(){c(t,"class","bottom-bumper"),c(n,"class","container"),c(e,"class",g=H(`section hero ${typeof o[2]>"u"?"hero-gradient":""}`)+" svelte-1ndxyl0")},m(s,r){b(s,e,r),h(e,n),h(n,t),h(t,i),h(n,u),l&&l.m(n,null),h(e,f),a&&a.m(e,null),b(s,p,r)},p(s,[r]){r&1&&G(i,s[0]),typeof s[1]<"u"?l?l.p(s,r):(l=j(s),l.c(),l.m(n,null)):l&&(l.d(1),l=null),typeof s[2]<"u"?a?a.p(s,r):(a=D(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null),r&4&&g!==(g=H(`section hero ${typeof s[2]>"u"?"hero-gradient":""}`)+" svelte-1ndxyl0")&&c(e,"class",g)},i:I,o:I,d(s){s&&(d(e),d(p)),l&&l.d(),a&&a.d()}}}function T(o,e,n){let{title:t}=e,{content:i}=e,{heroBackground:u}=e;return o.$$set=f=>{"title"in f&&n(0,t=f.title),"content"in f&&n(1,i=f.content),"heroBackground"in f&&n(2,u=f.heroBackground)},[t,i,u]}class z extends N{constructor(e){super(),O(this,e,T,P,M,{title:0,content:1,heroBackground:2})}}export{z as H};
