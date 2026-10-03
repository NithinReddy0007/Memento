# Memento Deployment

GitHub Pages serves the static frontend only. The Node backend must be deployed separately; this repository includes a Render Blueprint in `render.yaml`.

## Local development

The frontend sends API requests to the Node backend on port 3000 when opened from any `localhost`/loopback port, including a separate VS Code Live Server port. Run the backend and static file server with:

```powershell
npm start
```

Open `http://localhost:3000`.

## Deploy the backend

1. Push this repository to GitHub.
2. In Render, create a new Blueprint and connect `NithinReddy0007/Memento` on the `master` branch. Render will read `render.yaml` and create the `memento-api` web service.
3. Set `TMDB_READ_ACCESS_TOKEN` in the Render service environment settings. Enter the credential there only; do not put it in GitHub, `api-config.js`, or frontend files.
4. Wait for `/api/health` to report `{"status":"ok"}`.

The configured production API origin is `https://memento-api.onrender.com`. If Render assigns a different hostname, update `apiBaseUrl` in `api-config.js` and the `CORS_ORIGINS` value in `render.yaml` to match that hostname and redeploy both services.

## Deploy the frontend

GitHub Pages uses the repository root as its static site source. In GitHub, open **Settings > Pages**, select the `master` branch and `/ (root)`, then save. The pages load the public API origin from `api-config.js`; it contains no credentials. Localhost detection overrides that value during local development.

## Verify the deployed API

Run these from PowerShell after the Render service is live:

```powershell
curl.exe -i https://memento-api.onrender.com/api/health
curl.exe -i -X OPTIONS https://memento-api.onrender.com/api/recommendations -H "Origin: https://nithinreddy0007.github.io" -H "Access-Control-Request-Method: POST" -H "Access-Control-Request-Headers: content-type"
curl.exe -i -X POST https://memento-api.onrender.com/api/recommendations -H "Content-Type: application/json" -d "{`"category`":`"tv-shows`",`"page`":1,`"history`":[]}"
```

The health request should return HTTP 200, the preflight should return HTTP 204 with `Access-Control-Allow-Origin`, and the recommendations request should return JSON with up to 15 items. The frontend reports the HTTP status and a short response excerpt if a backend endpoint returns HTML or other non-JSON content.