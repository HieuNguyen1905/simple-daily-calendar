// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  var timeDisplayEl = $('#currentDay');
  var saveBtn = $('.btn');
  var timeNow = dayjs().hour();
  if(timeNow<9){
    $('#hour-9').addClass('future')
  }
  if(timeNow==9){
    $('#hour-9').addClass('present')
  }
  if(timeNow>9){
    $('#hour-9').addClass('past')
  }

  if(timeNow<10){
    $('#hour-10').addClass('future')
  }
  if(timeNow==10){
    $('#hour-10').addClass('present')
  }
  if(timeNow>10){
    $('#hour-10').addClass('past')
  }

  if(timeNow<11){
    $('#hour-11').addClass('future')
  }
  if(timeNow==11){
    $('#hour-11').addClass('present')
  }
  if(timeNow>11){
    $('#hour-11').addClass('past')
  }

  if(timeNow<12){
    $('#hour-12').addClass('future')
  }
  if(timeNow==12){
    $('#hour-12').addClass('present')
  }
  if(timeNow>12){
    $('#hour-12').addClass('past')
  }

  if(timeNow<13){
    $('#hour-13').addClass('future')
  }
  if(timeNow==13){
    $('#hour-13').addClass('present')
  }
  if(timeNow>13){
    $('#hour-13').addClass('past')
  }

  if(timeNow<14){
    $('#hour-14').addClass('future')
  }
  if(timeNow==14){
    $('#hour-14').addClass('present')
  }
  if(timeNow>14){
    $('#hour-14').addClass('past')
  }

  if(timeNow<15){
    $('#hour-15').addClass('future')
  }
  if(timeNow==15){
    $('#hour-15').addClass('present')
  }
  if(timeNow>15){
    $('#hour-15').addClass('past')
  }

  if(timeNow<16){
    $('#hour-16').addClass('future')
  }
  if(timeNow==16){
    $('#hour-16').addClass('present')
  }
  if(timeNow>16){
    $('#hour-16').addClass('past')
  }

  if(timeNow<17){
    $('#hour-17').addClass('future')
  }
  if(timeNow==17){
    $('#hour-17').addClass('present')
  }
  if(timeNow>17){
    $('#hour-17').addClass('past')
  }
  function saveEvent(event){
      var toDolist = localStorage.getItem('todolist');
      if (toDolist) {
        toDolist = JSON.parse(toDolist);
      } else {
        toDolist = ['','','','','','','','',''];
      }
      var textEvent = $(this).parent().children().eq(1).val();
      var Id = $(this).parent().attr("id");
      var timeArray = Id.split('-');
      var index = parseInt(timeArray[1])-9;
      console.log(index);
      toDolist[index] = textEvent;
      console.log(toDolist);
      
      localStorage.setItem('todolist', JSON.stringify(toDolist));
      
  }
  function readEventFromStorage() {
    var toDolist = localStorage.getItem('todo');
    
    if (toDolist) {
      toDolist = JSON.parse(toDolist);
      printEventData(toDoList);
    }
    
  }
  //function printEventData(toDolist){
    
   // for ( var i = 0 ; i < toDolist.length ; i++){
      // TODO:
    
    //}
  //}
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  function displayTime(){
    var rightNow = dayjs().format('dddd,MMMM DD');
    timeDisplayEl.text(rightNow);
  }
  readEventFromStorage()
  displayTime();
  
  saveBtn.on('click',saveEvent);
});

