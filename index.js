// // #1
// var one = document.getElementById('one');
// var person = 'Sir Zia Khan';
// one.innerHTML = 'Hello, ' + person + ' You are my mentor.';


// =========================================================================================================


// // #2
// var two = document.getElementById('two');
// var two2 = document.getElementById('two2');
// var two3 = document.getElementById('two3');
// var title = document.getElementById('title');
// var name = 'daniyal nagori';
// two.innerHTML = name.toUpperCase();
// two2.innerHTML = name.toLowerCase();
// title.classList.add('capital');
// two3.innerHTML = name;




// // #3
// var three = document.getElementById('three');
// three.innerHTML =
// 'Quaid-e-Azam once said, "I do not believe in taking the right decision, I take a decision and make it right."';




// // #4
// var four = document.getElementById('four');
// var famous_person = 'Quaid-e-Azam';
// var quote = "I do not believe in taking the right decision, I take a decision and make it right.";
// four.innerHTML = famous_person + ' once said, ' + quote;



// // #5
// var five = document.getElementById('five');
// var five2 = document.getElementById('five2');
// var five3 = document.getElementById('five3');
// var five4 = document.getElementById('five4');
// var five_num = document.getElementById('five_num');

// var num1 = 4;
// var num2 = 3;

// var add = num1 + num2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;

// five_num.innerHTML = 'Num One is: ' + num1 + ' Num Two is: ' + num2;
// five.innerHTML = 'Addition is: ' + add
// five2.innerHTML = 'Subtraction is: ' + sub
// five3.innerHTML = 'Multiplication is: ' + mul
// five4.innerHTML = 'Division is: ' + div



// =========================================================================================================

// #6
// var six = document.getElementById('six');

// console.log(5+3);
// console.log(5-3);
// console.log(5*3);
// console.log(5/3);


// 7th question
// var seven_ans = document.getElementById('seven_ans');
// var btn  = document.getElementById('btn');

// var fav_num = 23

// btn.addEventListener('click', ()=>{
//     seven_ans.innerHTML = 'Fav Num is: ' + fav_num;
// })


// =========================================================================================================


// #8
// // Declaring Variable my_name and initializing value My Name
// var my_name = 'M Saad Hassan'
// // Declaring Variable my_birth_date and initializing value My Birth Date
// var my_birth_date = '23 Jan 2002'

// =========================================================================================================

// #9
// var nine_ans = document.getElementById('nine_ans');

// const friends = ['Shehroz','Moiz','Saif','Hamza','Abrar']

// for(i = 0; i < friends.length; i++){
//   console.log(friends[i]);
// }

// =========================================================================================================

// #10
// for(i = 0; i < friends.length; i++){
//   console.log("Hello",friends[i]);
// }

// =========================================================================================================

// #11
// let my_fav_transport = ['Bike','Car']
// let my_wish = ['I would like to have a Honda Bike','I love to buy a brand new Honda Civic']

// for (let i = 0; i < my_fav_transport.length; i++) {
//   console.log(my_fav_transport[i]);
  
// }
// for (let j = 0; j < my_wish.length; j++) {
//   console.log(my_wish[j])
// }

// =========================================================================================================

// #12
// let guest = ['Sir Zia','Sir Daniyal','Miss Hira']

// console.log(guest);

// for(k = 0; k < guest.length; k++) {
//   console.log('Hello '+guest[k]+" I'm having a meetup it'll be a pleasure if you join ")
// }

// console.log(guest[2]+' Cannot make it');

// =========================================================================================================


// #13
// guest[2] = 'Sir Anees Ahmed'

// for(k = 0; k < guest.length; k++) {
//   console.log('Hello '+guest[k]+" I'm having a meetup it'll be a pleasure if you join ")
// }

// console.log(guest[2])


// =========================================================================================================

// #14

// for(k = 0; k < guest.length; k++) {
//   console.log('Hello '+guest[k]+" I found bigger place for meetup ")
// }



// const newGuest = 'Ali'

// const newList = [newGuest].concat(guest);
// console.log(newList);


// function reverse(array,item){
//   let word = Math.ceil(array.length/2)
//   return [].concat(array.slice(0,word - 1), item, array.slice(word - 1));
// }

// console.log(reverse(guest,'Ali'));

// guest.push('Saad')
// console.log(guest)

// for(k = 0; k < guest.length; k++) {
//   console.log('Hello '+guest[k]+" I am inviting you to a grand dinner at FoodInn ")
// }

// #15
// for(k = 0; k < guest.length; k++) {
//   console.log('Hello '+guest[k]+" I Regret that i can only invite two people because of some reasons. ")
// }

// console.log('Hello ' + guest[3] + ' I am sorry i cannot invite you for dinner');
// guest.pop(guest)
// console.log(guest)


