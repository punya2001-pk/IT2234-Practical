## * Create new connection

<img width="721" alt="newconnection" src="https://github.com/user-attachments/assets/05b99cff-4d32-4c79-a4ac-69956f39d052" />

## * Create new database

<img width="449" alt="databasecreate" src="https://github.com/user-attachments/assets/9281a013-459e-411d-9100-33e6a5890f05" />

## * command for mongosh

db["students"].find(//click enter)

use unidb

show databases;

show collections

use local

use unidb

![1](https://github.com/user-attachments/assets/5953d24b-c973-45ad-a059-2bf50930af35)


## * insert to data

{
  "regno": "2021IT01",
  "name": "Kolins",
  "age": 25,
  "degree": "IT",
  "gpa": 3.2,
  "skills": [
    "JS",
    "MongoDB",
    "Node"
  ],
  "gender": "Male"
}

![3](https://github.com/user-attachments/assets/df3218fa-41d3-4fa3-ae59-a735cd4ecb45)
![2](https://github.com/user-attachments/assets/239244e5-867f-4beb-8e0c-f1425af5c2c8)


## * clone to data(edit first document and clone to it)

{
  "regno": "2021IT02",
  "name": "Jeny",
  "age": 23,
  "degree": "IT",
  "gpa": 3.5,
  "gender": "Female",
  "skills": [
    "JS",
    "MongoDB",
    "mySQL"
  ]
}

![5](https://github.com/user-attachments/assets/8a30b88b-fc7b-42dd-9c16-814cd01af73c)
![4](https://github.com/user-attachments/assets/3f703a4f-2206-494f-b1b0-dabe8d61c963)


## * Insert into data to our databse(type in the mongosh shell)

db.students.insertOne(
{
  "regno": "2021IT02",
  "name": "Jeny",
  "age": 23,
  "degree": "IT",
  "gpa": 3.5,
  "gender": "Female",
  "skills": [
    "JS",
    "MongoDB",
    "mySQL"
  ]
}
)

![7](https://github.com/user-attachments/assets/04e763d1-c82c-48e4-b7a1-a5c77af8bf2b)


## * Refresh

![8](https://github.com/user-attachments/assets/204bc579-d50f-4e9c-98a6-f6e38bfcaadc)


## * insert to many data in one time

db.students.insertMany([
{
  "regno": "2021IT03",
  "name": "Peeter",
  "age": 22,
  "degree": "IT",
  "gpa": 2.9,
  "gender": "Male",
  "skills": [
    "JS",
    "MongoDB",
    "mySQL"
  ]
},

{
  "regno": "2021IT04",
  "name": "Asha",
  "age": 20,
  "degree": "IT",
  "gpa": 2.5,
  "gender": "Female",
  "skills": [
    "JS",
    "MongoDB",
    "Node"
  ]
}
])

![9](https://github.com/user-attachments/assets/b46254e0-be48-4322-acc8-2c43734dfd25)


## * options

{name:1,age:1,_id:0} // type to project

## * click find

![10](https://github.com/user-attachments/assets/e2266cf7-0f7f-4c98-b47c-4a7cf68d511c)


## * find the regno:2021IT03

{"regno":"2021IT03"}

![11](https://github.com/user-attachments/assets/b49dad5d-1612-4fe4-8a7b-e474a3a4e053)


## * find the gender:Female

{"gender":"Female"}

![12](https://github.com/user-attachments/assets/6182f681-32d9-4e0e-b4ea-e13fc23331e3)


## * How to find the gender:Female using mongo shell

db.students.find({"gender":"Female"})

![13](https://github.com/user-attachments/assets/98c22d5d-cfa7-4923-a2f2-7af2555d7504)


## * How to find only one Female student using mongo shell

db.students.findOne({"gender":"Female"})

![14](https://github.com/user-attachments/assets/e98a012d-5e89-416c-a762-ba1209fced5d)


## * How to find age is greater 23 using mongo shell

db.students.find({age:{$gt:23}}) //shell

![15](https://github.com/user-attachments/assets/37253bcf-0bc7-45ed-8d9c-6669ec4cad53)


{age:{$gt:23}} 

![16](https://github.com/user-attachments/assets/395bbf1c-42c4-4453-97b1-8bc897b17895)


## * Find the studets skills:Node

{skills:{$in:['Node']}}

![17](https://github.com/user-attachments/assets/7307f51a-eb5b-4857-8587-6ee8304119da)


## * Find the students skills:MongoDB and JS 

{skills:{$in:['MongoDB','JS']}}

![18](https://github.com/user-attachments/assets/93e543b0-1556-40ef-a980-01eb09de1517)


## * sort the students gpa 

{gpa:1} // Accending order 

db.students.find({'degree':'IT'}).sort({'gpa':1}) // using shell

![19](https://github.com/user-attachments/assets/18d3569a-1ba4-4c27-a217-1d3756a892dc)


{gpa:-1} // Deccending order

db.students.find({'degree':'IT'}).sort({'gpa':-1}) // using shell

![20](https://github.com/user-attachments/assets/2224b081-907c-402a-9a39-8f8bb1c0ad41)


## * Find the students degree:IT, gender:male and sort it age

db.students.find({'degree':'IT','gender':'Male'}).sort({'age':1}) 

![21](https://github.com/user-attachments/assets/7ba739bb-1450-4065-aed8-bda0dff58eaf)

