# Install playwright

Reference <https://playwright.dev/docs/intro>

```shell
npm init playwright@latest
```

install logs:
```shell
Need to install the following packages:
create-playwright@1.17.135
Ok to proceed? (y)


> npx
> create-playwright

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Initializing NPM project (npm init -y)…
Wrote to C:\src\AIPlayGround\playwright_mcp\package.json:

{
  "name": "playwright_mcp",
  "version": "1.0.0",
  "description": "1. install playwright",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



Installing Playwright Test (npm install --save-dev @playwright/test)…

added 3 packages, and audited 4 packages in 5s

found 0 vulnerabilities
Installing Types (npm install --save-dev @types/node)…

added 2 packages, and audited 6 packages in 1s

found 0 vulnerabilities
Writing playwright.config.ts.
Writing tests\example.spec.ts.
Writing tests-examples\demo-todo-app.spec.ts.
Writing package.json.
Downloading browsers (npx playwright install)…
Downloading Chromium 134.0.6998.35 (playwright build v1161) from https://playwright.download.prss.microsoft.com/dbazure/download/playwright/builds/chromium/1161/chromium-win64.zip        
141.8 MiB [====================] 100% 0.0s
Chromium 134.0.6998.35 (playwright build v1161) downloaded to C:\Users\stone\AppData\Local\ms-playwright\chromium-1161
Downloading Chromium Headless Shell 134.0.6998.35 (playwright build v1161) from https://cdn.playwright.dev/dbazure/download/playwright/builds/chromium/1161/chromium-headless-shell-win64.zip
87.8 MiB [====================] 100% 0.0s
Chromium Headless Shell 134.0.6998.35 (playwright build v1161) downloaded to C:\Users\stone\AppData\Local\ms-playwright\chromium_headless_shell-1161
Downloading Firefox 135.0 (playwright build v1475) from https://cdn.playwright.dev/dbazure/download/playwright/builds/firefox/1475/firefox-win64.zip
91.5 MiB [====================] 100% 0.0s
Firefox 135.0 (playwright build v1475) downloaded to C:\Users\stone\AppData\Local\ms-playwright\firefox-1475
Downloading Webkit 18.4 (playwright build v2140) from https://cdn.playwright.dev/dbazure/download/playwright/builds/webkit/2140/webkit-win64.zip
52.8 MiB [====================] 100% 0.0s
Webkit 18.4 (playwright build v2140) downloaded to C:\Users\stone\AppData\Local\ms-playwright\webkit-2140
Downloading FFMPEG playwright build v1011 from https://cdn.playwright.dev/dbazure/download/playwright/builds/ffmpeg/1011/ffmpeg-win64.zip
1.3 MiB [====================] 100% 0.0s
FFMPEG playwright build v1011 downloaded to C:\Users\stone\AppData\Local\ms-playwright\ffmpeg-1011
Downloading Winldd playwright build v1007 from https://cdn.playwright.dev/dbazure/download/playwright/builds/winldd/1007/winldd-win64.zip
0.1 MiB [====================] 100% 0.0s
Winldd playwright build v1007 downloaded to C:\Users\stone\AppData\Local\ms-playwright\winldd-1007
✔ Success! Created a Playwright Test project at C:\src\AIPlayGround\playwright_mcp

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.ts - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - .\playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
```