/////////////////////━━━━━━♡♤♡━━━━━━ Chap 21 to 25  ━━━━━━♡♤♡━━━━━━ /////////////////////////


////           1. Write a program that takes two user inputs for
 ////          first and last name using prompt and merge them in a new
////           variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter Your First Name");
// var secondName = prompt("Enter Your Second Name");
// var greet = "Hello!";
// document.write(firstName+" "+secondName+" "+greet);


////    2. Write a program to take a user input about his favorite mobile phone model. 
////          Find and display the length of user input in your browser


// var mobile = prompt("Enter Your Favorite mobile name");
// var length = mobile.length ;
// document.write("My Favorite Phone is: "+" "+mobile+"<br>");
// document.write("Length of String is: "+" "+length);

     ////           3. Write a program to find the index of letter “n” in the word
      ////          “Pakistani” and display the result in your browser .

//   var  country = "Pakistani";
//   letter  = country.indexOf("n");
//   document.write("Index of N is "+letter)

////              4. Write a program to find the last index of letter “l” in
////              the word “Hello World” and display the result in your browser.

// var  string = "Hello World";
//   letter  = string.lastIndexOf("l");
//   document.write("Index of l is "+letter)

////                5. Write a program to find the character at 3rd index
 ////               in the word “Pakistani” and display the result in your browser.

//  var country = "Pakistani";
//  document.write("String: " +country + "<br>");
//  document.write("Character at Index of 3 is: "+country.charAt(3));

////                 6. Repeat Q1 using string concat() method.

               ////      7. Write a program to replace the “Hyder” to “Islam”
            //// in the word “Hyderabad” and display the result in your browser.

// var name = "Hyderabad"
// var name1 = name.replace("Hyder","Islam")
// document.write(name1);

//           // 8. Write a program to replace all occurrences of “and” in 
//           // the string with “&” and display the result in your browser.

// var name = "Ali and Sami are best friends. They play cricket and football together."
// var name1 = name.replace("and","&");
// document.write(name1);

////         9. Write a program that converts a string “472” to a number 
////          472. Display the values & types in your browser.

// var str = "472"
// var decimal = parseInt(str);
// document.write("Value: "+str+" Type String<br>"+"Value: "+decimal+" Type Number");

////              10. Write a program that takes user input. Convert and show 
////                             the input in capital letters.

// var input = prompt("Enter Any Text");
// input = input.toUpperCase()
// document.write(input);


////              11. Write a program that takes user input.
////              Convert and show the input in title case.

// var text = prompt("Enter city name");
// var first = text.slice(0,1);
// var other = text.slice(1);
// first = first.toUpperCase()
// other = other.toLowerCase()
// var text = first+other;
// document.write(text)

// //       12. Write a program that converts the variable num to string.

// var num = 3536;
// var str = num.toString();
// document.write(str)

////              13. Write a program to take user input and store username 
//                in a variable. If the username contains any special symbol
 ////              among [@ . , !], prompt the user to enter a valid username.

// var user = prompt("Enter Your User Name");
// var checkUser;
// for (var i = 0; i < user.length; i++) {
//     checkUser = user.charCodeAt(i);
//     if(checkUser === 33 && 44 && 46 && 64){

//      alert("Please enter a valid username");
//        break;
//     }
//     else{
//         alert(user+" "+"Welcome")
//         break;
//     }
// }

////  14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
////  Write a program to enable “search by user input” in an array. After searching,
////   prompt the user whether the given item is found in the list or not.

// var search = prompt("Enter Value to search");
// var searchFor =["Cake", "Apple pie", "Cookie", "Chips", "Patties"];
// for(var i = 0; i<searchFor.length;i++){
//    if(searchFor[i] === search){
//        document.write(searchFor[i] + " " + "is Available at index" + " " + i + " " + "in our Bakery")
//        break;
//    }
//    else{
//        document.write("we are Sorry"+" "+search+" "+"is <b>not available</b> in our Bakery")
//        break;
//    }
// }

//// 16. Write a program to convert the following string to an array 
//// using string split method.


