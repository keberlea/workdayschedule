
//sets time and date at top of page
let today = dayjs().format('dddd MMM, D, YYYY HH:mm');
let time = dayjs().format('HH:mm')
$('#currentDay').text(today);
console.log(today);
console.log(time);

//entry box time and text
let eventTime;
let eventTxt;

//save button
let saveBtn = $('#savebtn');

let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

//bgcolor change variables
let calTimeBlock;
let timeblock;
let TimeBlockID = $("textarea[id*='timeblock']");


function init(){
    renderEvents();
    setbgcolors();
};


function renderEvents() {
  for (i = 0, i < hours.length; i++;) {
    $('[id^=timeblock-]').each(function(i, v){
      $(v).val(localStorage.getItem(hour[i]));
    })
  }
  console.log(hours);
};

console.log(hours);

saveBtn.on('click',saveButtonclick());

function saveButtonClickHandler(event) {
  // Keeps Form from Sending
  event.preventDefault();
  eventTime = $(this).attr('id').split('-')[1];
  eventTxt = $(this).siblings('textarea[name^="timeblock"]').val().trim();
  // Calls Function to Store in Local Storage
  storeEvents();
};
  function setBGColors() {
    // For each timeblock ID
    timeblockID.each(function () {
    // Split it to display the time contained at the end of the ID, 
    calTimeBlock = $(this).attr('id').split('-')[1];
    calTimeBlock = parseInt(dayjs(timeBlock, 'H').format('H'));
    currenttime = parseInt(dayjs().format('H'));
    
    if (currentTime < calTimeBlock) {
        $(this).removeClass('past present');
        $(this).addClass('future');
    } else if (currentTime === calTimeBlock) {
        $(this).removeClass('past future');
        $(this).addClass('present');
    } else if (currentTime > calTimeBlock) {
        $(this).removeClass('present future');
        $(this).addClass('past');
    } else {
        console.log("Time Calculation Error");
    }
    })
  };
