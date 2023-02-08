// Set what to be executed on page load
window.onload = function () {
  // Add listener to Post Messages
  if (window.addEventListener) {
    window.addEventListener(
      "message",
      function (event) {
        receivePostMessage(event);
      },
      { passive: true }
    );
  } else {
    window.attachEvent("onmessage", function (event) {
      receivePostMessage(event);
    });
  }
};

window.dispatchEvent("message");

// Receive post messages and handle them
function receivePostMessage(event) {
  // Check data from post message. Here we expected receive msgId and percentage from data
  if (event.data) {
    try {
      var messageJSON = event.data;
      console.log(messageJSON.percentage);
      switch (messageJSON.msgId) {
        case "preloaderProgress":
          break;

        case "preloaderEnd":
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
