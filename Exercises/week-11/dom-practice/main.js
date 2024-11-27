console.log('this works')

// get the element with the id of 'special'
let myElement = document.getElementById('special');
console.log(myElement); 

// applied the color blue to the text
myElement.style.color = 'blue';
console.log('color of the text', myElement.style.color)
console.log('grab the text:   ', myElement.innerText)
console.log('list the class:   ', myElement.classList)

// change the text
myElement.innerText = 'Hey!'

// step 1. create new element
const listItem = document.createElement('li');

// step 2. add class list
listItem.classList.add('list-item');

// step 2a. add text
listItem.innerText = 'I am a list item';

// step 3. append to DOM
myElement.appendChild(listItem);