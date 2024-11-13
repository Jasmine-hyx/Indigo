console.log('this works')
/** WRITE YOUR CODE BELOW EACH COMMENT **/

/* [1] Get the element with an ID of 'title' using the method getElementById, then console.log the result */

let title=document.getElementById('title');

/* [2] Now delete that first element (in the html file), and re-run your code. What changed? */

/* [3] Get the elements with a class of 'pullquote' with getElementsByClassName, then console.log the result */
let pullquote = document.getElementsByClassName('pullquote');
console.log(pullquote);

/* Delete one of the elements with a class of 'pullquote' and refresh the page. Do you get a similar result? */


/* Get the span element using getElementsByTagName, then console.log the result */
let span = document.getElementsByTagName('span');
console.log(span);

/* Add a span element anywhere, and re-run the last piece of code. What's different? */

// 1. Get the element with an ID of 'title' using querySelector
let titleQuery=document.querySelector('#title');
console.log(titleQuery);
// 2. Get the elements with a class of 'pullquote' with querySelector
let pullquoteQuery=document.querySelector('.pullquote')
console.log(pullquoteQuery);
// 3. Try the above prompt with querySelectorAll. What's the difference between what these two methods return?
let pullquoteQueries=document.querySelectorAll('.pullquote');
console.log(pullquoteQueries);
// 4. Get the span element using querySelector
let spanQuery=document.querySelector('span');
console.log('span element',spanQuery);
// 5. Get multiple span elements using querySelectorAll
let spanQueries=document.querySelector('span');
console.log(spanQuery);
// 6. Select only "a" tags *directly inside* of a <p> tag (no grandchildren).