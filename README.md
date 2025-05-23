# SBA319 CRUD API Project

## File Structure

```
SBA319/
├── models/
│   ├── post.model.js
│   ├── resource.model.js
│   └── user.model.js
├── routes/
│   ├── post.routes.js
│   ├── resource.routes.js
│   └── user.routes.js
├── views/
│   ├── index.ejs
│   └── ...
├── public/
│   └── css/
├── .gitignore
├── README.md
├── app.js
├── .env (to be added by user)
└── package.json (to be added by user)

```

## Description

This project is a simple Node.js, Express, and MongoDB CRUD API for Dev Link with alot of kinks to be worked out. The base root end point will have a view that serves as a guide.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- EJS

## How to Run Locally

1. Clone this repository
2. Install dependencies: `npm install`
3. Create a `.env` file and add the MongoDB URI (added in the comment of the assignment submission):
4. Start the server: npm run dev

## API Endpoints (resources swappable w/ comments / users)

| Method | Route                | Description                 |
| :----- | :------------------- | :-------------------------- |
| GET    | `/api/resources`     | Get all resources           |
| POST   | `/api/resources`     | Create a new resource       |
| PUT    | `/api/resources/:id` | Update an existing resource |
| DELETE | `/api/resources/:id` | Delete a resource           |
