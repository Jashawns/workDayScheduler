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


  var scheduleEntry9 = document.querySelector("#t9");
  var scheduleEntry10 = document.querySelector("#t10");
  var scheduleEntry11 = document.querySelector("#t11");
  var scheduleEntry12 = document.querySelector("#t12");
  var scheduleEntry13 = document.querySelector("#t13");
  var scheduleEntry14 = document.querySelector("#t14");
  var scheduleEntry15 = document.querySelector("#t15");
  var scheduleEntry16 = document.querySelector("#t16");
  var scheduleEntry17 = document.querySelector("#t17");
  var addButton9 = document.querySelector("#saveBtn9");
  var addButton10 = document.querySelector("#saveBtn10");
  var addButton11 = document.querySelector("#saveBtn11");
  var addButton12 = document.querySelector("#saveBtn12");
  var addButton13 = document.querySelector("#saveBtn13");
  var addButton14 = document.querySelector("#saveBtn14");
  var addButton15 = document.querySelector("#saveBtn15");
  var addButton16 = document.querySelector("#saveBtn16");
  var addButton17 = document.querySelector("#saveBtn17");
  var scheduled = localStorage.getItem("scheduled");

  function saveLastEntry9() {
    // Save related form data as an object
    var finalEntry9am = {
      scheduleEntry9: scheduleEntry9.value.trim()
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("finalEntry9am", JSON.stringify(finalEntry9am));
  }

  function renderLastEntry9() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEntry9 = JSON.parse(localStorage.getItem("finalEntry9am"));
    // Check if data is returned, if not exit out of the function
    if (lastEntry9 !== null) {
    document.getElementById("t9").innerHTML = lastEntry9.scheduleEntry9
    } else {
      return;
    }
  }

  addButton9.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry9();
    renderLastEntry9();
    });

  // function init() {
  //   // When the init function is executed, the code inside renderLastGrade function will also execute
  //   renderLastEntry();
  // }
  // init();

  function saveLastEntry10() {
    // Save related form data as an object
    var finalEntry10am = {
      scheduleEntry10: scheduleEntry10.value.trim()
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("finalEntry10am", JSON.stringify(finalEntry10am));
  }

  function renderLastEntry10() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastEntry10 = JSON.parse(localStorage.getItem("finalEntry10am"));
    // Check if data is returned, if not exit out of the function
    if (lastEntry10 !== null) {
    document.getElementById("t10").innerHTML = lastEntry10.scheduleEntry10
    } else {
      return;
    }
  }

  addButton10.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry10();
    renderLastEntry10();
    });

    function saveLastEntry11() {
      // Save related form data as an object
      var finalEntry11am = {
        scheduleEntry11: scheduleEntry11.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry11am", JSON.stringify(finalEntry11am));
    }

    function renderLastEntry11() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry11 = JSON.parse(localStorage.getItem("finalEntry11am"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry11 !== null) {
      document.getElementById("t11").innerHTML = lastEntry11.scheduleEntry11
      } else {
        return;
      }
    }
  
  addButton11.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry11();
    renderLastEntry11();
    });

    function saveLastEntry12() {
      // Save related form data as an object
      var finalEntry12pm = {
        scheduleEntry12: scheduleEntry12.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry12pm", JSON.stringify(finalEntry12pm));
    }

    function renderLastEntry12() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry12 = JSON.parse(localStorage.getItem("finalEntry12pm"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry12 !== null) {
      document.getElementById("t12").innerHTML = lastEntry12.scheduleEntry12
      } else {
        return;
      }
    }
    
  addButton12.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry12();
    renderLastEntry12();
    });

    function saveLastEntry13() {
      // Save related form data as an object
      var finalEntry1pm = {
        scheduleEntry1: scheduleEntry1.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry1pm", JSON.stringify(finalEntry1pm));
    }

    function renderLastEntry13() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry13 = JSON.parse(localStorage.getItem("finalEntry1pm"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry13 !== null) {
      document.getElementById("t13").innerHTML = lastEntry13.scheduleEntry13
      } else {
        return;
      }
    }
  
  addButton13.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry13();
    renderLastEntry13();
    });

    function saveLastEntry14() {
      // Save related form data as an object
      var finalEntry2pm = {
        scheduleEntry2: scheduleEntry2.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry2pm", JSON.stringify(finalEntry2pm));
    }

    function renderLastEntry14() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry14 = JSON.parse(localStorage.getItem("finalEntry2pm"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry14 !== null) {
      document.getElementById("t14").innerHTML = lastEntry14.scheduleEntry14
      } else {
        return;
      }
    }
  
  addButton14.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry14();
    renderLastEntry14();
    });

    function saveLastEntry15() {
      // Save related form data as an object
      var finalEntry3pm = {
        scheduleEntry3: scheduleEntry3.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry3pm", JSON.stringify(finalEntry3pm));
    }

    function renderLastEntry15() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry15 = JSON.parse(localStorage.getItem("finalEntry3pm"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry15 !== null) {
      document.getElementById("t15").innerHTML = lastEntry15.scheduleEntry15
      } else {
        return;
      }
    }
  
  addButton15.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry15();
    renderLastEntry15();
    });

    function saveLastEntry16() {
      // Save related form data as an object
      var finalEntry4pm = {
        scheduleEntry4: scheduleEntry4.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry4pm", JSON.stringify(finalEntry4pm));
    }

    function renderLastEntry16() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry16 = JSON.parse(localStorage.getItem("finalEntry4pm"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry16 !== null) {
      document.getElementById("t16").innerHTML = lastEntry16.scheduleEntry16
      } else {
        return;
      }
    }
  
  addButton16.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry16();
    renderLastEntry16();
    });

    function saveLastEntry17() {
      // Save related form data as an object
      var finalEntry5pm = {
        scheduleEntry5: scheduleEntry5.value.trim()
      };
      // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
      localStorage.setItem("finalEntry5pm", JSON.stringify(finalEntry5pm));
    }

    function renderLastEntry17() {
      // Use JSON.parse() to convert text to JavaScript object
      var lastEntry17 = JSON.parse(localStorage.getItem("finalEntry5pm"));
      // Check if data is returned, if not exit out of the function
      if (lastEntry17 !== null) {
      document.getElementById("t17").innerHTML = lastEntry17.scheduleEntry17
      } else {
        return;
      }
    }
  
  addButton17.addEventListener("click", function(event) {
    event.preventDefault();
    saveLastEntry17();
    renderLastEntry17();
    });
  
    function init() {
      // When the init function is executed, the code inside renderLastGrade function will also execute
      renderLastEntry9();
      renderLastEntry10();
      renderLastEntry11();
      renderLastEntry12();
      renderLastEntry13();
      renderLastEntry14();
      renderLastEntry15();
      renderLastEntry16();
      renderLastEntry17();
    }
    init();