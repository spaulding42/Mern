



// // 1)
// console.log(hello);
// var hello = "world";
// // var hello;
// // console.log(hello);  // undefined
// // hello = 'world';

// // 2)

// var needle='haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }
// // var needle = 'haystack';
// // function test()
// //test()
// //function test(){
// //    var needle = 'magnet';
// //    console.log(needle);   // 'magnet'
// //}

// // 3)

// var brendan = 'super cool';
// function print(){
//     brendan = 'only ok';
//     console.log(brendan);
// }
// console.log(brendan)   
// // prints 'super cool' since the print function was never called


// //4)
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

// // var food = 'chicken';
// // console.log(food);  // outputs chicken
// // function eat();
// // eat();
// // function eat(){
// //     var food;
// //     food = 'half-chicken';
// //     console.log(food);   // half chicken
// //     food = 'gone';
    
// // }


// // 5)
// mean();
// console.log(food);
// var mean = function(){
//     food = 'chicken';
//     console.log(food);
//     var food = 'fish';
//     console.log(food);
// }
// console.log(food);
// //going to crash because mean is not declared yet
// //also going to crash because food is not declared outside of the function both above and below it


// // 6)
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//                            // var genre;
// // console.log(genre);     //will log 'undefined'
// // var genre = "disco";    
// // rewind();
// // function rewind() {
// //     genre = "rock";      //var genre = 'rock' 
// //     console.log(genre);   // logs rock
// //     var genre = "r&b";    // genre = 'r&b'
// //     console.log(genre);    // logs 'r&b'
// // }
// // console.log(genre);        // logs 'disco'


// // 7)
// dojo = "san jose";    // var dojo = 'san jose';
// console.log(dojo);    // logs 'san jose'
// learn(); 
// function learn() {
//     dojo = "seattle";     //var dojo = 'seattle'
//     console.log(dojo);    // logs seattle
//     var dojo = "burbank";  // dojo = 'burbank'
//     console.log(dojo);     // logs 'burbank'
// }
// console.log(dojo);         // logs 'san jose'


// // 8)
// console.log(makeDojo("Chicago", 65));   // this one will go through and print the dictionary
// console.log(makeDojo("Berkeley", 0));   // this one will crash because it tried to change a const variable
// function makeDojo(name, students){
//     const dojo = {};     // const dictionary, after you store something in a key you cannot update that key's value
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";    // cant change a const variable after assignemnt
//     }
//     return dojo;
// }

