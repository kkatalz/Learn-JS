// Premature optimization example. Useless object that has Bad Optimizaton.

function StopWatch() {
  let startTime,
    endTime,
    timerStarted,
    duration = 0;

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "startTime", {
    get: function () {
      return startTime;
    },
    set: function (value) {
      startTime = value;
    },
  });
  Object.defineProperty(this, "endTime", {
    get: function () {
      return endTime;
    },
    set: function (value) {
      endTime = value;
    },
  });
  Object.defineProperty(this, "timerStarted", {
    get: function () {
      return timerStarted;
    },
    set: function (value) {
      timerStarted = value;
    },
  });
}

let stopWatch = new StopWatch();

StopWatch.prototype.start = function () {
  if (this.timerStarted) throw new Error("Stopwatch already started");
  this.timerStarted = true;
  this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
  if (!this.timerStarted) throw new Error("Stopwatch already stopped");
  this.timerStarted = false;
  this.endTime = new Date();

  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

StopWatch.prototype.reset = function () {
  (this.startTime = null),
    (this.endTime = null),
    (this.timerStarted = false),
    (this.duration = 0);
};
