// Require express, 
const express = require('express');
const path = require('path');
const fs = require('fs');


//Set up Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

fs.readFile('db/db.json', 'utf8', (err, data) => {
    
if (err) throw err;

// Data
const notes = JSON.parse(data);


// Setup the API/note get route

app.get('/api/notes', (req, res) => {
    return res.json(notes);
    });

// Setup the API/notes post route
app.post('/api/notes',(req, res) => {

    const newNote = req.body;
    console.log(newNote);
    notes.push(newNote);
    updateDb();
    res.json(newNote);
});


// Gets a note with an specific id
app.get('/api/notes/:id', (req, res)=>{
    res.json(notes[req.params.id]);
});

// Deletes a note with an specific id
app.delete('/api/notes/:id', (req, res)=>{
    notes.splice(req.params.id,1);
    updateDb();
});


// Routes

// Basic route that sends the user to the AJAX page

// Display index.html when all other routes are accessed
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// UpdateDB function
function updateDb() {
    fs.writeFile('db/db.json',JSON.stringify(notes,'\t'), err => {
        if (err) throw err;
        return true; 
    })
}


})












app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));