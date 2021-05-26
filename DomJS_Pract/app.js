//###############  IMPORTANT #####################################
document.addEventListener('DOMContentLoaded',function(){

// var titles=document.getElementsByClassName('title');
// // console.log(Array.isArray(titles));
// // console.log(Array.isArray(Array.from(titles)));

// //Array.from    ##### array creation
// Array.from(titles).forEach(function(items)
// {
//     console.log(items);
// })

//writing jquery starting with $ and then the css property
//$('#wrapper')
//writing the above in the form of js

const wrap=document.querySelector('#wrapper'); //grabbing an ele or the eference to that ele
console.log(wrap);
//li:nth-child(pseudoclass)
const m=document.querySelector('#book-list li:nth-child(2) .name');
console.log(m);

//querySelector returns only single value
//const m11111=document.querySelector('#book-list li .name');   ->will  return the first value from the list

var b=document.querySelectorAll('#book-list li .name');  //->multiple values
console.log(b);                                      

//array.forEach();   ### calls the ftn for each elem
Array.from(b).forEach(function(bk){
    //console.log(bk)  ### try this also
    console.log(bk.textContent)
   // bk.textContent='test' ##### will change all the li with test

   //bk.textContent +=' (book title)'; //appends the data
});
// to get the html data of a particular thing
const bookl=document.querySelector('#book-list');
//console.log(bookl.innerHTML);  #### check this
//bookl.innerHTML="<h2>SSA!! Bhavnoor Singh</h2>" ### uncomment and check
//bookl.innerHTML +="<p>this is how we append in orig. </p>"

const ban=document.querySelector("#page-banner");
console.log("#page-banner node type is:", ban.nodeType);
console.log("#page-banner node name is:", ban.nodeName);
console.log("#page-banner has children:", ban.hasChildNodes());
//traversing the DOM ele
console.log("the parent node is", bookl.parentNode.parentNode); //bookl-> parentnode and the grandparent node of bookl
 // .parentNode or .parentElement
console.log("child node :", ban.childNodes);  //an upcoming arrow in console tells that it is a new line
console.log("Child elements:", ban.children);

const clonebanner=ban.cloneNode(true);
console.log(clonebanner );

//traversing the sibling elem. ie. elem. at same level
var bolis=document.querySelector('#book-list');
console.log("Nextsibling of book-list:", bolis.nextSibling);
console.log("Next Ele sibling of book-list:", bolis.nextElementSibling);

console.log("previous sibling of book-list:", bolis.previousSibling);
console.log("previous Ele sibling of book-list:", bolis.previousElementSibling);

//################## IMP ###########
bolis.previousElementSibling.querySelector('p').innerHTML +="<br/> Too cool for everyone else!!!";

//creating an event listener

var eve=document.querySelector("#book-list h2");
//see different types of events at w3schools
eve.addEventListener('click', function(e) //e=event occurs
{
    console.log(e.target);
    console.log(e);
})

// deleting something 
var btns=document.querySelectorAll("#book-list .delete");
Array.from(btns).forEach(function(btn)
{
    btn.addEventListener('click',function(e)
    {
        //action occuring on that li
        const lis=e.target.parentElement;
        lis.parentNode.removeChild(lis);
    });
});

//add event to link

// const links=document.querySelector("#page-banner a");
// links.addEventListener('click',function(e)
// {
// e.preventDefault();
// console.log('navigation to',e.target.textContent,'was prevented');
// });

// //Accessing Forms
// console.log(document.forms);
//document.forms[0]  or document.forms["id_name"]


//###########################################################################################################################


    


//Due to Event bubbling we are putting the event diretcly to the ul
// Deleting books
const listes= document.querySelector('#book-list ul');
listes.addEventListener("click",function(e)
{
    if(e.target.className == 'delete')
    {
        const ils=e.target.parentElement;
        //console.log(ils);
        listes.removeChild(ils);    
    }
}
);

//Adding books using the form
const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e)
{   //prevent default event of page refresh
    e.preventDefault();
  //fetching all the values from the form 
    const values = addForm.querySelector('input[type="text"]').value;
//console.log(values);
    //creating an element to insert value to dom 
    const Li= document.createElement('li');   //.createElement('type of ele ')
    const booksName= document.createElement('span');
    const deleteBtn= document.createElement('span');

    // adding content 
    deleteBtn.textContent='delete';
    booksName.textContent= values;//value fetched

    //add classes
    booksName.classList.add('name');
    deleteBtn.classList.add('delete');    //other  way        deleteBtn.setAttribute('class','delete')

    //nesting of children 
    //append to document 
    //order is impo.   #############################
    Li.appendChild(booksName);
    Li.appendChild(deleteBtn);

    //appending list to ul
   listes.appendChild(Li);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$  writing till here will append but text will not be displayed if you dont add content line 127$$$$    
});

//hide books
const hideBooks=document.querySelector('#hide');
hideBooks.addEventListener('change',function(e)
{
    if(hideBooks.checked)
    {
    listes.style.display='none';     
    }
    else{
        listes.style.display='initial';
    }
});

//filter books
const searchBar=document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase();  //done to lower case bcoz if whole in upper then it won't find
    const books = listes.getElementsByTagName('li');
    //array bcoz we want each element
    Array.from(books).forEach(function(bookz){
   //grabbing book title
    const title=bookz.firstElementChild.textContent;
    //converting to lower case
    //if same is not found then value=-1
    if(title.toLowerCase().indexOf(term)!= -1) 
    {
        bookz.style.display='block';
    }   
    else{
        bookz.style.display='none';
    }
    })
});

// //tabbed content
// const tabs=document.querySelector('.tabs');  //reference to tabs i.e. the UL
// const panels=document.querySelectorAll('.panel');  //reference to panels
// tabs.addEventListener('click',function(e){
//     if(e.target.tagName=="LI") //is tag is li   
//     {   //data is data and set is target which we wrote in html
//         const targetPanel=document.querySelector(e.target.dataset.target);
//         // cyle thru panels
//         //not making array bcoz querySelectorAll is making nodeList
//         //using nodelist and performing
//         //for each iteration passing each panel
//         panels.forEach(function(panel){
//             if(panel==targetPanel){
//                 panel.classList.add('active');
//             }
//             else{
//                 panel.classList.remove('active');
//             }
//         });
//     }
// });
})