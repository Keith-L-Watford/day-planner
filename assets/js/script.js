// GIVEN I am using a daily planner to create a schedule


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar - connect it to the currentDay id
var today = moment().format('[Today is] dddd MMMM Do, YYYY');
var time = moment().format('[ and the time is] hh:mm a')
// "20210817", "YYYYMMDD").format("[Today is] dddd, MMM Do YY")
$(".current-day").text(today + time);


// var currentTime = moment().format("[It it currently] hh:mm a")
// $("#current-time").text(today);


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// relative time rounding ?? (math floor)
// or maybe its more of a switch statement, where when hour = moment().format(hh) 
// and when each hour equals the same number (id?) in the box it will change to green.if less than number, turns red, if greater than it turns gray or whatever


// WHEN*** I click into a timeblock
// THEN*** I can enter an event


// WHEN***** I click the save button for that timeblock
// THEN***** the text for that event is saved in local storage
// function init() {
//     var lastEntryNine = JSON.parse(localStorage.getItem("keyNine"));

//     if (lastEntryNine == null) {
//         userInputNine = lastEntryNine;
//     }
// }

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


// WHEN I refresh the page
// THEN the saved events persist
renderMessageNine();
renderMessageTen();
renderMessageEleven();
renderMessageNoon();
renderMessageOne();
renderMessageTwo();
renderMessageThree();
renderMessageFour();
renderMessageFive();