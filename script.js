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
    var text = $(this).siblings('#text').val();
    console.log(text);
    var hour = $(this).parent().attr('id');
    console.log('time: ', hour);
    localStorage.setItem(hour,text);
}
$('#hour-9 #text').val(localStorage.getItem('hour-9'));
$('#hour-10 #text').val(localStorage.getItem('hour-10'));
$('#hour-11 #text').val(localStorage.getItem('hour-11'));
$('#hour-12 #text').val(localStorage.getItem('hour-12'));
$('#hour-13 #text').val(localStorage.getItem('hour-13'));
$('#hour-14 #text').val(localStorage.getItem('hour-14'));
$('#hour-15 #text').val(localStorage.getItem('hour-15'));
$('#hour-16 #text').val(localStorage.getItem('hour-16'));
$('#hour-17 #text').val(localStorage.getItem('hour-17'));
      
  
  
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  function displayTime(){
    var rightNow = dayjs().format('dddd,MMMM DD');
    timeDisplayEl.text(rightNow);
  }
  
  displayTime();
  
  saveBtn.on('click',saveEvent);
});

