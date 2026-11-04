const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory participant list (resets when the server restarts)
const participants = ['Aditya', 'Nikhil', 'Hiral', 'Mohammed', 'Thejaasiwini'];

app.get('/api/participants', (req, res) => {
  res.json(participants);
});

app.post('/api/participants', (req, res) => {
  const name = String((req.body && req.body.name) || '').trim();
  if (!name) return res.status(400).json({ error: 'Name is required' });
  if (name.length > 50) return res.status(400).json({ error: 'Name is too long' });
  if (participants.some((p) => p.toLowerCase() === name.toLowerCase())) {
    return res.status(409).json({ error: 'Participant already exists' });
  }
  participants.push(name);
  res.status(201).json(participants);
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Run a local server only when started directly (npm start).
// On Vercel the exported app is invoked as a serverless function.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
