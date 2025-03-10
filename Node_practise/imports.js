// MODULES,COMMONJS ,ES6 IMPORTS AND EXPORTS:

// 1.COMMON JS IMPORTS AND EXPORTS:
// ** when we use the require method ,we get the whatever the value assigned to the exports property of 'module' object in that 'module'
//  or simply the exports property will be imported

// 1.object desturctured way:(NAMED IMPORT)
// let {person,getDetails,sum}=require('./first');

// console.log(sum(10,20))

// 2.Object Imported directly(DEFAULT IMPORT)
// let importedItemsObject=require('./first');

// console.log(importedItemsObject
    // .sum(10,20))

// 3.USING ALIASING FOR  NAMED IMPORT:
// let {person:Student,getDetails:StudentDetails,sum:Add}=require('./first');

// console.log(Add(10,20))
// StudentDetails(Student);

// let {person:Student,sum:Add}=require('./first');
// console.log(Add(10,20));
 
//IMPORTING INDIVIDUAL MEMBERS OF MODULE:
// let {sum} =require("./module_for_imports&exports");
// console.log(sum(10,20));


// let {getDetails:StudentDetails} =require("./module_for_imports&exports");

// let {person:Student} =require("./module_for_imports&exports");

// StudentDetails(Student);

// DYNAMIC IMPORT OF A MODULE
// function loadModule(module){
//     let importedObject=require(`${module}`);
//     return importedObject;
// }


// let members=loadModule('./module_for_imports&exports');
// console.log(members.sum(20,30));


// let sum=require('./module_for_imports&exports')
// console.log(sum(12,13));

// let member=require('./module_for_imports&exports')
// console.log(member);

// 2.ES6 EXPORTS AND IMPORTS:

// **HERE The default exports and named exports will be defined(structured/configured/written) seperately whereas in COMMONJS they will inseperable as they are defined using module.exports property.

// IMPORTING 
// 1.NAMED IMPORTS:

// 1.1 Without using aliasing: 
// import {sum,student} from './module_for_imports&exports.js';
// console.log(sum(10,20));
// console.log(student.Name);

// 1.2 Using aliasing:
// import {Add,Person} from "./module_for_imports&exports.js";
// console.log(Add(10,20));
// console.log(Person);

// 2 DEFAULT IMPORTS:
// 2.1 without Aliasing:
//  import student from './module_for_imports&exports.js';
//  console.log(student);
//  console.log(student.Name);

//2.2 using Aliasing:
// import Sum from './exports.js';
// console.log(Sum);

// 3.COMBINING NAMED AND DEFAULT IMPORTS:
// import student,{sum} from './exports.js';
// console.log(sum(12,12));
// console.log(student.Name);