// console.log('Hello ' + guest[2] + ' I am sorry i cannot invite you for dinner');
// guest.pop(guest)
// console.log(guest)


// for(k = 0; k < guest.length; k++) {
//   console.log('Hello '+guest[k]+" i want to update you regardind dinner that you're still invited ")
// }


// guest = []
// console.log(guest)


// =========================================================================================================


// #16
// let sixteen_ans = document.getElementById("sixteen_ans");
// let visit = ['Saudia','Turkey','Moricious','Miami','New York']

// console.log(visit);
// // sixteen_ans.innerHTML = visit;


// let copy_visit = visit
// copy_visit.sort();
// console.log(copy_visit);


// let copy_visit2 = copy_visit;
// copy_visit2.reverse();
// console.log(copy_visit2);

// //seventenn question
// const car1 = {type:"Oo", model:"2017", color:"Black"};
// console.log(car1);

// =========================================================================================================

// #17
// Dinner Guests: Working with one of the programs from Exercises 14 through 
// 18, print a message indicating the number of people you are inviting to dinner.

// console.log('Number Of People Coming To Dinner:',guest.length);

// =========================================================================================================

// Think of something you could store in a array. For example, you could make a list of mountains,
//  rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
//   a list containing these items.

// const countries = ['Pakistan','India','Bangladesh','China']
// console.log(countries)

// =========================================================================================================

// #18

// const cities = {name:"Karachi", population:"5 millions", famous:"city of lights"};
// console.log(cities);

// =========================================================================================================


// Q.

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')
// console.log(car != 'honda')

// let game ='pubg'
// console.log(game != 'thrones')
// console.log(game == 'pubg')
// console.log(game.length == 4);

// // false

// console.log(car == 'honda')
// console.log(car != 'subaru')
// console.log(game == 'happy');
// console.log(game.length == 3)
// console.log(game != 'pubg');

// =========================================================================================================

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result
//  for each of the following:


// console.log('Hello' == 'Hellow')
// console.log('Hello' != 'Hello')

// var name = 'JOHN'
// console.log(name.toLowerCase() == 'name')

// num1 = 4;
// num2 = 3;

// console.log(num1 == num2);
// console.log(num2 != num1);
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1 <= num2);
// console.log(num2 >= num1);

// console.log(6 < 10 && 3 > 1);
// console.log	(6 == 5 || 3 == 5)

// const nums = [ 1, 3, 5, 7];
// console.log(nums.includes(3));
// console.log(nums.includes(6));

// =========================================================================================================


// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

// var alien_color = 'green';

// if(alien_color == 'green'){
//     console.log('You just earned 5 points');
// }

// if(alien_color != 'green'){
//     console.log('')
// }


// =========================================================================================================


// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.

// var alien_color2 = 'green';

// if(alien_color2 == 'green'){
//     console.log(' just earned 5 points for shooting the alien');
// }


// var alien_color3 = 'red';

// if(alien_color3 != 'green'){
//     console.log(' player just earned 10 points')
// }


// =========================================================================================================


// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// var alien_color4 = 'green';

// if(alien_color4 == 'green'){
//     console.log(' player earned 5 points');
// }
// else if(alien_color4 == 'yellow'){
//     console.log('player earned 10 points')
// }
// else if(alien_color4 == 'red'){
//     console.log('earned 15 points');
// }


// =========================================================================================================



// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

// const person = 16;

// if(person < 2){
//     console.log('Baby')
// }
// else if( person == 2 || person < 4){
//     console.log('Toddler');
// }
// else if( person == 4 || person < 13){
//     console.log('Kid');
// }
// else if( person == 13 || person < 20){
//     console.log('Teenager');
// }
// else if( person == 20 || person < 65){
//     console.log('Adult');
// }
// else if(person == 65 || person > 65){
//     console.log('Elder')
// }




// =========================================================================================================


// Intentional Error: If you haven’t received an array index error in one of your programs yet,
//  try to make one happen. 

// const arr = [1,'happy',4];

// console.log(arr[-2])


// =========================================================================================================

// Q.

// let favorite_fruits = ["mango", "pineapple", "pomegranate"];

// if (favorite_fruits.includes("apple")) {
//    console.log("You really like apple!");
// }

// if (favorite_fruits.includes("orange")) {
//    console.log("You really like orange!");
// }

// if (favorite_fruits.includes("mango")) {
//    console.log("You really like mango!");
// }

// if (favorite_fruits.includes("banana")) {
//    console.log("You really like banana!");
// }

// if (favorite_fruits.includes("pineapple")) {
//    console.log("You really like pineapple!");
// }


// =========================================================================================================

// Q.

// let users = ["John", "Will", "Admin", "Smith", "Bob", "Elon"];

// users.forEach((user) => {
//    user === "Admin"
//       ? console.log("Hello admin, would you like to see a status report?")
//       : console.log(`Hello ${user}, thank you for logging in again.`);
// });

