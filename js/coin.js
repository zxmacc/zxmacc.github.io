"use strict";var tipButtons=document.querySelectorAll(".tip-button");tipButtons.forEach(function(o){var i=o.querySelector(".coin");i.maxMoveLoopCount=90,o.addEventListener("click",function(){o.clicked||(o.classList.add("clicked"),setTimeout(function(){i.sideRotationCount=90*Math.floor(5*Math.random()),i.maxFlipAngle=(Math.floor(4*Math.random())+3)*Math.PI,o.clicked=!0,t()},50))});var t=function(){i.moveLoopCount=0,e()},e=function t(){i.moveLoopCount++;var e=i.moveLoopCount/i.maxMoveLoopCount;i.angle=-i.maxFlipAngle*Math.pow(e-1,2)+i.maxFlipAngle,i.style.setProperty("--coin-y-multiplier",-11*Math.pow(2*e-1,4)+11),i.style.setProperty("--coin-x-multiplier",e),i.style.setProperty("--coin-scale-multiplier",.6*e),i.style.setProperty("--coin-rotation-multiplier",e*i.sideRotationCount),i.style.setProperty("--front-scale-multiplier",Math.max(Math.cos(i.angle),0)),i.style.setProperty("--front-y-multiplier",Math.sin(i.angle)),i.style.setProperty("--middle-scale-multiplier",Math.abs(Math.cos(i.angle),0)),i.style.setProperty("--middle-y-multiplier",Math.cos((i.angle+Math.PI/2)%Math.PI)),i.style.setProperty("--back-scale-multiplier",Math.max(Math.cos(i.angle-Math.PI),0)),i.style.setProperty("--back-y-multiplier",Math.sin(i.angle-Math.PI)),i.style.setProperty("--shine-opacity-multiplier",4*Math.sin((i.angle+Math.PI/2)%Math.PI)-3.2),i.style.setProperty("--shine-bg-multiplier",-40*(Math.cos((i.angle+Math.PI/2)%Math.PI)-.5)+"%"),i.moveLoopCount<i.maxMoveLoopCount?(i.moveLoopCount===i.maxMoveLoopCount-6&&o.classList.add("shrink-landing"),window.requestAnimationFrame(t)):(o.classList.add("coin-landed"),i.style.setProperty("opacity",0),setTimeout(function(){o.classList.remove("clicked","shrink-landing","coin-landed"),setTimeout(function(){i.style.setProperty("--coin-x-multiplier",0),i.style.setProperty("--coin-scale-multiplier",0),i.style.setProperty("--coin-rotation-multiplier",0),i.style.setProperty("--shine-opacity-multiplier",.4),i.style.setProperty("--shine-bg-multiplier","50%"),i.style.setProperty("opacity",1),setTimeout(function(){o.clicked=!1},300)},300)},1500))}});