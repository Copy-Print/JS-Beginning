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
    name = 'John',
    age = '31';
alert(name);
alert(age);
alert(message);

// Применяется только последнее присвоеное значение переменной, последнее перебивает все предыдущие

let test;
test = 'chicken';
test = 'rabbit';
alert(test);