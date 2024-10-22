// console.log('i love salma');

// window.alert('this is an alert');
// window.alert('i like pizza');

// document.getElementById("myH1").textContent= 'hallo';
// document.getElementById("myP").textContent='i like pizza';



/////////////////////////////////////////////

// variables

// let x;
// x=100;
// console.log(x);

// let age =25;
// let price =10.99;
// let gpa =2.1;
// let firstName = "salma"

// console.log(`you name is ${firstName}`)
// console.log(typeof firstName)
// console.log(`you are ${age} years old`);
// console.log(`the price is $ ${price}`);


// let online = true;
// let forSale = false;

// console.log(`user is online: ${online}`);
// console.log (`is this car for sale : ${forSale}`);

//////////////////////////////////////////////////////////////////////////////

//العوامل الحسابيه arithmetic operators

// let students = 30;

///// need to add more without add the orignel (+ ,- ,/,*و% ) (** يعني الضرب في اتنين زي الاس  يعني )

// students = students+2;
//////// short cut : students += 2  //// and could be olse : students ++ ;;

// console.log(students);

////////////////////////////////////////////////////////////////////////////////

// user input

//////////////easy way = window prompt /////////////////

// let username;

// username = window.prompt('what is your name?');

// console.log(username);


/////////// profishnal way : html text box///////////

// let username;

// document.getElementById('mysubmit').onclick = function(){
//     username = document.getElementById('mytext').value;
//     document.getElementById('myH1').textContent = `hello ${username}`;

// }

///////////////////////////////////////////////////////////////////////////////////////////////

////////// type conversion (num,string,boolean)/////////////

// let age = window.prompt('how old are you');
// age =Number(age);
// age+=1;///كده string فا هنحوله ل number ///
// console.log(age);


/////////////////////////////////////////////////////////////////////////////////////////////////////

///const هو متغير لا يمكن تغييره او التعديل بعده اذا اردت يعني
// let =20;
// let =50;
// ال let التانيه غيرت الاولي ال const لا 

// const PI = 3.14159;
// let radius;
// let circumference;

// document.getElementById('mysubmit').onclick = function(){
//     radius=document.getElementById('mytext').value;
//     radius=Number(radius);
//     circumference = 2 * PI * radius;
//     radius=document.getElementById('myH4').textContent = circumference + 'cm' ;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////// counter program/////////////

// const decreaseBtn = document.getElementById('btn1');
// const resetBtn = document.getElementById('btn2');
// const increaseBtn = document.getElementById('btn3');
// const countLabel = document.getElementById('countlabel');
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;

// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count=0;
//     countLabel.textContent = count;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////// math//////////////////////

// let x =3.99;
// let y=2;
// let z=5;

// z=Math.round(x);
// يعني تقريب لاقرب عدد صحيح round // يعني دي مجموعها 4
// z=Math.floor(x);
//يعني تقريب لاقرب عدد صحيح للاسفل floor // يعني دي مجموعها 3
// z=Math.ceil(x);
//العكس بتاع floor تقريب للاعلي 

// let max = Math.max(x,y,z)
//يعني اعلي قيمه فيهم كلهم 
//  let min = Math.min(x,y,z)
//يعني اقل قيمه فيهم كلهم 

// console.log(min);

/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////// random num genrator/////////

// let randomNum = Math.floor( Math.random() * 100 ) + 1 ;

// anthor way

// const min =50;
// const max = 100;

// let randomNum = Math.floor( Math.random() * (max - min) ) + min ;

// console.log(randomNum);

///////////////////////////////////////////

// const btn = document.getElementById('myBtn');
// const label1 = document.getElementById('Label1');
// const label2 = document.getElementById('Label2');
// const label3 = document.getElementById('Label3');

// const min = 1 ;
// const max = 6 ;
// let randomNum1 ;
// let randomNum2 ;
// let randomNum3 ;
// btn.onclick = function(){
//     randomNum1 = Math.floor( Math.random() * max ) + min ;
//     randomNum2 = Math.floor( Math.random() * max ) + min ;
//     randomNum3 = Math.floor( Math.random() * max ) + min ;
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////if ///////////////////////

// let age = 13;

// if (age <= 18){
//     console.log('welcome');
// }
// else{
//     console.log(' you are  young'); 
// }
////////////////////////////

// let isStudent = false;

// if (isStudent){
//     console.log('you are a stdunt');
// }
// else{
//     console.log('you are not a stdunt');
// }

////////////////
 
// nasted if

// let age = 18;
// let hasLicense = false;

// if(age >= 16 ){
//     console.log('your old enogh to drive ')

//     if(hasLicense){
//         console.log('you have your licence');
//     }
//     else{
//         console.log('you do not have your licence yet ')
//     }
// }
// else {
//     console.log('you must be 16+ to drive ')
// }

//////////////////////////
// const myText = document.getElementById('myText');
// const mySub = document.getElementById('mySub');
// const resultElement = document.getElementById('resultElement')

// let age;

// mySub.onclick = function(){
    
//     age = myText.value ;
//     age =Number (age);
//     if(age >= 16 ){
//         resultElement.textContent = `your old enogh to drive`;
//     }
//     else {  
//         resultElement.textContent = `you must be 16+ to drive`;
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////checked boxes/////////////////////

// const myCheckbox = document.getElementById('myCheckbox');
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const payPalBtn = document.getElementById('payPalBtn');
// const mySub = document.getElementById('mySub');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');

// mySub.onclick = function(){

//     if(myCheckbox.checked){
//         subResult.textContent = `you are subscribed`;
//     }
//     else{
//         subResult.textContent = `you are NOT subscribed`;
//     }

