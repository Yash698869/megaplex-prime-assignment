# Megaplex Prime – Real Estate Website

A full-stack real estate landing page with a dynamic admin panel for content management. Built with React (Vite) on the frontend and Node.js + Express + MongoDB on the backend.

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React.js (Vite)         |
| Backend    | Node.js + Express       |
| Database   | MongoDB (Mongoose ODM)  |
| Styling    | Plain CSS               |

## Features

- Single-page real estate website with dynamic content
- Sections: Hero, Overview, Amenities, Floor Plans, Connectivity, About Developer, Construction Updates, FAQ
- All text content loaded dynamically from MongoDB
- Admin panel to edit content for every section
- Fixed admin credentials (no user registration)
- MongoDB persistence — changes reflect immediately after save
- Responsive design
- Static images only (no image upload/CMS)

## Admin Credentials

| Field    | Value            |
|----------|------------------|
| Email    | admin@gmail.com  |
| Password | 1234             |

## Project Structure

```
mexa/
├── client/                 # React frontend (Vite)
│   ├── src/
│   │   ├── api/            # Axios instance
│   │   ├── components/     # UI components
│   │   ├── pages/          # Home, AdminLogin, AdminDashboard
│   │   └── styles/         # CSS files
│   └── index.html
├── server/                 # Express backend
│   ├── middleware/          # Auth middleware
│   ├── models/             # Mongoose Section model
│   ├── routes/             # Auth and Content API routes
│   ├── seed.js             # Database seed script
│   └── server.js           # Entry point
└── README.md
```

## Setup Instructions

### Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
SESSION_SECRET=your_secret_key
```

Seed the database and start the server:

```bash
npm run seed
npm run dev
```

### Frontend

```bash
cd client
npm install
```

Create a `.env` file in the `client/` directory (for local development):

```
VITE_API_BASE_URL=http://localhost:5000/api
```

Start the dev server:

```bash
npm run dev
```

Frontend runs on `http://localhost:5173`, backend on `http://localhost:5000`.

## API Endpoints

| Method | Endpoint                  | Auth     | Description            |
|--------|---------------------------|----------|------------------------|
| GET    | /api/content              | Public   | Fetch all sections     |
| GET    | /api/content/:sectionKey  | Public   | Fetch one section      |
| PUT    | /api/content/:sectionKey  | Admin    | Update a section       |
| POST   | /api/login                | Public   | Admin login            |
| POST   | /api/logout               | Admin    | Admin logout           |
| GET    | /api/me                   | Public   | Check session status   |

## Deployment

| Service  | Link |
|----------|------|
| GitHub Repo | [github.com/Yash698869/megaplex-prime-assignment](https://github.com/Yash698869/megaplex-prime-assignment) |
| Live Frontend (Vercel) | [megaplex-prime-assignment-vert.vercel.app](https://megaplex-prime-assignment-vert.vercel.app) |
| Live Backend (Render) | [megaplex-prime-assignment.onrender.com](https://megaplex-prime-assignment.onrender.com) |

### Environment Variables (Production)

**Render (Backend):**
- `MONGO_URI` — MongoDB connection string
- `PORT` — Server port
- `SESSION_SECRET` — Session secret key
- `CLIENT_URL` — Vercel frontend URL
- `NODE_ENV` — `production`

**Vercel (Frontend):**
- `VITE_API_BASE_URL` — Render backend API URL
