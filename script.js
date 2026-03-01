// Get all needed elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
//Track Attendance
let count = 0;
const maxCount = 50;
// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();
  //Form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;
  console.log(name, teamName);
  //Increment count
  if (count >= maxCount) {
    alert("Maximum capacity reached. Cannot check in more attendees.");
    return;
  } else {
    count++;
    console.log("Total Attendees: " + count);
    document.getElementById("attendeeCount").textContent = count;
  }
  //Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);
  document.getElementById("progressBar").style.width = percentage;
  //Update team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;
  console.log(`${teamName} Count: ${teamCounter.textContent}`);
  //Welcome Message
  const welcomeMessage = `Welcome, ${name}! You have checked in for ${teamName}.`;
  console.log(welcomeMessage);
  form.reset();
});
