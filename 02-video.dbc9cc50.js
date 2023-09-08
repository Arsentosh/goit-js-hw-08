document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("iframe"),t=new Vimeo.Player(e),n=localStorage.getItem("videoplayer-current-time");n&&t.setCurrentTime(parseFloat(n)),t.on("play",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)}))}))}));
//# sourceMappingURL=02-video.dbc9cc50.js.map
