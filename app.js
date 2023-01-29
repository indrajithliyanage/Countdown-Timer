const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 11, 31, 08, 00, 00);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];
const hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
minutes = minutes > 9 ? minutes : '0' + minutes;

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const diff = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;
  let days = Math.floor(diff / oneDay);
  let hours = Math.floor((diff % oneDay) / oneHour);
  let minutes = Math.floor(diff % oneHour / oneMin);
  let seconds = Math.floor((diff % oneMin)/oneSec);
  const values = [days,hours,minutes,seconds];

  function format(item){
    if(item < 10){
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach((item,index)=>{
    format(item);
    item.innerHTML = format(values[index]);
  })

  if(diff < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`
  }
}
let countdown = setInterval(getRemainingTime, 1000);