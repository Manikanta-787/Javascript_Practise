FUNCTIONS 
// 1.Regular functions

function sum(a,b){
     console.log(a+b);
}
sum(12,23);

function sum(a,b){
    return a+b;
}
console.log(sum(10,20))

// 2.Anonymous Functions:

let sum=function(a,b){
     console.log(a+b);  
}
sum(10,20);

let sum=function(a,b){
    return (a+b);  
}
console.log(sum(10,20));

// 3.Array Functions:

let sum=(a,b)=>{return a+b}
console.log(sum(10,30))

let sum=(a,b)=>a+b
console.log(sum(10,30))


let sum=b=>b+2
console.log(sum(30))

// 4.IIFE

(function(a,b){console.log(a+b)})(10,20);

let sum=(function(a,b){return (a+b)})(20,30);

console.log(sum)

// 5.higher order functions:

function lower(){
    return 10;
}
function higher(lower){
    lower();
}


// OOPS 
// INHERITANCE

class person{

    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    getDetails(){
        console.log(`Name is ${this.name}`);
        console.log(`age is ${this.age}`);
        
    }
    speak(){
        console.log('this person is chatterbox');
    }
    sayhello(){
        console.log('helllooo');
    }

}
class student extends person{
    constructor(name,age,gender,school,rollno){
        super(name,age,gender);
        this.school=school;
        this.rollno=rollno;
    }
    getDetails(){
        super.getDetails()
        console.log(`School is ${this.school}`);
        console.log(`roll number is ${this.rollno}`);

    }
    speak(){
        console.log('this person is so talkative in nature');
    }
}
person.prototype.price=100;
student.prototype.rate=200;
s=new student('manikanta',21,'male','zphs',7);
s1=new student('mani',21,'male','zphs',7);
s.getDetails();
s.sayhello();
try{
    delete s1;
    console.log(s1);
}catch(error){
    console.log(error.message);
}

let a=new Object({name:'mani',age:21,address:new Object({village:'alluru',pincode:522314})});
a.gender='male';
console.log(a);
a.getdetails=function(){console.log(`this is ${this.name} of ${this.age} years old age.`)};
delete a.address;
console.log(a.address);

// ENCAPSULATION :
class alien{
    #birthyear;
   
    constructor(name,power,speed,birthyear){
           this.name=name;
           this.power=power;
           this.speed=speed;
           this.#birthyear=birthyear;
    }
    getbirthyear(){
        console.log(`alien named ${this.name} was born in the year ${this.#birthyear} .`)
    }
    #getdetails=function (){
        console.log('heyy your details are here..');
    }
    get(){
        this.#getdetails();
    }
}
let a=new alien('jack sully','super strength','50km/h',1900);
a.get();

function ATM(owner,balance){
    let _balance=balance;
    this.owner=owner;
    this.getBalance=()=>{console.log(`YOUR BALANCE IS :${_balance}`)};
    this.deposit=(amount)=>{
        if(amount>0){
            _balance+=amount;
            console.log(`your balance is updated,your current balance is :${_balance}.`);
        }else{
            console.log('please enter a valid amount !');
        }
    }
    function clear(){
        _balance=0;
    }
    this.erase=()=>{
        clear();
    }
}
acc1=new ATM('manikanta reddy',100000);
acc1.clear();
acc1.getBalance();

class car{
    static srqrt2(){
        return Math.SQRT2;
    }
}
let c1=new car();
console.log(car.phone);


// DOM

let startTimer=document.getElementById("startTimer");
let stopTimer=document.getElementById("stopTimer");
let timer=document.getElementById("timer");
startTimer.addEventListener('click',starter);
stopTimer.addEventListener('click',stop);
let starter=function(){
    let tid=setInterval(()=>{
        timer.textContent=(Number(timer.textContent)+1);
    },1000);
    return tid;
    
}
function stop(starter){
    clearInterval(starter);
}

document.title="my page";
let divel=document.createElement("div");
divel.style.height="200px";
divel.style.width="200px";
divel.style.backgroundColor="blue";
document.body.appendChild(divel);
let input=document.getElementById('in');
input.addEventListener("change",f);
function f(){
    input.style.color="red";
    input.style.height="30px";
    input.style.width="200px";
    input.style.outlineColor='blue';
    input.style.backgroundcolor="hot pink";
    input.style.borderRadius='12px';

}

