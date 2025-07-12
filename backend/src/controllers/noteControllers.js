
// backend/controllers/noteControllers.js


//getNots controller
export const getNotes = (req, res) => {
    res.status(200).send('GET request to the notes APIs');
};
//createNote controller
export const createNote = (req, res) => {
    res.status(201).json({ message: 'POST request to create a note' });
}
//updateNote controller
export const updateNote = (req, res) => {
    res.status(201).json({ message: 'PUT request to UPDATE a note' });
};

//deleteNote controller
export const deleteNote = (req, res) => {
    res.status(201).json({ message: 'DELETE request to DELETE a note' });
}