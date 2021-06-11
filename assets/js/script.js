// Header Time
var today = moment().format('[Today is] dddd MMMM Do, YYYY');
var time = moment().format('[ and the time is] hh:mm a')
$(".current-day").text(today + time);

// Time Variables and the current hour in military format
var currentHour = moment().format('kk')
var nineHour = 9
var tenHour = 10
var elevenHour = 11
var twelveHour = 12
var oneHour = 13
var twoHour = 14
var threeHour = 15
var fourHour = 16
var fiveHour = 17

// Color Functions (Past-gray, Present-red, Future-green)
// 9am Color Change Logic******
function nineClassPast() {
    var xNine = document.getElementById("input-9am");
    xNine.className += " past";
}
function nineClassPresent() {
    var x = document.getElementById("input-9am");
    x.className += " present";
}
function nineClassFuture() {
    var x = document.getElementById("input-9am");
    x.className += " future";
}

if (currentHour == nineHour) {
    nineClassPresent();
} else if (currentHour < nineHour) {
    nineClassFuture();
} else {
    nineClassPast();
}

// 10am Color Change Logic
function tenClassPast() {
    var ten = document.getElementById("input-10am");
    ten.className += " past";
}
function tenClassPresent() {
    var ten = document.getElementById("input-10am");
    ten.className += " present";
}
function tenClassFuture() {
    var ten = document.getElementById("input-10am");
    ten.className += " future";
}
if (currentHour < tenHour) {
    tenClassFuture();
} else if (currentHour == tenHour) {
    tenClassPresent();
} else {
    tenClassPast();
}

// 11am Color Change Logic
function elevenClassPast() {
    var eleven = document.getElementById("input-11am");
    eleven.className += " past";
}
function elevenClassPresent() {
    var eleven = document.getElementById("input-11am");
    eleven.className += " present";
}
function elevenClassFuture() {
    var eleven = document.getElementById("input-11am");
    eleven.className += " future";
}

if (currentHour < elevenHour) {
    elevenClassFuture();
} else if (currentHour == elevenHour) {
    elevenClassPresent();
} else {
    elevenClassPast();
}

// 12pm Color Change Logic
function twelveClassPast() {
    var twelve = document.getElementById("input-12pm");
    twelve.className += " past";
}
function twelveClassPresent() {
    var twelve = document.getElementById("input-12pm");
    twelve.className += " present";
}
function twelveClassFuture() {
    var twelve = document.getElementById("input-12pm");
    twelve.className += " future";
}
if (currentHour < twelveHour) {
    twelveClassFuture();
} else if (currentHour == twelveHour) {
    twelveClassPresent();
} else {
    twelveClassPast();
}

// 1pm Color Change Logic
function oneClassPast() {
    var one = document.getElementById("input-1pm");
    one.className += " past";
}
function oneClassPresent() {
    var one = document.getElementById("input-1pm");
    one.className += " present";
}
function oneClassFuture() {
    var one = document.getElementById("input-1pm");
    one.className += " future";
}
if (currentHour < oneHour) {
    oneClassFuture();
} else if (currentHour == oneHour) {
    oneClassPresent();
} else {
    oneClassPast();
}

// 2pm Color Change Logic
 function twoClassPast() {
    var two = document.getElementById("input-2pm");
    two.className += " past";
}
function twoClassPresent() {
    var two = document.getElementById("input-2pm");
    two.className += " present";
}
function twoClassFuture() {
    var two = document.getElementById("input-2pm");
    two.className += " future";
}
if (currentHour < twoHour) {
    twoClassFuture();
} else if (currentHour == twoHour) {
    twoClassPresent();
} else {
    twoClassPast();
}

// 3pm Color Change Logic
function threeClassPast() {
    var three = document.getElementById("input-3pm");
    three.className += " past";
}
function threeClassPresent() {
    var three = document.getElementById("input-3pm");
    three.className += " present";
}
function threeClassFuture() {
    var three = document.getElementById("input-3pm");
    three.className += " future";
}
if (currentHour < threeHour) {
    threeClassFuture();
} else if (currentHour == threeHour) {
    threeClassPresent();
} else {
    threeClassPast();
}

// 4pm Color Change Logic
function fourClassPast() {
    var four = document.getElementById("input-4pm");
    four.className += " past";
}
function fourClassPresent() {
    var four = document.getElementById("input-4pm");
    four.className += " present";
}
function fourClassFuture() {
    var four = document.getElementById("input-4pm");
    four.className += " future";
}
if (currentHour < fourHour) {
    fourClassFuture();
} else if (currentHour == fourHour) {
    fourClassPresent();
} else {
    fourClassPast();
}

// 5pm Color Change Logic
function fiveClassPast() {
    var five = document.getElementById("input-5pm");
    five.className += " past";
}
function fiveClassPresent() {
    var five = document.getElementById("input-5pm");
    five.className += " present";
}
function fiveClassFuture() {
    var five = document.getElementById("input-5pm");
    five.className += " future";
}
if (currentHour < fiveHour) {
    fiveClassFuture();
} else if (currentHour == fiveHour) {
    fiveClassPresent();
} else {
    fiveClassPast();
}