//     if(visaBtn.checked){
//         paymentResult.textContent = ` you are paying with visa `;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent = ` you are paying with mastercard `;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent = ` you are paying with paypal `;
//     }
//     else{
//         paymentResult.textContent = ` you must select a payment type`;
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// short cut of if statment {}

// let age =25;
// let message = age >= 18 ? 'you are adult' : 'you are young';
// console.log(message);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// switch : many if statment 

// let day = 'salma';
// switch(day){
//     case 1:
//         console.log('it is monday');
//         break;
//     case 2:
//         console.log('it is tuesday');
//         break;   
//     case 3:
//         console.log('it is wednesday');
//         break; 
//     case 4:
//         console.log('it is th');
//         break; 
//     case 5:
//         console.log('it is friday');
//         break;   
//     case 6:
//         console.log('it is satday');
//         break;
//     case 7:
//         console.log('it is sunday');
//         break;   
//     default:
//         console.log(`${day} is not a day , ${day} is Queen`) ;                                  
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// string method

// .charAt(2) لمعرفه الحرف رقم 2 ايه هو
// .indexOf(a) لمعرفه حرف ال a رقمه كام في النص 
// .lastIndexOf(a) هي هي بس معرفه الحرف من ورا 
//  .length() عدد حروف النص 
// .trim() لازاله اي فراغ بعد النص ملوش لازمه 
//.toUpperCase() عشان اخلي الحروف كلها كابتال 
//.toLowerCase() عشان اخلي الحروف كلها سمول
//.repet(3) اعيد النص 3 مرات 
//.startWith(" ") لو عايزين نشوف مثلا النص بتاعي بدأ بمساحه فاضيه ولا لا 
//.endWith(" ") لو عايزين نشوف مثلا النص بتاعي بعده مساحه فاضيه ولا لا 
//.includes(" ") هي هي 
//.replaceAll() لاستبدال كل النصوص مره واحده اللي عايزاها في النص يعني مثلا في مساحه بعد كل حرف عايزه اشيلها مش واحده واحده بقا لا كله 
//.padStart(15) بستخدمها لما اقول لليوزر انا عايزاك تحطلي مثلا 15 حرف بس لا اكتر ولا اقل 
//.padend العكس 

/////////////////////////////////////////////////////////////////////////////////////////////////////

// string slicing 

// const fullName = "salma atef";

// let firstName = fullName.slice(0, 5);
// let lastName = fullName.slice(6 , 10);

// console.log(firstName);
// console.log(lastName);

// const email =  'salmaatef@gmail.com';

// let username = email.slice(0, email.indexOf('@'));
// let extension = email.slice(email.indexOf('@'));

// console.log(username);
// console.log(extension);

/////////////////////////////////////////////////////////////////////////////////////////////////////

// short hand 

// let username = window.prompt('what is your name ?');

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

/////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////// logical operators 
// and = && ده صح وده صح 
// or = || ده او ده اللي صح والباقي كله غلط 
// not = ! ده مش صح 
//////////////

// const temp = 25;

// if(temp > 0 && temp <= 30 ){
//     console.log('the weather is good');
// }
// else{
//     console.log('the weather is bad');

// }

// const temp = 250;
// // اصغر من 0 او اكبر من 30

// if(temp >= 0 && temp > 30 ){
//     console.log('the weather is bad');
// }
// else{
//     console.log('the weather is good ');

// }

// const isSunny= true;

// if(!isSunny ){
//     console.log('it is cludy');
// }
// else{
//     console.log('it is sunny ');

// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

// == بتقارن قميتين بيساوا بعض وخلاص مش مهم هما حروف زي بعض ولا ارقام زي بعص عادي المهم بيساوا بعض
// === مش هينفع يساوا بعض الا لما يكونوا الاتنين من نفس النوع ياسترنج يانمبر 
// != تدينا ترو لو القيمتين مش متساوين
// !== لوز القيمتين والداتا تيب مش متساوين او وزي بعض يدينا ترو 


// const PI =3.14;

// if(PI === '3.14'){
//     console.log("this is pi ");
// }
// else{
//     console.log("this is not pi ");
// }


// const PI = 3.14;

// if(PI !== '3.14'){
//     console.log("this is not pi ");
// }
// else{
//     console.log("this is  pi ");
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//while loop.. infinty loop ////

// let username = "";

// while(username === "" || username === null){
//     username = window.prompt('enter your name');
// }

// console.log(`hello ${username}`);

////////

//يعني علي الاقل نفذ الكود ده الاول وبعد كده اعمل كل اللي تحتيه
// do{
//     username = window.prompt('enter your name');
// }while(username === "" || username === null)

/////////

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`enter your user name`);
//     password = window.prompt(`enter your user password`);

//     if(username === 'myuser' && password === 'mypassoword'){
//         loggedIn = true;
//         console.log(`you are logged in`);
//     }
//     else{
//         console.log(`try agine`);
//     }

// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//for loop/////

// كده هيعد من واحد لعشره .. وال++ كده هيزيد واحد كل مره ولو عايزه اغير i+=2 هيعد اتنين كل مره 
// for (let i = 1; i<=10 ; i++ ){
//     console.log(i);
// }


//count down 

// for (let i = 10; i>0 ; i-- ){
//     console.log(i);
// }

// console.log('happy new year');

//لو عايزه اسكيب رقم في النص 

// for (let i = 1; i<=20 ; i++ ){

//     if(i== 13){
//         continue;
//         //break يعني اوقف اللوب عندها 
//     }
//     else{
//         console.log(i);
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//number gussing game 

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum ;

// let attempts =0;
// let guess ;
// let running = true;

