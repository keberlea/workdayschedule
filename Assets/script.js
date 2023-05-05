
//sets time and date at top of page
let today = dayjs().format('dddd MMM, D, YYYY');
let time = dayjs().format('HH:mm')
$('#currentDay').text(today);
$('#currentTime').text(time);
console.log(today);
console.log(time);



//save button
let saveBtn = $('.saveBtn');


//bgcolor change variable

let calTimeBlock = $('#calTime');
let timeblock;
let TimeBlockID = $('[id^=timeblock-]');

function init(){
    renderEvents();
    setbgcolors();
};


let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function renderEvents() {
  for (let i = 0; i < hours.length; i++) {
    $('[id^=timeblock-]').each(function(i, v){
      $(v).val(localStorage.getItem(hours[i]));
    })
  }
};

console.log(hours);

saveBtn.on('click', saveButtonClick);

//entry box time and text
let eventTime;
let eventTxt;


function saveButtonClick() {
  // Keeps Form from Sending
  event.preventDefault();
  eventTime = $(this).attr('id').split('-')[1];
  eventTxt = $(this).siblings('textarea[name^="timeblock"]').val().trim();
  // Calls Function to Store in Local Storage
  storeEvents();
  console.log(eventTime);
  console.log(eventTxt);
};

//stores events in local storage

function storeEvents() {
  localStorage.setItem(eventTime, eventTxt);
};


//sets bg colors according to current time.
function setbgcolors() {
  // For each timeblock ID
  TimeBlockID.each(function () {
  // Split it to display the time contained at the end of the ID, 
  timeblock = $(this).attr('id').split('-')[1];
  //timeBlock = parseInt(dayjs(timeBlock, 'H').format('H'));
  currentTime = parseInt(dayjs().format('H'));
   
  
  // if  current time is less then the calTimeBlock, remove class past or present and add class future
  if (currentTime < timeblock) {
    $(this).removeClass('past present');
    $(this).addClass('future');
  } 
  // if currentTime is equal to calTimeBlock, remove class past or future and add class present
  else if (currentTime === timeblock) {
    $(this).removeClass('past future');
    $(this).addClass('present');
  } 
  // if currentTime is greater than calTimeBlock, remove class present or future and ass class past
  else if (currentTime > timeblock) {
    $(this).removeClass('present future');
    $(this).addClass('past');
  } 
    })
};


init();