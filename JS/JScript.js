// применён строгий режим
"use strict"

// Комментарий на одну строку Ctrl+/
alert('Hello');

/*Комментарий 
на несколько срок */
[1, 2].forEach(alert);

/* Чтоб закаментить часть кода горячими клавишами Shift+Alt+A */

/* 

let message;
message = "сообщение в присвоенное переменной";
alert (message); 

*/

// Короткая записать присвоения переменной
let message = 'Bye',
    user = 'John',
    age = '31';
alert(user);
alert(age);
alert(message);

// Применяется только последнее присвоеное значение переменной, последнее перебивает все предыдущие

let test;
test = 'chicken';
test = 'rabbit';
alert(test);

// Строка с обратныеми ковычками

let name = "Валерчик";
alert(`Добрый день, ${name}!`);
alert(`Добрый день, число ${3+5}!`);

// Булевый(логический) тип данных true/false

let isGreater = 4>3;
alert(isGreater);