# SmartNotes 📝

A modern, full-stack Note Taking Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a clean and intuitive user interface.

<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" height="50" width="50"/>
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" height="50" width="50"/>
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" height="50" width="50"/>
  &nbsp;&nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" height="50" width="50"/>
</div>

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)

## ✨ Features
- **CRUD Operations**: Create, read, update, and delete notes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and intuitive interface built with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback
- **Route Protection**: Client-side routing with React Router
- **Rate Limiting**: API rate limiting for enhanced security
- **Data Validation**: Input validation on both frontend and backend
- **Error Handling**: Comprehensive error handling throughout the application

## 🛠 Tech Stack

### Frontend
- **React.js 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Declarative routing for React applications
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Hot Toast** - Beautiful, customizable toast notifications
- **ESLint** - JavaScript linting for code quality

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework for Node.js
- **MongoDB** - NoSQL document database
- **Mongoose** - MongoDB object modeling for Node.js
- **Upstash Redis** - Serverless Redis for rate limiting
- **dotenv** - Environment variable management

### Development Tools
- **Nodemon** - Automatic server restarts during development
- **Autoprefixer** - PostCSS plugin for vendor prefixes
- **PostCSS** - CSS post-processor

## 📁 Project Structure

```
SmartNotes-MERN/
├── backend/                 # Backend server code
│   ├── src/
│   │   ├── config/         # Database and service configurations
│   │   │   ├── dbconnection.js
│   │   │   └── upstash.js
│   │   ├── controllers/    # Business logic and request handlers
│   │   │   └── noteControllers.js
│   │   ├── middleware/     # Custom middleware functions
│   │   │   └── rateLimiter.js
│   │   ├── models/         # Database schemas and models
│   │   │   └── Notes.model.js
│   │   ├── routes/         # API route definitions
│   │   │   └── noteRoutes.js
│   │   ├── utils/          # Utility functions and helpers
│   │   │   └── validator.js
│   │   └── server.js       # Main server entry point
│   ├── package.json        # Backend dependencies and scripts
│   └── .gitignore
├── frontend/               # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── pages/         # React page components
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── App.jsx        # Main App component with routing
│   │   ├── App.css        # Component-specific styles
│   │   ├── index.css      # Global styles and Tailwind imports
│   │   └── main.jsx       # React application entry point
│   ├── index.html         # HTML template
│   ├── package.json       # Frontend dependencies and scripts
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── postcss.config.js  # PostCSS configuration
│   └── eslint.config.js   # ESLint configuration
├── README.md              # Project documentation
├── API.md                 # API documentation
└── CONTRIBUTING.md        # Contribution guidelines
```

## 🚀 Installation & Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

### 1. Clone the Repository
```bash
git clone https://github.com/Imesh-Bandar/SmartNotes-MERN.git
cd SmartNotes-MERN
```

### 2. Install Backend Dependencies
```bash
cd backend
npm install
```

### 3. Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

## 🔧 Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
# Database Configuration
MONGODB_URL=mongodb://localhost:27017/smartnotes
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/smartnotes

# Server Configuration
PORT=4500

# Upstash Redis Configuration (for rate limiting)
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token

# Environment
NODE_ENV=development
```

### MongoDB Setup Options

#### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use `mongodb://localhost:27017/smartnotes` as your MONGODB_URL

#### Option 2: MongoDB Atlas (Recommended)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace `<username>`, `<password>`, and `<cluster-url>` in your connection string

#### Option 3: Upstash Redis (for rate limiting)
1. Create a free account at [Upstash](https://upstash.com/)
2. Create a Redis database
3. Copy your REST URL and Token

## 🏃‍♂️ Running the Application

### Development Mode

#### Start Backend Server
```bash
cd backend
npm run dev
```
The backend server will start on `http://localhost:4500`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173`

### Production Mode

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Start Backend in Production
```bash
cd backend
npm start
```

### Running Both Simultaneously
You can run both backend and frontend concurrently during development. Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend && npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd frontend && npm run dev
```

## 📚 API Documentation

For detailed API documentation, please refer to [API.md](./API.md).

### Quick API Reference
- **Base URL**: `http://localhost:4500/api/notes`
- **GET** `/` - Get all notes
- **GET** `/:id` - Get single note
- **POST** `/createNote` - Create new note
- **PUT** `/edit/:id` - Update note
- **DELETE** `/deleteNote/:id` - Delete note

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on how to contribute to this project.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Authors

- **Imesh Bandar** - [@Imesh-Bandar](https://github.com/Imesh-Bandar)

## 🙏 Acknowledgments

- Thanks to the MongoDB, Express.js, React.js, and Node.js communities
- Tailwind CSS for the amazing utility-first CSS framework
- Upstash for providing serverless Redis infrastructure

---

**Last Updated:** December 2024
