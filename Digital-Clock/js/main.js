// ----------------getting elements----------------
let hours = document.getElementById("hours");
let seconds = document.getElementById("secs");
let minutes = document.getElementById("mins");
let ampm = document.getElementById("ampm");
let hho = document.getElementById("hh");
let mmo = document.getElementById("mm");
let sso = document.getElementById("ss");
// -----------getting the dots -----------
let hr_dot = document.querySelector(".hr_dot");
let min_dot = document.querySelector(".min_dot");
let sec_dot = document.querySelector(".sec_dot");

// --------------setting the value to document--------------------
setInterval(() => {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    let am = hh >= 12 ? "PM" : "AM";

    //converting the 24hrs to 12hrs
    if (hh > 12) hh -= 12;

    //adding zero before single digital number
    hh = hh < 10 ? "0" + hh : hh;
    mm = mm < 10 ? "0" + mm : mm;
    ss = ss < 10 ? "0" + ss : ss;

    hours.innerHTML = hh + "<br><span>Hours</span>";
    minutes.innerHTML = mm + "<br><span>Minutes</span>";
    seconds.innerHTML = ss + "<br><span>Seconds</span>";
    ampm.innerHTML = am;

    //12 hrs formate
    hho.style.strokeDashoffset = 440 - (440 * hh) / 12;
    // 1 hour = 60 minutes
    mmo.style.strokeDashoffset = 440 - (440 * mm) / 60;
    // 1 minute = 60 seconds
    sso.style.strokeDashoffset = 440 - (440 * ss) / 60;

    hr_dot.style.transform = `rotate(${hh * 30}deg)`; // 360/12=30
    min_dot.style.transform = `rotate(${mm * 6}deg)`; // 360 / 60 = 6;
    sec_dot.style.transform = `rotate(${ss * 6}deg)`; // 360 / 60 = 6;
});
