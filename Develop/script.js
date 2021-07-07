// current Day 
// time blocks
// color coded time blocks
// addEventListener Save to local Storag 
// persists when refreshed
// var currenttimeEl = $('#time-display');
// var = $('#time-block');
// timeblockEl var specifichourEl = $('#800am');


let update = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };


  var scheduleEntry = document.querySelector("#t8");
  var addButton = document.querySelector("#saveBtn");
  var scheduled = localStorage.getItem("scheduled");
  
  function saveLastEntry() {
    // Save related form data as an object
    var finalEntry = {
      scheduleEntry: scheduleEntry.value.trim()
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("finalEntry", JSON.stringify(finalEntry));
  }

  function renderLastEntry() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEntry = JSON.parse(localStorage.getItem("finalEntry"));
    // Check if data is returned, if not exit out of the function
    if (lastEntry !== null) {
    document.getElementById("t8").innerHTML = lastEntry.scheduleEntry
    } else {
      return;
    }
  }

  addButton.addEventListener("click", function(){
    saveLastEntry();
    renderLastEntry();
    });

  function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastEntry();
  }
  init();