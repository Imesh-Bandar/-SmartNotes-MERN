# API Documentation

This document provides detailed information about the SmartNotes API endpoints, request/response formats, and usage examples.

## Base URL
```
http://localhost:4500/api/notes
```

## Authentication
Currently, the API does not require authentication. All endpoints are publicly accessible.

## Rate Limiting
The API implements rate limiting using Upstash Redis to prevent abuse. The current limits are:
- Default rate limit applies to all endpoints
- Configured through the `rateLimiter` middleware

## Content Type
All requests and responses use `application/json` content type.

## Error Handling
The API returns consistent error responses with appropriate HTTP status codes:

```json
{
  "message": "Error description",
  "errors": ["Detailed error messages"] // Optional array for validation errors
}
```

## API Endpoints

### 1. Get All Notes
Retrieves all notes sorted by creation date (newest first).

**Endpoint:** `GET /api/notes`

**Request:**
```http
GET http://localhost:4500/api/notes
Content-Type: application/json
```

**Response (Success - 200):**
```json
[
  {
    "_id": "64a1b2c3d4e5f678901234ab",
    "title": "My First Note",
    "content": "This is the content of my first note.",
    "createdAt": "2024-12-13T10:30:00.000Z",
    "updatedAt": "2024-12-13T10:30:00.000Z",
    "__v": 0
  },
  {
    "_id": "64a1b2c3d4e5f678901234ac",
    "title": "Another Note",
    "content": "This is another note with different content.",
    "createdAt": "2024-12-13T09:15:00.000Z",
    "updatedAt": "2024-12-13T09:15:00.000Z",
    "__v": 0
  }
]
```

**Response (No Notes Found - 404):**
```json
{
  "message": "No notes found"
}
```

**Response (Server Error - 500):**
```json
{
  "message": "Internal Server Error"
}
```

---

### 2. Get Single Note
Retrieves a specific note by its ID.

**Endpoint:** `GET /api/notes/:id`

**Parameters:**
- `id` (string, required): The MongoDB ObjectId of the note

**Request:**
```http
GET http://localhost:4500/api/notes/64a1b2c3d4e5f678901234ab
Content-Type: application/json
```

**Response (Success - 200):**
```json
{
  "_id": "64a1b2c3d4e5f678901234ab",
  "title": "My First Note",
  "content": "This is the content of my first note.",
  "createdAt": "2024-12-13T10:30:00.000Z",
  "updatedAt": "2024-12-13T10:30:00.000Z",
  "__v": 0
}
```

**Response (Note Not Found - 404):**
```json
{
  "message": "Note not found"
}
```

**Response (Invalid ID Format - 500):**
```json
{
  "message": "Internal Server Error"
}
```

---

### 3. Create New Note
Creates a new note with the provided title and content.

**Endpoint:** `POST /api/notes/createNote`

**Request Body:**
```json
{
  "title": "My New Note",
  "content": "This is the content of my new note."
}
```

**Request:**
```http
POST http://localhost:4500/api/notes/createNote
Content-Type: application/json

{
  "title": "My New Note",
  "content": "This is the content of my new note."
}
```

**Response (Success - 201):**
```json
{
  "message": "Note created successfully",
  "note": {
    "_id": "64a1b2c3d4e5f678901234ad",
    "title": "My New Note",
    "content": "This is the content of my new note.",
    "createdAt": "2024-12-13T11:00:00.000Z",
    "updatedAt": "2024-12-13T11:00:00.000Z",
    "__v": 0
  }
}
```

**Response (Validation Error - 400):**
```json
{
  "errors": [
    "Title is required",
    "Content is required"
  ]
}
```

**Response (Server Error - 500):**
```json
{
  "message": "Internal Server Error"
}
```

**Validation Rules:**
- `title`: Required, string, non-empty
- `content`: Required, string, non-empty

---

### 4. Update Note
Updates an existing note with new title and/or content.

**Endpoint:** `PUT /api/notes/edit/:id`

**Parameters:**
- `id` (string, required): The MongoDB ObjectId of the note to update

**Request Body:**
```json
{
  "title": "Updated Note Title",
  "content": "Updated content for the note."
}
```

**Request:**
```http
PUT http://localhost:4500/api/notes/edit/64a1b2c3d4e5f678901234ab
Content-Type: application/json

{
  "title": "Updated Note Title",
  "content": "Updated content for the note."
}
```

