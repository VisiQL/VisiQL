"use strict";(self.webpackChunkvisiql=self.webpackChunkvisiql||[]).push([[441],{45:(e,t,n)=>{n.d(t,{C:()=>a,P:()=>o,R:()=>s});var i=Object.defineProperty,r=(e,t)=>i(e,"name",{value:t,configurable:!0});class a{constructor(e){this.getStartOfToken=()=>this._start,this.getCurrentPosition=()=>this._pos,this.eol=()=>this._sourceText.length===this._pos,this.sol=()=>0===this._pos,this.peek=()=>this._sourceText.charAt(this._pos)?this._sourceText.charAt(this._pos):null,this.next=()=>{const e=this._sourceText.charAt(this._pos);return this._pos++,e},this.eat=e=>{if(this._testNextCharacter(e))return this._start=this._pos,this._pos++,this._sourceText.charAt(this._pos-1)},this.eatWhile=e=>{let t=this._testNextCharacter(e),n=!1;for(t&&(n=t,this._start=this._pos);t;)this._pos++,t=this._testNextCharacter(e),n=!0;return n},this.eatSpace=()=>this.eatWhile(/[\s\u00a0]/),this.skipToEnd=()=>{this._pos=this._sourceText.length},this.skipTo=e=>{this._pos=e},this.match=(e,t=!0,n=!1)=>{let i=null,r=null;return"string"==typeof e?(r=new RegExp(e,n?"i":"g").test(this._sourceText.substr(this._pos,e.length)),i=e):e instanceof RegExp&&(r=this._sourceText.slice(this._pos).match(e),i=null==r?void 0:r[0]),!(null==r||!("string"==typeof e||r instanceof Array&&this._sourceText.startsWith(r[0],this._pos)))&&(t&&(this._start=this._pos,i&&i.length&&(this._pos+=i.length)),r)},this.backUp=e=>{this._pos-=e},this.column=()=>this._pos,this.indentation=()=>{const e=this._sourceText.match(/\s*/);let t=0;if(e&&0!==e.length){const n=e[0];let i=0;for(;n.length>i;)9===n.charCodeAt(i)?t+=2:t++,i++}return t},this.current=()=>this._sourceText.slice(this._start,this._pos),this._start=0,this._pos=0,this._sourceText=e}_testNextCharacter(e){const t=this._sourceText.charAt(this._pos);let n=!1;return n="string"==typeof e?t===e:e instanceof RegExp?e.test(t):e(t),n}}r(a,"CharacterStream");class s{constructor(e,t){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=t}setStart(e,t){this.start=new o(e,t)}setEnd(e,t){this.end=new o(e,t)}}r(s,"Range");class o{constructor(e,t){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=t}setLine(e){this.line=e}setCharacter(e){this.character=e}}r(o,"Position")},1441:(e,t,n)=>{n.r(t);var i=n(7480),r=(n(6079),n(398)),a=n(7304),s=n(4275),o=n(2433),l=n(3801),c=n(316),u=n(7359),d=n(9878),p=n(4386),f=n(45),E=n(2584),h=(n(9361),n(7294),n(3935),Object.defineProperty),T=(e,t)=>h(e,"name",{value:t,configurable:!0});function g(e){let t;return v(e,(e=>{switch(e.kind){case"Query":case"ShortQuery":case"Mutation":case"Subscription":case"FragmentDefinition":t=e}})),t}function m(e,t,n){return n===E.S.name&&e.getQueryType()===t?E.S:n===E.T.name&&e.getQueryType()===t?E.T:n===E.a.name&&(0,r.Gv)(t)?E.a:"getFields"in t?t.getFields()[n]:null}function v(e,t){const n=[];let i=e;for(;null==i?void 0:i.kind;)n.push(i),i=i.prevState;for(let e=n.length-1;e>=0;e--)t(n[e])}function R(e){const t=Object.keys(e),n=t.length,i=new Array(n);for(let r=0;r<n;++r)i[r]=e[t[r]];return i}function _(e,t){return y(t,S(e.string))}function y(e,t){return t?I(I(e.map((e=>({proximity:N(S(e.label),t),entry:e}))),(e=>e.proximity<=2)),(e=>!e.entry.isDeprecated)).sort(((e,t)=>(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.label.length-t.entry.label.length)).map((e=>e.entry)):I(e,(e=>!e.isDeprecated))}function I(e,t){const n=e.filter(t);return 0===n.length?e:n}function S(e){return e.toLowerCase().replace(/\W/g,"")}function N(e,t){let n=D(t,e);return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}function D(e,t){let n,i;const r=[],a=e.length,s=t.length;for(n=0;n<=a;n++)r[n]=[n];for(i=1;i<=s;i++)r[0][i]=i;for(n=1;n<=a;n++)for(i=1;i<=s;i++){const a=e[n-1]===t[i-1]?0:1;r[n][i]=Math.min(r[n-1][i]+1,r[n][i-1]+1,r[n-1][i-1]+a),n>1&&i>1&&e[n-1]===t[i-2]&&e[n-2]===t[i-1]&&(r[n][i]=Math.min(r[n][i],r[n-2][i-2]+a))}return r[a][s]}T(g,"getDefinitionState"),T(m,"getFieldDef"),T(v,"forEachState"),T(R,"objectValues"),T(_,"hintList"),T(y,"filterAndSortList"),T(I,"filterNonEmpty"),T(S,"normalizeText"),T(N,"getProximity"),T(D,"lexicalDistance");const F={command:"editor.action.triggerSuggest",title:"Suggestions"},C=T((e=>{const t=[];if(e)try{(0,a.Vn)((0,s.Qc)(e),{FragmentDefinition(e){t.push(e)}})}catch(e){return[]}return t}),"collectFragmentDefs");function A(e,t,n,i,a,s){var o;const l=Object.assign(Object.assign({},s),{schema:e}),c=i||w(t,n),u="Invalid"===c.state.kind?c.state.prevState:c.state;if(!u)return[];const d=u.kind,f=u.step,E=J(e,c.state);if(d===p.R.DOCUMENT)return _(c,[{label:"query",kind:p.C.Function},{label:"mutation",kind:p.C.Function},{label:"subscription",kind:p.C.Function},{label:"fragment",kind:p.C.Function},{label:"{",kind:p.C.Constructor}]);if(d===p.R.IMPLEMENTS||d===p.R.NAMED_TYPE&&(null===(o=u.prevState)||void 0===o?void 0:o.kind)===p.R.IMPLEMENTS)return M(c,u,e,t,E);if(d===p.R.SELECTION_SET||d===p.R.FIELD||d===p.R.ALIASED_FIELD)return O(c,E,l);if(d===p.R.ARGUMENTS||d===p.R.ARGUMENT&&0===f){const e=E.argDefs;if(e)return _(c,e.map((e=>{var t;return{label:e.name,insertText:e.name+": ",command:F,detail:String(e.type),documentation:null!==(t=e.description)&&void 0!==t?t:void 0,kind:p.C.Variable,type:e.type}})))}if((d===p.R.OBJECT_VALUE||d===p.R.OBJECT_FIELD&&0===f)&&E.objectFieldDefs){const e=R(E.objectFieldDefs),t=d===p.R.OBJECT_VALUE?p.C.Value:p.C.Field;return _(c,e.map((e=>{var n;return{label:e.name,detail:String(e.type),documentation:null!==(n=e.description)&&void 0!==n?n:void 0,kind:t,type:e.type}})))}if(d===p.R.ENUM_VALUE||d===p.R.LIST_VALUE&&1===f||d===p.R.OBJECT_FIELD&&2===f||d===p.R.ARGUMENT&&2===f)return x(c,E,t,e);if(d===p.R.VARIABLE&&1===f){const n=(0,r.xC)(E.inputType);return _(c,B(t,e,c).filter((e=>e.detail===(null==n?void 0:n.name))))}return d===p.R.TYPE_CONDITION&&1===f||d===p.R.NAMED_TYPE&&null!=u.prevState&&u.prevState.kind===p.R.TYPE_CONDITION?L(c,E,e):d===p.R.FRAGMENT_SPREAD&&1===f?P(c,E,e,t,Array.isArray(a)?a:C(a)):d===p.R.VARIABLE_DEFINITION&&2===f||d===p.R.LIST_TYPE&&1===f||d===p.R.NAMED_TYPE&&u.prevState&&(u.prevState.kind===p.R.VARIABLE_DEFINITION||u.prevState.kind===p.R.LIST_TYPE||u.prevState.kind===p.R.NON_NULL_TYPE)?G(c,e):d===p.R.DIRECTIVE?j(c,u,e):[]}T(A,"getAutocompleteSuggestions");const k=" {\n  $1\n}",b=T((e=>{const t=e.type;if((0,r.Gv)(t))return k;if((0,r.HG)(t)&&(0,r.Gv)(t.ofType))return k;if((0,r.zM)(t)){if((0,r.Gv)(t.ofType))return k;if((0,r.HG)(t.ofType)&&(0,r.Gv)(t.ofType.ofType))return k}return null}),"getInsertText");function O(e,t,n){var i;if(t.parentType){const a=t.parentType;let s=[];return"getFields"in a&&(s=R(a.getFields())),(0,r.Gv)(a)&&s.push(o.hU),a===(null===(i=null==n?void 0:n.schema)||void 0===i?void 0:i.getQueryType())&&s.push(o.Az,o.tF),_(e,s.map(((e,t)=>{var n;const i={sortText:String(t)+e.name,label:e.name,detail:String(e.type),documentation:null!==(n=e.description)&&void 0!==n?n:void 0,deprecated:Boolean(e.deprecationReason),isDeprecated:Boolean(e.deprecationReason),deprecationReason:e.deprecationReason,kind:p.C.Field,type:e.type},r=b(e);return r&&(i.insertText=e.name+r,i.insertTextFormat=p.I.Snippet,i.command=F),i})))}return[]}function x(e,t,n,i){const a=(0,r.xC)(t.inputType),s=B(n,i,e).filter((e=>e.detail===a.name));return a instanceof r.mR?_(e,a.getValues().map((e=>{var t;return{label:e.name,detail:String(a),documentation:null!==(t=e.description)&&void 0!==t?t:void 0,deprecated:Boolean(e.deprecationReason),isDeprecated:Boolean(e.deprecationReason),deprecationReason:e.deprecationReason,kind:p.C.EnumMember,type:a}})).concat(s)):a===l.EZ?_(e,s.concat([{label:"true",detail:String(l.EZ),documentation:"Not false.",kind:p.C.Variable,type:l.EZ},{label:"false",detail:String(l.EZ),documentation:"Not true.",kind:p.C.Variable,type:l.EZ}])):s}function M(e,t,n,i,a){if(t.needsSeperator)return[];const s=R(n.getTypeMap()).filter(r.oT),o=s.map((({name:e})=>e)),l=new Set;Y(i,((e,t)=>{var i,s,c,u,d;if(t.name&&(t.kind!==p.R.INTERFACE_DEF||o.includes(t.name)||l.add(t.name),t.kind===p.R.NAMED_TYPE&&(null===(i=t.prevState)||void 0===i?void 0:i.kind)===p.R.IMPLEMENTS))if(a.interfaceDef){if(null===(s=a.interfaceDef)||void 0===s?void 0:s.getInterfaces().find((({name:e})=>e===t.name)))return;const e=n.getType(t.name),i=null===(c=a.interfaceDef)||void 0===c?void 0:c.toConfig();a.interfaceDef=new r.oW(Object.assign(Object.assign({},i),{interfaces:[...i.interfaces,e||new r.oW({name:t.name,fields:{}})]}))}else if(a.objectTypeDef){if(null===(u=a.objectTypeDef)||void 0===u?void 0:u.getInterfaces().find((({name:e})=>e===t.name)))return;const e=n.getType(t.name),i=null===(d=a.objectTypeDef)||void 0===d?void 0:d.toConfig();a.objectTypeDef=new r.h6(Object.assign(Object.assign({},i),{interfaces:[...i.interfaces,e||new r.oW({name:t.name,fields:{}})]}))}}));const c=a.interfaceDef||a.objectTypeDef,u=((null==c?void 0:c.getInterfaces())||[]).map((({name:e})=>e));return _(e,s.concat([...l].map((e=>({name:e})))).filter((({name:e})=>e!==(null==c?void 0:c.name)&&!u.includes(e))).map((e=>{const t={label:e.name,kind:p.C.Interface,type:e};return(null==e?void 0:e.description)&&(t.documentation=e.description),t})))}function L(e,t,n,i){let a;if(t.parentType)if((0,r.m0)(t.parentType)){const e=(0,r.fU)(t.parentType),i=n.getPossibleTypes(e),s=Object.create(null);i.forEach((e=>{e.getInterfaces().forEach((e=>{s[e.name]=e}))})),a=i.concat(R(s))}else a=[t.parentType];else a=R(n.getTypeMap()).filter(r.Gv);return _(e,a.map((e=>{const t=(0,r.xC)(e);return{label:String(e),documentation:(null==t?void 0:t.description)||"",kind:p.C.Field}})))}function P(e,t,n,i,a){if(!i)return[];const s=n.getTypeMap(),o=g(e.state),l=V(i);return a&&a.length>0&&l.push(...a),_(e,l.filter((e=>s[e.typeCondition.name.value]&&!(o&&o.kind===p.R.FRAGMENT_DEFINITION&&o.name===e.name.value)&&(0,r.Gv)(t.parentType)&&(0,r.Gv)(s[e.typeCondition.name.value])&&(0,c.zR)(n,t.parentType,s[e.typeCondition.name.value]))).map((e=>({label:e.name.value,detail:String(s[e.typeCondition.name.value]),documentation:`fragment ${e.name.value} on ${e.typeCondition.name.value}`,kind:p.C.Field,type:s[e.typeCondition.name.value]}))))}T(O,"getSuggestionsForFieldNames"),T(x,"getSuggestionsForInputValues"),T(M,"getSuggestionsForImplements"),T(L,"getSuggestionsForFragmentTypeConditions"),T(P,"getSuggestionsForFragmentSpread");const U=T(((e,t)=>{var n,i,r,a,s,o,l,c,u,d;return(null===(n=e.prevState)||void 0===n?void 0:n.kind)===t?e.prevState:(null===(r=null===(i=e.prevState)||void 0===i?void 0:i.prevState)||void 0===r?void 0:r.kind)===t?e.prevState.prevState:(null===(o=null===(s=null===(a=e.prevState)||void 0===a?void 0:a.prevState)||void 0===s?void 0:s.prevState)||void 0===o?void 0:o.kind)===t?e.prevState.prevState.prevState:(null===(d=null===(u=null===(c=null===(l=e.prevState)||void 0===l?void 0:l.prevState)||void 0===c?void 0:c.prevState)||void 0===u?void 0:u.prevState)||void 0===d?void 0:d.kind)===t?e.prevState.prevState.prevState.prevState:void 0}),"getParentDefinition");function B(e,t,n){let i,r=null;const a=Object.create({});return Y(e,((e,s)=>{if((null==s?void 0:s.kind)===p.R.VARIABLE&&s.name&&(r=s.name),(null==s?void 0:s.kind)===p.R.NAMED_TYPE&&r){const e=U(s,p.R.TYPE);(null==e?void 0:e.type)&&(i=t.getType(null==e?void 0:e.type))}r&&i&&(a[r]||(a[r]={detail:i.toString(),insertText:"$"===n.string?r:"$"+r,label:r,type:i,kind:p.C.Variable},r=null,i=null))})),R(a)}function V(e){const t=[];return Y(e,((e,n)=>{n.kind===p.R.FRAGMENT_DEFINITION&&n.name&&n.type&&t.push({kind:p.R.FRAGMENT_DEFINITION,name:{kind:u.h.NAME,value:n.name},selectionSet:{kind:p.R.SELECTION_SET,selections:[]},typeCondition:{kind:p.R.NAMED_TYPE,name:{kind:u.h.NAME,value:n.type}}})})),t}function G(e,t,n){return _(e,R(t.getTypeMap()).filter(r.j$).map((e=>({label:e.name,documentation:e.description,kind:p.C.Variable}))))}function j(e,t,n,i){var r;return(null===(r=t.prevState)||void 0===r?void 0:r.kind)?_(e,n.getDirectives().filter((e=>Q(t.prevState,e))).map((e=>({label:e.name,documentation:e.description||"",kind:p.C.Function})))):[]}function w(e,t){let n=null,i=null,r=null;const a=Y(e,((e,a,s,o)=>{if(o===t.line&&e.getCurrentPosition()>=t.character)return n=s,i=Object.assign({},a),r=e.current(),"BREAK"}));return{start:a.start,end:a.end,string:r||a.string,state:i||a.state,style:n||a.style}}function Y(e,t){const n=e.split("\n"),i=(0,p.o)();let r=i.startState(),a="",s=new f.C("");for(let e=0;e<n.length;e++){for(s=new f.C(n[e]);!s.eol()&&(a=i.token(s,r),"BREAK"!==t(s,r,a,e)););t(s,r,a,e),r.kind||(r=i.startState())}return{start:s.getStartOfToken(),end:s.getCurrentPosition(),string:s.current(),state:r,style:a}}function Q(e,t){var n;if(!e||!e.kind)return!1;const i=e.kind,r=t.locations;switch(i){case p.R.QUERY:return-1!==r.indexOf(d.B.QUERY);case p.R.MUTATION:return-1!==r.indexOf(d.B.MUTATION);case p.R.SUBSCRIPTION:return-1!==r.indexOf(d.B.SUBSCRIPTION);case p.R.FIELD:case p.R.ALIASED_FIELD:return-1!==r.indexOf(d.B.FIELD);case p.R.FRAGMENT_DEFINITION:return-1!==r.indexOf(d.B.FRAGMENT_DEFINITION);case p.R.FRAGMENT_SPREAD:return-1!==r.indexOf(d.B.FRAGMENT_SPREAD);case p.R.INLINE_FRAGMENT:return-1!==r.indexOf(d.B.INLINE_FRAGMENT);case p.R.SCHEMA_DEF:return-1!==r.indexOf(d.B.SCHEMA);case p.R.SCALAR_DEF:return-1!==r.indexOf(d.B.SCALAR);case p.R.OBJECT_TYPE_DEF:return-1!==r.indexOf(d.B.OBJECT);case p.R.FIELD_DEF:return-1!==r.indexOf(d.B.FIELD_DEFINITION);case p.R.INTERFACE_DEF:return-1!==r.indexOf(d.B.INTERFACE);case p.R.UNION_DEF:return-1!==r.indexOf(d.B.UNION);case p.R.ENUM_DEF:return-1!==r.indexOf(d.B.ENUM);case p.R.ENUM_VALUE:return-1!==r.indexOf(d.B.ENUM_VALUE);case p.R.INPUT_DEF:return-1!==r.indexOf(d.B.INPUT_OBJECT);case p.R.INPUT_VALUE_DEF:switch(null===(n=e.prevState)||void 0===n?void 0:n.kind){case p.R.ARGUMENTS_DEF:return-1!==r.indexOf(d.B.ARGUMENT_DEFINITION);case p.R.INPUT_DEF:return-1!==r.indexOf(d.B.INPUT_FIELD_DEFINITION)}}return!1}function J(e,t){let n,i,a,s,o,l,c,u,d,f,E;return v(t,(t=>{var h;switch(t.kind){case p.R.QUERY:case"ShortQuery":f=e.getQueryType();break;case p.R.MUTATION:f=e.getMutationType();break;case p.R.SUBSCRIPTION:f=e.getSubscriptionType();break;case p.R.INLINE_FRAGMENT:case p.R.FRAGMENT_DEFINITION:t.type&&(f=e.getType(t.type));break;case p.R.FIELD:case p.R.ALIASED_FIELD:f&&t.name?(o=d?m(e,d,t.name):null,f=o?o.type:null):o=null;break;case p.R.SELECTION_SET:d=(0,r.xC)(f);break;case p.R.DIRECTIVE:a=t.name?e.getDirective(t.name):null;break;case p.R.INTERFACE_DEF:t.name&&(c=null,E=new r.oW({name:t.name,interfaces:[],fields:{}}));break;case p.R.OBJECT_TYPE_DEF:t.name&&(E=null,c=new r.h6({name:t.name,interfaces:[],fields:{}}));break;case p.R.ARGUMENTS:if(t.prevState)switch(t.prevState.kind){case p.R.FIELD:i=o&&o.args;break;case p.R.DIRECTIVE:i=a&&a.args;break;case p.R.ALIASED_FIELD:{const n=null===(h=t.prevState)||void 0===h?void 0:h.name;if(!n){i=null;break}const r=d?m(e,d,n):null;if(!r){i=null;break}i=r.args;break}default:i=null}else i=null;break;case p.R.ARGUMENT:if(i)for(let e=0;e<i.length;e++)if(i[e].name===t.name){n=i[e];break}l=null==n?void 0:n.type;break;case p.R.ENUM_VALUE:const T=(0,r.xC)(l);s=T instanceof r.mR?T.getValues().find((e=>e.value===t.name)):null;break;case p.R.LIST_VALUE:const g=(0,r.tf)(l);l=g instanceof r.p2?g.ofType:null;break;case p.R.OBJECT_VALUE:const v=(0,r.xC)(l);u=v instanceof r.sR?v.getFields():null;break;case p.R.OBJECT_FIELD:const R=t.name&&u?u[t.name]:null;l=null==R?void 0:R.type;break;case p.R.NAMED_TYPE:t.name&&(f=e.getType(t.name))}})),{argDef:n,argDefs:i,directiveDef:a,enumValue:s,fieldDef:o,inputType:l,objectFieldDefs:u,parentType:d,type:f,interfaceDef:E,objectTypeDef:c}}T(B,"getVariableCompletions"),T(V,"getFragmentDefinitions"),T(G,"getSuggestionsForVariableDefinition"),T(j,"getSuggestionsForDirective"),T(w,"getTokenAtPosition"),T(Y,"runOnlineParser"),T(Q,"canUseDirective"),T(J,"getTypeInfo"),i.C.registerHelper("hint","graphql",((e,t)=>{const n=t.schema;if(!n)return;const r=e.getCursor(),a=e.getTokenAt(r),s=null!==a.type&&/"|\w/.test(a.string[0])?a.start:a.end,o=new f.P(r.line,s),l={list:A(n,e.getValue(),o,a,t.externalFragments).map((e=>({text:e.label,type:e.type,description:e.documentation,isDeprecated:e.isDeprecated,deprecationReason:e.deprecationReason}))),from:{line:r.line,ch:s},to:{line:r.line,ch:a.end}};return(null==l?void 0:l.list)&&l.list.length>0&&(l.from=i.C.Pos(l.from.line,l.from.ch),l.to=i.C.Pos(l.to.line,l.to.ch),i.C.signal(e,"hasCompletion",e,l,a)),l}))}}]);