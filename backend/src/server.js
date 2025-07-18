import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';



import noteRoutes from './routes/noteRoutes.js';
import { dbConnection } from './config/dbconnection.js';
import rateLimiter from './middleware/rateLimiter.js';
import path from 'path';
dotenv.config();


// Load environment variables from .env file
const app = express();
const PORT = process.env.PORT || 4500;
app.use(express.json()); // Middleware to parse JSON bodies
//Base URL
//http://localhost:3000/api/notes

//kQZAHt71TBqVB6Ft


// if (process.env.NODE_ENV !== 'production') {


// }


app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL        


}));


//const __dirname = path.resolve();

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../frontend/dist')));
// }


// app.use(express.static(path.join(__dirname, "../frontend/dist"))); // Serve static files from the frontend build directory
// // Middleware to log requests
// app.use("*", (req, res, next) => {
//     res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));

// })


app.use(rateLimiter)


app.use("/api/notes", noteRoutes);


// //GET REQUEST API ROUTES
// app.get('/api/notes', (req, res) => {
//     res.status(200).send('GET request to the notes APIs');
// })


// //CREATE NOTE API ROUTE
// app.post('api/notes/createNote', (req, res) => {
//     res.status(200).send('POST request to create a note');
// })

// //UPDATE NOTE API ROUTE
// app.put('/api/notes/updateNote/:id', (req, res) => {
//     res.status(200).send(`PUT request to update note with id ${req.params.id}`);
// })


// //DELETE NOTE API ROUTE
// app.delete('/api/notes/deleteNote/:id', (req, res) => {
//     res.status(200).send(`DELETE request to delete note with id ${req.params.id}`);
// });

app.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
});