// PTOTOTYPES

function person(name,age,gender){
    this.name=name;
    this,age=age;
    this.gender=gender;

}
let p1=new person("mani",21,"male");
let p2=new person("sai",21,"male");
p1.__proto__.price=100;
person.prototype.rate=12;
p2.__proto__.country="india"
console.log(person.prototype);
console.log(p1.__proto__);
console.log(p2.__proto__);

// PROTOTYPES ES6
class person{
    constructor(name){
        this.name=name;
    }
}
let p1=new person("mani");
let p2=new person("sai");
console.log(p1.__proto__===person.prototype);
p1.__proto__.rate=100;
p2.__proto__.rate=199;
console.log(p1.__proto__);
console.log(p2.__proto__);

CALLBACKS
function add(a,b){
      return a+b;
}
function sub(a,b){
    return a-b;

}
function calculator(a,b,operation){
    return operation(a,b);

}
console.log(calculator(10,20,add));

// CLOSURES CONCEPT
 function createGame(){
      let score=0;

      function increasescore(points){
        score += points;
        console.log(`+${points} pts`);
      }

      function decreasescore(points){
        score -= points;
        console.log(`-${points} pts`)
      }

      function getscore(){
           console.log(`your score is ${score}`);
      }

      return {increaseScore:increasescore,
             decreaseScore:decreasescore,
             getScore:getscore
      }
 }

 let game=createGame();
 game.getScore();
 game.increaseScore(10);
 game.getScore();
 game.decreaseScore(3);
 game.getScore();

// THIS keyword:
let a=10;
console.log(this);
console.log(a);

let a=new Object();
a.name="mani";
a.getName=function(){
    console.log(this.name);
    console.log(this);
}
// a.getName();
// 1.in global context-->represents window Object;
// 2.inside of regular function-->represnts window Object
// 3.inside an object method-->represents the current object
// 4.inside of eventhandler function-->represents the target Element
// 5.in strict mode-->repesents undefined

// PROMiSES

// promise is an object that provides a structured way to handle the implementation of an asynchronus operation .
// 1.hanles the asynchronus operations 
// 2.chain's the async operations
// 3.avoids the callback hell

// FETCH(),ASYNC/AWAIT

function getData(){

       return new Promise((resolve,reject)=>{
               setTimeout(()=>{
                     reject("failed");
               },2000)
       })
       
}
async function getDatawithError(){
   try{
       let response=await getData();
       console.log(response);
   }
   catch(error){
       console.log(error)
   }
}
getDatawithError();

// DESTRUCTURING 
// it is process of assigning the individual values of a datastructure to variables.helps to get named data.a
// 1)ARRAYS:
 let Array=[12,23,"mani",12,12,34];
 [first,second,third,...rest]=Array;
 console.log(first);
 console.log(second);
 console.log(third);
 console.log(rest);
let obj={name:"mani",age:21};
let{name,age}=obj;
console.log({obj})


let array=[12,23,"mani",12,12,34];
 console.log([...array])

REG-EXP
let str = "W will, we will\n rock you";

console.log(str.match(/we/i))
let n=10;

console.log("I love HTML all hefhoirl".replace(/HTML/, "$(n) and JavaScript"))

console.log("hello\tmani kanta");

// meta characters:
// \s
// \w
// \d
// \D
// \W
// \S
// .

// CUSTOM ERRORS:

class custom{
    constructor(message){
            this.name="FATAL ERROR";
            this.message=message;
    }
}

try{
    throw new custom("whoops! you got an error!!");
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error);
}
function test(){
    throw new Error("oops");
}
test();
console.log("hello");

let sum=new Function('a','b','');
console.log(sum(2,3));

// EXPORTS AND IMPORTS:

// ES6:
//   we use import/export,export default statements in ES6.
//   1.named exports 
//   2.default exports-->only one item can be exported defaultly from one File.

//   exporting:
//    index.js:
//       export item
//       import {item_name} from path