// var university = "University of Karachi";
// var check = university.split("")
// document.write(check[0]+"<br>");
// document.write(check[1]+"<br>");
// document.write(check[2]+"<br>");
// document.write(check[3]+"<br>");
// document.write(check[4]+"<br>");
// document.write(check[5]+"<br>");
// document.write(check[6]+"<br>");
// document.write(check[7]+"<br>");
// document.write(check[8]+"<br>");
// document.write(check[9]+"<br>");
// document.write(check[10]+"<br>");
// document.write(check[11]+"<br>");
// document.write(check[12]+"<br>");
// document.write(check[13]+"<br>");
// document.write(check[14]+"<br>");
// document.write(check[15]+"<br>");
// document.write(check[16]+"<br>");
// document.write(check[17]+"<br>");
// document.write(check[18]+"<br>");
// document.write(check[19]+"<br>");
// document.write(check[20]+"<br>");

////  17. Write a program to display the last character of a user input.

// var user = prompt("User Input")
// var userCheck = user.charAt(user.length-1);
// alert("Last Character of user input is"+" "+userCheck);

////   18. You have a string “The quick brown fox jumps over the lazy dog”. 
////   Write a program to count number of occurrences of word “the” in given string.

// var task = "The quick brown fox jumps over the lazy dog";
// var task = task.toLocaleLowerCase();
// var check =(task.match(/the/g)).length;
// document.write("There are"+" "+check+" "+"Occurence of Word 'the'");



/////////////////////━━━━━━♡♤♡━━━━━━ Chap 26 to 30  ━━━━━━♡♤♡━━━━━━ /////////////////////////


////           1. Write a program that takes a positive integer from user & 
////            display the following in your browser. 
////             a. number
 ////            b. round off value of the number          
////             c. floor value of the number 
////             d. ceil value of the number

// var number = +prompt("Enter a positive number");
// document.write("Number is: "+number+"<br>");
// var round = Math.round(number);
// document.write("Round off value is: "+round+"<br>");
// var floor = Math.floor(number);
// document.write( "Floor Value is: "+floor+"<br>");
// var ceil = Math.ceil(number);
// document.write("Ceil value is: "+ceil+"<br>");


////           2. Write a program that takes a negative integer from user & 
////            display the following in your browser. 
////             a. number
 ////            b. round off value of the number          
////             c. floor value of the number 
////             d. ceil value of the number


// var number = +prompt("Enter a negative number");
// document.write("Number is: "+number+"<br>");
// var round = Math.round(number);
// document.write("Round off value is: "+round+"<br>");
// var floor = Math.floor(number);
// document.write( "Floor Value is: "+floor+"<br>");
// var ceil = Math.ceil(number);
// document.write("Ceil value is: "+ceil+"<br>");


////     3. Write a program that displays the absolute value of a number. E.g.
////            absolute value of -4 is 4 & absolute value of 5 is 5

// var negNumber =  +prompt("Enter a negative number");
// var absolute = Math.abs(negNumber);
// document.write("Absolute value is: "+absolute);

////           4. Write a program that simulates a dice using random() method 
////                                   of JS Math class.
 ////                    Display the value of dice in your browser.:

// var dice = Math.random()*6
// var value = Math.round(dice)
// document.write("Random Dice Value is: "+ value);

////      5. Write a program that simulates a coin toss using random() method
////          of JS Math class. Display the value of coin in your browser

// var toss = Math.random() * 2;
// var num = Math.floor(toss);
// if(num === 1){
//     document.write(num+"<br> Random coin value Heads");
// }
// else if(num === 2){
//     document.write(num+"<br> Random coin value Tails");
// }
// else
// document.write("Toss Again Please");


////6. Write a program that shows a random number between 1 and 100 in your browser.

// var random = Math.random()*100
// var value = Math.round(random)
// document.write("Random Value 1 to 100 is: "+ value);


////              7. Write a program that asks the user about his weight. 
////              Parse the user input and display his weight in your browser.


// var weight = prompt("Enter The Weight");
// var w1 =parseFloat(weight);
// document.write("The Weight of user is "+w1+ " Kilograms")


////   8. Write a program that stores a random secret number from 1 to 10 in a variable.
////              Ask the user to input a number between 1 and 10. 
////          If the user input equals the secret number, congratulate the user.


// var secretNumber = 7;
// var numByUser = +prompt("Enter Number between 1 to 10");
// if(secretNumber===numByUser){
//     document.write("Congratulations! you are wins");
// }
// else {
//     document.write("Try Again!");
// }



