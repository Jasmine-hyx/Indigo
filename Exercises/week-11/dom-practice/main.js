console.log("This works");

let myElement = document.getElementById('special');
console.log(myElement);

myElement.style.color = 'blue';
console.log('Color of the text:', myElement.style.color);

myElement.innerHTML='<h2>Hey!</h2>'

//create a new element 
const listItem=document.createElement('li');

listItem.classList.add('list-item');

listItem.innerText='I am a list item';

myElement.appendChild(listItem);