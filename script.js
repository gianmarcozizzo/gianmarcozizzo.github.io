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

var day_of_the_year = document.getElementById("dayYear")
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

day_year(day_of_the_year)

week(week_number)

countdown(countDownDate1, Natale)
//countdown(countDownDate2, Compleanno)
// countdown(countDownDate8, Trentaanni)
countdown(countDownDate3, Capodanno)

var bar = new ProgressBar.Line(container, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: '#FFEA82',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: { width: '100%', height: '100%' },
    text: {
        style: {
            // Text color.
            // Default: same as stroke color (options.color)
            color: '#999',
            position: 'absolute',
            right: '0',
            top: '30px',
            padding: 0,
            margin: 0,
            transform: null
        },
        autoStyleContainer: false
    },
    from: { color: '#FFEA82' },
    to: { color: '#ED6A5A' },
    step: (state, bar) => {
        bar.setText(Math.round(bar.value() * 100) + ' %');
    }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

