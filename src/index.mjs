import "./styles.css";

const today = new Date();
const day = today.getDay();
const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(`Today is : ${days[day]}`);
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let prepand = hours>=12? ' PM': ' AM';
hours = (hours >=12)?hours-12: hours;
if (hours===0 && prepand===' PM'){
  if (minutes===0 && seconds===0){
    hours = 12;
    prepand=' Noon';
  } else {
    hours=12;
    prepand=' PM'
  }
}
if (hours===0 && prepand===' AM'){
  if (minutes===0 && seconds===0){
    hours=12;
    prepand=' Mighnight';
  } else {
    hours =12;
    prepand = ' AM';
  }
}
console.log(`Current time: ${hours}${prepand}: ${minutes}: ${seconds}`);

