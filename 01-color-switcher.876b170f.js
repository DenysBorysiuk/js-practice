!function(){var t={btnStart:document.querySelector("button[data-start]"),btnStop:document.querySelector("button[data-stop]")},n=null;t.btnStart.addEventListener("click",(function(){t.btnStart.disabled=!0,t.btnStop.disabled=!1,n=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.disabled=!1,t.btnStop.disabled=!0,clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.876b170f.js.map
