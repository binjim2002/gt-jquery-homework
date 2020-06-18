$(document).ready(function(){
  $("CurrentDay").text(moment().format('MMMM Do YYYY'));  
   
hoursArray = [
  { twelveHoursInput:"9AM", twentyFourInput:"9"},
{ twelveHoursInput: "10AM", twentyFourInput: "10"},
{ twelveHoursInput:"11AM", twentyFourInput:"11"},
{ twelveHoursInput: "12PM", twentyFourInput: "12"},
{ twelveHoursInput:"1PM", twentyFourInput:"13"},
{ twelveHoursInput: "2PM", twentyFourInput: "14"},
{ twelveHoursInput:"3PM", twentyFourInput:"15"},
{ twelveHoursInput: "4PM", twentyFourInput: "16"},
{ twelveHoursInput:"5PM", twentyFourInput:"17"},
{ twelveHoursInput: "6PM", twentyFourInput: "18"},
{ twelveHoursInput:"7PM", twentyFourInput:"19"},
{ twelveHoursInput: "8PM", twentyFourInput: "20"},
{ twelveHoursInput:"9PM", twentyFourInput:"21"},
{ twelveHoursInput: "10PM", twentyFourInput: "22"},
{ twelveHoursInput:"11PM", twentyFourInput:"23"},
{ twelveHoursInput: "12AM", twentyFourInput: "24"},
];
  hours = 0;
  function newPlannerTimeRow() {
var newLane = $("<div>").addClass("row");
var colum1 = $("<div>")

          .addClass("col-sm-1 hour")
          .text(hoursArray[hours].twelveHoursInput);
     
        var colum = $("<textarea>").addClass(`text-${hoursArray[hours].twentyFourInput} col-sm-10`);
        
        var colum3 = $("<button>").attr("data-time",hoursArray[hours].twentyFourInput)
          .addClass("col-sm-1 saveBtn")
          .html("<i class='fas fa-save'></i>");
        newLane.append(colum1);
        newLane.append(colum);
        newLane.append(colum3);
        $(".container").append(newLane);
      if (hoursArray[hours].twentyFourInput > moment().format('H')){
        colum.addClass("future");
        // console.log here
      } else if (hoursArray[hours].twentyFourInput < moment().format('H')){
        colum.addClass("past");
    } else {
        colum.addClass("present");
        
      };
    hours++;;}
      
      for (var i = 0; i < hoursArray.length; i++) {
        newPlannerTimeRow();
      }
      itemsArray=[];
    $(".container").on("click", ".saveBtn", function(event) {
        event.preventDefault();
        console.log(event.target);
        console.log(event.target.attributes[0]);
        (`text-${event.target.attributes[0]}`);
    })
    });
  