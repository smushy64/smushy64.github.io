
let status_bar = document.getElementById( "status-bar-time" );
let date       = new Date();

let month = date.getMonth() + 1;
let day   = date.getDate();

let hour  = date.getHours();
let is_pm = hour >= 11;
hour %= 12;
if( hour === 0 ) {
    hour = 12;
}

let minute = date.getMinutes();

let am_pm = "AM";
if( is_pm ) {
    am_pm = "PM";
}

const update_time = function () {
    status_bar.innerHTML =
        String(month).padStart(2,'0') + "/" +
        String(day).padStart(2, '0') + " " +
        String(hour).padStart(2, '0') + ":" + 
        String(minute).padStart(2, '0') + " " + am_pm;
}

update_time();
setInterval( update_time, 6000 );

