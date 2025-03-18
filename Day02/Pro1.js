//print the array using for loop
console.log("print the array");
let  arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++)
{
	console.log(arr[i]);
}

//using foreach loop in display the array elements
/* arr.forEach((n) =>
{
	console.log(n);
})
*/

//find the max number in the array using foreach
console.log("find the max number");
let max = 0;
arr.forEach((n)=> 
{
	if(max<n)
	{
		max = n;
	}
	//(max<n) && (max=n)
})
console.log("Max is " + max);


//print the nested array
//[[1,2,30],[5,6],[8,5,3]]
console.log("print the nested array")
let arr1 = [[1,2,30],[5,6],[8,5,3]];
arr1.forEach((n)=>
{
	n.forEach((i)=>
	{
		console.log(i)
	})
	
})

/*
a = [4,5,6,3,7]
b = [8,3,2,1,5]
find the common elements between a and b
*/
console.log("common elements in 2 arrays");
let a = [4,5,6,3,7];
let b = [8,3,2,1,5];

for(let i=0; i<a.length; i++)
{
	for(let j=0; j<b.length; j++)
	{
		if(a[i] == b[j])
		{
			console.log(a[i]);
		}
	}
}


//arr2 = [1,2,3,4,5,6]
//target = 7
//write a code find the all pairs that sum up to the target
console.log("all pairs that sum up to the target");
let A = [1,2,3,4,5,6];
let target = 7;
for(let i=0; i<A.length; i++)
{
	for(let j=0; j<A.length; j++)
	{
		if((A[i] + A[j]) == target)
		{
			console.log(A[i] + "," + A[j]);
		}
	}
}


//[4,8,3,4,3,2,1,8,4]
//find the most frequent element in the array
console.log("The most frequent element");

let c = [4, 8, 3, 4, 3, 2, 1, 8, 4];
let frequency = {};
let maxCount = 0;
let mostFrequentElement = null;

for (let i = 0; i < c.length; i++)
	{
    let num = c[i];
    frequency[num] = (frequency[num] || 0) + 1;

    if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mostFrequentElement = num;
    }
}

console.log("Most frequent element:", mostFrequentElement);



//array operation 
//push and pop
console.log("push and pop");
arr3 = ['a','b','c','d'];
console.log(arr3);

arr3.push('e');
console.log(arr3);

arr3.pop();
console.log(arr3);

//reverse the array using push and pop
// a b c d -> d c b a
console.log("reverse the array using push and pop");
let B = ['a','b','c','d'];
let C = [];

for(let i=B.length; i>0; i--)
{
	C.push(B.pop());
}
console.log(C);


//JSON
//{key:value}
console.log("JSON");
let student = {regno:'2021/ICT/01',name:'James',age:20,course:'IT',skills:['java','JS','C++']}
console.log(student);
console.log(student.name);
let students = [
{regno:'2021/ICT/01',name:'James',age:20,course:'IT'},
{regno:'2021/ICT/02',name:'Ravi',age:22,course:'IT'},
{regno:'2021/ICT/03',name:'Jeny',age:20,course:'IT'}
]
console.log(students);

//define 10 students in JSON
//Store in the array
let Students = [
  { name: "Amal", gender: "Male", course: "IT", GPA: 3.8 },
  { name: "Jeny", gender: "Female", course: "Engineering", GPA: 3.5 },
  { name: "Ama", gender: "Female", course: "IT", GPA: 3.9 },
  { name: "Nimal", gender: "Male", course: "Business", GPA: 3.6 },
  { name: "Kumara", gender: "Male", course: "IT", GPA: 3.7 },
  { name: "Dias", gender: "Male", course: "Mathematics", GPA: 3.4 },
  { name: "Anya", gender: "Female", course: "IT", GPA: 3.9 },
  { name: "Hiru", gender: "Male", course: "Physics", GPA: 3.2 },
  { name: "Koshi", gender: "Female", course: "Engineering", GPA: 3.3 },
  { name: "John", gender: "Male", course: "IT", GPA: 4.0 }
];

//find the female students
let femaleStudents = [];

for (let i = 0; i < Students.length; i++) {
  if (Students[i].gender == "Female") {
    femaleStudents.push(Students[i]);
  }
}
console.log("Female Students:", femaleStudents);


//find the students who are following it course
let itStudents = [];

for (let i = 0; i < Students.length; i++) {
  if (Students[i].course == "IT") {
    itStudents.push(Students[i]);
  }
}

console.log("IT Students:", itStudents);


//find the max and average GPA among the students
let maxGPA = Students[0].GPA; 
let totalGPA = 0;

for (let i = 0; i < Students.length; i++) {
  if (Students[i].GPA > maxGPA) {
    maxGPA = Students[i].GPA;
  }
  totalGPA += Students[i].GPA;
}

let avgGPA = totalGPA / Students.length;

console.log("Max GPA:", maxGPA);
console.log("Average GPA:", avgGPA.toFixed(2));