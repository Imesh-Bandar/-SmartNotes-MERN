import express from 'express';


const app = express();
const PORT = 3000;

//Base URL
//http://localhost:3000/api/notes


//GET REQUEST API ROUTES
app.get('/api/notes', (req, res) => {
    res.status(200).send('GET request to the notes APIs');
})


//CREATE NOTE API ROUTE
app.post('api/createNote', (req, res) => {
    res.status(200).send('POST request to create a note');
})

//UPDATE NOTE API ROUTE
app.put('/api/updateNote/:id', (req, res) => {
    res.status(200).send(`PUT request to update note with id ${req.params.id}`);
})


//DELETE NOTE API ROUTE
app.delete('/api/deleteNote/:id', (req, res) => {
    res.status(200).send(`DELETE request to delete note with id ${req.params.id}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});