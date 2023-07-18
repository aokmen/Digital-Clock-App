const time = () => {
    const clock = document.querySelector("#clock")
   const apm = document.querySelector("#apm")
    let today = new Date()
    let hr = today.getHours() 
    let min = today.getMinutes()  
    let sec = today.getSeconds()
    let pm = hr < 12 ? `<span> AM </span>` : `<span> PM </span>`
    
    hr = hr > 12 ? hr - 12 : hr


//     ------- Add a zero in front of numbers < 10
    hr = checkTime(hr)
    min = checkTime(min)
    sec = checkTime(sec)


clock.innerHTML = `${hr}:${min}:${sec} `
apm.innerHTML = `${pm}`

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var curWeekDay = days[today.getDay()];
var curDay = today.getDate();
var curMonth = months[today.getMonth()];
var curYear = today.getFullYear();
var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
document.getElementById("date").innerHTML = date;


setTimeout(function(){ time() }, 500);
} 
const checkTime = (i) => { i < 10 ? i = "0" + i : null ; return i }

time()
ntById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
