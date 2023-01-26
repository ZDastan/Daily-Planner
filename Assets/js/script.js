$ (document).ready(function () {


  
  //Add a listener for click events on the save button.
  
  $(".saveBtn").click(function(){
    var textArea = $(this).siblings(".description")
    var text_event =textArea.val();
    var text_id = textArea.attr('id')
    console.log(text_id,text_event);
    localStorage.setItem(text_id , text_event)
  })
  
//Add code to apply the past, present, or future class to each time.
//time in consol.log
  var localTime = dayjs().hour()
  //var localTime = 11
 
  
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


 //Add code to get any user input that was saved in localStorage.


  $("#text-9").val(localStorage.getItem("text-9"));
  $("#text-10").val(localStorage.getItem("text-10"));
  $("#text-11").val(localStorage.getItem("text-11"));
  $("#text-12").val(localStorage.getItem("text-12"));
  $("#text-13").val(localStorage.getItem("text-13"));
  $("#text-14").val(localStorage.getItem("text-14"));
  $("#text-15").val(localStorage.getItem("text-15"));
  $("#text-16").val(localStorage.getItem("text-16"));
  $("#text-17").val(localStorage.getItem("text-17"));
 


  //Present current date on header
  var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM Do'));

});

