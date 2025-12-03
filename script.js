// Run after DOM is ready
$(function () {
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.nap-button').click(clickedNapButton);

  // set active style on whichever button is clicked
  $('.button-container button').click(function () {
    setActiveButton($(this));
  });
});

// Pet object
var pet_info = {
  name: "Michi",
  weight: 10,
  happiness: 10,
  energy: 7
};

// Treat button
function clickedTreatButton() {
  pet_info.happiness += 1;
  pet_info.weight += 1;

  showPetMessage("<strong>Michi</strong> chirps happily after the seeds!");
  checkAndUpdatePetInfoInHtml();
}

// Play button
function clickedPlayButton() {
  pet_info.happiness += 2;
  pet_info.weight -= 1;
  pet_info.energy -= 2;

  showPetMessage("<strong>Michi</strong> shreds the cardboard box with joy!");
  checkAndUpdatePetInfoInHtml();
}

// Exercise button
function clickedExerciseButton() {
  pet_info.happiness -= 1;
  pet_info.weight -= 2;
  pet_info.energy += 1;

  showPetMessage("<strong>Michi</strong> flies laps around the house!");
  checkAndUpdatePetInfoInHtml();
}

// Nap button
function clickedNapButton() {
  pet_info.energy += 3;
  pet_info.happiness += 1;

  showPetMessage("<strong>Michi</strong> takes a cozy nap on your shoulder.");
  checkAndUpdatePetInfoInHtml();
}

// Clamp stats and update html
function checkAndUpdatePetInfoInHtml() {
  if (pet_info.weight < 0) pet_info.weight = 0;
  if (pet_info.happiness < 0) pet_info.happiness = 0;
  if (pet_info.energy < 0) pet_info.energy = 0;

  if (pet_info.happiness > 10) pet_info.happiness = 10;
  if (pet_info.energy > 10) pet_info.energy = 10;

  updatePetInfoInHtml();
}

// Write stats to page
function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(pet_info.energy);
}

// Highlight active button using siblings()
function setActiveButton(button) 
{
  
  /**************************************************************************************
   * siblings(): selects the other buttons next to this one
   * **************************************************************************************/
  button.addClass('active-btn');
  button.siblings('button').removeClass('active-btn');
}

// Show pet message using html()
function showPetMessage(message) {
  var msg = $('#pet-message');

  /******************************************************************************
   * html(): sets HTML content (allows <strong> tags)
   * ***************************************************************************/

  msg.html(message);

  msg.fadeIn(200);
  setTimeout(function () {
    msg.fadeOut(400);
  }, 1000);
}