// while (running) {
//     guess = window.prompt(`guess a num between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if (isNaN(guess)) {
//         window.alert('please enter a vaild num');
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert('please enter a vaild num');
//     }
//     else{
//         attempts ++;
//         if(guess < answer){
//             window.alert('too low , try agine');
//         }
//         else if(guess > answer){
//             window.alert('too high , try agine');
//         }
//         else{
//             window.alert(`this is correct , the answer is ${answer} , it take you ${attempts} attemps`);
//             running = false;
//         }
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

// function happyBirthday(username, age){
//     console.log(`Happy birthday to you!`);
//     console.log(`Happy birthday to you!`);
//     console.log(`Happy birthday dear, ${username}`);
//     console.log(`Happy birthday to you!`);
//     console.log(`You are ${age} years old!`);
// }

// function add(x, y){
//     return x + y;
// }

// function subtract(x, y){
//     return x - y;
// }

// function multiply(x, y){
//     return x * y;
// }

// function divide(x, y){
//     return x / y;
// }

// function isEven(number){

//     return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email){

//     if (email.includes('@')){
//         return true;
//     }
//     else{
//         return false;
//     }

//     //short cut
//     return email.includes("@") ? true : false;
// }

// console.log(happyBirthday("BroCode", 25));
// //بنغير هنا براحتنا علي حسب اسم الفانكشن 
// console.log(isValidEmail("Bro@fake.com"));

/////////////////////////////////////////////////////////////////////////////////////////////////////

// variable scope = where a variable is recognized
//                               and accessible (local vs global)            

// جلوبال يعني برا الفانكشن 
// let x = 3; // global scope // غير مرشح للمشاريع الكبيره 

// //لوكال يعني جوا الفانكشن 
// function1();

// function function1(){
//     let x = 1; // local scope
//     console.log(x);
// }

// function function2(){
//     let x = 2; // local scope
//     console.log(x);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//// Temperature conversion program////
// const textBox = document.getElementById('textBox');
// const toFahrenheit = document.getElementById('toFahrenheit');
// const toCelsius = document.getElementById('toCelsius');
// const result = document.getElementById('result');
// let temp;


// function convert(){
//     if(toFahrenheit.checked){
//         temp = Number(textBox.value) ;
//         temp = temp * 9 /5 + 32 ;
//         result.textContent = temp.toFixed(1) + '°F'
//         علامه درجه الحراره window + '0176'
//     }
//     else if(toCelsius.checked){
//         temp = Number(textBox.value) ;
//         temp = (temp - 32 ) * (5/9);
//         result.textContent = temp.toFixed(1) + '°C'
//     }
//     else{
//         result.textContent = 'select a unit'
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

// array = a variable like structure that can 
//        hold more than 1 value

// let fruits = ["apple", "orange", "banana", "coconut"];

// //fruits.push("coconut");  //add an element
// //fruits.pop();            //removes last element
// //fruits.unshift("mango"); //add element to beginning
// //fruits.shift();          //removes element from beginning

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("coconut");

// //console.log(fruits);
// //console.log(fruits[0]);
// //console.log(fruits[1]);
// //console.log(fruits[2]);
// //console.log(fruits[3]);

// //console.log(numOfFruits);
// //console.log(index);

// //fruits.sort();
// //fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////


// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)

// ------------ EXAMPLE 1 ------------
// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(maximum);

// // ------------ EXAMPLE 2 ------------
// let username = "Bro Code";
// let letters = [...username]; 

// console.log(letters);

// // ------------ EXAMPLE 3 ------------
// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "celery", "potatoes"];
// let foods = [...fruits, ...vegetables, "eggs", "milk"];

// console.log(foods);


/////////////////////////////////////////////////////////////////////////////////////////////////////

////dice roller program

// function rollDice(){
//     const numOfDice = document.getElementById('numOfDice').value ;
//     const diceResult = document.getElementById("diceResult");
//     const diceImges = document.getElementById("diceImges");

//     const values = [];
//     const images = [];

//     for(let i = 0 ; i < numOfDice ; i++){
//         const value = Math.floor(Math.random() * 6 ) + 1 ;// عشان الافتراضيه من 0ل 1 فاهنضربها في 6 بيحيث انها تعملي ارقام عشوائيه من 0 ل 5 فاعشان كده زودنا واحد في الاخر 
//         values.push(value);
//         images.push(`<img src="img/${value}.png">`);

//     }
//     diceResult.textContent = `Dice : ${values.join(', ')}`;
//     diceImges.innerHTML = images.join('');
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////

//Random Password Generator

// function generatePassword(length,includeLowercase,includeUppercase,includeNum,includeSymbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars = "0123456789";
//     const symbolChars = "!@#$%^&*()_+-=";

//     let allowedChars = "";
//     let password = "";

//     allowedChars += includeLowercase ? lowercaseChars : "";
//     allowedChars += includeUppercase ? uppercaseChars : "";
//     allowedChars += includeNum ? numberChars : "";
//     allowedChars += includeSymbols ? symbolChars : "";

//     if(length <= 0){
//         return `(password length must be at least 1)`;
//     }    
//     if (allowedChars.length === 0) {
//         return `(At least 1 set of character needs to be selected )`;
//     }
//     for(let i = 0 ; i< length; i++){
//         const randomIndex =Math.floor( Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//     return password;
// }

// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNum = true;
// const includeSymbols = true;


// const password =  generatePassword(passwordLength, includeLowercase,includeUppercase , includeNum ,includeSymbols );
// console.log(`Generated Password : ${password}`);
/////////////////////////////////////////////////////////////////////////////////////////////////////

//!forEach() method :

// let num = [1,2,3,4,5];

// num.forEach(display);

// function display(element){
//     console.log(element);
// }
///////////////

// let num = [1,2,3,4,5];

// num.forEach(cube);

// num.forEach(display);

// function triple(element , index , array){
//     array[index] = element *3 ;

