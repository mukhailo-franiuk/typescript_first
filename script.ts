// Task 01 

let city: string;
city = "Київ";

city = "Львів";

let address: string = city;
console.log(address);

// // Task 02

// let enterNum : any;
// enterNum = prompt('Enter number');
// function checkNumbers(number:number) :void {
//     (number == 0) ? console.log(`Число ${number}`) :
//     (number % 2 == 0 && number != 0)? console.log(`${number} число парне`) : console.log(`${number} число не парне`);
//     ;
// }
// checkNumbers(enterNum);

// Task 03

let count : number = Number.MIN_SAFE_INTEGER;
function max(...arguments : Array<number>) {
  for (let i = 0; i < arguments.length; i++) {
    if (count < arguments[i]) {
      count = arguments[i];
    }
  }
  return console.log(count);
}
// max(5,-2);
max(-5,2, -30, -6,-31)

// Task 04

let getSqrt = (num:any) :void => {
      (isFinite(num) && num > 0) ? console.log(Math.sqrt(num)) :
      (isNaN(num)) ? console.log('Повинно бути числове значення.') :
      (num < 0) ? console.log('Введіть додатнє число.'):
      console.log('Будь ласка, введіть число!');
}
getSqrt('');

// Task 05

let inputBadWorms = document.getElementById('b-worms') as HTMLInputElement;
let addButton = document.getElementById('add') as HTMLInputElement;
let resetButton = document.getElementById('reset') as HTMLInputElement;
let saveBadWorms = document.querySelector('.bad-worms') as HTMLElement;
let arrayStr:Array<string> = [];
addButton.addEventListener('click',function(){
   saveBadWorms.innerHTML += `
   <span> ${inputBadWorms.value} </span>
   `;
   arrayStr.push(inputBadWorms.value);
   inputBadWorms.value = '';
 
})

resetButton.addEventListener('click',function(){
  saveBadWorms.innerHTML = ''
})
let cenzor = document.getElementById('cenz') as HTMLInputElement;
let fieldText = document.getElementById('textarea') as HTMLInputElement;
cenzor.addEventListener('click',function(){
  for(let items of arrayStr){   
let some = fieldText.value.replace(items,"*".repeat(items.length));
fieldText.value = some
  }
})