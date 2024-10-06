import{s as ue,c as it,n as Q,d as rt,u as at,g as st,e as nt}from"../chunks/scheduler.zokAAFfB.js";import{S as ce,i as fe,e as u,s as _,k as L,c,m as S,f as w,a as h,d as i,l as I,n as s,g as G,h as n,o as M,p as q,q as T,r as k,v as Te,w as De,t as Ee,b as qe,x as et,y as ut}from"../chunks/index.BfCDx0ga.js";import{p as ct}from"../chunks/stores.BIcrFvMK.js";import{D as Le}from"../chunks/Dialog.C1uYX8KN.js";import{C as lt}from"../chunks/Calendly.DWtz6Mtw.js";import{P as ot}from"../chunks/Paypal.KUbB50cz.js";import{D as ft}from"../chunks/Default.CDaRqJAn.js";import{C as tt,G as dt}from"../chunks/GoogleMaps.DT7jBEmY.js";const mt=!0,Yt=Object.freeze(Object.defineProperty({__proto__:null,prerender:mt},Symbol.toStringTag,{value:"Module"})),vt=""+new URL("../assets/logo.CUU2VvPM.webp",import.meta.url).href;function ht(o){let e,r;return e=new ot({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){M(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function $t(o){let e,r;return e=new lt({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){M(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function pt(o){let e,r="Skip to content",t,a,f,l,p=`<a href="/" tabindex="-1" class="svelte-18uj65e"><img src="${vt}" alt="SvelteKit" class="nav-logo svelte-18uj65e"/></a>`,m,d,v,C,y,j="About",Y,A,g,$,b="Visit",U,R,z,H,_e="Support",V,J,se,Z,X,ne,W,O;return Z=new Le({props:{name:"Donate",id:"header-donate-desktop",$$slots:{default:[ht]},$$scope:{ctx:o}}}),W=new Le({props:{name:"Schedule Visit",id:"header-calendly-visit-desktop",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){e=u("a"),e.textContent=r,t=_(),a=u("header"),f=u("div"),l=u("div"),l.innerHTML=p,m=_(),d=u("nav"),v=u("ul"),C=u("li"),y=u("a"),y.textContent=j,A=_(),g=u("li"),$=u("a"),$.textContent=b,R=_(),z=u("li"),H=u("a"),H.textContent=_e,J=_(),se=u("li"),L(Z.$$.fragment),X=_(),ne=u("li"),L(W.$$.fragment),this.h()},l(x){e=c(x,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(e)!=="svelte-1ip5yzc"&&(e.textContent=r),t=w(x),a=c(x,"HEADER",{class:!0});var D=h(a);f=c(D,"DIV",{class:!0});var K=h(f);l=c(K,"DIV",{class:!0,"data-svelte-h":!0}),S(l)!=="svelte-qoqo11"&&(l.innerHTML=p),m=w(K),d=c(K,"NAV",{class:!0});var B=h(d);v=c(B,"UL",{class:!0});var N=h(v);C=c(N,"LI",{"aria-current":!0,class:!0});var le=h(C);y=c(le,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(y)!=="svelte-iphxk9"&&(y.textContent=j),le.forEach(i),A=w(N),g=c(N,"LI",{"aria-current":!0,class:!0});var F=h(g);$=c(F,"A",{href:!0,class:!0,"data-svelte-h":!0}),S($)!=="svelte-1lej6ih"&&($.textContent=b),F.forEach(i),R=w(N),z=c(N,"LI",{"aria-current":!0,class:!0});var ee=h(z);H=c(ee,"A",{href:!0,class:!0,"data-svelte-h":!0}),S(H)!=="svelte-1bs7h0p"&&(H.textContent=_e),ee.forEach(i),J=w(N),se=c(N,"LI",{class:!0});var we=h(se);I(Z.$$.fragment,we),we.forEach(i),X=w(N),ne=c(N,"LI",{class:!0});var te=h(ne);I(W.$$.fragment,te),te.forEach(i),N.forEach(i),B.forEach(i),K.forEach(i),D.forEach(i),this.h()},h(){s(e,"href","#main-content"),s(e,"class","skip-link svelte-18uj65e"),s(l,"class","corner svelte-18uj65e"),s(y,"href","/about"),s(y,"class","svelte-18uj65e"),s(C,"aria-current",Y=o[0].url.pathname==="/about"?"page":void 0),s(C,"class","svelte-18uj65e"),s($,"href","/visit"),s($,"class","svelte-18uj65e"),s(g,"aria-current",U=o[0].url.pathname==="/visit"?"page":void 0),s(g,"class","svelte-18uj65e"),s(H,"href","/support"),s(H,"class","svelte-18uj65e"),s(z,"aria-current",V=o[0].url.pathname.startsWith("/support")?"page":void 0),s(z,"class","svelte-18uj65e"),s(se,"class","mobile-hidden svelte-18uj65e"),s(ne,"class","mobile-hidden svelte-18uj65e"),s(v,"class","svelte-18uj65e"),s(d,"class","svelte-18uj65e"),s(f,"class","container svelte-18uj65e"),s(a,"class","svelte-18uj65e")},m(x,D){G(x,e,D),G(x,t,D),G(x,a,D),n(a,f),n(f,l),n(f,m),n(f,d),n(d,v),n(v,C),n(C,y),n(v,A),n(v,g),n(g,$),n(v,R),n(v,z),n(z,H),n(v,J),n(v,se),M(Z,se,null),n(v,X),n(v,ne),M(W,ne,null),O=!0},p(x,[D]){(!O||D&1&&Y!==(Y=x[0].url.pathname==="/about"?"page":void 0))&&s(C,"aria-current",Y),(!O||D&1&&U!==(U=x[0].url.pathname==="/visit"?"page":void 0))&&s(g,"aria-current",U),(!O||D&1&&V!==(V=x[0].url.pathname.startsWith("/support")?"page":void 0))&&s(z,"aria-current",V);const K={};D&2&&(K.$$scope={dirty:D,ctx:x}),Z.$set(K);const B={};D&2&&(B.$$scope={dirty:D,ctx:x}),W.$set(B)},i(x){O||(q(Z.$$.fragment,x),q(W.$$.fragment,x),O=!0)},o(x){T(Z.$$.fragment,x),T(W.$$.fragment,x),O=!1},d(x){x&&(i(e),i(t),i(a)),k(Z),k(W)}}}function gt(o,e,r){let t;return it(o,ct,a=>r(0,t=a)),[t]}class _t extends ce{constructor(e){super(),fe(this,e,gt,pt,ue,{})}}function wt(o){let e,r;return{c(){e=Te("svg"),r=Te("path"),this.h()},l(t){e=De(t,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var a=h(e);r=De(a,"path",{d:!0}),h(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"d","M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"height","24px"),s(e,"viewBox","0 -960 960 960"),s(e,"width","24px"),s(e,"fill","currentColor"),s(e,"class","agdf-icon icon-help")},m(t,a){G(t,e,a),n(e,r)},p:Q,i:Q,o:Q,d(t){t&&i(e)}}}class xt extends ce{constructor(e){super(),fe(this,e,null,wt,ue,{})}}function Ct(o){let e,r,t,a,f,l;t=new xt({});const p=o[2].default,m=rt(p,o,o[1],null);return{c(){e=u("details"),r=u("summary"),L(t.$$.fragment),a=_(),f=u("div"),m&&m.c(),this.h()},l(d){e=c(d,"DETAILS",{class:!0,id:!0});var v=h(e);r=c(v,"SUMMARY",{class:!0});var C=h(r);I(t.$$.fragment,C),C.forEach(i),a=w(v),f=c(v,"DIV",{class:!0,role:!0});var y=h(f);m&&m.l(y),y.forEach(i),v.forEach(i),this.h()},h(){s(r,"class","svelte-nypfa2"),s(f,"class","helper-content svelte-nypfa2"),s(f,"role","tooltip"),s(e,"class","helper-container svelte-nypfa2"),s(e,"id",o[0])},m(d,v){G(d,e,v),n(e,r),M(t,r,null),n(e,a),n(e,f),m&&m.m(f,null),l=!0},p(d,[v]){m&&m.p&&(!l||v&2)&&at(m,p,d,d[1],l?nt(p,d[1],v,null):st(d[1]),null),(!l||v&1)&&s(e,"id",d[0])},i(d){l||(q(t.$$.fragment,d),q(m,d),l=!0)},o(d){T(t.$$.fragment,d),T(m,d),l=!1},d(d){d&&i(e),k(t),m&&m.d(d)}}}function yt(o,e,r){let{$$slots:t={},$$scope:a}=e,{id:f}=e;return o.$$set=l=>{"id"in l&&r(0,f=l.id),"$$scope"in l&&r(1,a=l.$$scope)},[f,a,t]}class bt extends ce{constructor(e){super(),fe(this,e,yt,Ct,ue,{id:0})}}function Et(o){let e,r;return{c(){e=Te("svg"),r=Te("path"),this.h()},l(t){e=De(t,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var a=h(e);r=De(a,"path",{d:!0}),h(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"d","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 512 512"),s(e,"width","24"),s(e,"height","24"),s(e,"fill","currentColor")},m(t,a){G(t,e,a),n(e,r)},p:Q,i:Q,o:Q,d(t){t&&i(e)}}}class qt extends ce{constructor(e){super(),fe(this,e,null,Et,ue,{})}}function Tt(o){let e,r=`<strong>Memorial Day</strong> to
                            <strong>Labor Day</strong>: 9 am - 8 pm`,t,a,f=`<strong>Labor Day</strong> to
                            <strong>Memorial Day</strong>: 9 am - 5 pm`;return{c(){e=u("p"),e.innerHTML=r,t=_(),a=u("p"),a.innerHTML=f},l(l){e=c(l,"P",{"data-svelte-h":!0}),S(e)!=="svelte-1wkzhqs"&&(e.innerHTML=r),t=w(l),a=c(l,"P",{"data-svelte-h":!0}),S(a)!=="svelte-174getx"&&(a.innerHTML=f)},m(l,p){G(l,e,p),G(l,t,p),G(l,a,p)},p:Q,d(l){l&&(i(e),i(t),i(a))}}}function Dt(o){let e,r;return e=new dt({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){M(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function Lt(o){let e,r;return e=new ft({props:{id:"general-inquery",form:"message"}}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){M(e,t,a),r=!0},p:Q,i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function It(o){let e,r,t,a,f,l="Hours",p,m,d,v,C="9am - 5pm",y,j,Y,A,g,$="Location",b,U,R,z,H,_e,V,J,se="Contact Us",Z,X,ne='Phone: <a href="tel:15076631370" title="click to call">(507) 663-1370</a>',W,O,x,D,K,B,N,le,F,ee,we,te,Ne="Visit us on Facebook",Ae,de,Ue='<h3>Quick Links</h3> <nav class="svelte-1uqvyix"><a href="/our-story" class="svelte-1uqvyix">Our Story</a> <a href="/our-team" class="svelte-1uqvyix">Our Team</a> <a href="/press" class="svelte-1uqvyix">Press</a> <a href="/faq" class="svelte-1uqvyix">Farm Faq&#39;s</a></nav>',Se,xe,Ce,ie,re,He,Ge=new Date().getFullYear()+"",je,Fe,me,ze="Privacy Policy",Pe,ve,Ze="Accessibility Policy",Re,ye,We=`A Great Day Farm is a 501(c)3 private operating foundation
                    recognized by the IRS. Tax ID number: 46-4272037`,Oe,he,Ye=`<div class="container"><p>Made with love <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24" fill="currentColor"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
                by
                <a href="https://cullanluther.com" target="_blank" rel="noopener noreferrer">Cullan Luther</a></p></div>`,Me;return j=new bt({props:{id:"footer-hours",$$slots:{default:[Tt]},$$scope:{ctx:o}}}),R=new tt({props:{text:Mt}}),H=new Le({props:{name:"Get Directions",id:"footer-directions-map",$$slots:{default:[Dt]},$$scope:{ctx:o}}}),D=new tt({props:{text:"hello@agreatday.org"}}),B=new Le({props:{name:"Email Us",id:"footer-contact-form",$$slots:{default:[Lt]},$$scope:{ctx:o}}}),ee=new qt({}),{c(){e=u("footer"),r=u("div"),t=u("div"),a=u("div"),f=u("h3"),f.textContent=l,p=_(),m=u("time"),d=Ee("Everyday from "),v=u("strong"),v.textContent=C,y=_(),L(j.$$.fragment),Y=_(),A=u("div"),g=u("h3"),g.textContent=$,b=_(),U=u("address"),L(R.$$.fragment),z=_(),L(H.$$.fragment),_e=_(),V=u("address"),J=u("h3"),J.textContent=se,Z=_(),X=u("div"),X.innerHTML=ne,W=_(),O=u("div"),x=Ee("Email: "),L(D.$$.fragment),K=_(),L(B.$$.fragment),N=_(),le=u("div"),F=u("a"),L(ee.$$.fragment),we=_(),te=u("span"),te.textContent=Ne,Ae=_(),de=u("div"),de.innerHTML=Ue,Se=_(),xe=u("div"),Ce=u("div"),ie=u("div"),re=u("small"),He=Ee("Copyright ©"),je=Ee(Ge),Fe=Ee(` A Great Day Farm.
                    All Rights Reserved |
                    `),me=u("a"),me.textContent=ze,Pe=Ee(` |
                    `),ve=u("a"),ve.textContent=Ze,Re=_(),ye=u("small"),ye.textContent=We,Oe=_(),he=u("div"),he.innerHTML=Ye,this.h()},l(E){e=c(E,"FOOTER",{class:!0});var P=h(e);r=c(P,"DIV",{class:!0});var oe=h(r);t=c(oe,"DIV",{class:!0});var $e=h(t);a=c($e,"DIV",{class:!0});var pe=h(a);f=c(pe,"H3",{"data-svelte-h":!0}),S(f)!=="svelte-15ravrn"&&(f.textContent=l),p=w(pe),m=c(pe,"TIME",{datetime:!0,class:!0});var Ie=h(m);d=qe(Ie,"Everyday from "),v=c(Ie,"STRONG",{"data-svelte-h":!0}),S(v)!=="svelte-1r996ms"&&(v.textContent=C),y=w(Ie),I(j.$$.fragment,Ie),Ie.forEach(i),pe.forEach(i),Y=w($e),A=c($e,"DIV",{class:!0});var be=h(A);g=c(be,"H3",{"data-svelte-h":!0}),S(g)!=="svelte-15gguv3"&&(g.textContent=$),b=w(be),U=c(be,"ADDRESS",{});var Ke=h(U);I(R.$$.fragment,Ke),Ke.forEach(i),z=w(be),I(H.$$.fragment,be),be.forEach(i),$e.forEach(i),_e=w(oe),V=c(oe,"ADDRESS",{class:!0});var ae=h(V);J=c(ae,"H3",{"data-svelte-h":!0}),S(J)!=="svelte-n6ud3s"&&(J.textContent=se),Z=w(ae),X=c(ae,"DIV",{"data-svelte-h":!0}),S(X)!=="svelte-1ljwzff"&&(X.innerHTML=ne),W=w(ae),O=c(ae,"DIV",{});var Be=h(O);x=qe(Be,"Email: "),I(D.$$.fragment,Be),Be.forEach(i),K=w(ae),I(B.$$.fragment,ae),N=w(ae),le=c(ae,"DIV",{class:!0});var Qe=h(le);F=c(Qe,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0});var ke=h(F);I(ee.$$.fragment,ke),we=w(ke),te=c(ke,"SPAN",{class:!0,"data-svelte-h":!0}),S(te)!=="svelte-bji331"&&(te.textContent=Ne),ke.forEach(i),Qe.forEach(i),ae.forEach(i),Ae=w(oe),de=c(oe,"DIV",{class:!0,"data-svelte-h":!0}),S(de)!=="svelte-1f9440u"&&(de.innerHTML=Ue),oe.forEach(i),Se=w(P),xe=c(P,"DIV",{class:!0});var Je=h(xe);Ce=c(Je,"DIV",{class:!0});var Xe=h(Ce);ie=c(Xe,"DIV",{class:!0});var Ve=h(ie);re=c(Ve,"SMALL",{});var ge=h(re);He=qe(ge,"Copyright ©"),je=qe(ge,Ge),Fe=qe(ge,` A Great Day Farm.
                    All Rights Reserved |
                    `),me=c(ge,"A",{href:!0,"data-svelte-h":!0}),S(me)!=="svelte-l94po8"&&(me.textContent=ze),Pe=qe(ge,` |
                    `),ve=c(ge,"A",{href:!0,"data-svelte-h":!0}),S(ve)!=="svelte-c5vvns"&&(ve.textContent=Ze),ge.forEach(i),Re=w(Ve),ye=c(Ve,"SMALL",{"data-svelte-h":!0}),S(ye)!=="svelte-1ks272k"&&(ye.textContent=We),Ve.forEach(i),Xe.forEach(i),Je.forEach(i),Oe=w(P),he=c(P,"DIV",{class:!0,"data-svelte-h":!0}),S(he)!=="svelte-d997hf"&&(he.innerHTML=Ye),P.forEach(i),this.h()},h(){s(m,"datetime",""),s(m,"class","company-hours svelte-1uqvyix"),s(a,"class","footer-group svelte-1uqvyix"),s(A,"class","footer-group svelte-1uqvyix"),s(t,"class","company-info"),s(te,"class","sr-only"),s(F,"class","social-icon icon-facebook svelte-1uqvyix"),s(F,"href","https://www.facebook.com/AGreatDayFarmNorthfield/"),s(F,"title","Follow us on Facebook"),s(F,"target","_blank"),s(F,"rel","noopener noreferrer"),s(le,"class","social-icons svelte-1uqvyix"),s(V,"class","footer-group contact-info svelte-1uqvyix"),s(de,"class","links"),s(r,"class","footer-grid container"),s(me,"href","/privacy-policy"),s(ve,"href","/accessibility-policy"),s(ie,"class","legal-content"),s(Ce,"class","container"),s(xe,"class","company-legal svelte-1uqvyix"),s(he,"class","web-creator svelte-1uqvyix"),s(e,"class","svelte-1uqvyix")},m(E,P){G(E,e,P),n(e,r),n(r,t),n(t,a),n(a,f),n(a,p),n(a,m),n(m,d),n(m,v),n(m,y),M(j,m,null),n(t,Y),n(t,A),n(A,g),n(A,b),n(A,U),M(R,U,null),n(A,z),M(H,A,null),n(r,_e),n(r,V),n(V,J),n(V,Z),n(V,X),n(V,W),n(V,O),n(O,x),M(D,O,null),n(V,K),M(B,V,null),n(V,N),n(V,le),n(le,F),M(ee,F,null),n(F,we),n(F,te),n(r,Ae),n(r,de),n(e,Se),n(e,xe),n(xe,Ce),n(Ce,ie),n(ie,re),n(re,He),n(re,je),n(re,Fe),n(re,me),n(re,Pe),n(re,ve),n(ie,Re),n(ie,ye),n(e,Oe),n(e,he),Me=!0},p(E,[P]){const oe={};P&1&&(oe.$$scope={dirty:P,ctx:E}),j.$set(oe);const $e={};P&1&&($e.$$scope={dirty:P,ctx:E}),H.$set($e);const pe={};P&1&&(pe.$$scope={dirty:P,ctx:E}),B.$set(pe)},i(E){Me||(q(j.$$.fragment,E),q(R.$$.fragment,E),q(H.$$.fragment,E),q(D.$$.fragment,E),q(B.$$.fragment,E),q(ee.$$.fragment,E),Me=!0)},o(E){T(j.$$.fragment,E),T(R.$$.fragment,E),T(H.$$.fragment,E),T(D.$$.fragment,E),T(B.$$.fragment,E),T(ee.$$.fragment,E),Me=!1},d(E){E&&i(e),k(j),k(R),k(H),k(D),k(B),k(ee)}}}const Mt="5575 115th St. East, Northfield, MN 55057";class kt extends ce{constructor(e){super(),fe(this,e,null,It,ue,{})}}function Vt(o){let e,r;return e=new ot({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){M(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function At(o){let e,r;return e=new lt({}),{c(){L(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,a){M(e,t,a),r=!0},i(t){r||(q(e.$$.fragment,t),r=!0)},o(t){T(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function St(o){let e,r,t,a,f;return r=new Le({props:{name:"Donate",id:"header-donate-mobile",$$slots:{default:[Vt]},$$scope:{ctx:o}}}),a=new Le({props:{name:"Schedule Visit",id:"header-calendly-visit-mobile",$$slots:{default:[At]},$$scope:{ctx:o}}}),{c(){e=u("nav"),L(r.$$.fragment),t=_(),L(a.$$.fragment),this.h()},l(l){e=c(l,"NAV",{class:!0});var p=h(e);I(r.$$.fragment,p),t=w(p),I(a.$$.fragment,p),p.forEach(i),this.h()},h(){s(e,"class","mobile-drawer desktop-hidden svelte-m2qnpp")},m(l,p){G(l,e,p),M(r,e,null),n(e,t),M(a,e,null),f=!0},p(l,[p]){const m={};p&1&&(m.$$scope={dirty:p,ctx:l}),r.$set(m);const d={};p&1&&(d.$$scope={dirty:p,ctx:l}),a.$set(d)},i(l){f||(q(r.$$.fragment,l),q(a.$$.fragment,l),f=!0)},o(l){T(r.$$.fragment,l),T(a.$$.fragment,l),f=!1},d(l){l&&i(e),k(r),k(a)}}}class Ht extends ce{constructor(e){super(),fe(this,e,null,St,ue,{})}}function jt(o){let e,r;return{c(){e=Te("svg"),r=Te("path"),this.h()},l(t){e=De(t,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var a=h(e);r=De(a,"path",{d:!0}),h(r).forEach(i),a.forEach(i),this.h()},h(){s(r,"d","M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"height","24px"),s(e,"viewBox","0 -960 960 960"),s(e,"width","24px"),s(e,"fill","currentColor"),s(e,"class","agdf-icon up-arrow")},m(t,a){G(t,e,a),n(e,r)},p:Q,i:Q,o:Q,d(t){t&&i(e)}}}class Ft extends ce{constructor(e){super(),fe(this,e,null,jt,ue,{})}}function Pt(o){let e,r,t,a,f,l,p,m,d,v,C,y,j,Y;r=new _t({});const A=o[3].default,g=rt(A,o,o[2],null);return l=new kt({}),d=new Ft({}),C=new Ht({}),{c(){e=u("div"),L(r.$$.fragment),t=_(),a=u("main"),g&&g.c(),f=_(),L(l.$$.fragment),p=_(),m=u("button"),L(d.$$.fragment),v=_(),L(C.$$.fragment),this.h()},l($){e=c($,"DIV",{class:!0});var b=h(e);I(r.$$.fragment,b),t=w(b),a=c(b,"MAIN",{id:!0,class:!0});var U=h(a);g&&g.l(U),U.forEach(i),f=w(b),I(l.$$.fragment,b),p=w(b),m=c(b,"BUTTON",{type:!0,class:!0});var R=h(m);I(d.$$.fragment,R),R.forEach(i),v=w(b),I(C.$$.fragment,b),b.forEach(i),this.h()},h(){s(a,"id","main-content"),s(a,"class","svelte-bb028s"),s(m,"type","button"),s(m,"class","btn-back-to-top svelte-bb028s"),et(m,"is-visible",o[0]),s(e,"class","app svelte-bb028s")},m($,b){G($,e,b),M(r,e,null),n(e,t),n(e,a),g&&g.m(a,null),n(e,f),M(l,e,null),n(e,p),n(e,m),M(d,m,null),n(e,v),M(C,e,null),y=!0,j||(Y=ut(m,"click",o[4]),j=!0)},p($,[b]){g&&g.p&&(!y||b&4)&&at(g,A,$,$[2],y?nt(A,$[2],b,null):st($[2]),null),(!y||b&1)&&et(m,"is-visible",$[0])},i($){y||(q(r.$$.fragment,$),q(g,$),q(l.$$.fragment,$),q(d.$$.fragment,$),q(C.$$.fragment,$),y=!0)},o($){T(r.$$.fragment,$),T(g,$),T(l.$$.fragment,$),T(d.$$.fragment,$),T(C.$$.fragment,$),y=!1},d($){$&&i(e),k(r),g&&g.d($),k(l),k(d),k(C),j=!1,Y()}}}function Rt(o,e,r){let{$$slots:t={},$$scope:a}=e,f=!1;function l(){{const d=C=>{C[0].isIntersecting?r(0,f=!1):r(0,f=!0)},v=new window.IntersectionObserver(d);v==null||v.observe(document.querySelector(".hero"))}}function p(){r(0,f=!1),window.scrollTo({top:0,behavior:"smooth"})}l();const m=()=>p();return o.$$set=d=>{"$$scope"in d&&r(2,a=d.$$scope)},o.$$.update=()=>{o.$$.dirty&1&&r(0,f),o.$$.dirty&1&&f&&l()},[f,p,a,t,m]}class Kt extends ce{constructor(e){super(),fe(this,e,Rt,Pt,ue,{})}}export{Kt as component,Yt as universal};
