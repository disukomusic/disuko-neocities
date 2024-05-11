
// webstring by june @ webcatz.neocities.org

// webring settings
        webring = {
            sites: [
                "https://disuko.neocities.org",
                "https://voidreddev.neocities.org",
                "https://on3ko.lol",
                "https://midnightsyntax.neocities.org",
                "https://redpandastudios.net",
            ],
            // PREV and NEXT get replaced with neighboring site urls
            stylesheet: "https://disuko.neocities.org/RPSWebring.css",
            widget: `
    <center>
        <div id="my-webring" style="display: flex; gap: 8px; align-items: center; align-content: center; align-self: center; justify-self: center; max-width: max-content;">
            <a href="PREV" class="navbutton" target="_parent" ><img src="https://disuko.neocities.org/images/triangle-right.png" height="24px"></a>
            <a href="https://redpandastudios.net" target="_parent"><img src="https://disuko.neocities.org/images/shiku.png" class="shiku" height="100px"></a>
            <a href="NEXT" class="navbutton" target="_parent"><img src="https://disuko.neocities.org/images/triangle-left.png" height="24px"></a>
        </div>
    </center>

  `,

            error: "            <a href=\"https://redpandastudios.net\" target=\"_parent\"><img src=\"https://disuko.neocities.org/images/shiku.png\" class=\"shiku\" height=\"100px\"></a>\n" +
                "<div>This site isn't part of the webring yet.</div>" +
                "" +
                "",

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
        document.currentScript.outerHTML = webring.widget;
    }
    delete webring;