
const firstname = prompt("Come ti chiami?");
document.getElementById('my-name') .innerHTML = firstname;

const surname = prompt("Quale è il tuo cognome?");
document.getElementById('my-surname') .innerHTML = surname;

const color = prompt("Quale è il tuo colore preferito?");
document.getElementById('my-favorite-color') .innerHTML = color;


/*  let sum  = firstname + " " + surname + color + 21;  */
let sum =`${firstname}${surname}${color}21`; 
document.getElementById('my-password') .innerHTML = sum; 
console.log(`${firstname}${surname}${color}21`); 

