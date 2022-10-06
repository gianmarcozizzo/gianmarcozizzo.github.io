var NATALE = ["Natale", "Dec 25, 2022 00:00:00"]
var COMPLEANNO = ["Compleanno", "Feb 7, 2023 00:00:00"]
var 30_ANNI = ["30_anni", "Feb 7, 2025 00:00:00"]
var CAPODANNO = ["Capodanno", "Jan 1, 2023 00:00:00"]
var COMPLEANNO_VECIENZO = ["Vincenzo", "Jun 11, 2023 00:00:00"]
var COMPLEANNO_SPAGNOLO = ["Spagnolo", "May 10, 2023 00:00:00"]
var COMPLEANNO_PEDONE = ["Pedone", "Jun 14, 2023 00:00:00"]
var COMPLEANNO_GIARDINO = ["Giardino", "May 9, 2023 00: 00: 00"]

var countDownDate1 = new Date(NATALE[1]).getTime();
var countDownDate2 = new Date(COMPLEANNO[1]).getTime();
var countDownDate8 = new Date(30_ANNI[1]).getTime();
var countDownDate3 = new Date(CAPODANNO[1]).getTime();

var countDownDate4 = new Date(COMPLEANNO_VECIENZO[1]).getTime();
var countDownDate5 = new Date(COMPLEANNO_SPAGNOLO[1]).getTime();
var countDownDate6 = new Date(COMPLEANNO_PEDONE[1]).getTime();
var countDownDate7 = new Date(COMPLEANNO_GIARDINO[1]).getTime();


var Natale = document.getElementById(NATALE[0])
var Compleanno = document.getElementById(COMPLEANNO[0])
var 30_anni = document.getElementById(30_ANNI[0])
var Capodanno = document.getElementById(CAPODANNO[0])

var Vincenzo = document.getElementById(COMPLEANNO_VECIENZO[0])
var Spagnolo = document.getElementById(COMPLEANNO_SPAGNOLO[0])
var Pedone = document.getElementById(COMPLEANNO_PEDONE[0])
var Giardino = document.getElementById(COMPLEANNO_GIARDINO[0])

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
countdown(countDownDate8, 30_anni)
countdown(countDownDate3, Capodanno)

countdown(countDownDate4, Vincenzo)
countdown(countDownDate5, Spagnolo)
countdown(countDownDate6, Pedone)
countdown(countDownDate7, Giardino)
