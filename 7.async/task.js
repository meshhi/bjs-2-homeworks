class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(callTime, callback) {
    if (!callTime || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.filter((alarm) => alarm.time === callTime).length) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback,
      time: callTime,
      canCall: true,
    })
  }

  removeClock(callTime) {
    this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== callTime)
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const formattedHours = String(currentDate.getHours()).length === 2 ? currentDate.getHours() : '0' + currentDate.getHours();
    const formattedMinutes = String(currentDate.getHours()).length === 2 ? currentDate.getMinutes() : '0' + currentDate.getMinutes();


    return `${formattedHours}:${formattedMinutes}`
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => this.alarmCollection.forEach(alarm => {
      if (alarm.time === this.getCurrentFormattedTime()) {
        alarm.canCall = false;
        alarm.callback();
      }
    }
    ,1000));
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true)
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const myClock = new AlarmClock();

console.log(myClock.getCurrentFormattedTime());