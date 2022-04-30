'use strict'

/* let age = prompt("Сколько тебе лет, уважаемый?", "");

let message = (age == null) ? "Всё-таки перезагрузи страницу и укажи возраст!" :
    (age == "") ? "Всё-таки перезагрузи страницу и укажи возраст!" :
    (age < 3) ? "Здравствуй, малыш!" :
    (age < 18) ? "Привет!" :
    (age < 100) ? "Здравствуйте!":
    "Всё-таки нужно ввести";

alert(message); */


/* let TheNameJS = prompt("Какое официальное название JS", "");

if (TheNameJS == "ECMAScript") {
    alert("Правильно!");
} else {
    alert("Неправильно");
}



let value = prompt('Введите число', 0);

if (value > 0) {
    alert(1);
} else if (value < 0) {
    alert(-1);
} else {
    alert(0);
}

let result;

if (a + b < 4) ? "Мало" : "Много";

let message = (login == 'Сотрудник') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';
 */
let hobby = prompt("Какое твоё хобби?", "");

let message = (hobby == "Дота") ? "Отлично, это супер хобби" :
    "Ну... так себе хобби";
alert(message);

let game = prompt("Какое твоё хобби?", "");

if (game == "Дота"){
    alert("Отлично, это супер хобби");
} 
    else {
        alert("Ну... так себе хобби");
}

let time = prompt("Сколько сейчас часов, или может сегодня выходной","");

if (time < 9 || time > 18 ) {
    alert("Магазин закрыт");
}
else {
    alert("Магазин работает");
}
