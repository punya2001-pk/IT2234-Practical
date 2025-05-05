# Pro1

## 01. How to delete database

Method1: 
![2](https://github.com/user-attachments/assets/7aba12a5-00c2-44b7-95a6-4d3c69b544ec)

Method2:
![1](https://github.com/user-attachments/assets/6d87d389-6523-483f-8033-c380a29e401a)
	

## 02. How to delete collection data one by one

![3](https://github.com/user-attachments/assets/0aebc5d5-cd7c-4cab-8c3d-2ff402651629)
	

## 03. Find the data using projection

![4](https://github.com/user-attachments/assets/02f33372-70c0-4be9-8e49-348a050f14a7)


## 04. Find the only name of the degree using pretty()

![5](https://github.com/user-attachments/assets/97f45138-2521-4437-9fdd-63607c9e251b)


## 05. Delete the degree programm with the duration time less than 4

![6](https://github.com/user-attachments/assets/a662ebce-7526-40bf-bb4e-26e84bb93816)


![7](https://github.com/user-attachments/assets/ca355b1f-6f07-40e9-a2b1-1bf6fe2a6290)


## 06. How to update data using shell

![8](https://github.com/user-attachments/assets/d530b314-71dc-45ee-8409-ecb7100060d6)

		
## 07. Find the newlly update data only


![9](https://github.com/user-attachments/assets/44509c44-4cd3-4838-b694-d4ebf046a85c)


## 08. Update the duration time is 4, increased by 1


![10](https://github.com/user-attachments/assets/eb1cb0d3-f826-4ea9-9ea7-c776884cbecf)


![11](https://github.com/user-attachments/assets/43ec97d3-e189-4757-b326-487b6e42fe50)

		
## 09. Update the regno:2021ICT003 skills:PHP and find it

![12](https://github.com/user-attachments/assets/e7472271-bcab-465c-bafe-dbc8bd378f56)


# Pro2

## create a database bookshop
## create a collection books

## 01. insert the following data 
{
  "title": "The Hobbit",
  "author": "J.R.R. Tolkien",
  "published_year": 1937,
  "genres": ["Fantasy", "Adventure"],
  "pages": 310,
  "available": true,
  "rating": 4.8
}

  {
    "title": "1984",
    "author": "George Orwell",
    "published_year": 1949,
    "genres": ["Dystopian", "Political Fiction"],
    "pages": 328,
    "available": true,
    "rating": 4.7
  },
  {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "published_year": 1960,
    "genres": ["Southern Gothic", "Drama"],
    "pages": 281,
    "available": false,
    "rating": 4.6
  },
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "published_year": 1925,
    "genres": ["Tragedy"],
    "pages": 180,
    "available": true,
    "rating": 4.4
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "published_year": 1932,
    "genres": ["Science Fiction", "Dystopian"],
    "pages": 311,
    "available": true,
    "rating": 4.2
  }


![1](https://github.com/user-attachments/assets/48606b29-26b8-46c8-8d18-97f39aa1e4a6)

  

## 02. Find all books 

![2](https://github.com/user-attachments/assets/d71a4f1e-dd5a-4b64-ae07-d969ad67fda4)


![3](https://github.com/user-attachments/assets/fea16703-8fd7-49b1-acc7-c2ee3ac0254b)


![4](https://github.com/user-attachments/assets/764340b3-c3d3-4dea-94fc-6da034170c93)



## 03. Find all books published after 1950 

![5](https://github.com/user-attachments/assets/124ccb06-b55b-450d-bfbd-276c49239a68)


## 04. Find the avilable books 

![6](https://github.com/user-attachments/assets/04d0f988-8f60-4cca-bf99-8599e0c620ec)


![7](https://github.com/user-attachments/assets/40992fea-b5fd-4b74-8f36-fb249046070a)

		
## 05. Find all books that belong to the "Dystopian" genres 

![8](https://github.com/user-attachments/assets/50446c55-a617-4728-b68d-b361909dc8d2)

		
## 06. Find the books which published after 1960 and had rating more than 4.0

		db.books.find({published_year:{$gt:1950},rating:{$gt:4.0}})

## 07. Project only title and author fields:

		db.books.find().projection(['title','author'])
		
## 08. Update the book "1984" to set available: false:

		db.books.updateOne({title:'1984'},{$set:{available:false}})
		db.books.findOne({title:'1984'})

## 09. Increase the rating of "Brave New World" by +0.1:

		db.books.updateOne({title:'Brave New World'},{$inc:{rating:0.1}})

## 10. Add a new genres "Classic" to "The Great Gatsby":

		db.books.updateOne({title:'The Great Gatsby'},{$push:{genres:'Classic'}})
		db.books.findOne({title:'The Great Gatsby'})

## 11. Sort books by published_year ascending:

		db.books.sort({'published_year':1})

## 12. Sort books by rating descending:

		

## 13. Delete all books with a rating lower than 4.5:
 
		
