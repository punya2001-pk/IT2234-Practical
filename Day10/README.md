01. How to delete database

Method1: 
![2](https://github.com/user-attachments/assets/7aba12a5-00c2-44b7-95a6-4d3c69b544ec)

Method2:
![1](https://github.com/user-attachments/assets/6d87d389-6523-483f-8033-c380a29e401a)
	

02. How to delete collection data one by one

		

03. Find the data using projection

		db.degree.find().projection(['name','duration']) //4

04. Find the only name of the degree using pretty()

		db.degree.find({},{name:1,_id:0}).pretty() //5

05. Delete the degree programm with the duration time less than 4

		db.degree.deleteMany({duration:{$lt:4}}) //6,7
		
06. How to update data using shell

		db.degree.updateOne({_id:ObjectId('680eef4cd32b9679ce17a85d')},{$set:{name:'BIT',duration:3}}) //8
		db.degree.find({},{name:1,_id:0}).pretty() // View the data
		
07. Find the newlly update data only

		db.degree.findOne({_id:ObjectId('680eef4cd32b9679ce17a85d')}) //9

08. Update the duration time is 4, increased by 1

		db.degree.updateMany({duration:{$gte:4}},{$inc:{duration:1}}) //10,11
		
09. Update the regno:2021ICT003 skills:PHP and find it

		db.students.updateOne({regno:'2021ICT003'},{$push:{Skills:'PHP'}})
		db.students.findOne({regno:'2021ICT003'})
		
