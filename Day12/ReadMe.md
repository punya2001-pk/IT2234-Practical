# 🏫 School System REST API

A lightweight REST API developed using **Node.js**, **Express**, and **MongoDB** (via **Mongoose**) for managing school-related data. It supports CRUD operations for **Courses**, and basic retrieval for **Degrees** and **Students**.

---

## 🗂️ Folder Layout

```
school-api/
├── models/
│   ├── Course.js       # Course schema
│   ├── Degree.js       # Degree schema
│   └── Student.js      # Student schema
├── routes/
│   ├── courseRoute.js  # Endpoints for courses
│   ├── degreeRoute.js  # Endpoints for degrees
│   └── studentRoute.js # Endpoints for students
├── index.js
└── README.md
```

---

## 🔧 Setup Instructions

1. Extract project files.
2. Navigate into the folder.
3. Install required packages:
   ```bash
   npm init -y
   npm install express mongoose
   ```
4. Ensure your MongoDB instance is running:
   ```
   mongodb://localhost:27017/SchoolAPI
   ```
5. Launch the app:
   ```bash
   node index.js
   ```

---

## 🌐 API Overview

### 📚 Courses

| Verb   | Route                 | Purpose                        |
|--------|-----------------------|--------------------------------|
| GET    | `/course`             | Retrieve all courses           |
| GET    | `/course/:id`         | Get course by ID               |
| GET    | `/course/code/:cid`   | Get course by course code      |
| POST   | `/course`             | Create a new course            |
| PUT    | `/course/:id`         | Update existing course         |
| DELETE | `/course/:id`         | Delete course                  |

### 🎓 Degrees

| Verb   | Route      | Purpose             |
|--------|------------|---------------------|
| GET    | `/degree`  | List all degrees    |

### 👨‍🎓 Students

| Verb   | Route       | Purpose                           |
|--------|-------------|-----------------------------------|
| GET    | `/student`  | Get all students (with degree)    |

---

## 🧪 API Testing (Postman)

### ✅ Courses
- Previously demonstrated in practical sessions.

### ✅ Degrees
![Degrees](./screenshots/degree_get.png)

### ✅ Students
![Students](./screenshots/student_get.png)

---

## 📎 Project Download

Download the project ZIP directly:  
**[Download Here](./SchoolAPI.zip)**

---
