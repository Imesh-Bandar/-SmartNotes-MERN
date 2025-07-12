import express from 'express';


const app = express();
const PORT = 3000;


//simple route to test the server
// app.get('/api/notes', (req, res) => {
//     res.send('Welcome to the SmartNotes API');
// });




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});