# Output
- Asynchronous File Reading in Node.js Using fs.readFile()
    1. Loads the file system module (fs) so you can work with files.
    2. Reads a file called file.txt asynchronously (in the background).
    3. If there's an error, it shows the error.
    4. If the file is read successfully, it prints the contents of the file.
    5. While the file is being read, it immediately prints: "File reading is done..."

![1](https://github.com/user-attachments/assets/37e72ed3-07c3-439d-848a-074b7f0e1564)

- Reading a File in Node.js Using Promises
    1. This code reads a file named file.txt using Promises, which is a modern way to handle asynchronous tasks 
       JavaScript.
    2. It defines a function readFile() that takes a file path and returns a promise to read the file.
    3. When the file is read successfully, it prints the file's content using .then().
    4. If there's an error (like the file not existing), it catches and prints the error using .catch().

![2](https://github.com/user-attachments/assets/c596e8a4-beb7-43e5-89e3-07899c0b0469)


![3](https://github.com/user-attachments/assets/86573310-e79e-429c-a7f1-0d023fbcceb4)

- Reading Multiple Files in Node.js Using async/await and Promise.allSettled
    1. This code reads two files: file.txt and data.txt.
    2. It uses Promise.allSettled() to run both file reads at the same time.
    3. Even if one of the file reads fails, it won't stop the other — you still get the result of both.
    4. The result includes:
          .value if the file read was successful.
          .status tells whether it was 'fulfilled' or 'rejected'.


![4](https://github.com/user-attachments/assets/ebc0ebb7-7bc6-43de-944a-703b19803c2a)


![5](https://github.com/user-attachments/assets/4489072b-68a7-4ca3-92ee-92a8d28212c0)


![6](https://github.com/user-attachments/assets/1fd5251f-5373-459f-868e-b4ae97980093)


![7](https://github.com/user-attachments/assets/372d96b6-c0a7-4882-b88e-964e4493bd3c)


![8](https://github.com/user-attachments/assets/a2e6b204-9463-45d2-a457-76128f246f9a)


# Summary

Syn 
1
2
3

async

event driven and non I/O blocking progrmme

1. read a file
2. request data from an api from internet
3. print message

213

in java - 123
in js - 213


//return object in the operation

Promise

is object from a operation
mention the status of the operation

3. states:
1. waiting
2.fullfilled/resolved-done
3. Rejected/error
