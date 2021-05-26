// //var doesnot obey block scope 
// alert('hello, user');
// let res= "h"+ 23;

// console.log(res)

// //template strings
// let likes=40;
// let title="Javascript"
// let author="Book";

// let f=`The blog called ${title} by ${author} has ${likes} likes`;
// console.log(f);

// //creating html tag

// let html=`
// <h1>${title}</h2>
// <p>${author}</p>
// <span>This blog has ${likes} likes.</span>
// `
// let arr=["n", "m"]
// arr.push("s");
// arr.push("q");
// arr.push("e");
// console.log(arr);

// arr.pop();
// console.log(arr);

// //type conversion 
// let m="55";
// console.log(m+10);
// m=Number(m);
// console.log(m+10);

// let we=String(50);
// console.log(we, typeof we)

// let reds=Boolean(99);
// console.log(reds, typeof reds)
// //################# Practice ##################
// // const a=document.querySelectorAll('p')
// // a.forEach(aa =>{
// //     aa.innerText+="Noor";
// //     console.log(aa.innerText);    
// // });

//  const s11=document.querySelector('.error');
// // s11.innerHTML='<h2>This is a new H2</h2>'
// // console.log(s11.innerHTML);

// const people=["noor", "deep", "angad"];

// people.forEach(person => {
//     s11.innerHTML+=`<p>${person}</p>`
// });

// const link=document.querySelector('a');
// console.log(link.getAttribute('href'))
// link.setAttribute('href', 'https://www.cricbuzz.com');
// link.innerText="The Cricbuzz Website"

// const aaa=document.querySelector('.error');
// aaa.setAttribute('class', 'success');

// // this is not a good way
// aaa.setAttribute('style', 'color:green; font-size:20px')

// //below is correct way for styling
// aaa.style.margin="40px";
// aaa.style.fontSize='60px';


const paras=document.querySelectorAll('p');

paras.forEach(pfunc=>{
if(pfunc.textContent.includes('error'))
{
    pfunc.classList.add('error')
}
if(pfunc.textContent.includes('success'))
{
    pfunc.classList.add('success')
}
});


//toggling thru classes

const title=document.querySelector('.title');
//this adds class if not there any test class
title.classList.toggle('test');

//this removes class if toggle has been done before
title.classList.toggle('test');