// =========================================================================================================

// Q.

// let current_users = ["John", "Will", "Emma", "Smith", "Bob", "Elon"];
// let new_users = ["Doe", "Wilson", "Emma", "Arnold", "Bob", "Musk"];

// new_users.forEach((user) => {
//    const result = current_users.findIndex((element) => {
//       return element.toLowerCase() === user.toLowerCase();
//    });

//    result !== -1
//       ? console.log("person will need to enter a new username")
//       : console.log("Username available");
// });


// =========================================================================================================

// Q.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.map((num) => {
//    if ([1, 2, 3].includes(num)) {
//       if (num == 1) {
//          console.log(`${num}st \n`);
//       } else if (num == 2) {
//          console.log(`${num}nd \n`);
//       } else {
//          console.log(`${num}rd \n`);
//       }
//    } else {
//       console.log(`${num}th \n`);
//    }
// });


// =========================================================================================================

// Q.

// let pizzas = ["Margherita", "BBQ Chicken ", "Fajita"];

// pizzas.forEach((pizza) => {
//    console.log(`I like ${pizza} Pizza`);
// });

// console.log(
//    "\nMy favourite food is Pizza. It is a famous Italian food. It is one of the favourite food specially among kids. I love to eat double cheese Pizza.\n"
// );

// console.log("I really love pizza!");

// =========================================================================================================

// Q.

// const make_shirt = (size, text) => {
//    console.log(
//       `We have recieved your Order having text: \n${text}\nsize: ${size}.\nThanks for your Order. `
//    );
// };
// make_shirt('small', "Welcome to Mataverse");


// =========================================================================================================

// Q.

// const make_shirt_2 = (size = "large", text) => {
//    if (size === "large" || size === "medium") {
//       text = "I love JavaScript";
//    }
//    console.log(
//       `We have recieved your Order having text: \n${text}\nsize: ${size}.\nThanks for your Order. `
//    );
// };
// make_shirt_2();
// make_shirt_2("large");
// make_shirt_2("medium");

// =========================================================================================================

// Q.

// const describe_city = (city, country = "Pakistan") => {
//    console.log(`${city} is in ${country}`);
// };
// describe_city("karachi", "Pakistan");
// describe_city("Kabul", "Afghanistan");
// describe_city("lahore");

// =========================================================================================================

// Q.

// const city_country = (city, country = "Pakistan") => {
//    console.log(`${city}, ${country}`);
// };
// city_country("karachi", "Pakistan");
// city_country("Kabul", "Afghanistan");
// city_country("lahore");

// =========================================================================================================

// Q.

// const make_album = (artist, title, numOfTracks = 0) => {
//    const album = {
//       artist: artist,
//       title: title,
//    };
//    if (numOfTracks != 0) {
//       album["Num of Tracks"] = numOfTracks;
//    }

//    return album;
// };

// console.log(make_album("John doe", "Hello World."));
// console.log(make_album("Will Smith", "Once Upon a time."));
// console.log(make_album("Elison Musk", "Nobody Wants."));
// console.log(make_album("Harley Bob", "What is that.", 10));


// =========================================================================================================

// Q.

// let magicians = ["Liam", "Noah", "Oliver", "Elijah", "James", "Lucas"];

// const show_magicians = (list) => {
//    list.map((magician) => console.log(magician));
// };

// show_magicians(magicians);


// =========================================================================================================

// Q.

// let magicians = ["Liam", "Noah", "Oliver", "Elijah", "James", "Lucas"];

// const show_magicians = (list) => {
//    list.map((magician) => console.log(magician));
// };

// const make_great = () => {
//    magicians = magicians.map(
//       (magician) => (magicians[magician] = "Great " + magician)
//    );
//    return magicians;
// };
// show_magicians(magicians);
// console.log(make_great());
// show_magicians(magicians);


// =========================================================================================================

// Q.

// let magiciansCopy = ["Liam", "Noah", "Oliver", "Elijah", "James", "Lucas"];

// const show_magicians = (list) => {
//    list.map((magician) => console.log(magician));
// };

// const make_great = (list) => {
//    let new_magicians = list.map(
//       (magician) => (list[magician] = "Great " + magician)
//    );
//    return new_magicians;
// };

// let new_magicians = make_great(magiciansCopy);

// show_magicians(new_magicians);
// show_magicians(magiciansCopy);



// const make_sandwich = (items) => {
//    console.log("You have ordered the Sandwich which the following items: ");
//    items.map((item, index) => console.log(`${index + 1} : ${item}`));
// };

// make_sandwich(["Extra Cheeze", "Ham & Avocado", "Brie & Bacon"]);
// make_sandwich(["Cheddar & Bacon", "Corned Beef", "Chicken & Sweetcorn"]);