/////////////////////━━━━━━♡♤♡━━━━━━ Chap 31 to 34  ━━━━━━♡♤♡━━━━━━ /////////////////////////


////          1. Write a program that displays current date and time in
////                                   your browser.

// var date = new Date();
// document.write(date)

////      2. Write a program that alerts the current month in words.
////                          For example December.

// var d = new Date();
// var currentMonth = d.getMonth();
// if (currentMonth === 0){
//     document.write("Current Month is January")
// }
// else if (currentMonth === 1){
//     document.write("Current Month is February")
// }
// else if (currentMonth === 2){
//     document.write("Current Month is March")
// }
// else if (currentMonth === 3){
//     document.write("Current Month is April")
// }
// else if (currentMonth === 4){
//     document.write("Current Month is May")
// }
// else if (currentMonth === 5){
//     document.write("Current Month is June")
// }
// else if (currentMonth === 6){
//     document.write("Current Month is July")
// }
// else if (currentMonth === 7){
//     document.write("Current Month is August")
// }
// else if (currentMonth === 8){
//     document.write("Current Month is September")
// }
// else if (currentMonth === 9){
//     document.write("Current Month is October")
// }
// else if (currentMonth === 10){
//     document.write("Current Month is November")
// }
// else if (currentMonth === 11){
//     document.write("Current Month is December")
// }

////      3. Write a program that alerts the first 3 letters of the current
////      day, for example if today is Sunday then alert will show
////      Sun.

// var date = new Date();
// var date = date.toString()
// var copy = date.slice(0,3);
// document.write("Today Is "+copy)

////        4. Write a program that displays a message “It’s Fun day” if
////                    its Saturday or Sunday today.

// var day = prompt("Enter day name")
// if(day === "saturday" || day === "sunday" ){
//     document.write("It’s Fun day")
// }
// else{
//     document.write(day)
// }

// //       5. Write a program that shows the message “First fifteen
//          days of the month” if the date is less than 16th of the month
//          else shows “Last days of the month”.

// var date = new Date();
// day = date.getDay();
// if(day > 14 ){
//     document.write("First fifteen days of the month");
// }
// else{
//     document.write("Last days of the month");
// }

////          6. Write a program that determines the minutes since
////          midnight, Jan. 1, 1970 and assigns it to a variable that
////          hasn't been declared beforehand. Use any variable you like
////           to represent the Date object.

// var today = new Date();
// var old = new Date ("January 1, 1970");
// var msToday = today.getTime();
// var msOld = old.getTime();
// var diff = msOld - msToday;
// nDiff = diff / (1000 * 60 * 60 * 24);
// document.write("Current Date" +today +"<br>");
// document.write("Elapsed Mili seconds since January " +nDiff +"<br>");
// document.write("Elapsed Minutes since January " +diff);


////       7. Write a program that tests whether it's before noon and
////       alert “Its AM” else “its PM”.

// var my_hour = new Date();
// var hour_name = my_hour.getHours();
// if(hour_name<=12){
// alert("Its AM")
// }
// else{
//     alert("Its PM")
// }


//// 8. Write a program that creates a Date object for the last day
//// of the last month of 2020 and assigns it to variable named
//// laterDate.

// var today = new Date();
// var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()+7, 0);
// alert(lastDayOfMonth);

////9. Create a date object of the starting date of this Ramadan
//// and alert the number of days past since 1st Ramadan?
//// Note: 1st Ramadan was on June 18, 2015

// var date1 = new Date("04/24/2020"); 
// var date2 = new Date("06/20/2020");
// var Difference_In_Time = date2.getTime() - date1.getTime(); 
// var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
// document.write(Difference_In_Days+" "+"Passed Since 1st Ramzan 2020")

//// 10. Write a program that displays in your browser the
//// seconds that elapsed between the reference date and the
//// beginning of 2015.


// var date1 = new Date("26 Dec 2015");
// var date2 = new Date("1 jan, 2015");

// var date1mili =date1.getTime();
// var date2mili = date2.getTime();
// var result = (datemili1-date1mili2)

// document.write("On Reference Date"+date1+"<br>"+result+" second had passed since beginning of 2015");






/////////////////////━━━━━━♡♤♡━━━━━━ Chap 35 to 38  ━━━━━━♡♤♡━━━━━━ /////////////////////////

////         1. Write a function that displays current date & time in your
////                                     browser.

