(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,i){function o(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){e.done?a(e.value):new n(function(t){t(e.value)}).then(o,s)}c((r=r.apply(e,t||[])).next())})},a=this&&this.__generator||function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},i=this;Object.defineProperty(t,"__esModule",{value:!0});var o,s,c,u,l,d,b,f,v,h=n(25);n(62),"serviceWorker"in navigator&&window.addEventListener("load",function(){return r(i,void 0,void 0,function(){var e,t;return a(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.serviceWorker.register("/service-worker.js")];case 1:return e=n.sent(),console.log("SW registered: ",e),[3,3];case 2:return t=n.sent(),console.log("SW registration failed: ",t),[3,3];case 3:return[2]}})})});var p=new h.Terminal,w=new TextEncoder;function m(){return"custom"==s.value?Number.parseInt(c.value):Number.parseInt(s.value)}p.on("data",function(e){var t=w.encode(e);if(f.checked&&p.writeUtf8(t),v&&v.writable){var n=v.writable.getWriter();n.write(t),n.releaseLock()}}),document.addEventListener("DOMContentLoaded",function(){p.open(document.getElementById("terminal")),(o=document.getElementById("connect")).addEventListener("click",function(){v?v.close():function(){r(this,void 0,void 0,function(){return a(this,function(e){switch(e.label){case 0:return[4,navigator.serial.requestPort({})];case 1:return v=e.sent(),function(){r(this,void 0,void 0,function(){var e,t,n,r,i,f;return a(this,function(a){switch(a.label){case 0:return v?(e={baudrate:m(),databits:Number.parseInt(u.value),parity:l.value,stopbits:Number.parseInt(d.value),rtscts:b.checked},console.log(e),[4,v.open(e)]):[2];case 1:a.sent(),o.textContent="Disconnect",s.disabled=!0,c.disabled=!0,u.disabled=!0,l.disabled=!0,d.disabled=!0,b.disabled=!0,p.writeln("<CONNECTED>"),a.label=2;case 2:if(!v.readable)return[3,9];a.label=3;case 3:a.trys.push([3,7,,8]),t=v.readable.getReader(),a.label=4;case 4:return[4,t.read()];case 5:return n=a.sent(),r=n.value,i=n.done,p.writeUtf8(r),i?[3,6]:[3,4];case 6:return[3,8];case 7:return f=a.sent(),p.writeln("<ERROR: "+f.message+">"),[3,8];case 8:return[3,2];case 9:return p.writeln("<DISCONNECTED>"),o.textContent="Connect",s.disabled=!1,c.disabled=!1,u.disabled=!1,l.disabled=!1,d.disabled=!1,b.disabled=!1,v=void 0,[2]}})})}(),[2]}})})}()}),(s=document.getElementById("baudrate")).addEventListener("input",function(){"custom"==s.value?c.hidden=!1:c.hidden=!0}),c=document.getElementById("custom_baudrate"),u=document.getElementById("databits"),l=document.getElementById("parity"),d=document.getElementById("stopbits"),b=document.getElementById("rtscts"),f=document.getElementById("echo")})}},[[24,1,2]]]);