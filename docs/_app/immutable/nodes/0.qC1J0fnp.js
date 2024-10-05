import{s as ue,c as ft,n as Q,b as nt,u as lt,g as ot,d as it}from"../chunks/scheduler.hhBapi99.js";import{S as ce,i as fe,e as i,s as _,k as D,c as u,m as L,f as w,a as h,d as o,l as I,n as s,g as z,h as n,o as T,p as q,q as b,r as A,u as Te,v as Ae,t as De,b as Ie}from"../chunks/index.DtuR3W1p.js";import{p as dt}from"../chunks/stores.BtbNpaD9.js";import{D as Ve}from"../chunks/Dialog.B8LH17uR.js";import{C as ut}from"../chunks/Calendly.CVXcggHV.js";import{P as ct}from"../chunks/Paypal.DrKpiuqh.js";import{D as mt}from"../chunks/Default.DBCOc4DE.js";import{C as st,G as $t}from"../chunks/GoogleMaps.B6MDJ67L.js";const ht=!0,Qt=Object.freeze(Object.defineProperty({__proto__:null,prerender:ht},Symbol.toStringTag,{value:"Module"})),vt=""+new URL("../assets/logo.CUU2VvPM.webp",import.meta.url).href;function gt(c){let e,a;return e=new ct({}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function pt(c){let e,a;return e=new ut({}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function _t(c){let e,a="Skip to content",t,r,f,l,g=`<a href="/" tabindex="-1" class="svelte-18uj65e"><img src="${vt}" alt="SvelteKit" class="nav-logo svelte-18uj65e"/></a>`,d,m,v,p,$,x="About",O,k,S,Z,we="Visit",J,W,N,M,xe="Support",V,X,ne,G,ee,le,U,H;return G=new Ve({props:{name:"Donate",id:"header-donate-desktop",$$slots:{default:[gt]},$$scope:{ctx:c}}}),U=new Ve({props:{name:"Schedule Visit",id:"header-calendly-visit-desktop",$$slots:{default:[pt]},$$scope:{ctx:c}}}),{c(){e=i("a"),e.textContent=a,t=_(),r=i("header"),f=i("div"),l=i("div"),l.innerHTML=g,d=_(),m=i("nav"),v=i("ul"),p=i("li"),$=i("a"),$.textContent=x,k=_(),S=i("li"),Z=i("a"),Z.textContent=we,W=_(),N=i("li"),M=i("a"),M.textContent=xe,X=_(),ne=i("li"),D(G.$$.fragment),ee=_(),le=i("li"),D(U.$$.fragment),this.h()},l(C){e=u(C,"A",{href:!0,class:!0,"data-svelte-h":!0}),L(e)!=="svelte-1ip5yzc"&&(e.textContent=a),t=w(C),r=u(C,"HEADER",{class:!0});var y=h(r);f=u(y,"DIV",{class:!0});var Y=h(f);l=u(Y,"DIV",{class:!0,"data-svelte-h":!0}),L(l)!=="svelte-qoqo11"&&(l.innerHTML=g),d=w(Y),m=u(Y,"NAV",{class:!0});var F=h(m);v=u(F,"UL",{class:!0});var P=h(v);p=u(P,"LI",{"aria-current":!0,class:!0});var K=h(p);$=u(K,"A",{href:!0,class:!0,"data-svelte-h":!0}),L($)!=="svelte-iphxk9"&&($.textContent=x),K.forEach(o),k=w(P),S=u(P,"LI",{"aria-current":!0,class:!0});var j=h(S);Z=u(j,"A",{href:!0,class:!0,"data-svelte-h":!0}),L(Z)!=="svelte-1lej6ih"&&(Z.textContent=we),j.forEach(o),W=w(P),N=u(P,"LI",{"aria-current":!0,class:!0});var te=h(N);M=u(te,"A",{href:!0,class:!0,"data-svelte-h":!0}),L(M)!=="svelte-1bs7h0p"&&(M.textContent=xe),te.forEach(o),X=w(P),ne=u(P,"LI",{class:!0});var Ce=h(ne);I(G.$$.fragment,Ce),Ce.forEach(o),ee=w(P),le=u(P,"LI",{class:!0});var ae=h(le);I(U.$$.fragment,ae),ae.forEach(o),P.forEach(o),F.forEach(o),Y.forEach(o),y.forEach(o),this.h()},h(){s(e,"href","#main-content"),s(e,"class","skip-link svelte-18uj65e"),s(l,"class","corner svelte-18uj65e"),s($,"href","/about"),s($,"class","svelte-18uj65e"),s(p,"aria-current",O=c[0].url.pathname==="/about"?"page":void 0),s(p,"class","svelte-18uj65e"),s(Z,"href","/visit"),s(Z,"class","svelte-18uj65e"),s(S,"aria-current",J=c[0].url.pathname==="/visit"?"page":void 0),s(S,"class","svelte-18uj65e"),s(M,"href","/support"),s(M,"class","svelte-18uj65e"),s(N,"aria-current",V=c[0].url.pathname.startsWith("/support")?"page":void 0),s(N,"class","svelte-18uj65e"),s(ne,"class","mobile-hidden svelte-18uj65e"),s(le,"class","mobile-hidden svelte-18uj65e"),s(v,"class","svelte-18uj65e"),s(m,"class","svelte-18uj65e"),s(f,"class","container svelte-18uj65e"),s(r,"class","svelte-18uj65e")},m(C,y){z(C,e,y),z(C,t,y),z(C,r,y),n(r,f),n(f,l),n(f,d),n(f,m),n(m,v),n(v,p),n(p,$),n(v,k),n(v,S),n(S,Z),n(v,W),n(v,N),n(N,M),n(v,X),n(v,ne),T(G,ne,null),n(v,ee),n(v,le),T(U,le,null),H=!0},p(C,[y]){(!H||y&1&&O!==(O=C[0].url.pathname==="/about"?"page":void 0))&&s(p,"aria-current",O),(!H||y&1&&J!==(J=C[0].url.pathname==="/visit"?"page":void 0))&&s(S,"aria-current",J),(!H||y&1&&V!==(V=C[0].url.pathname.startsWith("/support")?"page":void 0))&&s(N,"aria-current",V);const Y={};y&2&&(Y.$$scope={dirty:y,ctx:C}),G.$set(Y);const F={};y&2&&(F.$$scope={dirty:y,ctx:C}),U.$set(F)},i(C){H||(q(G.$$.fragment,C),q(U.$$.fragment,C),H=!0)},o(C){b(G.$$.fragment,C),b(U.$$.fragment,C),H=!1},d(C){C&&(o(e),o(t),o(r)),A(G),A(U)}}}function wt(c,e,a){let t;return ft(c,dt,r=>a(0,t=r)),[t]}class xt extends ce{constructor(e){super(),fe(this,e,wt,_t,ue,{})}}function Ct(c){let e,a;return{c(){e=Te("svg"),a=Te("path"),this.h()},l(t){e=Ae(t,"svg",{xmlns:!0,height:!0,viewBox:!0,width:!0,fill:!0,class:!0});var r=h(e);a=Ae(r,"path",{d:!0}),h(a).forEach(o),r.forEach(o),this.h()},h(){s(a,"d","M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"height","24px"),s(e,"viewBox","0 -960 960 960"),s(e,"width","24px"),s(e,"fill","currentColor"),s(e,"class","agdf-icon icon-help")},m(t,r){z(t,e,r),n(e,a)},p:Q,i:Q,o:Q,d(t){t&&o(e)}}}class Et extends ce{constructor(e){super(),fe(this,e,null,Ct,ue,{})}}function qt(c){let e,a,t,r,f,l;t=new Et({});const g=c[2].default,d=nt(g,c,c[1],null);return{c(){e=i("details"),a=i("summary"),D(t.$$.fragment),r=_(),f=i("div"),d&&d.c(),this.h()},l(m){e=u(m,"DETAILS",{class:!0,id:!0});var v=h(e);a=u(v,"SUMMARY",{class:!0});var p=h(a);I(t.$$.fragment,p),p.forEach(o),r=w(v),f=u(v,"DIV",{class:!0,role:!0});var $=h(f);d&&d.l($),$.forEach(o),v.forEach(o),this.h()},h(){s(a,"class","svelte-nypfa2"),s(f,"class","helper-content svelte-nypfa2"),s(f,"role","tooltip"),s(e,"class","helper-container svelte-nypfa2"),s(e,"id",c[0])},m(m,v){z(m,e,v),n(e,a),T(t,a,null),n(e,r),n(e,f),d&&d.m(f,null),l=!0},p(m,[v]){d&&d.p&&(!l||v&2)&&lt(d,g,m,m[1],l?it(g,m[1],v,null):ot(m[1]),null),(!l||v&1)&&s(e,"id",m[0])},i(m){l||(q(t.$$.fragment,m),q(d,m),l=!0)},o(m){b(t.$$.fragment,m),b(d,m),l=!1},d(m){m&&o(e),A(t),d&&d.d(m)}}}function bt(c,e,a){let{$$slots:t={},$$scope:r}=e,{id:f}=e;return c.$$set=l=>{"id"in l&&a(0,f=l.id),"$$scope"in l&&a(1,r=l.$$scope)},[f,r,t]}class yt extends ce{constructor(e){super(),fe(this,e,bt,qt,ue,{id:0})}}function Dt(c){let e,a;return{c(){e=Te("svg"),a=Te("path"),this.h()},l(t){e=Ae(t,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var r=h(e);a=Ae(r,"path",{d:!0}),h(a).forEach(o),r.forEach(o),this.h()},h(){s(a,"d","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 512 512"),s(e,"width","24"),s(e,"height","24"),s(e,"fill","currentColor")},m(t,r){z(t,e,r),n(e,a)},p:Q,i:Q,o:Q,d(t){t&&o(e)}}}class It extends ce{constructor(e){super(),fe(this,e,null,Dt,ue,{})}}function Tt(c){let e,a;return{c(){e=Te("svg"),a=Te("path"),this.h()},l(t){e=Ae(t,"svg",{xmlns:!0,viewBox:!0,width:!0,height:!0,fill:!0});var r=h(e);a=Ae(r,"path",{d:!0}),h(a).forEach(o),r.forEach(o),this.h()},h(){s(a,"d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 448 512"),s(e,"width","24"),s(e,"height","24"),s(e,"fill","currentColor")},m(t,r){z(t,e,r),n(e,a)},p:Q,i:Q,o:Q,d(t){t&&o(e)}}}class At extends ce{constructor(e){super(),fe(this,e,null,Tt,ue,{})}}function Vt(c){let e,a=`<strong>Memorial Day</strong> to
                            <strong>Labor Day</strong>: 9 am - 8 pm`,t,r,f=`<strong>Labor Day</strong> to
                            <strong>Memorial Day</strong>: 9 am - 5 pm`;return{c(){e=i("p"),e.innerHTML=a,t=_(),r=i("p"),r.innerHTML=f},l(l){e=u(l,"P",{"data-svelte-h":!0}),L(e)!=="svelte-1wkzhqs"&&(e.innerHTML=a),t=w(l),r=u(l,"P",{"data-svelte-h":!0}),L(r)!=="svelte-174getx"&&(r.innerHTML=f)},m(l,g){z(l,e,g),z(l,t,g),z(l,r,g)},p:Q,d(l){l&&(o(e),o(t),o(r))}}}function Lt(c){let e,a;return e=new $t({}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function Mt(c){let e,a;return e=new mt({props:{id:"general-inquery",form:"message"}}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},p:Q,i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function St(c){let e,a,t,r,f,l="Hours",g,d,m,v,p="9am - 8pm",$,x,O,k,S,Z="Location",we,J,W,N,M,xe,V,X,ne="Contact Us",G,ee,le='Phone: <a href="tel:15076631370" title="click to call">(507) 663-1370</a>',U,H,C,y,Y,F,P,K,j,te,Ce,ae,We="Visit us on Facebook",Fe,B,de,Pe,me,Ye="Visit us on Instagram",Re,$e,Ke='<h3>Quick Links</h3> <nav class="svelte-1vqsm8d"><a href="/about" class="svelte-1vqsm8d">About</a> <a href="/our-team" class="svelte-1vqsm8d">Team</a> <a href="/press" class="svelte-1vqsm8d">Press</a> <a href="/faq" class="svelte-1vqsm8d">Farm Faq&#39;s</a></nav>',ze,Ee,qe,ie,re,Ne,Qe=new Date().getFullYear()+"",Ge,Ue,he,Je="Privacy Policy",Be,ve,Xe="Accessibility Policy",Oe,be,et=`A Great Day Farm is a 501(c)3 private operating foundation
                    recognized by the IRS. Tax ID number: 46-4272037`,Me;return x=new yt({props:{id:"footer-hours",$$slots:{default:[Vt]},$$scope:{ctx:c}}}),W=new st({props:{text:jt}}),M=new Ve({props:{name:"Get Directions",id:"footer-directions-map",$$slots:{default:[Lt]},$$scope:{ctx:c}}}),y=new st({props:{text:"hello@agreatday.org"}}),F=new Ve({props:{name:"Email Us",id:"footer-contact-form",$$slots:{default:[Mt]},$$scope:{ctx:c}}}),te=new It({}),de=new At({}),{c(){e=i("footer"),a=i("div"),t=i("div"),r=i("div"),f=i("h3"),f.textContent=l,g=_(),d=i("time"),m=De("Everyday from "),v=i("strong"),v.textContent=p,$=_(),D(x.$$.fragment),O=_(),k=i("div"),S=i("h3"),S.textContent=Z,we=_(),J=i("address"),D(W.$$.fragment),N=_(),D(M.$$.fragment),xe=_(),V=i("address"),X=i("h3"),X.textContent=ne,G=_(),ee=i("div"),ee.innerHTML=le,U=_(),H=i("div"),C=De("Email: "),D(y.$$.fragment),Y=_(),D(F.$$.fragment),P=_(),K=i("div"),j=i("a"),D(te.$$.fragment),Ce=_(),ae=i("span"),ae.textContent=We,Fe=_(),B=i("a"),D(de.$$.fragment),Pe=_(),me=i("span"),me.textContent=Ye,Re=_(),$e=i("div"),$e.innerHTML=Ke,ze=_(),Ee=i("div"),qe=i("div"),ie=i("div"),re=i("small"),Ne=De("Copyright ©"),Ge=De(Qe),Ue=De(` A Great Day Farm.
                    All Rights Reserved |
                    `),he=i("a"),he.textContent=Je,Be=De(` |
                    `),ve=i("a"),ve.textContent=Xe,Oe=_(),be=i("small"),be.textContent=et,this.h()},l(E){e=u(E,"FOOTER",{class:!0});var R=h(e);a=u(R,"DIV",{class:!0});var oe=h(a);t=u(oe,"DIV",{class:!0});var ge=h(t);r=u(ge,"DIV",{class:!0});var pe=h(r);f=u(pe,"H3",{"data-svelte-h":!0}),L(f)!=="svelte-15ravrn"&&(f.textContent=l),g=w(pe),d=u(pe,"TIME",{datetime:!0,class:!0});var Le=h(d);m=Ie(Le,"Everyday from "),v=u(Le,"STRONG",{"data-svelte-h":!0}),L(v)!=="svelte-oj9utd"&&(v.textContent=p),$=w(Le),I(x.$$.fragment,Le),Le.forEach(o),pe.forEach(o),O=w(ge),k=u(ge,"DIV",{class:!0});var ye=h(k);S=u(ye,"H3",{"data-svelte-h":!0}),L(S)!=="svelte-15gguv3"&&(S.textContent=Z),we=w(ye),J=u(ye,"ADDRESS",{});var tt=h(J);I(W.$$.fragment,tt),tt.forEach(o),N=w(ye),I(M.$$.fragment,ye),ye.forEach(o),ge.forEach(o),xe=w(oe),V=u(oe,"ADDRESS",{class:!0});var se=h(V);X=u(se,"H3",{"data-svelte-h":!0}),L(X)!=="svelte-n6ud3s"&&(X.textContent=ne),G=w(se),ee=u(se,"DIV",{"data-svelte-h":!0}),L(ee)!=="svelte-1ljwzff"&&(ee.innerHTML=le),U=w(se),H=u(se,"DIV",{});var Ze=h(H);C=Ie(Ze,"Email: "),I(y.$$.fragment,Ze),Ze.forEach(o),Y=w(se),I(F.$$.fragment,se),P=w(se),K=u(se,"DIV",{class:!0});var Se=h(K);j=u(Se,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0});var je=h(j);I(te.$$.fragment,je),Ce=w(je),ae=u(je,"SPAN",{class:!0,"data-svelte-h":!0}),L(ae)!=="svelte-bji331"&&(ae.textContent=We),je.forEach(o),Fe=w(Se),B=u(Se,"A",{class:!0,href:!0,title:!0,target:!0,rel:!0});var ke=h(B);I(de.$$.fragment,ke),Pe=w(ke),me=u(ke,"SPAN",{class:!0,"data-svelte-h":!0}),L(me)!=="svelte-jasb39"&&(me.textContent=Ye),ke.forEach(o),Se.forEach(o),se.forEach(o),Re=w(oe),$e=u(oe,"DIV",{class:!0,"data-svelte-h":!0}),L($e)!=="svelte-4mics9"&&($e.innerHTML=Ke),oe.forEach(o),ze=w(R),Ee=u(R,"DIV",{class:!0});var at=h(Ee);qe=u(at,"DIV",{class:!0});var rt=h(qe);ie=u(rt,"DIV",{class:!0});var He=h(ie);re=u(He,"SMALL",{});var _e=h(re);Ne=Ie(_e,"Copyright ©"),Ge=Ie(_e,Qe),Ue=Ie(_e,` A Great Day Farm.
                    All Rights Reserved |
                    `),he=u(_e,"A",{href:!0,"data-svelte-h":!0}),L(he)!=="svelte-l94po8"&&(he.textContent=Je),Be=Ie(_e,` |
                    `),ve=u(_e,"A",{href:!0,"data-svelte-h":!0}),L(ve)!=="svelte-c5vvns"&&(ve.textContent=Xe),_e.forEach(o),Oe=w(He),be=u(He,"SMALL",{"data-svelte-h":!0}),L(be)!=="svelte-1ks272k"&&(be.textContent=et),He.forEach(o),rt.forEach(o),at.forEach(o),R.forEach(o),this.h()},h(){s(d,"datetime",""),s(d,"class","company-hours svelte-1vqsm8d"),s(r,"class","footer-group svelte-1vqsm8d"),s(k,"class","footer-group svelte-1vqsm8d"),s(t,"class","company-info"),s(ae,"class","sr-only"),s(j,"class","social-icon icon-facebook svelte-1vqsm8d"),s(j,"href","https://www.facebook.com/AGreatDayFarmNorthfield/"),s(j,"title","Follow us on Facebook"),s(j,"target","_blank"),s(j,"rel","noopener noreferrer"),s(me,"class","sr-only"),s(B,"class","social-icon icon-instagram svelte-1vqsm8d"),s(B,"href","https://www.instagram.com/explore/locations/148135145889565/a-great-day-farm/recent/"),s(B,"title","Follow us on Instagram"),s(B,"target","_blank"),s(B,"rel","noopener noreferrer"),s(K,"class","social-icons svelte-1vqsm8d"),s(V,"class","footer-group contact-info svelte-1vqsm8d"),s($e,"class","links"),s(a,"class","footer-grid container"),s(he,"href","/privacy-policy"),s(ve,"href","/accessibility-policy"),s(ie,"class","legal-content"),s(qe,"class","container"),s(Ee,"class","company-legal svelte-1vqsm8d"),s(e,"class","svelte-1vqsm8d")},m(E,R){z(E,e,R),n(e,a),n(a,t),n(t,r),n(r,f),n(r,g),n(r,d),n(d,m),n(d,v),n(d,$),T(x,d,null),n(t,O),n(t,k),n(k,S),n(k,we),n(k,J),T(W,J,null),n(k,N),T(M,k,null),n(a,xe),n(a,V),n(V,X),n(V,G),n(V,ee),n(V,U),n(V,H),n(H,C),T(y,H,null),n(V,Y),T(F,V,null),n(V,P),n(V,K),n(K,j),T(te,j,null),n(j,Ce),n(j,ae),n(K,Fe),n(K,B),T(de,B,null),n(B,Pe),n(B,me),n(a,Re),n(a,$e),n(e,ze),n(e,Ee),n(Ee,qe),n(qe,ie),n(ie,re),n(re,Ne),n(re,Ge),n(re,Ue),n(re,he),n(re,Be),n(re,ve),n(ie,Oe),n(ie,be),Me=!0},p(E,[R]){const oe={};R&1&&(oe.$$scope={dirty:R,ctx:E}),x.$set(oe);const ge={};R&1&&(ge.$$scope={dirty:R,ctx:E}),M.$set(ge);const pe={};R&1&&(pe.$$scope={dirty:R,ctx:E}),F.$set(pe)},i(E){Me||(q(x.$$.fragment,E),q(W.$$.fragment,E),q(M.$$.fragment,E),q(y.$$.fragment,E),q(F.$$.fragment,E),q(te.$$.fragment,E),q(de.$$.fragment,E),Me=!0)},o(E){b(x.$$.fragment,E),b(W.$$.fragment,E),b(M.$$.fragment,E),b(y.$$.fragment,E),b(F.$$.fragment,E),b(te.$$.fragment,E),b(de.$$.fragment,E),Me=!1},d(E){E&&o(e),A(x),A(W),A(M),A(y),A(F),A(te),A(de)}}}const jt="5575 115th St. East, Northfield, MN 55057";class kt extends ce{constructor(e){super(),fe(this,e,null,St,ue,{})}}function Ht(c){let e,a;return e=new ct({}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function Ft(c){let e,a;return e=new ut({}),{c(){D(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,r){T(e,t,r),a=!0},i(t){a||(q(e.$$.fragment,t),a=!0)},o(t){b(e.$$.fragment,t),a=!1},d(t){A(e,t)}}}function Pt(c){let e,a,t,r,f;return a=new Ve({props:{name:"Donate",id:"header-donate-mobile",$$slots:{default:[Ht]},$$scope:{ctx:c}}}),r=new Ve({props:{name:"Schedule Visit",id:"header-calendly-visit-mobile",$$slots:{default:[Ft]},$$scope:{ctx:c}}}),{c(){e=i("nav"),D(a.$$.fragment),t=_(),D(r.$$.fragment),this.h()},l(l){e=u(l,"NAV",{class:!0});var g=h(e);I(a.$$.fragment,g),t=w(g),I(r.$$.fragment,g),g.forEach(o),this.h()},h(){s(e,"class","mobile-drawer desktop-hidden svelte-m2qnpp")},m(l,g){z(l,e,g),T(a,e,null),n(e,t),T(r,e,null),f=!0},p(l,[g]){const d={};g&1&&(d.$$scope={dirty:g,ctx:l}),a.$set(d);const m={};g&1&&(m.$$scope={dirty:g,ctx:l}),r.$set(m)},i(l){f||(q(a.$$.fragment,l),q(r.$$.fragment,l),f=!0)},o(l){b(a.$$.fragment,l),b(r.$$.fragment,l),f=!1},d(l){l&&o(e),A(a),A(r)}}}class Rt extends ce{constructor(e){super(),fe(this,e,null,Pt,ue,{})}}function zt(c){let e,a,t,r,f,l,g,d,m;a=new xt({});const v=c[1].default,p=nt(v,c,c[0],null);return l=new kt({}),d=new Rt({}),{c(){e=i("div"),D(a.$$.fragment),t=_(),r=i("main"),p&&p.c(),f=_(),D(l.$$.fragment),g=_(),D(d.$$.fragment),this.h()},l($){e=u($,"DIV",{class:!0});var x=h(e);I(a.$$.fragment,x),t=w(x),r=u(x,"MAIN",{id:!0,class:!0});var O=h(r);p&&p.l(O),O.forEach(o),f=w(x),I(l.$$.fragment,x),g=w(x),I(d.$$.fragment,x),x.forEach(o),this.h()},h(){s(r,"id","main-content"),s(r,"class","svelte-hwg2rn"),s(e,"class","app svelte-hwg2rn")},m($,x){z($,e,x),T(a,e,null),n(e,t),n(e,r),p&&p.m(r,null),n(e,f),T(l,e,null),n(e,g),T(d,e,null),m=!0},p($,[x]){p&&p.p&&(!m||x&1)&&lt(p,v,$,$[0],m?it(v,$[0],x,null):ot($[0]),null)},i($){m||(q(a.$$.fragment,$),q(p,$),q(l.$$.fragment,$),q(d.$$.fragment,$),m=!0)},o($){b(a.$$.fragment,$),b(p,$),b(l.$$.fragment,$),b(d.$$.fragment,$),m=!1},d($){$&&o(e),A(a),p&&p.d($),A(l),A(d)}}}function Nt(c,e,a){let{$$slots:t={},$$scope:r}=e;return c.$$set=f=>{"$$scope"in f&&a(0,r=f.$$scope)},[r,t]}class Jt extends ce{constructor(e){super(),fe(this,e,Nt,zt,ue,{})}}export{Jt as component,Qt as universal};
