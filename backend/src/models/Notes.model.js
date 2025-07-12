//create schema for notes
//model based on that schema
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

//create model based on the schema
const Note = mongoose.model("Note", noteSchema);
//export the model
export default Note;
