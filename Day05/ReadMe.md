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

![1](https://github.com/user-attachments/assets/7c73d8a0-d78d-49dc-91b4-f79cb4b2fa06)


---

### 2. Get Third Student
**Request:**
```
GET /third-student
```
**Response:**
Returns the information of the third student in the list.

![2](https://github.com/user-attachments/assets/a4ef56a7-0280-4785-96a4-e445bd14adc2)


---

### 3. Find Student by Registration Number
**Request:**
```
GET /stu/:id
```
**Example:**
```
GET /stu/2021ICT01
```
**Response:**
Returns the student with the specified registration number.

![3](https://github.com/user-attachments/assets/9288c0fa-c2b4-462f-bfc0-f0dfa7a8f15f)


---

### 4. Filter Students by Gender
**Request:**
```
GET /stu/gender/:gen
```
**Example:**
```
GET /stu/gender/Female
```
**Response:**
Returns all students matching the specified gender.

![4](https://github.com/user-attachments/assets/07304e5f-2f7a-4d42-932f-7e71650558fd)


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

![5](https://github.com/user-attachments/assets/7c70b5c2-dcc4-4266-9f62-9616e2b158b7)


## Contributions
Feel free to modify and improve the API. Open a pull request with your changes!