**Response (Success - 200):**
```json
{
  "message": "Note updated successfully",
  "note": {
    "_id": "64a1b2c3d4e5f678901234ab",
    "title": "Updated Note Title",
    "content": "Updated content for the note.",
    "createdAt": "2024-12-13T10:30:00.000Z",
    "updatedAt": "2024-12-13T11:15:00.000Z",
    "__v": 0
  }
}
```

**Response (Note Not Found - 404):**
```json
{
  "message": "Note not found"
}
```

**Response (Validation Error - 400):**
```json
{
  "errors": [
    "Title is required",
    "Content is required"
  ]
}
```

**Response (Server Error - 500):**
```json
{
  "message": "Internal Server Error"
}
```

**Validation Rules:**
- `title`: Required, string, non-empty
- `content`: Required, string, non-empty

---

### 5. Delete Note
Deletes a specific note by its ID.

**Endpoint:** `DELETE /api/notes/deleteNote/:id`

**Parameters:**
- `id` (string, required): The MongoDB ObjectId of the note to delete

**Request:**
```http
DELETE http://localhost:4500/api/notes/deleteNote/64a1b2c3d4e5f678901234ab
Content-Type: application/json
```

**Response (Success - 200):**
```json
{
  "message": "Note deleted successfully"
}
```

**Response (Note Not Found - 404):**
```json
{
  "message": "Note not found"
}
```

**Response (Server Error - 500):**
```json
{
  "message": "Internal Server Error"
}
```

---

## Data Models

### Note Model
The Note model represents a single note in the system.

```javascript
{
  _id: ObjectId,           // MongoDB generated unique identifier
  title: String,           // Note title (required)
  content: String,         // Note content (required)
  createdAt: Date,         // Automatically generated creation timestamp
  updatedAt: Date,         // Automatically updated modification timestamp
  __v: Number             // MongoDB version key
}
```

**Schema Definition:**
```javascript
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
}, {
  timestamps: true  // Automatically adds createdAt and updatedAt
});
```

---

## Example Usage

### JavaScript/Fetch API

#### Get All Notes
```javascript
const getNotes = async () => {
  try {
    const response = await fetch('http://localhost:4500/api/notes');
    const notes = await response.json();
    console.log(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
  }
};
```

#### Create a Note
```javascript
const createNote = async (title, content) => {
  try {
    const response = await fetch('http://localhost:4500/api/notes/createNote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error creating note:', error);
  }
};
```

#### Update a Note
```javascript
const updateNote = async (id, title, content) => {
  try {
    const response = await fetch(`http://localhost:4500/api/notes/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content }),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error updating note:', error);
  }
};
```

#### Delete a Note
```javascript
const deleteNote = async (id) => {
  try {
    const response = await fetch(`http://localhost:4500/api/notes/deleteNote/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error deleting note:', error);
  }
};
```

### cURL Examples

#### Get All Notes
```bash
curl -X GET http://localhost:4500/api/notes \
  -H "Content-Type: application/json"
```

#### Create a Note
```bash
curl -X POST http://localhost:4500/api/notes/createNote \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"Note content"}'
```

#### Update a Note
```bash
curl -X PUT http://localhost:4500/api/notes/edit/64a1b2c3d4e5f678901234ab \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'
```

#### Delete a Note
```bash
curl -X DELETE http://localhost:4500/api/notes/deleteNote/64a1b2c3d4e5f678901234ab
```

---

## Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Request successful |
| 201 | Created - Resource created successfully |
| 400 | Bad Request - Invalid request data/validation error |
| 404 | Not Found - Resource not found |
| 500 | Internal Server Error - Server-side error |

---

## Rate Limiting

The API implements rate limiting to prevent abuse. When rate limits are exceeded, you'll receive:

**Response (Rate Limited - 429):**
```json
{
  "message": "Too Many Requests",
  "error": "Rate limit exceeded"
}
```

---

## Error Codes and Troubleshooting

### Common Errors

1. **"Note not found"** - The specified note ID doesn't exist in the database
2. **"Title is required"** - The title field is missing or empty in the request
3. **"Content is required"** - The content field is missing or empty in the request
4. **"Internal Server Error"** - Usually indicates a database connection issue or invalid ObjectId format

### Best Practices

1. Always check the response status code before processing the response
2. Handle validation errors gracefully in your frontend
3. Implement proper error boundaries in React components
4. Use loading states while API calls are in progress
5. Validate user input on the frontend before sending to the API

---

For more information or support, please refer to the main [README.md](./README.md) or open an issue in the repository.