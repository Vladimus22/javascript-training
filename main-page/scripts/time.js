let currentTime = new Date();
console.log(currentTime);
let currentDate;
fetch ("http://worldtimeapi.org/api/timezone/Europe/Warsaw")
    .then(res => res.json())
    .then(data => currentDate = data.datetime)

console.log(currentDate);
let str = toString(currentDate);
let strdate = str.split(/[:.]/);
console.log(strdate);