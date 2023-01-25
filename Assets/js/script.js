// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.





 



//Present current date on header
var today = dayjs();
$('#currentDay').text(dayjs().format('dddd, MMMM Do'));

//Time set to consol
//$('#currentDay').text(dayjs(dayjs(),'dddd, MMMM Do'));


//Add a listener for click events on the save button.
$ (document).ready(function () {


  
  // TODO: //Add a listener for click events on the save button.// This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $(".saveBtn").click(function(){
    var textArea = $(this).siblings(".description")
    var text_event =textArea.val();
    var text_id = textArea.attr('id')
    console.log(text_id,text_event);
    localStorage.setItem(text_id , text_event)
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

 
  //for(var i = 9;i<=17;i++){

   //localStorage.getItem("text-"+i)
  //}
  var localTime = dayjs().hour()
  //.format('HH:MM')
  
console.log(localTime)

  $(".time-block").each(function () {
    var selectedInput = parseInt($(this).attr("id").split("-")[1]);
    

    if (selectedInput > localTime) {
        $(this).addClass("future");
       $(this).removeClass('past');
       $(this).removeClass('present');

    } else if (selectedInput == localTime) {

        $(this).addClass("present");
        $(this).removeClass('past');
        $(this).removeClass('future');

    }
    else {(selectedInput < localTime)

      $(this).addClass("past");
      $(this).removeClass('present');
      $(this).removeClass('future');
    
       
    } ;
      

    $("#" + selectedInput).val(localStorage.getItem(selectedInput))
  
});
  // TODO: Add code to display the current date in the header of the page.
});

