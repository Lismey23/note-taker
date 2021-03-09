// Require express
const express = require('require');
const path = require('path');
const fs = require('fs');


//Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Data
const note = JSON.parse(data);

// API Routes
// Setup the API/note get route

app.get('/api/notes', (req, res) => {
    return res.json(note);
    })

// Setup the API/note post route
app.post('/api/notes',(req, res) =>{

    const newNote = req.body;
    console.log(newNote);
    note.push(newNote);
    res.json(newNote);
})



// Basic route that sends the user to the AJAX page

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));














app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));