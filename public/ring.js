﻿

        // webstring by june @ webcatz.neocities.org

// webring settings
        webring = {
            sites: [
                "https://disuko.neocities.org",
                "https://voidreddev.neocities.org",
                "https://on3ko.lol",
                "https://midnightsyntax.neocities.org",
            ],
            // PREV and NEXT get replaced with neighboring site urls
            stylesheet: "https://your_site_here.neocities.org/folder/widget.css",
            widget: `
    <div id="my-webring" style="display: flex; gap: 8px">
      <a href="PREV"><img src="https://disuko.neocities.org/images/triangle-right.png" width="32px"></a>
      <div><img src="https://disuko.neocities.org/images/shiku.png" width="32px"></div>
      <a href="RANDOM">random</a>
      <a href="NEXT"><img src="https://disuko.neocities.org/images/triangle-left.png" width="32px"></a>
    </div>
  `,

            error: "<div>This site isn't part of the webring yet.</div>",

        };



    // all of the actual code
    webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));
    if (webring.index == -1) document.currentScript.outerHTML = webring.error;
    else {
        let sheet = document.createElement("link");
        sheet.rel = "stylesheet", sheet.href = webring.stylesheet;
        document.head.appendChild(sheet);
        webring.widget = webring.widget.replace("PREV", webring.sites.at(webring.index - 1));
        webring.widget = webring.widget.replace("NEXT", webring.sites[(webring.index + 1) % webring.sites.length]);
        webring.widget = webring.widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
        document.currentScript.outerHTML = webring.widget;
    }
    delete webring;