// }
// function douple(element , index , array){
//     array[index] = element *2 ;
// }
// function display(element){
//     console.log(element);
// }
// function square(element , index , array){
//     array[index] = Math.pow(element,2) ; //2x2=4 4x4=16 Square (مربع): هو ضرب العدد في نفسه يعني 
// }
// function cube(element , index , array){
//     array[index] = Math.pow(element,3) ; //3x3x3=27 2x2x2=8 Cube (مكعب): هو ضرب العدد في نفسه ثلاث مرات
// }


///////////////

// let fruit = ['apple' , 'banana' , 'oringe' , 'coconut'] ;

// fruit.forEach(captalize);
// fruit.forEach(display);

// function upperCase(element , index , array){
//     array[index] = element.toUpperCase();
// }
// function lowerCase(element , index , array){
//     array[index] = element.toLowerCase();
// }
// function captalize(element , index , array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1); // عشان اخلي اول حرف كبير 
// }
// function display(element){
//     console.log(element);
    
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//!.map() هي هي زي foreach بس الفرق انك بتنادي عليها في array 

//?const students = ['salma' , 'yassen' , 'ahmed' ,'sara'] ;
//todo const stduntUpper = students.map(upperCase);

// console.log(stduntUpper);


// function upperCase(element) {
//     return element.toUpperCase();
// }

// const dates = ['2024-1-10','2023-2-20','2022-3-30'];
// const formatedData = dates.map(formateDates);
// console.log(formatedData);

// function formateDates(element){
//     const parts = element.split('-');
//     return `${parts[2]}/${parts[1]}/${parts[0]}`;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////


//!.filter() method

// const ages = [10,12,14,16,18,20,25];
// const adult = ages.filter(isAdult);

// console.log(adult);

// function isAdult(element){
//     return element >=18 ;
// }

////////////////?

// const words = ['apple','banana','kiwi','oringe','tometot'];
// const longWord = words.filter(getLongWord);

// console.log(longWord);

// function getLongWord(element){
//     return element.length >= 6 ;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////


//! .reduce() بصي هي حاجه لتجميع التوتال فابتشتغل مثلا 
// (5,10,20,25,30) بتجمعي 5+10 = 15 // 15 +20 =35 ةهكذا 

// const prices = [5,10,15,20,25,30];
// const totel = prices.reduce(getTotelNum);
// console.log(totel.toFixed(2));

// function getTotelNum(accumulator , element){
//     return accumulator + element ;
// }

////////////////?

// const grade = [50,60,70,80,90,95];
// const mixmum = grade.reduce(getMixmumGrade);
// const minmum = grade.reduce(getMinmumGrade);

// console.log(mixmum);
// console.log(minmum);

// function getMixmumGrade(accumulator , element){
//       return Math.max(accumulator , element) ;
//     }
// function getMinmumGrade(accumulator , element){
//         return Math.min(accumulator , element) ;
//       }

/////////////////////////////////////////////////////////////////////////////////////////////////////


//! function expression : used in :1-callbacks 2-higher order function 3-clousuer 4-Event Listeners 

// const number = [1,2,3,4,5,6];

// const squares = number.map(function(element){
//     return Math.pow(element , 2);
// })
// const cube = number.map(function(element){
//     return Math.pow(element , 3);
// })

// //todo (even) يعني اعداد زوجيه يعني تقبل القسمه علي اتنين يعني لو قسمنا علي 2 وطلع عدد صحيح يبقي زوجي 

// const even = number.filter(function(element){
//     return element % 2 === 0;
// })

// //todo (odd) يعني الاعداد الفرديه التي لاتقبل القسمه علي 2 

// const odd = number.filter(function(element){
//     return element % 2 !== 0;
// })

// const total = number.reduce(function(accumulator , element){
//     return accumulator + element ;
// })
// console.log(total);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! arrow function : (permeter) => some code // for simple codes

// const hello = (name , age) => {console.log(`Hello ${name}`) 
//                               console.log(`you are ${age} year old`)};
// hello('salma',23);                          

// const number = [1,2,3,4,5,6];
// const squares = number.map((element) => Math.pow(element , 2));

// console.log(squares);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! object : collection of properties and method -> object = {key:value,
//!                                                           function()};


// const person1 ={
//     firstName: 'salma',
//     lastName: 'Atef',
//     age:23,
//     isEmpolyee : true,
//     sayHallo: function(){console.log('Hi i am salma')}, //function experision
//     eat:function(){console.log('salma eats pasta')},
// }

// const person2 = {
//     firstName: 'sara',
//     lastName: 'Ahmed',
//     age:25,
//     isEmpolyee : false,
//     sayHallo: () => {console.log('Hi i am sara')}, //arrow function
//     eat:() => {console.log('sara eats apple')},
// }

// console.log(person2.firstName);
// console.log(person2.lastName);
// console.log(person2.age);
// console.log(person2.isEmpolyee);
// person2.sayHallo();
// person2.eat();


/////////////////////////////////////////////////////////////////////////////////////////////////////

//! This : reference to the object where this is used : person1.name = this.name .

// const person1 ={
//     firstName: 'salma',
//     lastName: 'Atef',
//     age:23,
//     favEat : 'pasta',
//     sayHallo: function(){console.log(`hi i am ${this.firstName}`)}, //function experision مش بتشتغل مع arrow function 
//     eat:function(){console.log(`salma fav eat is ${this.favEat}`)},
// }
// person1.sayHallo();
// person1.eat();

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! constructor : special method for defining the properties and method of object : يعني عندنا اوبجيكت كتيير لسه هنفضل نعرف واحده واحده لا نجمعهم افضل واسرع 
//? be attantion to the Captal 'C'ar 

// function Car(make,model,year,color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive= function(){console.log(` you drive the ${this.model}`)}
// }

