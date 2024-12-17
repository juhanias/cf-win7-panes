const htmlTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <title>win7 tile {{title}}</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/7.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        width: 100%;
        height: 100%;
    }

    .window {
        height: 100%;
        width: 100%;
        --window-background-color: #{{color}};
        --surface: #{{surface}};
    }
    .window-body {
        width: calc(100% - 0.8rem);
        height: calc(100% - 2rem);
    }
    
  </style>
  <body>
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text">{{title}}</div>
        <div class="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Close"></button>
        </div>
      </div>
      <div class="window-body">
        
      </div>
    </div>
  </body>
</html>
`;

// Cloudflare Worker event listener
addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request));
});

// Handle incoming requests
async function handleRequest(request) {
    const url = new URL(request.url);

    const rawQuery = request.url.split("?")[1] || "";
    const params = new URLSearchParams(rawQuery);

    const title = params.get("title") || "Default Title";
    const color = params.get("color") || "ffffff";
    const surface = params.get("surface") || "e0e0e0";

    // Replace placeholders in the HTML template with query parameter values
    const renderedHtml = htmlTemplate
        .replace(/{{title}}/g, title)
        .replace(/{{color}}/g, color)
        .replace(/{{surface}}/g, surface);

    // Return the rendered HTML response
    return new Response(renderedHtml, {
        headers: {
            "Content-Type": "text/html;charset=UTF-8",
        },
    });
}
