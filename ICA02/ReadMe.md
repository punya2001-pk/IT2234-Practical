
# ICA 02

---

## ✅ Task 1: Create Collections and Insert Documents

1. **Create Database**: `school`
2. **Create Collections**: `students` and `grades`
3. **Insert Documents**: Use the JSON documents from the provided data.

<img width="959" alt="1" src="https://github.com/user-attachments/assets/24863d5e-311f-4d47-877a-18cac18e2a92" />
<img width="959" alt="2" src="https://github.com/user-attachments/assets/018cb487-db61-471a-a603-1cbe4c8ab88f" />
<img width="959" alt="insert stu1" src="https://github.com/user-attachments/assets/bfcbb17d-c788-497c-bfa0-86cfcdce4fe3" />
<img width="959" alt="insert stu2" src="https://github.com/user-attachments/assets/cab56d2e-1ee0-44d0-a7a8-268860a6f840" />
<img width="959" alt="insert stu3" src="https://github.com/user-attachments/assets/5a577e03-7644-486c-85b7-5bea7945f431" />
<img width="959" alt="insert stu4" src="https://github.com/user-attachments/assets/0be956c1-3d8f-4d39-a70d-abeff7745e79" />

---

## ✅ Task 2: Show Both Collections in Table View

> In MongoDB Compass: Select the collection → Click on **Table** tab (next to JSON tab).  

<img width="959" alt="table view 1" src="https://github.com/user-attachments/assets/30763c32-fb01-44c2-9cba-bb54f2b3bbee" />
<img width="958" alt="table view 2" src="https://github.com/user-attachments/assets/81e1c604-1967-4d84-a468-182a2ed33a12" />

---

## ✅ Task 3: Find Female Students (Display Only Name, Age, Gender)

```js
db.students.find(
  { gender: "Female" },
  { name: 1, age: 1, gender: 1, _id: 0 }
)
```
<img width="959" alt="3" src="https://github.com/user-attachments/assets/085b4399-0054-447d-8c23-7e70dcff83c8" />

---

## ✅ Task 4: Students Younger Than 22 and Enrolled After 2020

```js
db.students.find(
  { age: { $lt: 22 }, enrollmentYear: { $gt: 2020 } }
)
```
<img width="959" alt="4" src="https://github.com/user-attachments/assets/15c721f8-c528-4f0a-9c84-d409df032a73" />

---

## ✅ Task 5: All Grades for "Alice Johnson"

```js
db.students.aggregate([
  { $match: { name: "Alice Johnson" } },
  {
    $lookup: {
      from: "grades",
      localField: "_id",
      foreignField: "studentId",
      as: "grades"
    }
  },
  {
    $project: {
      name: 1,
      grades: 1,
      _id: 0
    }
  }
])
```
<img width="958" alt="5" src="https://github.com/user-attachments/assets/c2f99f1c-fa60-4669-805f-98b5333a67df" />

---

## ✅ Task 6: Count Students Who Studied "Mathematics"

```js
db.students.countDocuments({ major: "Mathematics" })
```
<img width="959" alt="6" src="https://github.com/user-attachments/assets/9586a155-185c-450a-9e24-4516e4cc21b6" />

---

## ✅ Task 7: Students With Grades in Term "Fall 2022"

```js
db.grades.aggregate([
  { $match: { term: "Fall 2022" } },
  {
    $lookup: {
      from: "students",
      localField: "studentId",
      foreignField: "_id",
      as: "student"
    }
  },
  { $unwind: "$student" },
  {
    $project: {
      _id: 0,
      subject: 1,
      score: 1,
      term: 1,
      studentName: "$student.name",
      studentEmail: "$student.email",
      studentMajor: "$student.major",
      studentAge: "$student.age"
    }
  }
])

```
<img width="941" alt="7" src="https://github.com/user-attachments/assets/6d7ad014-424b-4065-9525-351d2fbc7f7e" />

---

