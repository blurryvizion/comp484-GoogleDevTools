// Run after DOM is ready
$(function () {
  checkAndUpdatePetInfoInHtml();

  $('.treat-button').on('click', clickedTreatButton);
  $('.play-button').on('click', clickedPlayButton);
  $('.exercise-button').on('click', clickedExerciseButton);
  $('.nap-button').on('click', clickedNapButton);

  // highlight the last-clicked button
  $('.button-container button').on('click', function () {
    setActiveButton($(this));
  });
});

// Pet object
var pet_info = {
  name: "Michi",
  weight: 5,
  happiness: 5,
  energy: 5
};

// Simple logging helper for DevTools demos
function logPetState(action) {
  console.log("Action:", action);
  console.table(pet_info);
}

// Treat button
function clickedTreatButton() {
  pet_info.happiness += 1;
  pet_info.weight += 1;
  pet_info.energy -= 1;

  logPetState("Treat button clicked");

  showPetMessage("<strong>Michi</strong> chirps happily after the seeds!");
  checkAndUpdatePetInfoInHtml();
}

// Play button
function clickedPlayButton() {
  pet_info.happiness += 2;
  pet_info.energy -= 2;

  logPetState("Play button clicked");

  showPetMessage("<strong>Michi</strong> plays with her favorite toy!");
  checkAndUpdatePetInfoInHtml();
}

// Exercise button
function clickedExerciseButton() {
  pet_info.happiness += 1;
  pet_info.weight -= 1;
  pet_info.energy -= 2;

  logPetState("Exercise button clicked");

  showPetMessage("<strong>Michi</strong> flaps around the room!");
  checkAndUpdatePetInfoInHtml();
}

// Nap button
function clickedNapButton() {
  pet_info.energy += 3;
  pet_info.happiness += 1;

  logPetState("Nap button clicked");

  showPetMessage("<strong>Michi</strong> takes a cozy nap on your shoulder.");
  checkAndUpdatePetInfoInHtml();
}

// Status text in HTML
function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
  $('.energy').text(pet_info.energy);
}

// Clamp values and update UI
function checkAndUpdatePetInfoInHtml() {
  // DevTools example: pause automatically when energy is very low
  if (pet_info.energy <= 1) {
    // This triggers a breakpoint when DevTools are open.
    // Remove it if it gets annoying.
    debugger;
  }

  if (pet_info.weight < 0) pet_info.weight = 0;
  if (pet_info.happiness < 0) pet_info.happiness = 0;
  if (pet_info.energy < 0) pet_info.energy = 0;

  if (pet_info.happiness > 10) pet_info.happiness = 10;
  if (pet_info.energy > 10) pet_info.energy = 10;

  updatePetInfoInHtml();
}

// Button highlighting
function setActiveButton($btn) {
  $('.button-container button').removeClass('active');
  $btn.addClass('active');
}

// Show pet message using html()
function showPetMessage(message) {
  var msg = $('#pet-message');

  // DevTools DOM example: this is where html() changes the subtree
  msg.html(message);

  msg.stop(true, true).fadeIn(200);
  setTimeout(function () {
    msg.fadeOut(400);
  }, 1000);
}