// Local Storage Functions 
// 9am feature
var userInputNine = document.getElementById("input-9am")
var saveButtonNine = document.getElementById("save-button-9am");
saveButtonNine.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputNine = document.getElementById('input-9am').value.trim()

    localStorage.setItem("keyNine", JSON.stringify(userInputNine));
    console.log(userInputNine);
});
function renderMessageNine() {
    var lastEntryNine = JSON.parse(localStorage.getItem("keyNine"));
    if (lastEntryNine !== null) {
        document.getElementById('input-9am').value = lastEntryNine
    }
}

// 10am feature
var userInputTen = document.getElementById("input-10am")
var saveButtonTen = document.getElementById("save-button-10am");
saveButtonTen.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputTen = document.getElementById('input-10am').value.trim()

    localStorage.setItem("keyTen", JSON.stringify(userInputTen));
});
function renderMessageTen() {
    var lastEntryTen = JSON.parse(localStorage.getItem("keyTen"));
    if (lastEntryTen !== null) {
        document.getElementById('input-10am').value = lastEntryTen
    }
}

// 11am feature
var userInputEleven = document.getElementById("input-11am")
var saveButtonEleven = document.getElementById("save-button-11am");
saveButtonEleven.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputEleven = document.getElementById('input-11am').value.trim()

    localStorage.setItem("keyEleven", JSON.stringify(userInputEleven));
});
function renderMessageEleven() {
    var lastEntryEleven = JSON.parse(localStorage.getItem("keyEleven"));
    if (lastEntryEleven !== null) {
        document.getElementById('input-11am').value = lastEntryEleven
    }
}

// 12pm feature
var userInputTwelve = document.getElementById("input-12pm")
var saveButtonTwelve = document.getElementById("save-button-12pm");
saveButtonTwelve.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputTwelve = document.getElementById('input-12pm').value.trim()

    localStorage.setItem("keyTwelve", JSON.stringify(userInputTwelve));
});
function renderMessageTwelve() {
    var lastEntryTwelve = JSON.parse(localStorage.getItem("keyTwelve"));
    if (lastEntryTwelve !== null) {
        document.getElementById('input-12pm').value = lastEntryTwelve
    }
}

// 1pm feature
var userInputOne = document.getElementById("input-1pm")
var saveButtonOne = document.getElementById("save-button-1pm");
saveButtonOne.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputOne = document.getElementById('input-1pm').value.trim()

    localStorage.setItem("keyOne", JSON.stringify(userInputOne));
});
function renderMessageOne() {
    var lastEntryOne = JSON.parse(localStorage.getItem("keyOne"));
    if (lastEntryOne !== null) {
        document.getElementById('input-1pm').value = lastEntryOne
    }
}

// 2pm feature
var userInputTwo = document.getElementById("input-2pm")
var saveButtonTwo = document.getElementById("save-button-2pm");
saveButtonTwo.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputTwo = document.getElementById('input-2pm').value.trim()

    localStorage.setItem("keyTwo", JSON.stringify(userInputTwo));
});
function renderMessageTwo() {
    var lastEntryTwo = JSON.parse(localStorage.getItem("keyTwo"));
    if (lastEntryTwo !== null) {
        document.getElementById('input-2pm').value = lastEntryTwo
    }
}

// 3pm feature
var userInputThree = document.getElementById("input-3pm")
var saveButtonThree = document.getElementById("save-button-3pm");
saveButtonThree.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputThree = document.getElementById('input-3pm').value.trim()

    localStorage.setItem("keyThree", JSON.stringify(userInputThree));
});
function renderMessageThree() {
    var lastEntryThree = JSON.parse(localStorage.getItem("keyThree"));
    if (lastEntryThree !== null) {
        document.getElementById('input-3pm').value = lastEntryThree
    }
}

// 4pm feature
var userInputFour = document.getElementById("input-4pm")
var saveButtonFour = document.getElementById("save-button-4pm");
saveButtonFour.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputFour = document.getElementById('input-4pm').value.trim()

    localStorage.setItem("keyFour", JSON.stringify(userInputFour));
});
function renderMessageFour() {
    var lastEntryFour = JSON.parse(localStorage.getItem("keyFour"));
    if (lastEntryFour !== null) {
        document.getElementById('input-4pm').value = lastEntryFour
    }
}

// 5pm feature
var userInputFive = document.getElementById("input-5pm")
var saveButtonFive = document.getElementById("save-button-5pm");
saveButtonFive.addEventListener("click", function (event) {
    event.preventDefault();

    var userInputFive = document.getElementById('input-5pm').value.trim()

    localStorage.setItem("keyFive", JSON.stringify(userInputFive));
});
function renderMessageFive() {
    var lastEntryFive = JSON.parse(localStorage.getItem("keyFive"));
    if (lastEntryFive !== null) {
        document.getElementById('input-5pm').value = lastEntryFive
    }
}

renderMessageNine();
renderMessageTen();
renderMessageEleven();
renderMessageTwelve();
renderMessageOne();
renderMessageTwo();
renderMessageThree();
renderMessageFour();
renderMessageFive();