// const car1 = new Car('ford','mus' , '2024' , 'red');
// const car2 = new Car('rangerover','sport' , '2024' , 'white');
// const car3 = new Car('marsedes','MG' , '2023' , 'black');

// console.log(car1);
// console.log(car1.make);
// console.log(car2);
// console.log(car2.model);
// console.log(car3);
// console.log(car2.year);
// car3.drive();

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! class :      (ES6 feature) provides a more structured and cleaner way to 
//!               work with objects compared to traditional constructor functions
//!               ex. static keyword, encapsulation, inheritance

// class Product{
//     constructor(name, price){
//         this.name =name;
//         this.price= price;
//     }
//     displayProduct(){
//         console.log(`Product : ${this.name}`);
//         console.log(`Price : ${this.price.toFixed(2)}`);
//     }
//     calTax(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }

// const salesTax = 0.05;
// const pro1= new Product ('Shirt' , 19.99);
// const pro2= new Product ('pants' , 20.50);
// const pro3= new Product ('underware' , 100.00);

// pro1.displayProduct();
// pro2.displayProduct();
// pro3.displayProduct();

// const totle = pro3.calTax(salesTax);
// console.log(`totle price after taxes is ${totle.toFixed(2)}`);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! inheritance : كلاس بيشيل خواص وصفات في اب وفي ابن عشان الكود ميبقاش في تكرار كتير او اكواد كتيره ملهاش لازمه 
//!   allows a new class to inherit properties and methods 
//!      from an existing class. Helps with code reusability


// class Animal{ // ده الاب الكبير 
//     alive = true ;
//     eat(){
//         console.log(`this ${this.name} is eating`);
//     }
// }
// class Rabbit extends Animal{ //دول الاطفال 
//     name = 'rabbit';
//     run(){
//         console.log(`this ${this.name} is running`);
        
//     }
// }
// class Fish extends Animal{//دول الاطفال 
//     name = 'fish';
//     siwm(){
//         console.log(`this ${this.name} is swimming`);
        
//     }
// }
// class Butterfly extends Animal{//دول الاطفال 
//     name = 'butterfly';
//     fly(){
//         console.log(`this ${this.name} is flying`);
        
//     }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const butterfly = new Butterfly();

// // rabbit.alive = false; // هنا موته عادي 

// console.log(rabbit.alive);
// rabbit.eat();
// fish.eat();
// butterfly.eat();
// rabbit.run();
// fish.siwm();
// butterfly.fly();
// console.log(butterfly.alive);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! super = keyword is used in classes to call the constructor or
//!             access the properties and methods of a parent (superclass)
//!             this = this object
//!             super = the parent

// super يعني use the method or a ver from the parint 

// class Animal{

//     constructor(name ,age){
//         this.name = name;
//         this.age = age ;
//     }
//     move(speed){
//         console.log(`the ${this.name} move at a speed of ${speed} km`);
        
//     }
// }
// class Rabbit extends Animal {

//     constructor(name ,age , runSpeed){
//         // this.name = name;
//         // this.age = age ;

//         //! بدل مانعيد دول في كل الاكواد هنعمل ال keyword :super 

//         super(name , age);
//         this.runSpeed = runSpeed ;
//     }
//     run(){
//         console.log(`this ${this.name} can run`);
//         //! دلوقتي عايزين نورث ال move speed 
//         super.move(this.runSpeed);
//     }
// }
// class Fish extends Animal{

//     constructor(name , age , swimSpeed){
//         super(name , age);
//         this.swimSpeed = swimSpeed ;
//     }
//     swim(){
//         console.log(`this ${this.name} can swim`);
//         super.move(this.swimSpeed);

//     }
// }
// class Butterfly extends Animal{

//     constructor(name , age , flySpeed){
//         super(name , age);
//         this.flySpeed = flySpeed ;
//     }
//     fly(){
//         console.log(`this ${this.name} can fly`);
//         super.move(this.flySpeed);

//     }
// }

// const rabbit = new Rabbit('rabbit' , 2 , 25);
// const fish = new Fish('fish' , 2.5 , 20);
// const butterfly = new Butterfly('butterfly' , 1 , 30);

// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);

// rabbit.run();
// fish.swim();
// butterfly.fly();


/////////////////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById('h1').innerHTML = 'Elzero';
// console.table(['salma','zein','ahmed']); //! Table inside the console 
// console.log('hallo %csalma','color:red'); //! To change Font color in console 

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Get & Set 

// class Person{

//     constructor(firstName , lastName , age){
//         this.firstName = firstName;
//         this.lastName = lastName ; 
//         this.age = age ;
//     }
// }

// const person = new Person(420,55,'pizza');

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

//? كده هو طبع الاسم رقم والرقم اسم وده مينفعش لازم في الاسم نقبل حروف بس وفي الرقم نقبل ارقام بس 

// class Person{

