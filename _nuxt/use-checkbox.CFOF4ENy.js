import{a as R,u as j}from"./use-dark.BOOzoC_p.js";import{g as S,m as l,q as f,U as z,ae as F,O as D,S as K,J as L,R as x,av as s}from"./entry.DCNB1XUa.js";import{u as N,b as J}from"./QInput.BrSrZ1_G.js";function M(a,v){const e=S(null),c=l(()=>a.disable===!0?null:f("span",{ref:e,class:"no-outline",tabindex:-1}));function m(u){const r=v.value;u!==void 0&&u.type.indexOf("key")===0?r!==null&&document.activeElement!==r&&r.contains(document.activeElement)===!0&&r.focus():e.value!==null&&(u===void 0||r!==null&&r.contains(u.target)===!0)&&e.value.focus()}return{refocusTargetEl:c,refocusTarget:m}}const U={xs:30,sm:35,md:40,lg:50,xl:60},W={...j,...K,...N,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:a=>a==="tf"||a==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},X=["update:modelValue"];function Y(a,v){const{props:e,slots:c,emit:m,proxy:u}=L(),{$q:r}=u,q=R(e,r),p=S(null),{refocusTargetEl:k,refocusTarget:C}=M(e,p),I=z(e,U),i=l(()=>e.val!==void 0&&Array.isArray(e.modelValue)),g=l(()=>{const t=s(e.val);return i.value===!0?e.modelValue.findIndex(o=>s(o)===t):-1}),n=l(()=>i.value===!0?g.value!==-1:s(e.modelValue)===s(e.trueValue)),d=l(()=>i.value===!0?g.value===-1:s(e.modelValue)===s(e.falseValue)),h=l(()=>n.value===!1&&d.value===!1),$=l(()=>e.disable===!0?-1:e.tabindex||0),y=l(()=>`q-${a} cursor-pointer no-outline row inline no-wrap items-center`+(e.disable===!0?" disabled":"")+(q.value===!0?` q-${a}--dark`:"")+(e.dense===!0?` q-${a}--dense`:"")+(e.leftLabel===!0?" reverse":"")),O=l(()=>{const t=n.value===!0?"truthy":d.value===!0?"falsy":"indet",o=e.color!==void 0&&(e.keepColor===!0||(a==="toggle"?n.value===!0:d.value!==!0))?` text-${e.color}`:"";return`q-${a}__inner relative-position non-selectable q-${a}__inner--${t}${o}`}),_=l(()=>{const t={type:"checkbox"};return e.name!==void 0&&Object.assign(t,{".checked":n.value,"^checked":n.value===!0?"checked":void 0,name:e.name,value:i.value===!0?e.val:e.trueValue}),t}),T=J(_),w=l(()=>{const t={tabindex:$.value,role:a==="toggle"?"switch":"checkbox","aria-label":e.label,"aria-checked":h.value===!0?"mixed":n.value===!0?"true":"false"};return e.disable===!0&&(t["aria-disabled"]="true"),t});function b(t){t!==void 0&&(x(t),C(t)),e.disable!==!0&&m("update:modelValue",A(),t)}function A(){if(i.value===!0){if(n.value===!0){const t=e.modelValue.slice();return t.splice(g.value,1),t}return e.modelValue.concat([e.val])}if(n.value===!0){if(e.toggleOrder!=="ft"||e.toggleIndeterminate===!1)return e.falseValue}else if(d.value===!0){if(e.toggleOrder==="ft"||e.toggleIndeterminate===!1)return e.trueValue}else return e.toggleOrder!=="ft"?e.trueValue:e.falseValue;return e.indeterminateValue}function B(t){(t.keyCode===13||t.keyCode===32)&&x(t)}function E(t){(t.keyCode===13||t.keyCode===32)&&b(t)}const P=v(n,h);return Object.assign(u,{toggle:b}),()=>{const t=P();e.disable!==!0&&T(t,"unshift",` q-${a}__native absolute q-ma-none q-pa-none`);const o=[f("div",{class:O.value,style:I.value,"aria-hidden":"true"},t)];k.value!==null&&o.push(k.value);const V=e.label!==void 0?F(c.default,[e.label]):D(c.default);return V!==void 0&&o.push(f("div",{class:`q-${a}__label q-anchor--skip`},V)),f("div",{ref:p,class:y.value,...w.value,onClick:b,onKeydown:B,onKeyup:E},o)}}export{X as a,Y as b,W as u};
