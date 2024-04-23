// 1. Функция `Even`, которая проверяет, является ли число четным:

function Even (number) {     return number % 2===0 
} 
 let num = 5; 
let isNum = Even(num)  
if(isNum) {     console.log(num +"- четное число") 
} else {     console.log(num +"- нечетное число") 
}  

// 2. Подсчет количества одинаковых элементов в массиве `fruits`:

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];  
const count = {};  
fruits.forEach(f => {     
    if(!count[f]) {  
    count[f]=1; } 
    else { 
    count[f] ++; } 
});  
console.log(count);  

// 3. Функция `Message`, которая выводит сообщение с помощью `alert`:

function Message (message) {     alert (message); 
} Message("Privet vsem") 

// 4. Функция `greet`, которая запрашивает имя пользователя и выводит приветственное сообщение:

 function greet (){ 
    let userName = prompt("Введите свое имя");     console.log(`Privet, ${userName}! Dobro pogalovat`); 
}  
greet ();  

// 5. Функция `power`, которая возводит число в заданную степень с помощью `Math.pow`:  

function power (base, exponent) {    return Math.pow(base,exponent) 
}  let result = power(2,3); 
    console.log(result); 