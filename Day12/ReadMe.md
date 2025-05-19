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
   <img width="959" alt="1" src="https://github.com/user-attachments/assets/d9392989-2562-4520-9078-14b9a5ab779b" />

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
<img width="959" alt="2" src="https://github.com/user-attachments/assets/0d3c539a-8261-4601-b83a-d4ca406af403" />
<img width="959" alt="3" src="https://github.com/user-attachments/assets/d3b11245-7536-4f32-a41d-d7bb5fe554e6" />


### ✅ Students
<img width="959" alt="4" src="https://github.com/user-attachments/assets/ccdfec19-6454-48bf-9532-548e619102d6" />

---
