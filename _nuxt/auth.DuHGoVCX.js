import{l as I,m as C,q as x,_ as N,s as A,g as d,c as F,u as o,k as y,f as w,b as n,w as _,F as E,o as g,a as u,x as p,n as R,y as j,z as H,A as L}from"./entry.DCNB1XUa.js";import{_ as O}from"./QInput.BrSrZ1_G.js";import{u as P,a as Q,b as T}from"./use-checkbox.CFOF4ENy.js";import{_ as D}from"./QForm.B-Y_ttAh.js";import{_ as G,a as J}from"./QCardSection.D4GnZd4j.js";import{u as K}from"./vue.f36acd1f.CEQ2frYa.js";import"./use-dark.BOOzoC_p.js";const M=I({name:"QToggle",props:{...P,icon:String,iconColor:String},emits:Q,setup(m){function f(s,a){const t=C(()=>(s.value===!0?m.checkedIcon:a.value===!0?m.indeterminateIcon:m.uncheckedIcon)||m.icon),i=C(()=>s.value===!0?m.iconColor:null);return()=>[x("div",{class:"q-toggle__track"}),x("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},t.value!==void 0?[x(N,{name:t.value,color:i.value})]:void 0)]}return T("toggle",f)}}),W=u("h1",{class:"text-3xl mb-6"}," Вход ",-1),X={class:"flex justify-center w-[96%] mr-4"},Y={class:"flex flex-col sm:flex-row sm:flex-nowrap justify-between items-center mt-2"},Z=u("span",{class:"text-darkgray my-2"},"У Вас нет аккаунта? ",-1),ee=u("h1",{class:"text-3xl mb-6"}," Регистрация ",-1),te={class:"flex justify-center w-[96%] mr-4"},le={class:"flex flex-col sm:flex-row sm:flex-nowrap justify-between items-center mt-4"},oe=u("span",{class:"text-darkgray my-2"},"Есть аккаунт?",-1),de={__name:"auth",setup(m){const f=A();K({title:"Вход"});const s=d(null),a=d(null),t=d(!1),i=d(!1),c=d("login");async function h(){if(i.value=!0,t.value===!0){z();return}const r={username:s.value,password:a.value};await j(r,c.value)?(i.value=!0,f.push({path:"/"})):i.value=!1}async function z(){(await j({username:"guest",password:"guest"},c.value)).username&&f.push({path:"/"})}function k(r){c.value=r}function S(r){r===!0?(s.value="guest",a.value="guest"):(s.value="",a.value=""),t.value=r}return(r,e)=>{const U=L,v=O,$=M,b=H,V=D,q=J,B=G;return g(),F(E,null,[o(i)===!0?(g(),y(U,{key:0,color:"primary",size:"3em",class:"absolute top-2 left-4"})):w("",!0),n(B,{class:"w-4/5 mt-[10vh] sm:w-96 lg:mt-[20vh]"},{default:_(()=>[o(c)==="login"?(g(),y(q,{key:0},{default:_(()=>[W,n(V,{class:"q-gutter-md mb-4",onSubmit:h},{default:_(()=>[u("div",{class:R(o(t)?"disabled":"")},[n(v,{modelValue:o(s),"onUpdate:modelValue":e[0]||(e[0]=l=>p(s)?s.value=l:null),disable:!!o(t),filled:"",hint:"Логин",class:"mb-3",autocomplete:"username"},null,8,["modelValue","disable"]),n(v,{modelValue:o(a),"onUpdate:modelValue":e[1]||(e[1]=l=>p(a)?a.value=l:null),disable:!!o(t),filled:"",type:"password",hint:"Пароль",autocomplete:"password"},null,8,["modelValue","disable"])],2),n($,{modelValue:o(t),"onUpdate:modelValue":[e[2]||(e[2]=l=>p(t)?t.value=l:null),e[3]||(e[3]=(l,se)=>S(l))],label:"Войти как гость"},null,8,["modelValue"]),u("div",X,[n(b,{label:"Войти",type:"submit",color:"primary"})])]),_:1}),u("div",Y,[Z,n(b,{flat:"",size:"md",label:"Зарегистрируйтесь",color:"primary",onClick:e[4]||(e[4]=l=>k("register"))})])]),_:1})):w("",!0),o(c)==="register"?(g(),y(q,{key:1},{default:_(()=>[ee,n(V,{class:"q-gutter-md",onSubmit:h},{default:_(()=>[u("div",null,[n(v,{modelValue:o(s),"onUpdate:modelValue":e[5]||(e[5]=l=>p(s)?s.value=l:null),disable:!!o(t),filled:"",hint:"Логин",class:"mb-3"},null,8,["modelValue","disable"]),n(v,{modelValue:o(a),"onUpdate:modelValue":e[6]||(e[6]=l=>p(a)?a.value=l:null),disable:!!o(t),filled:"",type:"password",hint:"Пароль"},null,8,["modelValue","disable"])]),u("div",te,[n(b,{label:"Зарегистрироваться",type:"submit",color:"primary"})])]),_:1}),u("div",le,[oe,n(b,{flat:"",size:"md",label:"Войти",color:"primary",onClick:e[7]||(e[7]=l=>k("login"))})])]),_:1})):w("",!0)]),_:1})],64)}}};export{de as default};
