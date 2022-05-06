'use strict'

/* let UserName = "Серёжка"

if (UserName === "Серёжка"){
    document.write("Hello, "+UserName);
} */

/* let UserAge = 20

while (UserAge < 25){
    alert("You are too young, man!")
}UserAge++ */

/* let UserAge = prompt("Сколько Вам лет?","");

let Age = Number(UserAge);

alert(typeof Age); */

/* switch(UserAge){
    case 15:
        alert("Значит Вы в 10 классе");
    break;
    case 16:
        alert("Значит Вы в 11 классе");
    break;
    default:
        alert("Не удаётся выяснить в каком Вы классе!")
    break;
} */

/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }


  if (browser = "Edge"){
      alert("You've got the Edge!")
  }
  else if (browser = Chrome || browser = Firefox || browser = Safari || browser = Opera){
      alert("Okay we support these browsers too")
  }
  else{
    alert( 'We hope that this page looks ok!' );
  } */

/* const number = +prompt('Введите число между 0 и 3', '');

switch (number){
    case 0:
        alert('Вы ввели число 0');
    break;

    case 1:
        alert('Вы ввели число 1');
    break;

    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
    break;
} */

/* function theAppeal (from, text = "Хэллоу!"){
        from = "*" + from + "*";
       alert(from + ": " + text);
}

let from = "Вася";

theAppeal(from); */

/* function sum(a, b){
    return a * b;
}

let resault = sum(135, 167);
alert(resault);


 */

/* function checkAge(age) {
  
    return (age > 18) ? true : confirm('Родители разрешили?');

    return (age > 18) || confirm('Родители разрешили?');
  
}

function min(a, b){
    if (a > b){
        return b;
    }else 
        return a;
}
  */


/* function pow(x, n) {
    let multiple = (n > 1 && Number.isInteger(n)) ? x * n : false;
           
    return multiple;
}

alert(pow(56, 67)); */



/* function tellTheName(tell, sirName){
    return tell + sirName;
}
let tell = prompt("Напиши приветствие", "");
let sirName8 = prompt("Напиши своё имя", "");

alert(tellTheName(tell, sirName));


 */

/* let x = +prompt("Сколько тебе лет", "");

let y = x > 10 ? "Взрослый уже" : alert("Не достаточно взрослый")
    
 */

/* function sayHi(){
    alert("Привет!");
}

let first = sayHi;

first();
sayHi(); */

/* function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk(){
    alert("Вы подтвердили!")
}

function showCancel(){
    alert("Вы отменили!")
}

ask("Вы готовы к этому?", showOk, showCancel); */




/* let ask = (question, yes, no) => {
    return (confirm(question)) ? yes() : no();
  }
  
  ask("Вы согласны?", () => alert("Вы согласились."), () => alert("Вы отменили выполнение.")); */

  
  /* function f(a, b){
      return a + b;
  }

  debugger
  
    alert(typeof f());
   */

/* let age = +prompt("Сколько лет?", "");

let accessAllowed = (age > 18) ? true : false;

let access = (accessAllowed == true) ? "Добрый день!" : "Нет, не пущу!";

alert(access); */

/* let interest = prompt("Какое Ваше увлечение", "");

let shelf = {
    name: "Валерий",
    age: 31,
    [interest]: true,
};

alert(shelf["Дота"]); */

/* function makeUser(name, age) {
    return {
        name: name,
        "how old": age,
    }
}

let user = makeUser("Валерчик", 31);

alert(user["how old"]); */

/* let user = {
    name: "Валерчик",
    age: 31,
    famous: true,
    height: 170,
}

for (let key in user){
    alert(key);
    alert(user[key]);
}

user.width = 90;

alert(user.width);

for (let key in user){
    alert(key);
} */

/* function isEmpty(obj){
    for (let key in obj){
        return true;
    }
    return false;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
 */

/* У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

Если объект salaries пуст, то результат должен быть 0. */

/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  let sum = 0;

for (let key in salaries){
    sum = sum + (salaries[key]);
}
    alert(sum); */

    // до вызова функции

/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == "number") {
        obj[key] *= 2;
      }
    }
  }

multiplyNumeric(menu);

for (let key in menu){
    alert (key);
    alert (menu[key]);
} */


/* let user = {
    name: "Валерчик",
    age: 31,
    sizes: {
        height: 170,
        width: 90,
    }
}

const admin = JSON.parse(JSON.stringify(user));

admin.sizes.height = 180;

alert(user.sizes.height);
alert(admin.sizes.height); */

/* let user = {
    name: "John",
    age: 31,
};

function sayName(){
    alert(this.name);
}

user.abillity = sayName;

user.abillity(); */


/* let calculator = {
  read() {
      this.a = +prompt("Введте первое число","0");
      this.b = +prompt("Введте второе число","0");
  },

  sum() {
      return this.a + this.b;
  },

  mul() {
      return this.a * this.b;
  },

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

/* function User(name) {
    this.userName = name;
    this.isAdmin = false;
}

let user1 = new User("Вася");
let user2 = new User("Валера");

alert(user1.userName);
alert(user2.userName);
alert(user1.isAdmin); */

/* function Calculator(){
    this.read = function(){
        this.a = +prompt("Введите первое значение", "");
        this.b = +prompt("Введите второе значение", "");
    }

    this.sum = function(){    
        this.sum = this.a + this.b;
        return this.sum;
    }

    this.mul = function(){    
        this.mul = this.a * this.b;
        return this.mul;
    }
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

/* function Accumulator (startingValue){
    this.value = startingValue;
    this.read = function(){

        if (this.value < 100) {
        this.value += +prompt("Введите на сколько зарядить аккумулятор", "");
        return this.value;
        }

        else{
            alert("Изините, но аккумулятор и без того заряжен полнсотью")
        }
        
        }
    }

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению

alert("мы добавили заряд и теперь он такой: " + accumulator.value);

accumulator.read(); // прибавит ввод prompt к текущему значению

alert("мы добавили заряд и теперь он такой: " + accumulator.value); // выведет сумму этих значений */

/* let user = {
    name: "John",
    age: 31,
    [Symbol("password")]: "John31"
}

for (let key in user){
    alert(key);
    alert(user[key]);
}

console.log(Object.getOwnPropertySymbols(user)); */

let location1 = 1;
let location2 = 2;
let location3 = 3;

let guess;
let guesses = 0;
let hits = 0;

let isSank = false;

while (isSank == false){
    guess = +prompt("Введите координаты от 1 до 6", "");
    if (guess < 1 || guess > 6){
        alert("Я ж просил ввести от 1 до 6");
    }else if 
        (guess == 4 || guess == 5 || guess == 6){
            alert("Не попал, мимо!");
    }else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3){
            hits = hits + 1;
                if (hits == 3){
                alert("Корабыль затопили","");
                isSank = true;
                }
        }
    }
}


