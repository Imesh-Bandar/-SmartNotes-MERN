import express from 'express';
import {

    getNotes, createNote, updateNote, deleteNote, getNote

} from '../controllers/noteControllers.js'

const router = express.Router();

const app= express();
// Middleware to parse JSON bodies
app.use(express.json());


// @baseURL http://localhost:3000/api/notes

router.get("/", getNotes);
router.get("/:id", getNote);  
router.post("/createNote", createNote);
router.put("/edit/:id", updateNote);
router.delete("/deleteNote/:id", deleteNote);



// router.get("/", (req, res) => {
//     res.status(200).send('GET request to the notes APIs');
// })




//create note api route
// router.post("/createNote", (req, res) => {
//     res.status(201).json({ message: 'POST request to create a note' });
// })


//update note api route
// router.put("/updateNote/:id", (req, res) => {
//     res.status(201).json({ message: 'PUT request to UPDATE a note' });
// });

//delete note api route
// router.delete("/deleteNote/:id", (req, res) => {
//     res.status(201).json({ message: 'DELETE request to UPDATE a note' });
// });

export default router;