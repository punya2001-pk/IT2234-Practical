# Express.js Student API

This project demonstrates a simple REST API using Express.js to retrieve student data.

## Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [Postman](https://www.postman.com/) to test API requests

## Setup Instructions

### Step 1: Initialize the Node.js Project
Run the following command in your terminal to initialize a new Node.js project:
```sh
npm init 
```

### Step 2: Install Required Packages
Install Express and Nodemon:
```sh
npm install express
npx install nodemon
```

## API Endpoints

### 1. Get All Students
**Request:**
```
GET /
```
**Response:**
Returns all students.

📌 _Upload Screenshot Here_

---

### 2. Get Third Student
**Request:**
```
GET /third-student
```
**Response:**
Returns the information of the third student in the list.

📌 _Upload Screenshot Here_

---

### 3. Find Student by Registration Number
**Request:**
```
GET /stu/:id
```
**Example:**
```
GET /stu/2021ICT36
```
**Response:**
Returns the student with the specified registration number.

📌 _Upload Screenshot Here_

---

### 4. Filter Students by Gender
**Request:**
```
GET /stu/gender/:gen
```
**Example:**
```
GET /stu/gender/Male
```
**Response:**
Returns all students matching the specified gender.

📌 _Upload Screenshot Here_

---

## Running the Server
1. Open a terminal and navigate to the project folder.
2. Start the server using Nodemon:
   ```sh
   npx nodemon .\Example.js
   ```
3. Open Postman and test the API endpoints listed above.

## Expected Console Output
```sh
Server is running on: http://localhost:3001
```

## Contributions
Feel free to modify and improve the API. Open a pull request with your changes!

