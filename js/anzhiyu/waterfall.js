/*!
--------------------------------
Waterfall.js
--------------------------------
+ https://github.com/raphamorim/waterfall
+ version 1.0.0
+ Copyright 2015 Raphael Amorim
+ Licensed under the MIT license
+ Documentation: https://github.com/raphamorim/waterfall
*/
function waterfall(t){"string"==typeof t&&(t=document.querySelector(t));var e=[].map.call(t.children,(function(t){return t.style.position="absolute",t}));function n(t,e){var n=window.getComputedStyle(e);return parseFloat(n["margin"+t])||0}function r(t){return t+"px"}function o(t){return parseFloat(t.style.left)}function i(t){return t.clientWidth}function l(t){return function(t){return parseFloat(t.style.top)}(t)+function(t){return t.clientHeight}(t)+n("Bottom",t)}function u(t){return o(t)+i(t)+n("Right",t)}function s(t){t=t.sort((function(t,e){return l(t)===l(e)?o(e)-o(t):l(e)-l(t)}))}t.style.position="relative";var a=[];e.length&&(e[0].style.top="0px",e[0].style.left=r(n("Left",e[0])),a.push(e[0]));for(var f=1;f<e.length;f++){var p=e[f-1],c=e[f];if(!(u(p)+i(c)<=i(t)))break;c.style.top=p.style.top,c.style.left=r(u(p)+n("Left",c)),a.push(c)}for(;f<e.length;f++){s(a);c=e[f];var y=a.pop();c.style.top=r(l(y)+n("Top",c)),c.style.left=r(o(y)),a.push(c)}s(a);var d=a[0];t.style.height=r(l(d)+n("Bottom",d));var v=i(t);function h(e){i(t)!=v&&(e.target.removeEventListener(e.type,h),waterfall(t))}window.addEventListener?window.addEventListener("resize",h):document.body.onresize=h}