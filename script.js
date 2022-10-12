var NATALE = ["Natale", "Dec 25, 2022 00:00:00"]
var COMPLEANNO = ["Compleanno", "Feb 7, 2023 00:00:00"]
var TRENTAANNI = ["Trentaanni", "Feb 7, 2025 00:00:00"]
var CAPODANNO = ["Capodanno", "Jan 1, 2023 00:00:00"]

var countDownDate1 = new Date(NATALE[1]).getTime();
var countDownDate2 = new Date(COMPLEANNO[1]).getTime();
var countDownDate8 = new Date(TRENTAANNI[1]).getTime();
var countDownDate3 = new Date(CAPODANNO[1]).getTime();

var Natale = document.getElementById(NATALE[0])
var Compleanno = document.getElementById(COMPLEANNO[0])
var Trentaanni = document.getElementById(TRENTAANNI[0])
var Capodanno = document.getElementById(CAPODANNO[0])

var week_number = document.getElementById("weekNum")

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

function week(week_number) {
    currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil(days / 7);
    week_number.innerHTML = weekNumber;
}

countdown(countDownDate1, Natale)
countdown(countDownDate2, Compleanno)
countdown(countDownDate8, Trentaanni)
countdown(countDownDate3, Capodanno)

week(week_number)
// Display the calculated result      
// document.write("Week number of " + currentDate +
//   " is :   " + weekNumber);
