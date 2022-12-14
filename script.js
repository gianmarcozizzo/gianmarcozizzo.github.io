var NATALE = ["Natale", "Dec 25, 2022 00:00:00"];
var COMPLEANNO = ["Compleanno", "Feb 7, 2023 00:00:00"];
var TRENTAANNI = ["Trentaanni", "Feb 7, 2025 00:00:00"];
var CAPODANNO = ["Capodanno", "Jan 1, 2023 00:00:00"];

var DDSG = ["Ddsg", "Jan 24, 2023 00:00:00"];
var DDSF = ["Ddsf", "Feb 14, 2023 00:00:00"];

var AIMLG = ["Aimlg", "Jan 10, 2023 00:00:00"];
var AIMLF = ["Aimlf", "Jan 31, 2023 00:00:00"];

var DMG = ["Dmg", "Jan 25, 2023 00:00:00"];
var DMF = ["Dmf", "Feb 15, 2023 00:00:00"];

var countDownDate1 = new Date(NATALE[1]).getTime();
var countDownDate2 = new Date(COMPLEANNO[1]).getTime();
var countDownDate8 = new Date(TRENTAANNI[1]).getTime();
var countDownDate3 = new Date(CAPODANNO[1]).getTime();

var countDDSG = new Date(DDSG[1]).getTime();
var countDDSF = new Date(DDSF[1]).getTime();

var countAIMLG = new Date(AIMLG[1]).getTime();
var countAIMLF = new Date(AIMLF[1]).getTime();

var countDMG = new Date(DMG[1]).getTime();
var countDMF = new Date(DMF[1]).getTime();

var Natale = document.getElementById(NATALE[0]);
var Compleanno = document.getElementById(COMPLEANNO[0]);
var Trentaanni = document.getElementById(TRENTAANNI[0]);
var Capodanno = document.getElementById(CAPODANNO[0]);

var Ddsg = document.getElementById(DDSG[0]);
var Ddsf = document.getElementById(DDSF[0]);

var Aimlg = document.getElementById(AIMLG[0]);
var Aimlf = document.getElementById(AIMLF[0]);

var Dmg = document.getElementById(DMG[0]);
var Dmf = document.getElementById(DMF[0]);

var day_of_the_year = document.getElementById("dayYear");
var week_number = document.getElementById("weekNum");

function countdown(finish_date, timer) {

    var x = setInterval(function () {

        var now = new Date().getTime();

        var distance = finish_date - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            timer.innerHTML = "ICO Has Ended";
        }
    }, 1000);
}

function day_year(day_of_the_year) {
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    day_of_the_year.innerHTML = day;
}

function week(week_number) {
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil(days / 7);
    week_number.innerHTML = weekNumber;
}

day_year(day_of_the_year);

week(week_number);

countdown(countDownDate1, Natale);
//countdown(countDownDate2, Compleanno)
// countdown(countDownDate8, Trentaanni)
countdown(countDownDate3, Capodanno);
countdown(countDDSG, Ddsg);
countdown(countDDSF, Ddsf);
countdown(countAIMLG, Aimlg);
countdown(countAIMLF, Aimlf);
countdown(countDMG, Dmg);
countdown(countDMF, Dmf);
