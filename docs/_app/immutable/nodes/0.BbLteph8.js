import{s as fe,c as it,n as K,d as rt,u as at,g as st,e as nt}from"../chunks/scheduler.zokAAFfB.js";import{S as ue,i as ce,e as f,s as _,k as L,c as u,m as S,f as w,a as h,d as i,l as I,n as s,g as U,h as n,o as k,p as q,q as T,r as M,v as Te,w as De,t as Ee,b as qe,x as et,y as ft}from"../chunks/index.BfCDx0ga.js";import{p as ut}from"../chunks/stores.Bgirw5GG.js";import{D as Le}from"../chunks/Dialog.dZO-wv-i.js";import{C as lt}from"../chunks/Calendly.DWtz6Mtw.js";import{P as ot}from"../chunks/Paypal.KUbB50cz.js";import{D as ct}from"../chunks/Default.CDaRqJAn.js";import{C as tt,G as dt}from"../chunks/GoogleMaps.CxcXQoSS.js";import"../chunks/entry.Czp7HhWl.js";const mt=!0,Yt=Object.freeze(Object.defineProperty({__proto__:null,prerender:mt},Symbol.toStringTag,{value:"Module"})),vt=""+new URL("../assets/logo.CUU2VvPM.webp",import.meta.url).href;function ht(o){let e,r;return e=new lt({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function $t(o){let e,r;return e=new ot({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function pt(o){let e,r="Skip to content",t,a,c,l,p=`<a href="/" tabindex="-1" class="svelte-ffl6jn"><img src="${vt}" alt="SvelteKit" class="nav-logo svelte-ffl6jn"/></a>`,m,d,v,C,y,H="About",W,A,g,$,b="Visit",N,P,G,j,_e="Support",V,J,se,Z,X,ne,Q,O;return Z=new Le({props:{name:"Schedule Visit",id:"header-calendly-visit-desktop",buttonInvert:!0,$$slots:{default:[ht]},$$scope:{ctx:o}}}),Q=new Le({props:{name:"Donate",id:"header-donate-desktop",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){e=f("a"),e.textContent=r,t=_(),a=f("header"),c=f("div"),l=f("div"),l.innerHTML=p,m=_(),d=f("nav"),v=f("ul"),C=f("li"),y=f("a"),y.textContent=H,A=_(),g=f("li"),$=f("a"),$.textContent=b,P=_(),G=f("li"),j=f("a"),j.textContent=_e,J=_(),se=f("li"),L(Z.$$.fragment),X=_(),ne=f("li"),L(Q.$$.fragment),this.h()},l(x){e=u(x,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1ip5yzc"&&(e.textContent=r),t=w(x),a=u(x,"HEADER",{class:!0});var D=h(a);c=u(D,"DIV",{class:!0});var Y=h(c);l=u(Y,"DIV",{class:!0,"data-svelte-h":!0}),S(l)!=="svelte-qoqo11"&&(l.innerHTML=p),m=w(Y),d=u(Y,"NAV",{class:!0});var z=h(d);v=u(z,"UL",{class:!0});var B=h(v);C=u(B,"LI",{"aria-current":!0,class:!0});var le=h(C);y=u(le,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(y)!=="svelte-iphxk9"&&(y.textContent=H),le.forEach(i),A=w(B),g=u(B,"LI",{"aria-current":!0,class:!0});var F=h(g);$=u(F,"A",{href:!0,class:!0,"data-svelte-h":!0}),S($)!=="svelte-1lej6ih"&&($.textContent=b),F.forEach(i),P=w(B),G=u(B,"LI",{"aria-current":!0,class:!0});var ee=h(G);j=u(ee,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(j)!=="svelte-1bs7h0p"&&(j.textContent=_e),ee.forEach(i),J=w(B),se=u(B,"LI",{class:!0});var we=h(se);I(Z.$$.fragment,we),we.forEach(i),X=w(B),ne=u(B,"LI",{class:!0});var te=h(ne);I(Q.$$.fragment,te),te.forEach(i),B.forEach(i),z.forEach(i),Y.forEach(i),D.forEach(i),this.h()},h(){s(e,"href","#main-content"),s(e,"class","skip-link svelte-ffl6jn"),s(l,"class","corner svelte-ffl6jn"),s(y,"href","/about"),s(y,"class","svelte-ffl6jn"),s(C,"aria-current",W=o[0].url.pathname==="/about"?"page":void 0),s(C,"class","svelte-ffl6jn"),s($,"href","/visit"),s($,"class","svelte-ffl6jn"),s(g,"aria-current",N=o[0].url.pathname==="/visit"?"page":void 0),s(g,"class","svelte-ffl6jn"),s(j,"href","/support"),s(j,"class","svelte-ffl6jn"),s(G,"aria-current",V=o[0].url.pathname.startsWith("/support")?"page":void 0),s(G,"class","svelte-ffl6jn"),s(se,"class","mobile-hidden svelte-ffl6jn"),s(ne,"class","mobile-hidden svelte-ffl6jn"),s(v,"class","svelte-ffl6jn"),s(d,"class","svelte-ffl6jn"),s(c,"class","container svelte-ffl6jn"),s(a,"class","svelte-ffl6jn")},m(x,D){U(x,e,D),U(x,t,D),U(x,a,D),n(a,c),n(c,l),n(c,m),n(c,d),n(d,v),n(v,C),n(C,y),n(v,A),n(v,g),n(g,$),n(v,P),n(v,G),n(G,j),n(v,J),n(v,se),k(Z,se,null),n(v,X),n(v,ne),k(Q,ne,null),O=!0},p(x,[D]){(!O||D&1&&W!==(W=x[0].url.pathname==="/about"?"page":void 0))&&s(C,"aria-current",W),(!O||D&1&&N!==(N=x[0].url.pathname==="/visit"?"page":void 0))&&s(g,"aria-current",N),(!O||D&1&&V!==(V=x[0].url.pathname.startsWith("/support")?"page":void 0))&&s(G,"aria-current",V);const Y={};D&2&&(Y.$$scope={dirty:D,ctx:x}),Z.$set(Y);const z={};D&2&&(z.$$scope={dirty:D,ctx:x}),Q.$set(z)},i(x){O||(q(Z.$$.fragment,x),q(Q.$$.fragment,x),O=!0)},o(x){T(Z.$$.fragment,x),T(Q.$$.fragment,x),O=!1},d(x){x&&(i(e),i(t),i(a)),M(Z),M(Q)}}}function gt(o,e,r){let t;return it(o,ut,a=>r(0,t=a)),[t]}class _t extends ue{constructor(e){super(),ce(this,e,gt,pt,fe,{})}}function wt(o){let e,r;return{c(){e=Te("svg"),r=Te("path"),this.h()},l(t){e=De(t,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var a=h(e);r=De(a,"path",{d:!0}),h(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"d","M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"height","24px"),s(e,"viewBox","0 -960 960 960"),s(e,"width","24px"),s(e,"fill","currentColor"),s(e,"class","agdf-icon icon-help")},m(t,a){U(t,e,a),n(e,r)},p:K,i:K,o:K,d(t){t&&i(e)}}}class xt extends ue{constructor(e){super(),ce(this,e,null,wt,fe,{})}}function Ct(o){let e,r,t,a,c,l;t=new xt({});const p=o[2].default,m=rt(p,o,o[1],null);return{c(){e=f("details"),r=f("summary"),L(t.$$.fragment),a=_(),c=f("div"),m&&m.c(),this.h()},l(d){e=u(d,"DETAILS",{class:!0,id:!0});var v=h(e);r=u(v,"SUMMARY",{class:!0});var C=h(r);I(t.$$.fragment,C),C.forEach(i),a=w(v),c=u(v,"DIV",{class:!0,role:!0});var y=h(c);m&&m.l(y),y.forEach(i),v.forEach(i),this.h()},h(){s(r,"class","svelte-nypfa2"),s(c,"class","helper-content svelte-nypfa2"),s(c,"role","tooltip"),s(e,"class","helper-container svelte-nypfa2"),s(e,"id",o[0])},m(d,v){U(d,e,v),n(e,r),k(t,r,null),n(e,a),n(e,c),m&&m.m(c,null),l=!0},p(d,[v]){m&&m.p&&(!l||v&2)&&at(m,p,d,d[1],l?nt(p,d[1],v,null):st(d[1]),null),(!l||v&1)&&s(e,"id",d[0])},i(d){l||(q(t.$$.fragment,d),q(m,d),l=!0)},o(d){T(t.$$.fragment,d),T(m,d),l=!1},d(d){d&&i(e),M(t),m&&m.d(d)}}}function yt(o,e,r){let{$$slots:t={},$$scope:a}=e,{id:c}=e;return o.$$set=l=>{"id"in l&&r(0,c=l.id),"$$scope"in l&&r(1,a=l.$$scope)},[c,a,t]}class bt extends ue{constructor(e){super(),ce(this,e,yt,Ct,fe,{id:0})}}function Et(o){let e,r;return{c(){e=Te("svg"),r=Te("path"),this.h()},l(t){e=De(t,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var a=h(e);r=De(a,"path",{d:!0}),h(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"d","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 512 512"),s(e,"width","24"),s(e,"height","24"),s(e,"fill","currentColor")},m(t,a){U(t,e,a),n(e,r)},p:K,i:K,o:K,d(t){t&&i(e)}}}class qt extends ue{constructor(e){super(),ce(this,e,null,Et,fe,{})}}function Tt(o){let e,r=`<strong>Memorial Day</strong> to
                            <strong>Labor Day</strong>: 9 am - 8 pm`,t,a,c=`<strong>Labor Day</strong> to
                            <strong>Memorial Day</strong>: 9 am - 5 pm`;return{c(){e=f("p"),e.innerHTML=r,t=_(),a=f("p"),a.innerHTML=c},l(l){e=u(l,"P",{"data-svelte-h":!0}),S(e)!=="svelte-1wkzhqs"&&(e.innerHTML=r),t=w(l),a=u(l,"P",{"data-svelte-h":!0}),S(a)!=="svelte-174getx"&&(a.innerHTML=c)},m(l,p){U(l,e,p),U(l,t,p),U(l,a,p)},p:K,d(l){l&&(i(e),i(t),i(a))}}}function Dt(o){let e,r;return e=new dt({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function Lt(o){let e,r;return e=new ct({props:{id:"general-inquery",form:"message"}}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},p:K,i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function It(o){let e,r,t,a,c,l="Hours",p,m,d,v,C="9am - 5pm",y,H,W,A,g,$="Location",b,N,P,G,j,_e,V,J,se="Contact Us",Z,X,ne='Call or Text: <a href="tel:15076631370" title="click to call">(507) 663-1370</a>',Q,O,x,D,Y,z,B,le,F,ee,we,te,Be="Visit us on Facebook",Ae,de,Ne='<h3>Quick Links</h3> <nav class="svelte-1uqvyix"><a href="/our-story" class="svelte-1uqvyix">Our Story</a> <a href="/our-team" class="svelte-1uqvyix">Our Team</a> <a href="/press" class="svelte-1uqvyix">Press</a> <a href="/faq" class="svelte-1uqvyix">Farm FAQ</a></nav>',Se,xe,Ce,ie,re,je,Ue=new Date().getFullYear()+"",He,Fe,me,Ge="Privacy Policy",Re,ve,Ze="Accessibility Policy",Pe,ye,Qe=`A Great Day Farm is a 501(c)3 private operating foundation
                    recognized by the IRS. Tax ID number: 46-4272037`,Oe,he,We=`<div class="container"><p>Made with love <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
                by
                <a href="https://cullanluther.com" target="_blank" rel="noopener noreferrer">Cullan Luther</a></p></div>`,ke;return H=new bt({props:{id:"footer-hours",$$slots:{default:[Tt]},$$scope:{ctx:o}}}),P=new tt({props:{text:kt}}),j=new Le({props:{name:"Get Directions",id:"footer-directions-map",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),D=new tt({props:{text:"hello@agreatday.org"}}),z=new Le({props:{name:"Email Us",id:"footer-contact-form",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),ee=new qt({}),{c(){e=f("footer"),r=f("div"),t=f("div"),a=f("div"),c=f("h3"),c.textContent=l,p=_(),m=f("time"),d=Ee("Daily from "),v=f("strong"),v.textContent=C,y=_(),L(H.$$.fragment),W=_(),A=f("div"),g=f("h3"),g.textContent=$,b=_(),N=f("address"),L(P.$$.fragment),G=_(),L(j.$$.fragment),_e=_(),V=f("address"),J=f("h3"),J.textContent=se,Z=_(),X=f("div"),X.innerHTML=ne,Q=_(),O=f("div"),x=Ee("Email: "),L(D.$$.fragment),Y=_(),L(z.$$.fragment),B=_(),le=f("div"),F=f("a"),L(ee.$$.fragment),we=_(),te=f("span"),te.textContent=Be,Ae=_(),de=f("div"),de.innerHTML=Ne,Se=_(),xe=f("div"),Ce=f("div"),ie=f("div"),re=f("small"),je=Ee("Copyright ©"),He=Ee(Ue),Fe=Ee(` A Great Day Farm.
                    All Rights Reserved |
                    `),me=f("a"),me.textContent=Ge,Re=Ee(` |
                    `),ve=f("a"),ve.textContent=Ze,Pe=_(),ye=f("small"),ye.textContent=Qe,Oe=_(),he=f("div"),he.innerHTML=We,this.h()},l(E){e=u(E,"FOOTER",{class:!0});var R=h(e);r=u(R,"DIV",{class:!0});var oe=h(r);t=u(oe,"DIV",{class:!0});var $e=h(t);a=u($e,"DIV",{class:!0});var pe=h(a);c=u(pe,"H3",{"data-svelte-h":!0}),S(c)!=="svelte-15ravrn"&&(c.textContent=l),p=w(pe),m=u(pe,"TIME",{datetime:!0,class:!0});var Ie=h(m);d=qe(Ie,"Daily from "),v=u(Ie,"STRONG",{"data-svelte-h":!0}),S(v)!=="svelte-1r996ms"&&(v.textContent=C),y=w(Ie),I(H.$$.fragment,Ie),Ie.forEach(i),pe.forEach(i),W=w($e),A=u($e,"DIV",{class:!0});var be=h(A);g=u(be,"H3",{"data-svelte-h":!0}),S(g)!=="svelte-15gguv3"&&(g.textContent=$),b=w(be),N=u(be,"ADDRESS",{});var Ye=h(N);I(P.$$.fragment,Ye),Ye.forEach(i),G=w(be),I(j.$$.fragment,be),be.forEach(i),$e.forEach(i),_e=w(oe),V=u(oe,"ADDRESS",{class:!0});var ae=h(V);J=u(ae,"H3",{"data-svelte-h":!0}),S(J)!=="svelte-n6ud3s"&&(J.textContent=se),Z=w(ae),X=u(ae,"DIV",{"data-svelte-h":!0}),S(X)!=="svelte-12hi4k3"&&(X.innerHTML=ne),Q=w(ae),O=u(ae,"DIV",{});var ze=h(O);x=qe(ze,"Email: "),I(D.$$.fragment,ze),ze.forEach(i),Y=w(ae),I(z.$$.fragment,ae),B=w(ae),le=u(ae,"DIV",{class:!0});var Ke=h(le);F=u(Ke,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0});var Me=h(F);I(ee.$$.fragment,Me),we=w(Me),te=u(Me,"SPAN",{class:!0,"data-svelte-h":!0}),S(te)!=="svelte-bji331"&&(te.textContent=Be),Me.forEach(i),Ke.forEach(i),ae.forEach(i),Ae=w(oe),de=u(oe,"DIV",{class:!0,"data-svelte-h":!0}),S(de)!=="svelte-w1h9g"&&(de.innerHTML=Ne),oe.forEach(i),Se=w(R),xe=u(R,"DIV",{class:!0});var Je=h(xe);Ce=u(Je,"DIV",{class:!0});var Xe=h(Ce);ie=u(Xe,"DIV",{class:!0});var Ve=h(ie);re=u(Ve,"SMALL",{});var ge=h(re);je=qe(ge,"Copyright ©"),He=qe(ge,Ue),Fe=qe(ge,` A Great Day Farm.
                    All Rights Reserved |
                    `),me=u(ge,"A",{href:!0,"data-svelte-h":!0}),S(me)!=="svelte-l94po8"&&(me.textContent=Ge),Re=qe(ge,` |
                    `),ve=u(ge,"A",{href:!0,"data-svelte-h":!0}),S(ve)!=="svelte-c5vvns"&&(ve.textContent=Ze),ge.forEach(i),Pe=w(Ve),ye=u(Ve,"SMALL",{"data-svelte-h":!0}),S(ye)!=="svelte-1ks272k"&&(ye.textContent=Qe),Ve.forEach(i),Xe.forEach(i),Je.forEach(i),Oe=w(R),he=u(R,"DIV",{class:!0,"data-svelte-h":!0}),S(he)!=="svelte-d997hf"&&(he.innerHTML=We),R.forEach(i),this.h()},h(){s(m,"datetime",""),s(m,"class","company-hours svelte-1uqvyix"),s(a,"class","footer-group svelte-1uqvyix"),s(A,"class","footer-group svelte-1uqvyix"),s(t,"class","company-info"),s(te,"class","sr-only"),s(F,"class","social-icon icon-facebook svelte-1uqvyix"),s(F,"href","https://www.facebook.com/AGreatDayFarmNorthfield/"),s(F,"title","Follow us on Facebook"),s(F,"target","_blank"),s(F,"rel","noopener noreferrer"),s(le,"class","social-icons svelte-1uqvyix"),s(V,"class","footer-group contact-info svelte-1uqvyix"),s(de,"class","links"),s(r,"class","footer-grid container"),s(me,"href","/privacy-policy"),s(ve,"href","/accessibility-policy"),s(ie,"class","legal-content"),s(Ce,"class","container"),s(xe,"class","company-legal svelte-1uqvyix"),s(he,"class","web-creator svelte-1uqvyix"),s(e,"class","svelte-1uqvyix")},m(E,R){U(E,e,R),n(e,r),n(r,t),n(t,a),n(a,c),n(a,p),n(a,m),n(m,d),n(m,v),n(m,y),k(H,m,null),n(t,W),n(t,A),n(A,g),n(A,b),n(A,N),k(P,N,null),n(A,G),k(j,A,null),n(r,_e),n(r,V),n(V,J),n(V,Z),n(V,X),n(V,Q),n(V,O),n(O,x),k(D,O,null),n(V,Y),k(z,V,null),n(V,B),n(V,le),n(le,F),k(ee,F,null),n(F,we),n(F,te),n(r,Ae),n(r,de),n(e,Se),n(e,xe),n(xe,Ce),n(Ce,ie),n(ie,re),n(re,je),n(re,He),n(re,Fe),n(re,me),n(re,Re),n(re,ve),n(ie,Pe),n(ie,ye),n(e,Oe),n(e,he),ke=!0},p(E,[R]){const oe={};R&1&&(oe.$$scope={dirty:R,ctx:E}),H.$set(oe);const $e={};R&1&&($e.$$scope={dirty:R,ctx:E}),j.$set($e);const pe={};R&1&&(pe.$$scope={dirty:R,ctx:E}),z.$set(pe)},i(E){ke||(q(H.$$.fragment,E),q(P.$$.fragment,E),q(j.$$.fragment,E),q(D.$$.fragment,E),q(z.$$.fragment,E),q(ee.$$.fragment,E),ke=!0)},o(E){T(H.$$.fragment,E),T(P.$$.fragment,E),T(j.$$.fragment,E),T(D.$$.fragment,E),T(z.$$.fragment,E),T(ee.$$.fragment,E),ke=!1},d(E){E&&i(e),M(H),M(P),M(j),M(D),M(z),M(ee)}}}const kt="5575 115th St. East, Northfield, MN 55057";class Mt extends ue{constructor(e){super(),ce(this,e,null,It,fe,{})}}function Vt(o){let e,r;return e=new ot({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function At(o){let e,r;return e=new lt({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){k(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){M(e,t)}}}function St(o){let e,r,t,a,c;return r=new Le({props:{name:"Donate",id:"header-donate-mobile",$$slots:{default:[Vt]},$$scope:{ctx:o}}}),a=new Le({props:{name:"Schedule Visit",id:"header-calendly-visit-mobile",$$slots:{default:[At]},$$scope:{ctx:o}}}),{c(){e=f("nav"),L(r.$$.fragment),t=_(),L(a.$$.fragment),this.h()},l(l){e=u(l,"NAV",{class:!0});var p=h(e);I(r.$$.fragment,p),t=w(p),I(a.$$.fragment,p),p.forEach(i),this.h()},h(){s(e,"class","mobile-drawer desktop-hidden svelte-m2qnpp")},m(l,p){U(l,e,p),k(r,e,null),n(e,t),k(a,e,null),c=!0},p(l,[p]){const m={};p&1&&(m.$$scope={dirty:p,ctx:l}),r.$set(m);const d={};p&1&&(d.$$scope={dirty:p,ctx:l}),a.$set(d)},i(l){c||(q(r.$$.fragment,l),q(a.$$.fragment,l),c=!0)},o(l){T(r.$$.fragment,l),T(a.$$.fragment,l),c=!1},d(l){l&&i(e),M(r),M(a)}}}class jt extends ue{constructor(e){super(),ce(this,e,null,St,fe,{})}}function Ht(o){let e,r;return{c(){e=Te("svg"),r=Te("path"),this.h()},l(t){e=De(t,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var a=h(e);r=De(a,"path",{d:!0}),h(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"d","M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"height","24px"),s(e,"viewBox","0 -960 960 960"),s(e,"width","24px"),s(e,"fill","currentColor"),s(e,"class","agdf-icon up-arrow")},m(t,a){U(t,e,a),n(e,r)},p:K,i:K,o:K,d(t){t&&i(e)}}}class Ft extends ue{constructor(e){super(),ce(this,e,null,Ht,fe,{})}}function Rt(o){let e,r,t,a,c,l,p,m,d,v,C,y,H,W;r=new _t({});const A=o[3].default,g=rt(A,o,o[2],null);return l=new Mt({}),d=new Ft({}),C=new jt({}),{c(){e=f("div"),L(r.$$.fragment),t=_(),a=f("main"),g&&g.c(),c=_(),L(l.$$.fragment),p=_(),m=f("button"),L(d.$$.fragment),v=_(),L(C.$$.fragment),this.h()},l($){e=u($,"DIV",{class:!0});var b=h(e);I(r.$$.fragment,b),t=w(b),a=u(b,"MAIN",{id:!0,class:!0});var N=h(a);g&&g.l(N),N.forEach(i),c=w(b),I(l.$$.fragment,b),p=w(b),m=u(b,"BUTTON",{type:!0,class:!0});var P=h(m);I(d.$$.fragment,P),P.forEach(i),v=w(b),I(C.$$.fragment,b),b.forEach(i),this.h()},h(){s(a,"id","main-content"),s(a,"class","svelte-cj50vz"),s(m,"type","button"),s(m,"class","btn-back-to-top svelte-cj50vz"),et(m,"is-visible",o[0]),s(e,"class","app svelte-cj50vz")},m($,b){U($,e,b),k(r,e,null),n(e,t),n(e,a),g&&g.m(a,null),n(e,c),k(l,e,null),n(e,p),n(e,m),k(d,m,null),n(e,v),k(C,e,null),y=!0,H||(W=ft(m,"click",o[4]),H=!0)},p($,[b]){g&&g.p&&(!y||b&4)&&at(g,A,$,$[2],y?nt(A,$[2],b,null):st($[2]),null),(!y||b&1)&&et(m,"is-visible",$[0])},i($){y||(q(r.$$.fragment,$),q(g,$),q(l.$$.fragment,$),q(d.$$.fragment,$),q(C.$$.fragment,$),y=!0)},o($){T(r.$$.fragment,$),T(g,$),T(l.$$.fragment,$),T(d.$$.fragment,$),T(C.$$.fragment,$),y=!1},d($){$&&i(e),M(r),g&&g.d($),M(l),M(d),M(C),H=!1,W()}}}function Pt(o,e,r){let{$$slots:t={},$$scope:a}=e,c=!1;function l(){{const d=C=>{C[0].isIntersecting?r(0,c=!1):r(0,c=!0)},v=new window.IntersectionObserver(d);v==null||v.observe(document.querySelector(".hero"))}}function p(){r(0,c=!1),window.scrollTo({top:0,behavior:"smooth"})}l();const m=()=>p();return o.$$set=d=>{"$$scope"in d&&r(2,a=d.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&r(0,c),o.$$.dirty&1&&c&&l()},[c,p,a,t,m]}class Kt extends ue{constructor(e){super(),ce(this,e,Pt,Rt,fe,{})}}export{Kt as component,Yt as universal};
