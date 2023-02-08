// TODO STYLE THE PROGRESS BAR ACCORDINGLY
// Set what to be executed on page load

function attach(event) {
  return receivePostMessage(event);
}

window.onload = function () {
  // Add listener to Post Messages
  if (window.addEventListener) {
    window.addEventListener("message", attach, { passive: true });
  } else {
    window.attachEvent("onmessage", attach);
  }
};

window.dispatchEvent("message");

// Receive post messages and handle them
function receivePostMessage(event) {
  // Check data from post message. Here we expected receive msgId and percentage from data
  const progress = document.querySelector("#casino-loader");
  const progressValue = document.querySelector("#progress-value");
  const progressEnd = "100";
  if (event.data) {
    try {
      var messageJSON = event.data;
      const percentage = `${Math.ceil(messageJSON.percentage)}`;

      switch (messageJSON.msgId) {
        case "preloaderProgress":
          progressValue.textContent = `${percentage}%`;
          progress.setAttribute("value", percentage);
          break;

        case "preloaderEnd":
          progress.setAttribute("value", progressEnd);
          progressValue.textContent = `${progressEnd}%`;

          window.removeEventListener("message", attach);
          // End preloader and clear listeners
          // Code ...
          break;
      }
    } catch (e) {
      // Do nothing
      // Not readable message from the game or error parsing the content as JSON
    }
  }
  return;
}