//     constructor(firstName , lastName , age){
//         this.firstName = firstName;
//         this.lastName = lastName ; 
//         this.age = age ;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName ;
//         }
//         else{
//             console.error('last Name Must be a non-empty string')
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName ;
//         }
//         else{
//             console.error('last Name Must be a non-empty string')
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === 'number' && newAge >= 0){
//             this._age = newAge;
//         }
//         else{
//             console.error('age must be a non neg num ')
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName ;
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName ;
//     }
//     get age(){
//         return this._age ;
//     }
// }

// const person = new Person('salma','atef',23);

// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.fullName);
// console.log(person.age);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! destructuring =  extract values from arrays and objects,
//!                              then assign them to variables in a convenient way
//!                              [] = to perform array destructuring
//!                              {} = to perform object destructuring
//! Swap باختصار 

//todo Example 1

// let a = 1;
// let b = 2;

// [a,b] = [b,a];

// console.log(a);
// console.log(b);

//todo Example 2

// const colors = ['red' , 'green' , 'white' ,'blue' , 'purple'];

// [colors[0] , colors[4]] = [colors[4] , colors[0]];

// console.log(colors);

//todo Example 3 // assign array elements to variabes 

// const colors = ['red' , 'green' , 'white' ,'blue' , 'purple'];

// const [firstColor,secondColor,thirdColor, ...extraColor] = colors ;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColor);


//todo Example 4 // extract values from objects 

// const person1 = {
//     firstName :'salma',
//     lastName :'atef',
//     age:23,
//     job: 'frontend developer'
// }
// const person2 = {
//     firstName :'sara',
//     lastName :'ahmed',
//     age:30
// }

// const {firstName,lastName,age,job='Unempolyeed'} = person2 ;

//! ينفع نحط قيمه هنا زي الوظيفه عشان الشخص التاني معندوش وظيفه

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//todo Example 4 // destruture in function parameters 

// function displayPerson({firstName,lastName,age,job='Unempolyeed'}){

//     console.log(`name :${firstName} ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }

// const person1 = {
//     firstName :'salma',
//     lastName :'atef',
//     age:23,
//     job: 'frontend developer'
// }
// const person2 = {
//     firstName :'sara',
//     lastName :'ahmed',
//     age:30
// }

// displayPerson(person2);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Nested objects :

// const person = {
//     fullName : 'salma atef',
//     age: 23,
//     isStudent:false,
//     hobbies:['coding','watching moives','reading'],
//     addres:{
//         street: 'Faisal st.',
//         city:'Giza',
//         country:'Egypt'
//     }
// }

// for(const i in person.addres){
//     console.log(person.addres[i]);
    
// }
// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies[0]);
// console.log(person.addres.country);

//todo Example 2

// class person{
//     constructor(name,age, ...addres){
//         this.name = name;
//         this.age = age ; 
//         this.addres =new Addres(...addres);
//     }
// }
// class Addres{
//     constructor(street,city,country){
//         this.street = street;
//         this.city = city ; 
//         this.country = country ; 

//     }
// }

// const person1 = new person('salma',23,'faisl st','giza','egypt');
// const person2 = new person('yassen',25,'haram st','cairo','egypt');

// console.log(person1.addres.street);
// console.log(person2.addres.street);


/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Array of object 

    // const fruit = [{name:'apple',color:'red',cal:95},
    //                {name:'orange',color:'orange',cal:45},
    //                {name:'banana',color:'yellow',cal:150},
    //                {name:'coconut',color:'white',cal:200}];

    // console.log(fruit[3].color);

    //todo : add 
    // fruit.push({name:'pinaple',color:'yellow',cal:205});

    // console.log(fruit);

    //todo : delete // last object only if you don't minsion 

    // fruit.pop();
    // console.log(fruit);

    //todo : splice // ظهرلنا اول اتنين بس 

    // fruit.splice(1,2);
    // console.log(fruit);

    //todo : loop // forEach()

    // fruit.forEach(fruit => console.log(fruit.name));

    //todo : loop // map()

    // const fruitName =fruit.map(fruit => fruit.name);
    // const fruitColors =fruit.map(fruit => fruit.color);
    // const fruitcal =fruit.map(fruit => fruit.cal);

    // console.log(fruitcal);

    //todo : loop // filter()

    // const yellowFruits = fruit.filter(fruit => fruit.color === 'yellow');
    // const lowCalFruits = fruit.filter(fruit => fruit.cal < 100 );
    // const highCalFruits = fruit.filter(fruit => fruit.cal > 100 );

    // console.log(highCalFruits);

    //todo : loop // reduce()

    // (accumulator ,element)

    //  const maxFruits = fruit.reduce((max , myFruit ) => myFruit.cal > max.cal ? myFruit: max);
    //  const minFruits = fruit.reduce((min , myFruit ) => myFruit.cal < min.cal ? myFruit: min);

    //  console.log(minFruits);

/////////////////////////////////////////////////////////////////////////////////////////////////////

    //! sort() : يعني ترتيب المصفوفه

    // let fruits = ['apple','orage','banana','coconut'];
    // fruits.sort();
    // console.log(fruits);

    // let num = [1,10,20,5,17];
    //num.sort((a , b) => a - b ); //we have to write custom comparison function //! بالترتيب 
    // num.sort((a , b) => b - a); //! بالعكس 
    // console.log(num);

    // const people = [{name:"salma",age:23,gpa:9.5},
    //                 {name:"ahmed",age:28,gpa:3.0},
    //                 {name:"yassen",age:30,gpa:8.0},
    //                 {name:"yara",age:21,gpa:5.5}]

   // people.sort((a,b) => a.age - b.age); //! ترتيبهم من حيث السن الاصغر 
    // people.sort((a,b) => b.age - a.age); //! ترتيبهم من حيث السن الاكبر
   // people.sort((a,b) => a.gpa - b.gpa); //! ترتيبهم من حيث النتيجه الاقل 
   // people.sort((a,b) => b.gpa - a.gpa); //! ترتيبهم من حيث النتيجه الاعلي

     //people.sort((a,b) => a.name.localeCompare(b.name)); //! عشان ارتب string لازم استخدم الطريقه دي 
    // people.sort((a,b) => b.name.localeCompare(a.name)); //! العكس 
    // console.log(people);
                    
/////////////////////////////////////////////////////////////////////////////////////////////////////

 //! Shuffle an array 

//  const cards =['A',2,3,4,5,6,8,9,10,'J','Q','K'];
// Fisher-Yates algorithm

//  function shuffle(array){
//     for(var i = array.length - 1 ; i > 0 ; i--){
//         const random =Math.floor(Math.random() * (i+1)) ;

//         [array[i] , array[random]] = [array[random],array[i]]; //destructuring to swap
//     }
//  }
//  shuffle(cards);
//  console.log(cards);

/////////////////////////////////////////////////////////////////////////////////////////////////////

    //! Date objects :

    //todo تلقائي 

    // const date = new Date();
    // console.log(date);

    // لو عايزه تحطي التاريخ بنفسك 
    //todo // date(year , month ,day,hour,min,sec,ms)

    //const date = new Date(2024,8,20,12,1,5); // months begin with 0,1,2...
        //console.log(date);
       
    //todo  anthor way
    
    // const date = new Date("2024-09-20T12:00:00Z");
    //     console.log(date);


    //  const date = new Date();
    //   //todo // to get a year 
    //  const year = date.getFullYear();
    //   //todo // to get a month
    //  const month = date.getMonth()+1;
    //   //todo // to get a day 
    //  const day = date.getDate(); 
    //     //todo // to get a hour
    // const hour = date.getHours(); 
    //     //todo // to get a min
    // const min = date.getMinutes(); 
    //     //todo // to get a sec
    // const sec = date.getSeconds();
    //     //todo // to get a sec
    // const dayOfWeek = date.getDay();  

   
    //      console.log(year);
    //      console.log(month);
    //      console.log(day);
    //      console.log(hour);
    //      console.log(min);
    //      console.log(sec);
    //      console.log(dayOfWeek);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Closure : function defined inside of anthor function // مفتوحين علي بعض // most use in frame work : like React,Ang

// اي حاجه جوا ال 2 فانكشن بتكون برايفت يعني لو جربت انك تغير اي حاجه خارج الفانكشن مش هتظهر 
//? first Example

// function outer(){

//     var message = 'hello';
//     function inner(){
//         console.log(message);
        
//     }
//     inner(); // we must call it inside the function 
// }
// //todo // if we try to update the message outside the function it will not work
// message = 'bye'; // output = 'nothing happend'

// outer();

//? second Example

//increment : يعني زياده 

// function createCounter(){

//     let count = 0;

//     function increment(){
//         count ++;
//         console.log(`count increased to ${count}`);
//     }
//     //todo // we can add a lot of function 
//     function getCount(){
//         return count ;
//     }
//     return {increment , getCount}; // anthor way to call it 
// }
// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`the current count is ${counter.getCount()}`);

//? third Example

// function creatGame(){

//     let score= 0;

//     function increaseScore(points) {
//         score += points ;
//         console.log(`+${points}points`);
        
//     }
//     function decreaseScore(points) {
//         score -= points ;
//         console.log(`-${points}points`);
//     }
//     function getScore(){
//         return score ;
//     }
//     return {increaseScore ,decreaseScore ,getScore}
// }

// const game = creatGame() ;

// game.increaseScore(5);
// game.increaseScore(4);
// game.decreaseScore(3);
// console.log(`the finel score is ${game.getScore()}`);


/////////////////////////////////////////////////////////////////////////////////////////////////////

//! setTimeout(callback ,delay)

// we can call it by differnt ways

//todo Ex 1

// function sayHello(){
//     window.alert('hello');
// }
// setTimeout(sayHello,3000);

//todo Ex 2

// setTimeout(function(){window.alert('hello')},3000); //! annmiouns function

//todo Ex 3

// setTimeout(() => window.alert('hello') , 3000);

//todo //clearTimeout(timeout Id) = can cancel a timeout before it triggers 

// const timeoutId = setTimeout(() => window.alert('hello') , 3000);

// clearTimeout(timeoutId); 

//todo button to set time 

// let timeoutId;

// function startTimer(){
//     setTimeout( () => window.alert('hello'),3000);
//     console.log('starter');
    
// }
// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log('cleared');
    
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Digital Clock program :

// function updateClock(){
//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours>=12?'PM':'AM';
//     hours = hours % 12 || 12;
//     //! السطر ده عشان لما ضفنا AM /PM شال الصفر بتاع الساعه 
//     hours = hours.toString().padStart(2,0)
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);

