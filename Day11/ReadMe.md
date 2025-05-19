# 🎓 University Course API

A restful API service for managing university courses, developed using **Node.js**, **Express**, and **MongoDB** with **Mongoose** as the ODM. This service enables full CRUD operations and supports lookups by both ID and course code.

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

   <img width="959" alt="1" src="https://github.com/user-attachments/assets/1ea3dee8-f07d-42fe-b799-469a8030dfb6" />

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
"code": "IT2234",
  "name": "Practical for Web Services",
  "credits": 3,
  "description": "Build a rest API with nodeJS Technology"
```
<img width="959" alt="2" src="https://github.com/user-attachments/assets/7e5216aa-f5f7-488a-b67d-a2f13803c662" />

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
"code": "IT2234",
  "name": "Practical for Web Services",
  "credits": 3,
  "description": "Build a rest API with nodeJS Technology"
```
<img width="959" alt="3" src="https://github.com/user-attachments/assets/abd74c36-3c8a-41bd-b027-056462786920" />


### 📥 Fetch All Courses
- **GET** `/Course/`
  <img width="955" alt="4" src="https://github.com/user-attachments/assets/4c573584-cf1b-48c1-96c2-6153d212ae4e" />


### 🔍 Get Course by ID
- **GET** `/Course/{id}`
  <img width="954" alt="5" src="https://github.com/user-attachments/assets/bf0cda3b-a581-49d1-8d67-d11f2d209c5f" />


### 🔎 Get Course by Code
- **GET** `/Course/code/CS1010`
  <img width="959" alt="6" src="https://github.com/user-attachments/assets/119f73b5-72d5-42bf-940a-ccdec48245fa" />


### ✏️ Update a Course
- **PUT** `/Course/{id}`
- Headers: `Content-Type: application/json`
- Body:
```json
{
   "code": "IT2234",
    "name": "Updated Course Name",
    "credits": 4,
    "description": "Updated course description"
}
```
<img width="959" alt="7" src="https://github.com/user-attachments/assets/4c293115-9f26-4541-85d0-ddae9397c0e2" />

### ❌ Delete a Course
- **DELETE** `/Course/{id}`
<img width="959" alt="8" src="https://github.com/user-attachments/assets/9639bad0-780a-4fa0-9806-d5073c56d120" />
