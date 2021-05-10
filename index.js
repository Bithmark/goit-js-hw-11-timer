class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  start() {
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;
      this.getTimesComponents(deltaTime);
    }, 1000);
  }

  getTimesComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );

    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.selectorRef = document.querySelector(this.selector);
    this.refs = {
      days: (document.querySelector(
        '[data-value="days"]'
      ).textContent = `${days}`),
      hours: (document.querySelector(
        '[data-value="hours"]'
      ).textContent = `${hours}`),
      mins: (document.querySelector(
        '[data-value="mins"]'
      ).textContent = `${mins}`),
      secs: (document.querySelector(
        '[data-value="secs"]'
      ).textContent = `${secs}`),
    };
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
}
new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});
