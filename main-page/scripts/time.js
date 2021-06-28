// let currentTime = new Date();
// console.log(currentTime);
// let currentDate;
// fetch ("http://worldtimeapi.org/api/timezone/Europe/Warsaw")
//     .then(res => res.json())
//     .then(data => currentDate = data.datetime)

// console.log(currentDate);
// let str = toString(currentDate);
// let strdate = str.split(/[:.]/);
// console.log(strdate);
window.onload = setInterval(function() {
    let timeZone = 1;

    let currentTime = new Date();
    let currentHourMinutesSeconds = (currentTime.getHours() - timeZone) + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
    
    document.getElementById('current-time-container').innerHTML = "Current Local Time in Vladgard: " + currentHourMinutesSeconds;

}, 1000);

