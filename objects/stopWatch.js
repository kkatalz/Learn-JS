function StopWatch() {
  let startTime,
    endTime,
    timerStarted,
    duration = 0;

  this.start = function () {
    if (timerStarted) throw new Error("Stopwatch already started");
    timerStarted = true;
    startTime = new Date();
  };

  this.stop = function () {
    if (!timerStarted) throw new Error("Stopwatch already stopped");
    timerStarted = false;
    endTime = new Date();

    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  };

  this.reset = function () {
    (startTime = null),
      (endTime = null),
      (timerStarted = false),
      (duration = 0);
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

let stopWatch = new StopWatch();
