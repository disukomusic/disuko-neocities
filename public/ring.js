// sitelist (newest to oldest)
// strip the https:// off
//based on https://webcatz.neocities.org/webstring/
RPSWebringSites = [
    "voidreddev.neocities.org",
    "disuko.neocities.org",
    "on3ko.lol",
    "midnightsyntax.neocities.org"
];

// all of the actual code
RPSWebringIdx = location.href.startsWith("file://") ? 0 : RPSWebringSites.findIndex(url => location.href.startsWith("https://" + url));
if (RPSWebringIdx == -1) document.currentScript.outerHTML = `<div>
          <a href="https://disuko.neocities.org" target="_top"><img src="https://disuko.neocities.org/images/shiku.png"></a>
          <div style="font-size: 0.75em; text-align: center">This site isn't part of the RED PANDA NETWORK webring yet.</div>
        </div>`;
else {
    let widget = `
            <div class="webringbox">
                <div id="prevSiteBtn" class="navbutton"><a href="https://${RPSWebringSites[(RPSWebringIdx - 1 + RPSWebringSites.length) % RPSWebringSites.length]}" target="_top"><img src="../images/triangle-right.png" width="16px"></a></div> 
                <span id="webringText" class="webringTextContainer">
                    <a href="https://redpandastudios.net" target="_parent">
                        <img class="shiku" src="../images/shiku.png" width="64px">
                    </a>
                </span> 
                <div id="nextSiteBtn" class="navbutton"><a href="https://${RPSWebringSites[(RPSWebringIdx + 1) % RPSWebringSites.length]}" target="_top"><img src="../images/triangle-left.png" width="16px"></a></div>
            </div>
          `;
    if (document.currentScript.dataset.widget === "nb") widget = widget.replaceAll("/widget/trans/", "/widget/nb/");
    document.currentScript.outerHTML = widget;
}
delete RPSWebringSites;
delete RPSWebringIdx;