//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById('clock').textContent = timeString ;
// }
// updateClock();
// setInterval(updateClock,1000);

//? padstart دي عشان ميبقاش مثلا 8 بس لا 08 
//? meridiem = am + pm 

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! stopwatch program

// const display = document.getElementById("display");
// let timer = null ;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapsedTime ; 
//         timer = setInterval(update,10);
//         isRunning = true;        
//     }
    
// }

// function stop(){
    
//     if(isRunning){
//         clearInterval(timer);
//         elapsedTime = Date.now() - startTime;
//         isRunning = false ;
//     }
// }

// function reset(){

//     clearInterval(timer);
//     startTime = 0;
//     elapsedTime = 0;
//     isRunning = false;
//     display.textContent = '00:00:00:00';
// }

// function update(){
//     const currentTime = Date.now();
//     elapsedTime = currentTime - startTime;

//     let hours = Math.floor(elapsedTime / (1000 * 60 * 60)) ;
//     let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
//     let seconds = Math.floor(elapsedTime / 1000 % 60);
//     let milisec = Math.floor(elapsedTime % 1000 / 10);

//     hours = String(hours).padStart(2,'0');
//     minutes = String(minutes).padStart(2,'0');
//     seconds = String(seconds).padStart(2,'0');
//     milisec = String(milisec).padStart(2,'0');


//     display.textContent = `${hours}:${minutes}:${seconds}:${milisec}`;
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! ES6 Modules : ممكن نعمل فايل جافا جديد ونحط فيه كل حاجه ونعمله اكسبورت ونيجي علي الفايل بتاعنا ونعمله امبورت ونشتغل عادي خااااالص 


