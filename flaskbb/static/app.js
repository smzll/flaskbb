!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.app=e():t.app=e()}(self,(function(){return(()=>{var t,e={790:(t,e,n)=>{"use strict";var o;n.r(e),n(84),n(642),n(480),n(18),n(917),n(748),(o=n(649)).keys().map(o)},917:(t,e,n)=>{var o=n(755);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}marked.setOptions({gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1}),o(".flaskbb-editor").markdown({iconlibrary:"fa",additionalButtons:[[{name:"groupHelp",data:[{name:"cmdHelp",toggle:!1,title:"Help",icon:"fa fa-question",btnClass:"btn btn-success",callback:function(t){o("#editor-help").modal("show")}}]}]],onPreview:function(t,e){var n="undefined"!==("undefined"==typeof FORUM_URL_PREFIX?"undefined":r(FORUM_URL_PREFIX))?FORUM_URL_PREFIX:"";o.ajax({type:"POST",data:t.getContent(),dataType:"text",contentType:"text/plain",url:n+"/markdown",beforeSend:function(t,e){/^(GET|HEAD|OPTIONS|TRACE)$/i.test(e.type)||this.crossDomain||t.setRequestHeader("X-CSRFToken",csrftoken)}}).done((function(t){parse_emoji(t);var n=o(e);o(t).appendTo(n.empty())})).fail((function(t){console.error("Couldn't send text to markdown preview endpoint: "+t)}))}}),o(".flaskbb-editor").textcomplete([{match:/\B:([\-+\w]*)$/,search:function(t,e){e(o.map(emojies,(function(e){return-1!==e[0].indexOf(t)?{character:e[1],name:e[0]}:null})))},template:function(t){return parse_emoji(t.character)+" "+t.name},replace:function(t){return t.character+" "},index:1}],{onKeydown:function(t,e){if(t.ctrlKey&&74===t.keyCode)return e.KEY_ENTER}})},748:(t,e,n)=>{var o=n(755);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}o("meta[name=csrf-token]").attr("content"),o(document).ready((function(){var t;o(".action-checkall").change((function(){o("input.action-checkbox").prop("checked",this.checked)})),o(".quote-btn").click((function(t){t.preventDefault();var e=o(this).attr("data-post-id"),n="undefined"!==("undefined"==typeof FORUM_URL_PREFIX?"undefined":r(FORUM_URL_PREFIX))?FORUM_URL_PREFIX:"";o.get(n+"/post/"+e+"/raw",(function(t){var e=o(".flaskbb-editor");e.val((e.val()+"\n"+t).trim()+"\n"),e.selectionStart=e.selectionEnd=e.val().length,e[0].scrollTop=e[0].scrollHeight,window.location.href="#content"}))})),o('button[name="confirmDialog"]').on("click",(function(t){var e=o(this).closest("form");t.preventDefault(),o(".confirmModal").modal({keyboard:!0}).one("click",".confirmBtn",(function(){e.trigger("submit")})).on("hidden.bs.modal",(function(){o(".confirmBtn").unbind()}))})),o("time").each((function(t,e){var n=new Date(e.getAttribute("datetime")),o={weekday:void 0,era:void 0,year:"numeric",month:"short",day:"numeric",second:void 0};"date-only"==e.dataset.what_to_display?(o.hour=void 0,o.minute=void 0):(o.hour="2-digit",o.minute="2-digit"),e.textContent=n.toLocaleString(void 0,o)})),t=document.body,twemoji.parse(t,{callback:function(t,e,n){switch(t){case"a9":case"ae":case"2122":return!1}return"".concat(e.base,e.size,"/",t,e.ext)},folder:"svg",ext:".svg"})}))},159:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"avatar.svg"},997:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"avatar100x100.png"},686:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"avatar150x150.png"},745:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"avatar400x400.png"},290:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"avatar80x80.png"},909:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>o});const o=n.p+"favicon.ico"}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t].call(a.exports,a,a.exports,o),a.exports}o.m=e,t=[],o.O=(e,n,r,a)=>{if(!n){var i=1/0;for(s=0;s<t.length;s++){for(var[n,r,a]=t[s],c=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(o.O).every((t=>o.O[t](n[u])))?n.splice(u--,1):(c=!1,a<i&&(i=a));c&&(t.splice(s--,1),e=r())}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[n,r,a]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.p="/static/",(()=>{var t={143:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,a,[i,c,u]=n,s=0;for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(u)var d=u(o);for(e&&e(n);s<i.length;s++)a=i[s],o.o(t,a)&&t[a]&&t[a][0](),t[i[s]]=0;return o.O(d)},n=self.webpackChunk_name_=self.webpackChunk_name_||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[216],(()=>o(790)));return o.O(r)})()}));
//# sourceMappingURL=app.js.map