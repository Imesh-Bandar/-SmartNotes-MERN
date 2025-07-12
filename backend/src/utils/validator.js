export function validateNotes(note) {
    const errors = {};

    if (!note.title || note.title.trim() === "") {
        errors.title = "Title is required";
    }

    if (!note.content || note.content.trim() === "") {
        errors.content = "Content is required";
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
}