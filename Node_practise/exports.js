// let person={
//       Name:"Harry Potter",
//       School:"Hogwards",
//       isFamous:true
// };

// function getDetails(Person){
//           console.log(`your name is ${Person.Name}
// your are from ${Person.School}.`)
// }

// let sum=function(a,b){
//     return a+b
// }
//COMMON JS EXPORTS:
 // NAMED EXPORT
 //Types of doing it:

//  1. passing to the object directly:
// module.exports={person,getDetails,sum};

// 2.Assigning the function definition
// module.exports.sum=function(a,b){
//     return a+b
// }

// 3.passing values to variable
// module.exports.message="hello world!";

// module.exports=sum;

//UNDERSTANDING THE EXPORTS PROPERTY OF module object
// let a={};
// console.log(a);
// console.log(typeof a);
// a=10;
// console.log(a);
// console.log(typeof a);

// module.exports=10; // assigning the value
// module.exports={member1,member2,member3,...}(this is one way of writing the Object,in this way the member given will become the key and it's own value will get assigned to it)
// module.exports={
//           property1:value1,
//           property2:value2,      //defining object directly here
//           property3:value3,
//               ...
// }
// module.exports=function(a,b){ return a+b};
 

// CHECKING WHEATHER EXPORTS WILLBE OVERWRITTEN OR NOT (IT WILL GET OVERWRITTEN)
// module.exports=10;
// module.exports=(a,b)=>{return a+b};

//Exporting Ways:

// let sum=function(a,b){return a+b};
// let student={
//        Name:"Harry Potter",
//        School:"Hogwarts",
//        isFamous:true
// }

// 1.Named exports:
// 1.1 Exporting the members Individually

// members for usage:

// export function sum(a,b){
//     return a+b
// };
// export let student={
//        Name:"Harry Potter",
//        School:"Hogwarts",
//        isFamous:true
// };

//1.2 exporting the by combining:
// function sum(a,b){
//     return a+b
// };
// let student={
//        Name:"Harry Potter",
//        School:"Hogwarts",
//        isFamous:true
// };
// export{sum,student};

// 1.3 exporting by using Aliasing
// function sum(a,b){
//     return a+b
// };
// let student={
//        Name:"Harry Potter",
//        School:"Hogwarts",
//        isFamous:true
// };
// export{sum as Add,student as Person};

// 2 DEFAULT EXPORTS:
// Here the exported member will not be imported as an object meaning that we don't need to import the members of the module file with the help of object destructuring

// export function sum(a,b){
//         return a+b
//     };
// let student={
//            Name:"Harry Potter",
//            School:"Hogwarts",
//            isFamous:true
//     };

// export default student;
//  export default student={
//         Name:"harry",
//         School:"Hogwarts",
//         isFamous:true
//  }


// 3.Combining the Named and Default exports:
// export function sum(a,b){
//         return a+b
//     };
// let student={
//            Name:"Harry Potter",
//            School:"Hogwarts",
//            isFamous:true
//     };
// export default student;
