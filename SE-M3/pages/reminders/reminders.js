let bars = document.querySelector('#bars');
let dropDown = document.querySelector('#drop-down');

let bell = document.querySelector('#bell');
let notifi = document.querySelector('#notifi');

bars.addEventListener('click', function() {
  notifi.classList.remove('show');
  dropDown.classList.toggle('show');
});

bell.addEventListener('click', function() {
  dropDown.classList.remove('show');
  notifi.classList.toggle('show');
});


let logout = document.querySelector('#logout');
logout.addEventListener('click', function() {
  localStorage.removeItem('client');
  window.location.href = '../../index.html';
});


let submit = document.querySelector('#submit');
let reminderContainer = document.querySelector('#reminder-container');

submit.addEventListener('click', function(e) {
  let rName = document.querySelector('#reminder-name');
  let rDate = document.querySelector('#reminder-date');
  let rDescription = document.querySelector('#reminder-desc');

  e.preventDefault();
  let flag = true;
  if (rName.value === '') {
    rName.classList.add('input-error');
    flag = false;
  } else {
    rName.classList.remove('input-error');
    flag = true;
  }
  if (rDate.value === '') {
    rDate.classList.add('input-error');
    flag = false;
  } else {
    rDate.classList.remove('input-error');
    flag = true;
  }
  if (rDescription.value === '') {
    rDescription.classList.add('input-error');
    flag = false;
  } else {
    rDescription.classList.remove('input-error');
    flag = true;
  }

  if (!flag) {
    return;
  } else {
    // Create a new reminder card
    var reminderCard = document.createElement('div');
    reminderCard.classList.add('reminder-card');

    // Create the reminder card header
    var reminderCardHeader = document.createElement('div');
    reminderCardHeader.classList.add('reminder-card-header');

    // Create the reminder name element
    var reminderNameElement = document.createElement('h2');
    reminderNameElement.innerText = rName.value;

    // Create the delete icon
    var deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash');
    deleteIcon.setAttribute('title', 'Delete');

    // Add click event listener to delete icon
    deleteIcon.addEventListener('click', function() {
      reminderCard.remove(); // Remove the reminder card
    });

    // Append reminder name and delete icon to the header
    reminderCardHeader.appendChild(reminderNameElement);
    reminderCardHeader.appendChild(deleteIcon);

    // Create the reminder card body
    var reminderCardBody = document.createElement('div');
    reminderCardBody.classList.add('reminder-card-body');

    // Create the reminder description paragraph
    var reminderDescElement = document.createElement('p');
    reminderDescElement.innerText = rDescription.value;

    // Append the description to the body
    reminderCardBody.appendChild(reminderDescElement);

    // Create the reminder card footer
    var reminderCardFooter = document.createElement('div');
    reminderCardFooter.classList.add('reminder-card-footer');

    // Create the due date span
    var dueDateSpan = document.createElement('span');
    dueDateSpan.innerText = 'Due date: ' + rDate.value.split('T')[0];

    // Create the time span
    var timeSpan = document.createElement('span');
    timeSpan.innerText = 'Time: ' + rDate.value.split('T')[1];

    // Append due date and time to the footer
    reminderCardFooter.appendChild(dueDateSpan);
    reminderCardFooter.appendChild(timeSpan);

    // Append header, body, and footer to the reminder card
    reminderCard.appendChild(reminderCardHeader);
    reminderCard.appendChild(reminderCardBody);
    reminderCard.appendChild(reminderCardFooter);

    // Append the reminder card to the container
    reminderContainer.insertBefore(reminderCard, reminderContainer.firstChild);

    // Reset the form
    rName.value = '';
    rDate.value = '';
    rDescription.value = '';
  }
});

let deleteIcons = document.querySelectorAll('.fa-trash');

deleteIcons.forEach(function(deleteIcon) {
  deleteIcon.addEventListener('click', function(e) {
    e.target.parentNode.parentNode.remove();
  });
});


// Get the footer element
var footer = document.querySelector('.footer');

// Function to adjust the footer position
function adjustFooterPosition() {
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = footer.offsetHeight;

  // Check if the body height is smaller than the window height
  if (bodyHeight < windowHeight) {
    // Calculate the top offset for the footer
    var footerOffset = windowHeight - bodyHeight - footerHeight;

    // Set the top offset to the footer
    footer.style.top = footerOffset + 'px';
  } else {
    // Reset the top offset for the footer
    footer.style.top = 'auto';
  }
}

// Adjust the footer position on page load
adjustFooterPosition();

// Adjust the footer position on window resize
window.addEventListener('resize', adjustFooterPosition);


