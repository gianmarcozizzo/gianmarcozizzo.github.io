var NATALE = ["Natale", "Dec 25, 2022 00:00:00"]
var COMPLEANNO = ["Compleanno", "Feb 7, 2023 00:00:00"]
var CAPODANNO = ["Capodanno", "Jan 1, 2023 00:00:00"]

var countDownDate1 = new Date(NATALE[1]).getTime();
var countDownDate2 = new Date(COMPLEANNO[1]).getTime();
var countDownDate3 = new Date(CAPODANNO[1]).getTime();

var Natale = document.getElementById("Natale")
var Compleanno = document.getElementById("Compleanno")
var Capodanno = document.getElementById("Capodanno")

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

countdown(countDownDate1, Natale)
countdown(countDownDate2, Compleanno)
countdown(countDownDate3, Capodanno)