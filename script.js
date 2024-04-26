// // 1. 

// function Even (number) {     return number % 2===0 
// } 
//  let num = 5; 
// let isNum = Even(num)  
// if(isNum) {     console.log(num +"- четное число") 
// } else {     console.log(num +"- нечетное число") 
// }  

// // 2. 

// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];  
// const count = {};  
// fruits.forEach(f => {     
//     if(!count[f]) {  
//     count[f]=1; } 
//     else { 
//     count[f] ++; } 
// });  
// console.log(count);  

// // 3. 

// function Message (message) {     alert (message); 
// } Message("Privet vsem") 

// // 4. 

//  function greet (){ 
//     let userName = prompt("Введите свое имя");     console.log(`Privet, ${userName}! Dobro pogalovat`); 
// }  
// greet ();  

// // 5. 

// function power (base, exponent) {    
//     return Math.pow(base,exponent) 
// }  
// let result = power(2,3); 
//     console.log(result); 

// // 6. 

//  function calculate(){
//     let a=10;
//     let b=20;
//     let result1 =a+b;
//     let result2 =a-b;
//     return { one: result1, two: result2}
//  }
//  const finish = calculate();
//  console.log(finish.one);
//  console.log(finish.two);


// //  7. 

// const calculate1 = () => {
//     const n = 10;
//     const m = 25;

//     return n + m;
// }

// const fat = calculate1 ()
// console.log(fat)

// // 8.

// function calculate2(a,b){
//     const result = a * 5
//     return result * b
// }

// const end = calculate2(456,234)
// console.log(end)

// // 9.

// function changeText(){
//     const button = document.getElementById("кнопка")
//     button.textContent = "Нажал)"
//     console.log("Кнопка нажата")
// }

// 10.

// function getFilms(title = "Все фильмы"){
//     return {
//         filmTitle: title,
//         film: getFilmsArray(),
//     };
// }
// const myFilms = getFilms();

// function getFilmsArray(){
//     const Films = [];
    
//     addNewFilm({ name:'Мстители'},0);
//     addNewFilm({ name:'Мстители-2'},1);
//     addNewFilm({ name:'Мстители-3'},2);
//     addNewFilm({ name:'Мстители-3'});

//     function addNewFilm(film,index) {
//         if(index===undefined){
//             console.log('этот фильм не будет добавленб нет индекса')
//             return;
//         }
//         Films[index] = film;
//     }
//     return Films;
// }
// console.log(myFilms)

// МАССИВЫ.

// 11.

// const myArray=[1,2,3,'apple','banana'];
// const firstElement = myArray[0]; // Доступ к первому элементу
// myArray[2]=10;
// const twoEl = myArray[2];
// const length = myArray.length
// console.log(length)
