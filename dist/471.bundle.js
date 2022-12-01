"use strict";(self.webpackChunkvisiql=self.webpackChunkvisiql||[]).push([[471,574],{7181:(e,t,n)=>{n.d(t,{a:()=>p,b:()=>s,c:()=>f,d:()=>m,e:()=>v,g:()=>l});var o=n(398),i=n(2584),r=n(1520),a=Object.defineProperty,c=(e,t)=>a(e,"name",{value:t,configurable:!0});function l(e,t){const n={schema:e,type:null,parentType:null,inputType:null,directiveDef:null,fieldDef:null,argDef:null,argDefs:null,objectFieldDefs:null};return(0,r.f)(t,(t=>{var i,r;switch(t.kind){case"Query":case"ShortQuery":n.type=e.getQueryType();break;case"Mutation":n.type=e.getMutationType();break;case"Subscription":n.type=e.getSubscriptionType();break;case"InlineFragment":case"FragmentDefinition":t.type&&(n.type=e.getType(t.type));break;case"Field":case"AliasedField":n.fieldDef=n.type&&t.name?u(e,n.parentType,t.name):null,n.type=null===(i=n.fieldDef)||void 0===i?void 0:i.type;break;case"SelectionSet":n.parentType=n.type?(0,o.xC)(n.type):null;break;case"Directive":n.directiveDef=t.name?e.getDirective(t.name):null;break;case"Arguments":const a=t.prevState?"Field"===t.prevState.kind?n.fieldDef:"Directive"===t.prevState.kind?n.directiveDef:"AliasedField"===t.prevState.kind?t.prevState.name&&u(e,n.parentType,t.prevState.name):null:null;n.argDefs=a?a.args:null;break;case"Argument":if(n.argDef=null,n.argDefs)for(let e=0;e<n.argDefs.length;e++)if(n.argDefs[e].name===t.name){n.argDef=n.argDefs[e];break}n.inputType=null===(r=n.argDef)||void 0===r?void 0:r.type;break;case"EnumValue":const c=n.inputType?(0,o.xC)(n.inputType):null;n.enumValue=c instanceof o.mR?d(c.getValues(),(e=>e.value===t.name)):null;break;case"ListValue":const l=n.inputType?(0,o.tf)(n.inputType):null;n.inputType=l instanceof o.p2?l.ofType:null;break;case"ObjectValue":const p=n.inputType?(0,o.xC)(n.inputType):null;n.objectFieldDefs=p instanceof o.sR?p.getFields():null;break;case"ObjectField":const s=t.name&&n.objectFieldDefs?n.objectFieldDefs[t.name]:null;n.inputType=null==s?void 0:s.type;break;case"NamedType":n.type=t.name?e.getType(t.name):null}})),n}function u(e,t,n){return n===i.S.name&&e.getQueryType()===t?i.S:n===i.T.name&&e.getQueryType()===t?i.T:n===i.a.name&&(0,o.Gv)(t)?i.a:t&&t.getFields?t.getFields()[n]:void 0}function d(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return e[n]}function p(e){return{kind:"Field",schema:e.schema,field:e.fieldDef,type:y(e.fieldDef)?null:e.parentType}}function s(e){return{kind:"Directive",schema:e.schema,directive:e.directiveDef}}function f(e){return e.directiveDef?{kind:"Argument",schema:e.schema,argument:e.argDef,directive:e.directiveDef}:{kind:"Argument",schema:e.schema,argument:e.argDef,field:e.fieldDef,type:y(e.fieldDef)?null:e.parentType}}function m(e){return{kind:"EnumValue",value:e.enumValue||void 0,type:e.inputType?(0,o.xC)(e.inputType):void 0}}function v(e,t){return{kind:"Type",schema:e.schema,type:t||e.type}}function y(e){return"__"===e.name.slice(0,2)}c(l,"getTypeInfo"),c(u,"getFieldDef"),c(d,"find"),c(p,"getFieldReference"),c(s,"getDirectiveReference"),c(f,"getArgumentReference"),c(m,"getEnumValueReference"),c(v,"getTypeReference"),c(y,"isMetaField")},1520:(e,t,n)=>{function o(e,t){const n=[];let o=e;for(;null==o?void 0:o.kind;)n.push(o),o=o.prevState;for(let e=n.length-1;e>=0;e--)t(n[e])}n.d(t,{f:()=>o}),(0,Object.defineProperty)(o,"name",{value:"forEachState",configurable:!0})},1574:(e,t,n)=>{n.r(t);var o=n(7480),i=(n(9361),n(7294),n(3935),Object.defineProperty),r=(e,t)=>i(e,"name",{value:t,configurable:!0});function a(e){return{options:e instanceof Function?{render:e}:!0===e?{}:e}}function c(e){const t=e.state.info.options;return(null==t?void 0:t.hoverTime)||500}function l(e,t){const n=e.state.info,i=t.target||t.srcElement;if(!(i instanceof HTMLElement))return;if("SPAN"!==i.nodeName||void 0!==n.hoverTimeout)return;const a=i.getBoundingClientRect(),l=r((function(){clearTimeout(n.hoverTimeout),n.hoverTimeout=setTimeout(p,s)}),"onMouseMove"),d=r((function(){o.C.off(document,"mousemove",l),o.C.off(e.getWrapperElement(),"mouseout",d),clearTimeout(n.hoverTimeout),n.hoverTimeout=void 0}),"onMouseOut"),p=r((function(){o.C.off(document,"mousemove",l),o.C.off(e.getWrapperElement(),"mouseout",d),n.hoverTimeout=void 0,u(e,a)}),"onHover"),s=c(e);n.hoverTimeout=setTimeout(p,s),o.C.on(document,"mousemove",l),o.C.on(e.getWrapperElement(),"mouseout",d)}function u(e,t){const n=e.coordsChar({left:(t.left+t.right)/2,top:(t.top+t.bottom)/2}),o=e.state.info.options,i=o.render||e.getHelper(n,"info");if(i){const r=e.getTokenAt(n,!0);if(r){const a=i(r,o,e,n);a&&d(e,t,a)}}}function d(e,t,n){const i=document.createElement("div");i.className="CodeMirror-info",i.appendChild(n),document.body.appendChild(i);const a=i.getBoundingClientRect(),c=window.getComputedStyle(i),l=a.right-a.left+parseFloat(c.marginLeft)+parseFloat(c.marginRight),u=a.bottom-a.top+parseFloat(c.marginTop)+parseFloat(c.marginBottom);let d=t.bottom;u>window.innerHeight-t.bottom-15&&t.top>window.innerHeight-t.bottom&&(d=t.top-u),d<0&&(d=t.bottom);let p,s=Math.max(0,window.innerWidth-l-15);s>t.left&&(s=t.left),i.style.opacity="1",i.style.top=d+"px",i.style.left=s+"px";const f=r((function(){clearTimeout(p)}),"onMouseOverPopup"),m=r((function(){clearTimeout(p),p=setTimeout(v,200)}),"onMouseOut"),v=r((function(){o.C.off(i,"mouseover",f),o.C.off(i,"mouseout",m),o.C.off(e.getWrapperElement(),"mouseout",m),i.style.opacity?(i.style.opacity="0",setTimeout((()=>{i.parentNode&&i.parentNode.removeChild(i)}),600)):i.parentNode&&i.parentNode.removeChild(i)}),"hidePopup");o.C.on(i,"mouseover",f),o.C.on(i,"mouseout",m),o.C.on(e.getWrapperElement(),"mouseout",m)}o.C.defineOption("info",!1,((e,t,n)=>{if(n&&n!==o.C.Init){const t=e.state.info.onMouseOver;o.C.off(e.getWrapperElement(),"mouseover",t),clearTimeout(e.state.info.hoverTimeout),delete e.state.info}if(t){const n=e.state.info=a(t);n.onMouseOver=l.bind(null,e),o.C.on(e.getWrapperElement(),"mouseover",n.onMouseOver)}})),r(a,"createState"),r(c,"getHoverTime"),r(l,"onMouseOver"),r(u,"onMouseHover"),r(d,"showPopup")},7471:(e,t,n)=>{n.r(t);var o=n(398),i=n(7480),r=n(7181),a=(n(1574),n(9361),n(7294),n(3935),n(2584),n(1520),Object.defineProperty),c=(e,t)=>a(e,"name",{value:t,configurable:!0});function l(e,t,n){u(e,t,n),f(e,t,n,t.type)}function u(e,t,n){var o;g(e,(null===(o=t.fieldDef)||void 0===o?void 0:o.name)||"","field-name",n,(0,r.a)(t))}function d(e,t,n){var o;g(e,"@"+((null===(o=t.directiveDef)||void 0===o?void 0:o.name)||""),"directive-name",n,(0,r.b)(t))}function p(e,t,n){var o;g(e,(null===(o=t.argDef)||void 0===o?void 0:o.name)||"","arg-name",n,(0,r.c)(t)),f(e,t,n,t.inputType)}function s(e,t,n){var o;const i=(null===(o=t.enumValue)||void 0===o?void 0:o.name)||"";m(e,t,n,t.inputType),g(e,"."),g(e,i,"enum-value",n,(0,r.d)(t))}function f(e,t,n,i){const a=document.createElement("span");a.className="type-name-pill",i instanceof o.bM?(m(a,t,n,i.ofType),g(a,"!")):i instanceof o.p2?(g(a,"["),m(a,t,n,i.ofType),g(a,"]")):g(a,(null==i?void 0:i.name)||"","type-name",n,(0,r.e)(t,i)),e.appendChild(a)}function m(e,t,n,i){i instanceof o.bM?(m(e,t,n,i.ofType),g(e,"!")):i instanceof o.p2?(g(e,"["),m(e,t,n,i.ofType),g(e,"]")):g(e,(null==i?void 0:i.name)||"","type-name",n,(0,r.e)(t,i))}function v(e,t,n){const o=n.description;if(o){const n=document.createElement("div");n.className="info-description",t.renderDescription?n.innerHTML=t.renderDescription(o):n.appendChild(document.createTextNode(o)),e.appendChild(n)}y(e,t,n)}function y(e,t,n){const o=n.deprecationReason;if(o){const n=document.createElement("div");n.className="info-deprecation",e.appendChild(n);const i=document.createElement("span");i.className="info-deprecation-label",i.appendChild(document.createTextNode("Deprecated")),n.appendChild(i);const r=document.createElement("div");r.className="info-deprecation-reason",t.renderDescription?r.innerHTML=t.renderDescription(o):r.appendChild(document.createTextNode(o)),n.appendChild(r)}}function g(e,t,n="",o={onClick:null},i=null){if(n){const r=o.onClick;let a;r?(a=document.createElement("a"),a.href="javascript:void 0",a.addEventListener("click",(e=>{r(i,e)}))):a=document.createElement("span"),a.className=n,a.appendChild(document.createTextNode(t)),e.appendChild(a)}else e.appendChild(document.createTextNode(t))}i.C.registerHelper("info","graphql",((e,t)=>{if(!t.schema||!e.state)return;const n=e.state,o=n.kind,i=n.step,a=(0,r.g)(t.schema,e.state);if("Field"===o&&0===i&&a.fieldDef||"AliasedField"===o&&2===i&&a.fieldDef){const e=document.createElement("div");e.className="CodeMirror-info-header",l(e,a,t);const n=document.createElement("div");return n.appendChild(e),v(n,t,a.fieldDef),n}if("Directive"===o&&1===i&&a.directiveDef){const e=document.createElement("div");e.className="CodeMirror-info-header",d(e,a,t);const n=document.createElement("div");return n.appendChild(e),v(n,t,a.directiveDef),n}if("Argument"===o&&0===i&&a.argDef){const e=document.createElement("div");e.className="CodeMirror-info-header",p(e,a,t);const n=document.createElement("div");return n.appendChild(e),v(n,t,a.argDef),n}if("EnumValue"===o&&a.enumValue&&a.enumValue.description){const e=document.createElement("div");e.className="CodeMirror-info-header",s(e,a,t);const n=document.createElement("div");return n.appendChild(e),v(n,t,a.enumValue),n}if("NamedType"===o&&a.type&&a.type.description){const e=document.createElement("div");e.className="CodeMirror-info-header",m(e,a,t,a.type);const n=document.createElement("div");return n.appendChild(e),v(n,t,a.type),n}})),c(l,"renderField"),c(u,"renderQualifiedField"),c(d,"renderDirective"),c(p,"renderArg"),c(s,"renderEnumValue"),c(f,"renderTypeAnnotation"),c(m,"renderType"),c(v,"renderDescription"),c(y,"renderDeprecation"),c(g,"text")}}]);