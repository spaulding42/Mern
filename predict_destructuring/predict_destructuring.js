// 1)
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)      //['Tesla']       that will just grab the first index
console.log(otherRandomCar) //['Mercedes']      that will grab the second index

//2)
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);         // name is undefined... code will crash
console.log(otherName);    //'elon'    this would have worked if the first line didn't break the code


//3)
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);      // '12345'     
console.log(hashedPassword); // will set password too undefined


//4)
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);     //False    checking if first(which is numbers[1]) is equal to second (which is numbers[3])
console.log(first == third);      //True

//5)
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);             // "value"
console.log(secondKey);       // [1,5,1,8,3,3] 
console.log(secondKey[0]);    // 1
console.log(willThisWork);    // 5