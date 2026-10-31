
const form = document.querySelector("#eventForm");
const ticketType = document.querySelector("#ticketType");
const dynamicContainer = document.querySelector("#dynamicContainer");
const dynamicLabel = document.querySelector("#dynamicLabel");
const dynamicInput = document.querySelector("#dynamicInput");
const output = document.querySelector("#output");

function updateDynamicField() {
  const value = ticketType.value;

  if ( value === 'student') {
    dynamicContainer.hidden = false;
    dynamicLabel.textContent = "Student I#";
    dynamicInput.required = true;
    dynamicInput.minLength = 9;
    dynamicInput.maxLength = 9;
    dynamicInput.value = "";
  } else if (value === 'guest') {
    dynamicContainer.hidden = false;
    dynamicLabel.textContent = "Access Code";
    dynamicInput.required = true;
    dynamicInput.removeAttribute('minLength');
    dynamicInput.removeAttribute('maxLength');
    dynamicInput.value = "";
  } else {
    dynamicContainer.hidden = true;
    dynamicInput.required = false;
    dynamicInput.removeAttribute('minLength');
    dynamicInput.removeAttribute('maxLength');

  }
}

ticketType.addEventListener("change", updateDynamicField);
updateDynamicField();

function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const type = form.ticketType.value;
  const eventDate = form.eventDate.value;
  const dynamicValue = dynamicInput.value.trim();
  
  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a date later than today's date.";
    return;
  }
  
  if (type === 'student' && (dynamicValue.length !== 9 || isNaN(dynamicValue))) {
    output.textContent = "Student I# must be 9 digits";
    return;
  }

  if (type === 'guest' && dynamicValue !== 'EVENT131') {
    output.textContent = "Invalid access code. Enter EVENT131";
    return;
  }

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}</p>
  <p>${eventDate}</p>
  `;

  form.reset();
  updateDynamicField();
});
          