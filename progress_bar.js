function ProgressBar(maxTime){
	// Start time (milliseconds)
	var _maxTime = maxTime; 
	// Update Interval for the progress bar (millisenconds)
	var _interval = 10; 
	var _starTime = new Date();
	var _intervalId = "";

	/*
	 * Here the progress bar is created
	 */
	this.create = function(barID, labelID, isTimeLabel, isBack, callback){
		_intervalId = setInterval(function(){
			var timeElapsed = new Date - _starTime;
			var progress = (timeElapsed / _maxTime) * 100;
			if(isBack == true){
				$("#" + barID).width((100 - progress) + '%');
			}else{
				$("#" + barID).width(progress + '%');	
			}

			// Time Label
			if(isTimeLabel == true){
				var timeLeftMin = Math.floor(((_maxTime - timeElapsed) / 1000) / 60);
				var timeLeftSeconds = Math.floor(((_maxTime - timeElapsed) / 1000) % 60);
				$("#" + labelID).text(timeLeftMin + ":" + timeLeftSeconds.toString().padStart(2, "0"));	
			}

			// Depending on the current percentage
			// Set the progress bar color
			if(progress >= 100){
				$("#" + barID).width('0%');
				_starTime = new Date;
				callback();
				_starTime = new Date;				
				$("#" + barID).removeClass();
				$("#" + barID).addClass("progress-bar");
			}else if(progress >= 80 && progress < 90){
				$("#" + barID).removeClass();
				$("#" + barID).addClass("progress-bar progress-bar-warning");
			}else if(progress >= 90){
				$("#" + barID).removeClass();
				$("#" + barID).addClass("progress-bar progress-bar-danger");
			} else {
			  $("#" + barID).removeClass();
			  $("#" + barID).addClass("progress-bar progress-bar-info");
			}

		}, _interval);
	}

	/*
	 * If an interval is already started, this methos clear it
	 * Call this method before instance the progress bar
	 */
	this.clearInterval = function () {
	  if (_intervalId != "") {
	    clearInterval(_intervalId);
	  }
	}
}