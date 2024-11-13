console.log("This works.")

/*

    ----------------------------------------
    PART 1
    ----------------------------------------
    1. Create three variables called noun verb and adjective and store one of each type.
    2. Choose a short one sentence poem that includes the following variables:
         —  Sample sentence: `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    3. Create five different versions of this sentence with different variables.
    4. Write it to the browser window using document.write()

    ----------------------------------------
    PART 2
    ----------------------------------------
    1. Make Make a list of at least five words for each variable:
        — Sample array: let nouns = [ ‘heart’, ‘rainbow’, ‘ocean’];.
    2. Create a randomly generated sentence by using the variables.
        — Sample sentence: `My ${noun} leaps ${adjective} when I ${verb} a rainbow in the sky:`
    3. Write it to the browser window using document.write()

    Hint: Formula for selecting a random element from an array
    Article: https://css-tricks.com/snippets/javascript/select-random-item-array/
    let item = arrayName[Math.floor(Math.random()*arrayName.length)];

    let nouns = ["heart", "rainbow", "ocean"];
    let verbs = ["look", "make", "continue"];
    let adjectives = ["good", "different", "possible"];

*/

let noun=`heart`;
let adjective=`good`;
let verb="look";

let sentence=`My ${noun} ${verb} brightly at the ${adjective} sky.`;
console.log(sentence)
document.write(sentence)

let nouns = ["heart", "rainbow", "ocean"];
let verbs = ["look", "make", "continue"];
let adjectives = ["good", "different", "possible"];

let randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
console.log(randomNoun);

let randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
console.log(randomVerb);

let randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
console.log(randomAdjective);

let randomSentence = `My ${randomNoun} ${randomVerb} brightly at the ${randomAdjective} sky.`;
console.log(randomSentence);
document.write(randomSentence);