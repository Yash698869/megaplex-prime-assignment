# Megaplex Prime – Real Estate Website

A dynamic real estate landing page with an admin panel for managing website content. Built as a full-stack application with React frontend and Node.js backend.

## Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Frontend   | React.js (Vite)         |
| Backend    | Node.js + Express       |
| Database   | MongoDB (Mongoose ODM)  |
| Styling    | CSS                     |

## Features

- Public real estate landing page with multiple sections (Hero, Overview, Amenities, Floor Plans, Connectivity, About, Construction Updates, FAQ)
- Dynamic text content loaded from MongoDB backend
- Admin panel for editing all section content (titles, descriptions, lists)
- Session-based admin authentication with fixed credentials
- Responsive design
- Static images only (no image CMS)

## Admin Login Credentials

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
│   │   ├── components/     # UI components (Navbar, Hero, Overview, etc.)
│   │   ├── pages/          # Home, AdminLogin, AdminDashboard
│   │   └── styles/         # CSS files
│   └── index.html
├── server/                 # Express backend
│   ├── middleware/          # Auth middleware
│   ├── models/             # Mongoose Section model
│   ├── routes/             # Auth and Content routes
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
npm run dev
```

The frontend runs on `http://localhost:5173` and the backend on `http://localhost:5000`.

***The admin login is also there on the footer of the home page.****

## API Endpoints

| Method | Endpoint                  | Auth     | Description            |
|--------|---------------------------|----------|------------------------|
| GET    | /api/content              | Public   | Fetch all sections     |
| GET    | /api/content/:sectionKey  | Public   | Fetch one section      |
| PUT    | /api/content/:sectionKey  | Admin    | Update a section       |
| POST   | /api/login                | Public   | Admin login            |
| POST   | /api/logout               | Admin    | Admin logout           |
| GET    | /api/me                   | Public   | Check session status   |

## Deployment Notes

- Frontend and backend are deployed separately
- Set `MONGO_URI`, `SESSION_SECRET`, and `CLIENT_URL` environment variables in production
- Update the API base URL in `client/src/api/api.js` for production
