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

function showMessage(message) {
    message = 'Sorry, unfortunately I have not completed this page. Please, come back soon.';
    return alert(message);
}

//Working but GitHub pages block http unsecurity content
// let getTime;

// fetch ('http://api.geonames.org/timezoneJSON?formatted=true&lat=52.13&lng=21.08&username=vladimus&style=full')
//     .then(res => res.json())
//     .then(data => getTime = data.time)

// fetch ('http://api.geonames.org/timezoneJSON?formatted=true&lat=52.13&lng=21.08&username=vladimus&style=full')
//     .then(res => res.json())
//     .then(data2 => console.log(data2))

// window.onload = setInterval(function () {
//     let currentTime = getTime;
//     let message = 'Current Local Time in Vladgard: ';
//     document.getElementById('current-time-container').innerHTML = message + currentTime ;
// }, 1000);



