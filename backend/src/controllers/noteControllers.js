import mongoose from "mongoose";
import Notes from "../models/Notes.model.js";

import { validateNotes } from "../utils/validator.js";
// backend/controllers/noteControllers.js

//getNots controller
export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.find({});

        if (!notes || notes.length === 0) {
            return res.status(404).json({ message: "No notes found" });
        } else {
            res.status(200).json(notes);
        }
    } catch (error) {
        console.error("Error getting notes:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
    // res.status(200).send('GET request to the notes APIs');
};

//createNote controller
export const createNote = async (req, res) => {
    const { title, content } = req.body;

    const { isValid, errors } = validateNotes({ title, content });

    // Check if the note is valid
    if (!isValid) {
        return res.status(400).json({ errors });
    } else {
        const newNote = new Notes({
            title,
            content,
        });
        try {
            const NewNote = await newNote.save();
            res.status(201).json({
                message: "Note created successfully",
                note: NewNote,
            });
        } catch (error) {
            console.error("Error creating note:", error.message);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }
};

//res.status(201).json({ message: "POST request to create a note" });
//updateNote controller
export const updateNote = async (req, res) => {

    console.log("Update Note Controller");
    
    const { id } = req.params;
    const { title, content } = req.body;
    const { isValid, errors } = validateNotes({ title, content });

    // Check if the note is valid
    if (!isValid) {
        return res.status(400).json({ errors });
    } else {
        try {
          const  updateNote = await Notes.findByIdAndUpdate(id, { title, content }, { new: true });
            if (!updateNote) {
                return res.status(404).json({ message: "Note not found" });
            } else {
                res.status(200).json({
                    message: "Note updated successfully",
                    note: updateNote,
                });
            }
        } catch (error) {

            console.error("Error updating note:", error.message);
            res.status(500).json({ message: "Internal Server Error" });
        }
    }


};

//deleteNote controller
export const deleteNote = async(req, res) => {

    const { id } = req.params;

    try {
        const deletedNote = await Notes.findByIdAndDelete(id);
        if (!deletedNote) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        console.error("Error deleting note:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }


}