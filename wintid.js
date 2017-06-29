"use strict";

function applyToWindow(scriptName) {

    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL(scriptName);
    s.onload = function() {
        this.parentNode.removeChild(this);
    };

    (document.head||document.documentElement).appendChild(s);

}

["calculate.js"].forEach(applyToWindow);
