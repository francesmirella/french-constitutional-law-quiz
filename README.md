# French Constitutional Law Quiz

A simple quiz web app based on key concepts and articles from the Constitution of the French Fifth Republic (1958).

## Features

- 5 random questions per quiz session
- Multiple-choice answers
- Instant feedback with short constitutional references
- Final score and quick performance message
- Expanded question bank including constitutional law and Conseil d'État jurisprudence
- History tab with persistent progress over time (saved in browser local storage)
- Theme-level performance summary to identify weaker areas

## Run locally

You can run this app with any static web server.

### Option 1: Python

```bash
python -m http.server 8080
```

Then open: http://localhost:8080

### Option 2: VS Code Live Server

- Install the Live Server extension
- Right-click `index.html`
- Click **Open with Live Server**

## Files

- `index.html` – app structure
- `styles.css` – app styles
- `app.js` – quiz logic and question bank
