!function(t){function e(r){if(o[r])return o[r].exports;var a=o[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,o){t.exports=o(1)},function(t,e,o){"use strict";function r(t){if(Array.isArray(t)){for(var e=0,o=Array(t.length);e<t.length;e++)o[e]=t[e];return o}return Array.from(t)}Object.defineProperty(e,"__esModule",{value:!0});var a=o(2),n=(o.n(a),o(3)),i=(o.n(n),function(t,e,o,r){t.save(),t.globalCompositeOperation="lighter";var a=t.createRadialGradient(e,o,0,e,o,r);a.addColorStop(0,"#2A3178"),a.addColorStop(1,"#000000"),t.fillStyle=a,t.beginPath(),t.arc(e,o,r,0,2*Math.PI),t.fill(),t.restore()});!function(t,e){var o=t.getContext("2d");return o.strokeStyle="#0E151F",o.lineWidth=.5,function t(){e.forEach(function(t,e){t.forEach(function(t,e){o.fillStyle="#292F70",o.fillRect(t.xPos,t.yPos,t.width,t.height),o.fillStyle=t.background,"in"===t.fadeDirection?t.opacity+t.speed<=1?(o.globalAlpha=t.opacity+t.speed,t.opacity=t.opacity+t.speed):(o.globalAlpha=t.opacity-t.speed,t.opacity=t.opacity-t.speed,t.fadeDirection="out"):t.opacity-t.speed>=0?(o.globalAlpha=t.opacity-t.speed,t.opacity=t.opacity-t.speed):(o.globalAlpha=t.opacity+t.speed,t.opacity=t.opacity+t.speed,t.fadeDirection="in"),o.fillRect(t.xPos,t.yPos,t.width,t.height),o.strokeRect(t.xPos,t.yPos,t.width,t.height),o.globalAlpha=1})}),i(o,170,230,200),requestAnimationFrame(t)}}(document.getElementById("pixels"),function(t,e,o,a){for(var n=Math.ceil(t/o),i=Math.ceil(e/a),c=["in","out"],l=["#407CEE","#386BE8","#315DC9","#354EB0","#39419C","#292F70","#242A62"],p=[],d=0;d<i;d++){p=[].concat(r(p),[[]]);for(var f=0;f<n;f++){var u={xPos:f*o,yPos:d*a,width:o,height:a,speed:.008*Math.random(),opacity:Math.random(),fadeDirection:c[Math.floor(Math.random()*c.length)],background:l[Math.floor(Math.random()*l.length)]};p[d]=[].concat(r(p[d]),[u])}}return p}(340,460,45,45))()},function(t,e){},function(t,e){}]);
//# sourceMappingURL=main.99dbee1752b28ea1a891.js.map