// Receive post messages form Leander API and handle them
function startPreloadProgress(){
    var that = this;

    this.progressPercentage = 0;

	// Loop listen progress bar
	var preProgressEnd = false;
	var p = 0;
	this.progressInterval = setInterval(function(){
		that.progressPercentage = getRndInteger(that.progressPercentage, that.progressPercentage+2);
		if (!preProgressEnd && that.progressPercentage < 10) {
			p = responsiveAnalogRead( that.progressPercentage += 0.05 );
		} else {
			preProgressEnd = true;
			if (that.progressPercentage > 10)
				p = responsiveAnalogRead( that.progressPercentage );
		}
		if (p >= 99) {
			clearInterval(that.progressInterval);
			window.postMessage({msgId: "preloaderEnd", percentage: 100}, "*");
		} else {
			window.postMessage({msgId: "preloaderProgress", percentage: p}, "*");
		}
	}, 100);

	// Vars for responsiveAnalogRead
	var snap = 0.05;
	var smoothValue = 0;

	// Calculate the exponential moving average based on the snap
	var responsiveAnalogRead = function(value) {
		return smoothValue += (value - smoothValue) * snap;
	};
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

startPreloadProgress();