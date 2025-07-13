# SmartNotes 📝

SmartNotes is a modern, full-stack note-taking application built with the **MERN** stack. Effortlessly create, view, edit, and delete notes with a beautiful, responsive UI. Enjoy seamless productivity with real-time feedback, light/dark mode, and robust backend features.

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" height="50" />
  &nbsp;
  <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="Tailwind CSS" height="50" />
  &nbsp;
  <img src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg" alt="DaisyUI" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" height="50" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" height="50" />
</div>

---

## 🚀 Features

- ✏️ Create, edit, and delete notes
- 🗂️ View all notes in a responsive grid
- ⚡ Real-time updates and instant feedback
- 🌗 Light and dark mode support
- 🛡️ Rate limiting to prevent abuse *(has rate limit function)*
- 🎨 User-friendly error and loading states

---

## 🛠️ Technology Stack

| Layer      | Tech                                                                                   |
|------------|----------------------------------------------------------------------------------------|
| Frontend   | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="20"/> React.js, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" height="20"/> Vite, <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" height="20"/> Tailwind CSS, <img src="https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg" height="20"/> DaisyUI, Framer Motion |
| Backend    | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="20"/> Node.js, <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="20"/> Express.js |
| Database   | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="20"/> MongoDB (Mongoose) |
| Utilities  | Upstash Redis (rate limiting), Axios, React Hot Toast                                  |

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn
- MongoDB database (local or Atlas)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Imesh-Bandar/SmartNotes-MERN.git
cd SmartNotes-MERN

# 2. Install backend dependencies
cd backend
npm install

# 3. Install frontend dependencies
cd ../frontend
npm install

# 4. Configure environment variables
# Copy .env.example to .env in backend and set your MongoDB URI and secrets

# 5. Start the backend server
npm run dev

# 6. Start the frontend development server
npm run dev

# 7. Open your browser
# Visit http://localhost:5173
```

---

## 📚 API Endpoints

| Method | Endpoint                        | Description        |
|--------|---------------------------------|--------------------|
| GET    | `/api/notes`                    | Get all notes      |
| GET    | `/api/notes/:id`                | Get a single note  |
| POST   | `/api/notes/createNote`         | Create a new note  |
| PUT    | `/api/notes/edit/:id`           | Edit a note        |
| DELETE | `/api/notes/deleteNote/:id`     | Delete a note      |

---

## 📁 Project Architecture

<div align="left">

```
SmartNotes-MERN/
├── 🗄️ backend/
│   ├── src/
│   │   ├── 🎮 controllers/    # Request handlers
│   │   ├── 📋 models/         # Database schemas
│   │   ├── 🛣️ routes/         # API endpoints
│   │   ├── 🛠️ utils/          # Helper functions
│   │   ├── 🔧 config/         # Configuration files
│   │   └── 📡 server.js       # Main application entry
│   ├── 🔒 .env                # Environment variables
│   └── 📦 package.json        # Dependencies
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── 🧩 components/     # Reusable UI components
│   │   ├── 📱 pages/          # Route components
│   │   ├── 🎭 hooks/          # Custom React hooks
│   │   ├── 🔌 lib/            # Utilities and services
│   │   ├── 🎯 App.jsx         # Root component
│   │   └── 🚀 main.jsx        # Entry point
│   ├── 🎋 index.html          # HTML template
│   └── 📦 package.json        # Dependencies
│
├── 📝 README.md               # Project documentation
└── 📄 LICENSE                 # License information
```

</div>

**Tech Stack Overview:**

<div align="left">

| Layer | Technologies Used |
|-------|------------------|
| 🎨 **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) |
| 🗄️ **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white) |
| 📦 **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) |
| 🛠️ **Tools** | ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white) |

</div>

---

## 🌗 Light and Dark Mode

SmartNotes supports both light and dark themes. Toggle the theme using the button in the navigation bar for a personalized experience.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">
  Created by <a href="https://github.com/Imesh-Bandar">Imesh-Bandar</a>
</div>
