document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("iframe"),t=new Vimeo.Player(e),n=localStorage.getItem("videoplayer-current-time");n&&t.setCurrentTime(parseFloat(n)),t.on("play",(function(){t.getCurrentTime().then((function(e){localStorage.setItem("videoplayer-current-time",e)}))}))}));
//# sourceMappingURL=02-video.c8891e30.js.map
