function updateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Format the time properly (add leading zeros if necessary)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Update the displayed time
  let amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let timeString = hours + ":" + minutes + ":" + seconds + " " + amPm;
  document.querySelector(".time").textContent = timeString;
}

// Call updateTime() initially to display the current time
updateTime();

// Update the time every second
setInterval(updateTime, 1000);
