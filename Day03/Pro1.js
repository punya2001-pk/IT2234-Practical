//Basic functions
console.log("Basic functions:");

function PrintMsg(){
	console.log("Hello JS");
}

PrintMsg()
console.log("");

//Return type mathematics function
console.log("Return type Mathematics function:");

function sum(){
	return 5+6
}
console.log("sum="+sum())

function sub(a,b){
	return a-b
}
console.log("sub="+sub(5,3))
console.log("");

//Write a boolean function to find a given number is prime
console.log("Boolean functions:");

function isprime(num)
{
	
	if(num<=1)
	{
		isprime=false;
	}
	else
	{
		for(let i=2; i<=num/2; ++i)
		{
			if(num%i==0)
			{
				isprime=false;
			}
		}
	}
	
	if(isprime)
	{
		console.log( num + " is prime number")
	}
	else
	{
		console.log(num +"is Not prime")
	}
	
}
isprime(3)
console.log("");

//Write recursive function to print numbers from 1 to n
console.log("Recursive functions:");

function printNumbers(n, current = 1) {
    if (current > n) return; 
    console.log(current);
    printNumbers(n, current + 1); 
}

printNumbers(10);

console.log("");


//Arrow function
console.log("Arrow function:");

const msg=()=>{
	return console.log("Hello")
	}
msg()
//console.log(msg())
console.log("");

//write an arrow function to sum 2 numbers
console.log("Sum:");
const add=(a,b)=>{
	return a+b
} 
console.log(add(5,3))
console.log("");


//Default parameter
console.log("Default parameter:");

const mul=(a,b=2)=>{
	return (a*b)
}
console.log(mul(4,5))
console.log(mul(4))
console.log("");

//Rest parameter
/*console.log("Rest parameter:");
const mysum=(...n)=>{
	console.log(n)
}
mysum(4,5,6,89,2)
console.log("");*/

/*
const mysum=(...n)=>{
	let t =0
	n.forEach((i)=>t=t+i)
	console.log(t)
}
mysum(4,5,6,89,2)
*/

console.log("Rest parameter:");
const mysum=(...n)=>{
	return n.reduce((t,i)=>t=t+i)
}
console.log(mysum(4,5,6,89,2))
console.log("")

//Callback function
console.log("Callback function:");
const myName=(name)=>{
	console.log("My name is "+name)
}

const greet=(msg,fun)=>{
	console.log("Hi..." + msg)
	fun
}
greet("Good Morning",myName("John"))
console.log("")

/*function passed as an arguments
const greet=(msg,fun)=>{
	console.log("Hi..." + msg)
	fun()
}
greet("Good Morning",()=>{
	console.log("My name is John")
})
*/

//Array
console.log("Array:");
const multwo=(n)=>n*2

const myarr=(mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multwo,4,5,6,8,2)
console.log("");