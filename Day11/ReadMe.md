# 🎓 University Course API

A RESTful API service for managing university courses, developed using **Node.js**, **Express**, and **MongoDB** with **Mongoose** as the ODM. This service enables full CRUD operations and supports lookups by both ID and course code.

---

## 📂 Directory Overview

```
university-course-api/
├── models/
│   └── Course.js         # Mongoose schema
├── routes/
│   └── courseRoute.js    # API route handlers
├── index.js              # Main server file
└── README.md
```

---

## ✨ Core Capabilities

- Add a new course
- List all courses
- Find course by unique ID or code
- Modify course information
- Remove a course from the system

---

## 🛠️ Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB, Mongoose

---

## ⚙️ Setup Instructions

1. **Install project dependencies**  
   ```bash
   npm init -y
   npm install express mongoose
   ```

2. **Ensure MongoDB is running locally**  
   Default port: `27017`.

3. **Start the development server**  
   ```bash
   node index.js
   ```

   Server will be live at: `http://localhost:3001`

---

## 📡 API Routes

Base path: `/Course`

| Method | URL                         | Purpose                          |
|--------|-----------------------------|----------------------------------|
| GET    | `/Course/`                  | Fetch all courses                |
| GET    | `/Course/:id`               | Fetch a course by its ID         |
| GET    | `/Course/code/:courseCode`  | Fetch a course by its code       |
| POST   | `/Course/`                  | Add a new course                 |
| PUT    | `/Course/:id`               | Update course details            |
| DELETE | `/Course/:id`               | Delete a course by its ID        |

---

## 📘 Example Data Format

```json
{
  "code": "CS1010",
  "name": "Intro to Programming",
  "credits": 4,
  "description": "Covers programming fundamentals in JavaScript."
}
```

---

## 🔧 Configuration Notes

- MongoDB URL: `mongodb://localhost:27017/unidb`
- Express server listens on port: `3001`

---

## 🧪 Testing with Postman

Base URL: `http://localhost:3001`

### ✅ Create Course
- **POST** `/Course/`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "code": "CS1010",
  "name": "Intro to Programming",
  "credits": 4,
  "description": "Covers programming fundamentals in JavaScript."
}
```

### 📥 Fetch All Courses
- **GET** `/Course/`

### 🔍 Get Course by ID
- **GET** `/Course/{id}`

### 🔎 Get Course by Code
- **GET** `/Course/code/CS1010`

### ✏️ Update a Course
- **PUT** `/Course/{id}`
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "code": "CS1010",
  "name": "Advanced Programming",
  "credits": 5,
  "description": "Updated course content."
}
```

### ❌ Delete a Course
- **DELETE** `/Course/{id}`
