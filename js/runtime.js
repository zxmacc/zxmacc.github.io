"use strict";setInterval(function(){var e=Math.round(new Date("2019-04-17 00:00:00").getTime()/1e3),t=Math.round((new Date).getTime()/1e3)-e,i=new Array(0,0,0,0,0),e=function(e){return 9<e?e:"0"+e};31536e3<=t&&(i[0]=parseInt(t/31536e3),t%=31536e3),86400<=t&&(i[1]=parseInt(t/86400),t%=86400),3600<=t&&(i[2]=e(parseInt(t/3600)),t%=3600),60<=t&&(i[3]=e(parseInt(t/60)),t%=60),0<t&&(i[4]=e(t)),currentTimeHtml=Number(i[2])<22&&7<Number(i[2])?"<img class='boardsign' src='https://img.shields.io/badge/檐牙小窝-营业中-6adea8?style=social&logo=cakephp' title='欢迎光临檐牙的小窝~'><div id='runtime'>"+i[0]+" YEAR "+i[1]+" DAYS "+i[2]+" : "+i[3]+" : "+i[4]+"</div>":"<img class='boardsign' src='https://img.shields.io/badge/檐牙小窝-打烊了-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，熬夜对身体不好哦'><div id='runtime'>"+i[0]+" YEAR "+i[1]+" DAYS "+i[2]+" : "+i[3]+" : "+i[4]+"</div>",document.getElementById("workboard").innerHTML=currentTimeHtml},1e3);