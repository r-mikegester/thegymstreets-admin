"use strict";(self["webpackChunkmyApp"]=self["webpackChunkmyApp"]||[]).push([[823],{6823:(e,t,o)=>{o.r(t),o.d(t,{startTapClick:()=>s});var n=o(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=e=>{let t,o,s,p=10*-u,v=0;const f=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=e=>{p=(0,n.u)(e),k(e)},L=e=>{p=(0,n.u)(e),T(e)},w=e=>{if(2===e.button)return;const t=(0,n.u)(e)-u;p<t&&k(e)},E=e=>{const t=(0,n.u)(e)-u;p<t&&T(e)},b=()=>{s&&clearTimeout(s),s=void 0,t&&(R(!1),t=void 0)},k=e=>{t||g(i(e),e)},T=e=>{g(void 0,e)},g=(e,o)=>{if(e&&e===t)return;s&&clearTimeout(s),s=void 0;const{x:i,y:r}=(0,n.p)(o);if(t){if(m.has(t))throw new Error("internal error");t.classList.contains(c)||y(t,i,r),R(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e)),e.classList.remove(c);const o=()=>{y(e,i,r),s=void 0};a(e)?o():s=setTimeout(o,d)}t=e},y=(e,t,n)=>{if(v=Date.now(),e.classList.add(c),!f)return;const s=r(e);null!==s&&(C(),o=s.addRipple(t,n))},C=()=>{void 0!==o&&(o.then((e=>e())),o=void 0)},R=e=>{C();const o=t;if(!o)return;const n=l-Date.now()+v;if(e&&n>0&&!a(o)){const e=setTimeout((()=>{o.classList.remove(c),m.delete(o)}),l);m.set(o,e)}else o.classList.remove(c)},S=document;S.addEventListener("ionGestureCaptured",b),S.addEventListener("touchstart",h,!0),S.addEventListener("touchcancel",L,!0),S.addEventListener("touchend",L,!0),S.addEventListener("pointercancel",b,!0),S.addEventListener("mousedown",w,!0),S.addEventListener("mouseup",E,!0)},i=e=>{if(void 0===e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(!(o instanceof ShadowRoot)&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);
//# sourceMappingURL=823.258a6869.js.map