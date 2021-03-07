// Require express
const express = require('require');

//Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Routes

// Basic route that sends the user to the AJAX page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// // Displays all characters
// app.get('/api/characters', (req, res) => res.json(characters));

// // Displays a single character, or returns false
// app.get('/api/characters/:character', (req, res) => {
//   const chosen = req.params.character;

//   console.log(chosen);
















app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));