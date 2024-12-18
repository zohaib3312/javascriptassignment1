
//********** Chapter: 1 Alerts **************** 

// Question 1 Write a script to greet your website visitor using JS alert box.

// Answer 

// alert("Greeting");

// Question 2 Write a script to display following message on your web page:

// Answer 
// alert("Error! Please enter a valid password.");

// Question 3 Write a script to display following message on your web page: (Hint : Use line break)

// Answer 
// alert("Welcome to JS Land...  + "<br>"  Happy Codding!")

// Question 4 Write a script to display following messages in sequence:

// Answer 

// alert("welcome to JS Land...");
// alert("Happy Coding!")

// Question 5 Generate the following message through browser’s developer console:

// Answer 

// console.log(alert("Hello... I can run JS through my web browser's console")); 

// Question 6 Make use of alerts in your new/existing HTML & CSS project.

// Answer 

// function showAlert() {
//     alert("This is a simple JavaScript alert!");
// }

// Question 7 Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)

// ALERTS | JAVASCRIPT

// Page 3 of 3

// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// Answer 

// done in html page

//********** Chapter: 2 variables for string  **************** 


// Question 1 Declare a variable called username.

// Answer 

// var username; 

// Question 2 Declare a variable called myName & assign to it a string that represents your Full Name.

// Answer 

// var myName = "Zohaib Akhtar";

// Question 3 Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

// Answer

// var message = "Hello Word";
// alert(message);

// Question 4 Write a script to save student’s bio data in JS variables and show the data in alert boxes.

// Answer 

// var studentName = "Zohaib Akthar";
// var studentAge = 23;
// var course = "Web & Mobile application Development"

// alert(studentName);
// alert(studentAge);
// alert(course);


// Question 5 Write a script to display the following alert using one JS variable:

// Answer

//  let word = "PIZZA";
//  let pattern = "";

//  for (let i = word.length; i > 0; i--) {
//      pattern += word.slice(0, i) + "\n";
//  }

//  alert(pattern);

// QUESTION 6 Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

// Answer

// var email = "za809475@gmail.com";
// alert("My Email address is" +  " "  + email ); 


// question 7 Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:


// var book = "A smarter way to learn javascript";
// alert("i am trying to learn from the book" + " " + book );


// question 8 Write a script to display this in browser through JS

// Answer 

// document.write("yah! i can write HTML content through javascript")

// question 9 Store following string in a variable and show in alert and
// browser through JS

// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”

// Answer

// alert("  ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬  "); 


// ****************** Chapter 3 VARIABLES FOR NUMBERS **********************

// Question 1 Declare a variable called age & assign to it your age. Show
// your age in an alert box.

// Answer 

// let age = 24;

// alert( "I am "  + age + " year old" );

// question 2 Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

// Answer

// let visitor;
// if (localStorage.getItem('visitorCount')) {
//     visitor = parseInt(localStorage.getItem('visitorCount')) + 1;
// } else {

//     visitor = 1;
// }

// localStorage.setItem('visitorCount', visitor);
// alert(`You have visited this site ${visitor} times.`);

// question  3 Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

// Answer 

// let birthyear = 2001;
// document.write("my birth year is" + " " + birthyear + "<br>" + "Date type of my declared variable is number" ); 


// Question 4  A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.


// Answer 

// let visitorsName = "John Doe";
// let productTitle = "T-shirt(s)";
// let productQuentity = 5;

// document.write(visitorsName + " "   +   "ordered" + " " + productQuentity + productTitle + " "  + "on XYZ Clothing store");