// import {PI,getCircumference,getArea,getValume} from './mathUtil.js';

// console.log(PI);

// const circumference = getCircumference(10);

// const area = getArea(10);

// const volume = getValume(10);

// console.log(`${circumference.toFixed(2)}cm`);

// console.log(`${area.toFixed(2)} cm^2`);

// console.log(`${volume.toFixed(2)} cm^3`);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! synchronous : he print the code line by line : wait the operation to complete

// console.log('task 1');
// console.log('task 2');
// console.log('task 3');


//! asynchronous : LIKE A time triveler can trivel out of time but the world still work 
//! work with (input , output operation , network requests , fetching data)
//! handeld with : callback , promises , async/await 

// setTimeout(() => console.log('task 1') , 3000); //last one log 

// console.log('task 2');
// console.log('task 3');
// console.log('task 4');

// the right way 

// function func1(callback){
//     setTimeout(() => {console.log('task 1');
//                             callback()} , 3000); //last one log //output :2,3,4,1
// }
// function func2(){
//     console.log('task 2');
//     console.log('task 3');
//     console.log('task 4');
// }

// func1(func2); //output :1,2,3,4


/////////////////////////////////////////////////////////////////////////////////////////////////////


//! Error handling : object created to repesent a problem 
// network errors
// promise rejection
// security errors 

//! how to solve it, By:

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (optional) Always executes. Used mostly for clean up
//                     ex. close files, close connections, release resources


// console.log('hello');
// console.log('you have reached the end!');

//! اي كود خايفه منه يعمل ايرور ويبوظلك البرنامج حطيه في التراي والكاتش والفاينل والبرنامج كله هيشتغل طبيعي 

// try{
//     const dividend = Number(window.prompt("Enter a dividend: "));
//     const divisor = Number(window.prompt("Enter a divisor: "));
    
//     if(divisor == 0){
//         throw new Error("You can't divide by zero!");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Values must be a number");
//     }

//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     console.log("This always executes");
// }

// console.log("You have reached the end!");

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Dom : Docment Object Module 

// const userName = ' salma atef';

// const welcomeMg = document.getElementById('welcome');

// welcomeMg.textContent += userName === "" ? ' guest' : userName ; 

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! element selectors = Methods used to target and manipulate HTML elements 
//!                                     They allow you to select one or multiple HTML elements
//!                                    from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()           // HTML COLLECTION
// 3. document.getElementsByTagName()           // HTML COLLECTION
// 4. document.querySelector()                  // FIRST ELEMENT OR NULL // بيطلع element واحد بس 
// 5. document.querySelectorAll()               // NODELIST


//! ---------- getElementById() ----------

// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

//! ---------- getElementsByClassName() ----------

// const fruits = document.getElementsByClassName("fruits");

// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

//! ---------- getElementsByTagName() ----------

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

//! for loop :

// for (let h4Element of h4Element){
//      h4Element.style.backgroundColor = "yellow";
// }
// for (let h4Element of h4Element){
//     liElement.style.backgroundColor = "lightgreen";
// }

//! forEach method :

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

//! ---------- querySelector() ----------

// const element = document.querySelector("li");

// element.style.backgroundColor = "yellow";

//! ---------- querySelectorAll() ----------

// const foods = document.querySelectorAll("li");

// foods.forEach(food => {
//     food.style.backgroundColor = "yellow"
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////
                   
//! Dom Navigation 

//.firstElementChild 
//.lastElementChild 
//.nextElementSibling
//.perviousElementSibling
//.parantElement
//.children

//!            firstElementChild  => by ID 

// const element = document.getElementById('fruits');
// const firstChild = element.firstElementChild ; 
// firstChild.style.backgroundColor = 'yellow';


//!    firstElementChild  => by QuerySelector : we used forEach method because query send back nodelist .

// const ulElement = document.querySelectorAll('ul');

// ulElement.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild ; 
//     firstChild.style.backgroundColor = 'yellow';
// })


//!           lastElementChild => by ID 

//  const element = document.getElementById('fruits');
//  const lastChild = element.lastElementChild ; 
//  lastChild.style.backgroundColor = 'yellow';

//!     lastElementChild  => by QuerySelector

// const ulElement = document.querySelectorAll('ul');

// ulElement.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild; 
//     lastChild.style.backgroundColor = 'yellow';
// })

//!    nextElementSibling => if you choose element with id it will choose the next element in same div

//  const element = document.getElementById('apple');
//  const nextSibling = element.nextElementSibling ; 
//  nextSibling.style.backgroundColor = 'yellow';

//!    perviousElementSibling => if you choose element with id it will choose the pervious element in same div

//  const element = document.getElementById('oringe');
//  const perviousSibling = element.previousElementSibling ; 
//  perviousSibling.style.backgroundColor = 'yellow';

//!   parantElement => it select the whole div parant and childern 

//  const element = document.getElementById('oringe');
//  const parant = element.parentElement ; 
//  parant.style.backgroundColor = 'yellow';

//!  children => it get HtmlCollection if we log it so we must change it 


//  const element = document.getElementById('fruits');
//  const childern = element.children ; 
//  console.log(childern);

// Array.from(childern).forEach(child => {
//     child.style.backgroundColor = 'yellow';
// })

// //! also we can do it like :
//  childern[2].style.backgroundColor = 'yellow';

/////////////////////////////////////////////////////////////////////////////////////////////////////

//! Add & change HTML 
// ---------- EXAMPLE 1 h1 ELEMENT ----------

//!  STEP 1 CREATE THE ELEMENT

// const newH1 = document.createElement("h1");

//!  STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

//! STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box4 = document.getElementById("box4");
// document.body.insertBefore(newH1, box4);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

//!  REMOVE HTML ELEMENT

// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);






