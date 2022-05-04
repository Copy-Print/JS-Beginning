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

let sayHi = function(){
    alert("Привет!");
}

alert( sayHi );
