# Simple Note App 

A full-stack note-taking app built with the **MERN stack** (MongoDB, Express, React, Node.js).

## Features

-  Create, Read, Update, Delete (CRUD) notes
-  Real-time UI updates
-  Clean and responsive design
-  RESTful API backend

## Tech Stack

| Layer    | Technology         |
| -------- | ------------------ |
| Frontend | React, Vite, Tailwind CSS |
| Backend  | Node.js, Express   |
| Database | MongoDB, Mongoose  |

## Project Structure

```
simple-note-app/
├── backend/
│   ├── src/
│   │   ├── controllers/    # Route handler logic
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API route definitions
│   │   └── index.js        # Server entry point
│   ├── .env
│   └── package.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── common/     # Navbar, Footer
    │   │   └── notes/      # NoteCard, NoteForm
    │   ├── pages/          # Home, CreateNote
    │   ├── services/       # Axios API config
    │   ├── store/          # React Context (state)
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## How to Run

### 1. Start the Backend

```bash
cd backend
npm install
npm start
```

> Make sure MongoDB is running locally, or update the `.env` file with your MongoDB connection string.

### 2. Start the Frontend

```bash
cd frontend
npm install
npm run dev
```

### 3. Open in Browser

Visit `http://localhost:5173` (or the port shown in terminal).

## API Endpoints

| Method | Endpoint         | Description      |
| ------ | ---------------- | ---------------- |
| GET    | /api/notes       | Get all notes    |
| POST   | /api/notes       | Create a note    |
| PUT    | /api/notes/:id   | Update a note    |
| DELETE | /api/notes/:id   | Delete a note    |
