// Single line comment  /* multi*/
console.log("Hello World");
//variable declaration
var n="Noor"; //Global variable and using var a same variable name can be declared twice i.e. it allows duplication
n=27 ;//can be changed
let m="Deep";  // only within the scope and doesnot allow you to declare same variable name twice in the same scope and it doesnot allow duplication
const pi=3.14; //never change constant and make variable name CAPITAL. try to us eonly let & const 
console.log("Hello World"+ n);

var a=2.00005; //float or decimal
var b;
console.log(a);
console.log(b);
b=a;
console.log(b);
a-=b; //a=a-b

var m1="I am a \"double quoted\" string inside \"double quotes\" "; // the "\" tells the string is not ended
console.log(m1);
var s1="Noor";
var s2="Deep";
console.log(s1+" "+s2);
var v1= s1.length;
var v2=s1[v1-1] //last char
console.log(v2)
var arrr=["Noordeep",1];
console.log(arrr);
//you can change array values
arrr=["noor"];
console.log(arrr);
//push elements in array
var brrr = ["Jo",2,3,"Hn"];
brrr.push("Cena",["WWW",1])
console.log(brrr);
//pop elemts of array i.e. remove last ele 
console.log("Popped ele:"+ brrr.pop());
//shift removes first ele
var brr=["N",2,"d","e"];
console.log("Shifted ele:"+brr.shift());
console.log(brr);
//unshift adds to the starting of array
brr.unshift("Nscscscsc:");
console.log(brr);
//functions
function funcname(){
    console.log("I am a Function")
}
funcname();//function call
function nextInLine(arr, item)
{
    arr.push(item);
    return arr.shift();
}
var testarr=[1,3,5,7];
//changes array to string
console.log("Before: "+ JSON.stringify(testarr));
//function call
console.log(nextInLine(testarr,9));
console.log("After:"+ JSON.stringify(testarr));
// Strict equality  '==='
/*
3=='3' this is true
3==='3' this is false
*/
// Switch stat
val=4;
answer=""
switch(val)
{
    case 1:
    case 2:
    case 3:
        answer="Noor"
        break;    

    case 4:answer= typeof(answer)
        break;
    default:
        break;    
}
console.log(answer);

// object creation
var obj={'key/property':'value'};

var adog={
    "name":"Tommy",
    "legs":4,
    "tails":1,
    "friends":["No friend!"]
};
// accessing prop using dot not 
var dogname= adog.name;
console.log(dogname);
//accessing prop using bracket when object or prop. have space between them. (i.e.=== 'name dog':'Tommy') 
var legval=adog["tails"];
console.log(legval);
//using variables
var nam="name"; 
var na=adog[nam]
console.log(na);
//changing value in object
adog.name="Mera Dogy";
console.log(adog)
adog['friends']=["Too many Friends!!!"]
// ading new prop to obj
adog.speak="bow-bow";
adog.color="White";
console.log(adog)
//delete prop from obj
delete adog.tails;
console.log(adog)
//we can use objects like in case of switch as objects have key and values which is similar to case and value  
/*
hasOwnProperty:- to check whether the
 object holds a particular prop or not. */

//accessing nested objects 

var mystore={
    "car":{
        "inside":{
            "glove box":"maps",
            "passenger seat":"crumbs"
        },
        "outside":{
            "trunk":"jack"
        }
    }
};
var mn =mystore.car.inside["glove box"];
console.log(mn) 

//Accessing nested arrays
var ab=[
    {
        type:'flower',
        list:["rose","tulip","dandelion"] 
    },
    {
        type:"trees",
        list:["fir","pine","birch"]
    }
];
var tr= ab[1].list[2]; // list only will print whole list
console.log(tr);
// JSON.parse() makes string as object in JS
//JSON.stringify() makes object as a string

//while loop
var awarr=[];
var i=1;
while(i<=10)
{
    awarr.push(i);
    i++;
}
console.log("New array:"+" "+awarr);

//for loop
var dfa=[]
for(var i=1;i<=10;i=i+2)
{
    dfa.push(i);
}
console.log("Odd_eleArray:"+" "+dfa);

