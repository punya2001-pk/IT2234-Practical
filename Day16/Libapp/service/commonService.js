const Borrow = require('../models/Borrow');
const Book = require('../models/Book');
const Student = require('../models/Student');

const filterData = async (req, res, model, filterField, filterValue) => {
    try {
        const results = await model.find({ [filterField]: filterValue });

        if (results) {
            res.status(200).json(results); 
        } else {
            res.status(404).send(`No records found for`);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
};


const borrowBook = async (req, res) => {
    const { studentId, bookId } = req.body; 

    try {
        // 1. Ensure the student exists
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).send("Student not found");
        }

        // 2. Ensure the book exists
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).send("Book not found");
        }

        // 3. Check if the student has more than 2 unreturned books
        const unreturnedBooksCount = await Borrow.countDocuments({
            student: studentId, // Use the correct field name (`student`) in the schema
            returned: false
        });

        if (unreturnedBooksCount > 2) {
            return res.status(400).send("Student has more than 2 unreturned books. Cannot borrow more books.");
        }

        // 4. Ensure there is at least one available copy of the book
        if (book.availableCopies <= 0) {
            return res.status(400).send("No available copies of this book for borrowing.");
        }

        // 5. Borrow the book by updating the available copies
        book.availableCopies -= 1;
        await book.save();

        // 6. Record the borrow transaction
        const borrowEntry = new Borrow({
            student: studentId,   // Set student field to the ObjectId of the student
            book: bookId,         // Set book field to the ObjectId of the book
            borrowDate: new Date(),
            returned: false,
        });

        await borrowEntry.save();

        // 7. Return success response
        return res.status(200).send("Book borrowed successfully!");

    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
};

module.exports = {filterData, borrowBook};
