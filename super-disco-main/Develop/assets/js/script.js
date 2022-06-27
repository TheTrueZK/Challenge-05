var dateEntry = document.getElementById('currentDay');
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;

dateEntry.innerText = today

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })
})

$("#8-am .description").val(localStorage.getItem("8-am"));
$("#9-am .description").val(localStorage.getItem("9-am"));
$("#10-am .description").val(localStorage.getItem("10-am"));
$("#11-am .description").val(localStorage.getItem("11-am"));
$("#12-pm .description").val(localStorage.getItem("12-pm"));
$("#1-pm .description").val(localStorage.getItem("1-pm"));
$("#2-pm .description").val(localStorage.getItem("2-pm"));
$("#3-pm .description").val(localStorage.getItem("3-pm"));
$("#4-pm .description").val(localStorage.getItem("4-pm"));
$("#5-pm .description").val(localStorage.getItem("5-pm"));
