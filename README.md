# Web App - Minimal JS + HTML Demo

Quick scaffold with a tiny interactive demo (counter + toast).

## Files

- `index.html` — main HTML file
- `src/app.js` — ES module, contains demo logic
- `styles/style.css` — basic responsive styles
- `package.json` — `start` script to run a local server

## Quick start

Install nothing globally — the start script uses `npx live-server`:

```bash
npm run start
```

This runs `npx live-server --port=3000` and serves the current folder. Open `http://127.0.0.1:3000` if it doesn't open automatically.

## Demo usage

- Click the "Increment" button to increase the counter.
- Press `Space` to increment via keyboard.

## VS Code recommendations

- `ritwickdey.LiveServer` (optional) — if you prefer the VS Code Live Server extension
- `esbenp.prettier-vscode` — formatting
- `dbaeumer.vscode-eslint` — linting

If you want, I can install the recommended extensions for you.