// function currentDate (){
//     date = new Date()
// }
// currentDate()
// document.write(date)

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet(){
//     firstName = "Mohammad";
//     secondName = "Ahmad"
//     document.write(firstName+" "+secondName+" Hello!")
// }
// greet()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function add (a,b,){
//     return a+b
// }
// add ();
// a = +prompt("Enter any Number")
// b = +prompt("Enter 2nd value")
// document.write(a+b)

///////////////////   4. Calculator:
// ////////////////   Write a function that takes three arguments num1, num2
// ////////////////   & operator & compute the desired operation. Return and
////                  show the desired result in your browser.

// function cal(num1,opr,num2){
//     if (opr === "+"){
//         return num1 + num2;
//     }
    
//     else if (opr === "-"){
//         return num1 - num2;
//     }
//     else if (opr === "*"){
//         return num1 * num2;
//     }
//     else if (opr === "/"){
//         return num1 / num2;
//     }
//     else {
//         return "Incorrect Operator"
//     }
// }
// var sub  = cal(5,"-",1)
// var add  = cal(5,"+",3)

// document.write(sub +"<br>")
// document.write(add +"<br>")


///////                5. Write a function that squares its argument.

// function square(sq){
//     return sq;
// }
// sq = square(3)
//  res = sq*sq;
// document.write(res)


///////////          6. Write a function that computes factorial of a number.

// function factorial(n){
//     if(n == 0 || n == 1){
//     return 1;
//     }
//     else{
//     return n * factorial(n-1);
//     }
//     }
//     var n = 3;
//     answer = factorial(n)
//     document.write("The factorial of " + n + " is " + answer);

    /////            7. Write a function that take start and end number as inputs
    ////                    & display counting in your browser.

// function count(start,end){
    
//      start = +prompt("Enter starting num")
// end = +prompt("Enter starting num")
// for(i =start; i<=end; i++)
// document.write(i+"<br>");
// return start,end;
// }
// count()

/////                8. Write a nested function that computes hypotenuse of a
////                  right angle triangle.
////                  Hypotenuse2 = Base2 + Perpendicular2
////                  Take base and perpendicular as inputs.
////                   Outer function : calculateHypotenuse()
////                   Inner function: calculateSquare()


//Task 8

// function hypo (num1,num2){

// var x=(num1*num1);
// var y=(num2*num2);

// var z=(x+y);
// document.write(z);
// }


// hypo(4,4)

    //function pythagorean(sideA, sideB){
 //  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
//}

//             console.log(pythagorean(4, 3));


////          9. Write a function that calculates the area of a rectangle.
// //            A = width * height
////          Pass width and height in following manner:
// //         i. Arguments as value
// //         ii. Arguments as variables

// function area(width,height){
//     document.write(width*height)
//     return width,height;
// }
// area(6,9);

// //           10. Write a JavaScript function that checks whether a passed
////            string is palindrome or not?

// function palinDrome(){
// var word = prompt("Enter name");
// var check = "";
// for (i = word.length - 1; i>=0; i-- ){
//     check += word[i]
// }

// if (word === check){
//     document.write(word +" is palindrome");
// }
// else{
//     document.write(word +" is not palindrome");
// }
// }
// palinDrome()

// //        11. Write a JavaScript function that accepts a string as a
// //        parameter and converts the first letter of each word of the
// //        string in upper case.

////         12. Write a JavaScript function that accepts a string as a
////         parameter and find the longest word within the string.
////         EXAMPLE STRING : 'Web Development Tutorial'
////         EXPECTED OUTPUT : 'Development'


////         13. Write a JavaScript function that accepts two arguments, a
////         string and a letter and the function will count the number of
////         occurrences of the specified letter within the string

// function charCount(str,letter){
//     var letterCount = 0;
//     for(var position = 0; position<str.length; position++){
//        if(str.charAt(position)=== letter){
//            letterCount += 1; 
//        }
//     }
//     return letterCount;
// }
// document.write(charCount("This is Assignment 6","s"));

//// 14. The Geometrizer

// function calcCircumference(radius){
//     var circumference = Math.PI * 2* radius;
//     document.write("The circumference is "+circumference+"<br>");
// }
// function calcArea(radius){
//     var area = Math.PI * radius*radius;
//     document.write("The Area is "+area);
// }
// calcCircumference(50)
// calcArea(40)


