const myFullName = "John Henrici"; // 11 characters in name...not including space

// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"
const heading = document.querySelector(".header");
heading.innerText = myFullName + "'s Lab 4";

// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
const cont = document.querySelector(".content");

const newp1 = document.createElement("p");
newp1.className = "p1";
cont.appendChild(newp1);

const newp2 = document.createElement("p");
newp2.className = "p2";
cont.appendChild(newp2);

// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).
newp1.innerText += "My full name is " + (myFullName.length - 1) + " characters long.";

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
newp2.innerText += "The third character in my first name is " + myFullName[2].toUpperCase() + ".";

// 6 Add a new line to your second paragraph
newp2.innerText += "\n";

// 7 Return the final three characters of your last name to that new line
const last3 = myFullName.slice(9,12);
newp2.innerText += "The last three characters of my last name are " + last3 + ".";

// 8 Substring your first and last name into two separate variables
const fname = myFullName.slice(0,4);
const lname = myFullName.slice(5,12);

// 9 Add the total length of your first and last names together
const len = fname.length + lname.length;

// 10 Display that total next to your name in your header
heading.innerText += " (" + len + " characters in my name)";