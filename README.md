# JSProgressBar

This is Progress Bas Script coded in JavaScript.
The Progress Bar has a simple design that changes its color depending on the current percentage.
Also it has an optional time label and go forward or backward.

## How to use
Create a new Progress Bar and call the create method.

```
  function setProgressBar(){
    // MaxTime is the time interval for the progress bar (milliseconds)
    var maxTime = 30000;
    var bar = new ProgressBar(maxTime);
    
    // This methods check if currently an interval has been started
    // and clear it
    bar.clearInterval();
    // Create Method
    // param 1: prpgress bar ID
    // param 2: time label ID (if there is not a label, set as "")
    // param 2: if there is a time label or not (boolean)
    // param 3: if it go forward(false) or backward(true) (boolean)
    // param 4: callback that is lunch when the progress bar reach the end, it could be null
    bar.create("progressBar", "spanTimeLeft", true, false, callback);
  }
```