// iterating inside array 

var arrrrr=[9,5,10,20];
var tott=0;
for(var i=0;i<arrrrr.length;i++)
{
    tott+=arrrrr[i]
}
console.log(tott);

var dom=[];
var l=23
do{
    dom.push(l);
    l++;
} 
while(l<10)
console.log(l,dom)

// Math.random() generates no. btw 0 and 1 for making upto a particular value multiply it with some range you want.

var rann=Math.random();
console.log(Math.ceil(rann*30));

//parseInt func. returns integer for string
var q="98";
console.log(q+" "+parseInt(q));
//convetrs string into integer and then represens the value using radix i.e. the base and by default its base 10
var q1="101" 
console.log("Using radix:"+q+" "+parseInt(q1,2))

// mutable array

const aqarr=[5,8,6]
function ff(){
    "use strict";
    //aqarr=[8,4,2] is a wrong method of making changes in an array bcoz it is const
    //correct way:
    aqarr[0]=8;
    aqarr[1]=4;
    aqarr[2]=2;
}
ff()    //without ftn call nothing will happen
console.log(aqarr)
// to freeze an object we use Object.freeze(Object_name) i.e. to pevent object mutation(change)

// arrow ftn
//(ftn)=>return stat
const mconcat=(arr1,arr2)=>arr1.concat(arr2);
console.log(mconcat([2],[4,6,8]))

// rest operator i.e. no need to specify the number of arguments
function fun(...input){ 
    let sum = 0; 
    for(let i of input){ 
        sum+=i; 
    } 
    return sum; 
} 
console.log(fun(1,2)); //3 
console.log(fun(1,2,3)); //6 
console.log(fun(1,2,3,4,5)); //15 

//arr=[2,3,5,6,9,6]
//[, ,...arr]
// means that we donot want to do anything with first two array elements and
// the rest of the array elem. would be in arr leaving the first two elem.
// this is destruction of first two array ele using rest op.
// if printing [, ,...arr] it will give [5,6,9,6]

// if we have different items in a ftn and we need only two of them 
//then pass in ftn like>>>function n({max,min})


//string creation using template literals
//${variable_name}

const q222={
    success: ["noor","deep","mom","papa"],
    pass: ["red", "blue", "green"],
    excellent:["orange", "papaya","lemon"]
}

function stl(arr)
{
    const funcaa=[];
    for(let i=0; i<arr.length;i++)
    {
        funcaa.push(`<li class="text warning">${arr[i]}</li>`)
    }
    return funcaa
}

const funcaa=stl(q222.excellent);
console.log(funcaa);

//practice
const praaa= (name, age, gender)=>({name,age,gender}); 
console.log(praaa("noor", 21, "mn"));


function makeClass(){
    // creating a vegetable class
    class Vegetable{
        // creating a constructor       
        constructor(name)
        {
            this.name=name;
        }
    }
    return Vegetable
}
const Vegetable=makeClass();
//object creation 
const carr=new Vegetable("carrot");
console.log(carr.name) 

// /####################################################################
//Important
// _variable-name means it is a private variable & scope is within the block

//Setters & Getters

function makess(){
    class Thermostat{
        constructor(temp)
        {   //private variable
            this._temp=5/9*(temp-32) // celsius 
        }
        //getter
        get temperature(){
            return this._temp;
        }
        set temperature(updatedtemp){
            this._temp=updatedtemp;
        }
    }
    return Thermostat;
}

const Thermostat=makess(); //returns thermostat
const thermos= new Thermostat(200); //object creation 
let temp=thermos.temperature; //getter will get value in Centi
thermos.temperature=26;  // setter value to 26 with updated temp
temp=thermos.temperature;
console.log(temp);

//import & export ftn
// import {capitalftn} from "./str_funct"  //("./" bcoz current directory) then comes filename 
// const cap=capitalftn("noor_deep");
// console.log(cap);
var amigos="Yeah";
console.log(`Welcome and ${amigos}`);