# Hello Webinar Folks

A simple Node.js (Express) web app that serves a static home page, ready to deploy on Vercel.

## Tech stack
- Node.js
- Express

## Project structure
```
.
├── public/
│   └── home.html     # Static home page
├── server.js         # Express server (exports the app for Vercel)
├── vercel.json       # Vercel rewrite: / -> /home.html
└── package.json
```

## Getting started

### Prerequisites
- Node.js 18 or later

### Run locally
```bash
npm install
npm start
```
Then open http://localhost:3000.

## Deploy to Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import this repository.
3. Click **Deploy**.

Every push to `main` redeploys automatically.

## Contributing
Create a feature branch, make your changes, and open a pull request against `main`.
