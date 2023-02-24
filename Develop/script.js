// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});

var currentDate = dayjs().format("dddd, MMMM D");
$("#currentDay").text(currentDate);


function startCalendar(){

  // for i of the hour with an dayjs > then whenTime = past
  var workHours = ["9","10","11","12","13","14","15","16","17"]
  var whenTime = ""
  var currentHour = dayjs().hour();
  var displayTime = ""


  // Add time blocks to the HTML
    for (var i = 0; i < workHours.length; i++) {

      // had to use double equals since compaing an int and a string
      if (currentHour == workHours[i]) {
        whenTime = "present"
      } else if (currentHour < workHours[i]){
        whenTime = "future"
      } else {
        whenTime = "past"
      }
      if (workHours[i] > 12) {
        displayTime = (workHours[i] - 12) + "PM"
      } else {
        displayTime = workHours[i] + "AM"
      }
      var timeBlockEl = $("<div>").addClass("row time-block");
      timeBlockEl.addClass(whenTime);
      timeBlockEl.attr("id", displayTime);
      var hourEl = $("<div>")
        .addClass("col-2 col-md-1 hour text-center py-3")
        .text(displayTime);
      var descriptionEl = $("<textarea>")
        .addClass("col-8 col-md-10 description")
        .attr("rows", 3);
      var saveBtnEl = $("<button>")
        .addClass("btn saveBtn col-2 col-md-1")
        .attr("aria-label", "save")
        .html("<i class='fas fa-save' aria-hidden='true'></i>");
      timeBlockEl.append(hourEl, descriptionEl, saveBtnEl);
      $(".container-fluid").append(timeBlockEl);

      // grab any saved event in local storage for this block
      var savedEvent = localStorage.getItem(displayTime);
      if (savedEvent !== null) {
      $("#" + displayTime + " .description").val(savedEvent);
      }
    }
    // click listner needs to be outside the for loop above
    $(".saveBtn").on("click", function () {
      var parent = $(this).parent();
      var id = parent.attr("id");
      var eventText = parent.find(".description").val();
      localStorage.setItem(id, eventText);
    });

  
}
  
  startCalendar();