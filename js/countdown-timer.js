
    let countdown, timeFormat = '24',
      thenn, isRunning = false;
    const timerDisplayHr = document.querySelector('.display__time-left #hr')
    const timerDisplayMn = document.querySelector('.display__time-left #mn')
    const timerDisplaySc = document.querySelector('.display__time-left #sc')
    const endTimeDisp = document.querySelector('.display__end-time')
    const stopBtn = document.querySelector('.stop')
    const formatPicker = document.querySelectorAll('.format__picker')
    const presetTimers = document.querySelectorAll('[data-time]')

    function timer(seconds) {
      stopTimer(); // Stop all running timers and reset
      isRunning = true; // Set Flag to indicate a new timer starting
      stopBtn.disabled = false;
      const now = Date.now();
      const then = now + seconds * 1000;
      thenn = then;
      displayLeft(seconds);
      endTime(then)

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
          clearInterval(countdown);
          stopBtn.disabled = true;

          isRunning = false; // Set Flag after timer auto stops
          return;
        }

        displayLeft(secondsLeft)

      }, 1000)
    };

    function displayLeft(sec) {
      const hrs = Math.floor(sec / 3600);
      const mins = Math.floor((sec - (hrs * 3600)) / 60);
      const secs = Math.floor((sec - (mins * 60)) % 60);
      timerDisplayHr.innerHTML = hrs < 10 ? `0${hrs}:` : `${hrs}:`
      timerDisplayMn.innerHTML = mins < 10 ? `0${mins}:` : `${mins}:`
      timerDisplaySc.innerHTML = secs < 10 ? `0${secs}` : `${secs}`
      document.title =
        `${ hrs < 10 ? `0${hrs}:` : `${hrs}:`}${mins < 10 ? `0${mins}:` : `${mins}:`}${secs < 10 ? `0${secs}` : `${secs}`}`
    };

    function endTime(timestamp) {
      const end = new Date(timestamp)
      const hours = end.getHours();
      const mins = end.getMinutes();
      const useHrs = timeFormat == '12' && hours > 12 ? hours - 12 : hours;
      endTimeDisp.innerHTML = `Be back at ${useHrs < 10 ? '0' : ''}${useHrs}:${mins < 10 ? '0' : ''}${mins}`
    }

    function toggleFormats(e) {
      timeFormat = this.dataset.format;

      if (this.classList.contains('format-24')) {
        this.disabled = true
        document.querySelector('.format-12').disabled = false
      } else {
        this.disabled = true
        document.querySelector('.format-24').disabled = false
      }

      if (isRunning) {
        // Update time on screen then:
        endTime(thenn)
      }
    }

    function stopTimer() {
      if (isRunning) {
        clearInterval(countdown)
        isRunning = !isRunning // Set Flag after manual stop
        // clear fields 
        endTimeDisp.innerHTML = ""
        timerDisplayHr.innerHTML = ""
        timerDisplayMn.innerHTML = ""
        timerDisplaySc.innerHTML = ""
        stopBtn.disabled = true;
      }
    }

    function runTimer() {
      stopBtn.disabled = false;
      timer(parseInt(this.dataset.time));
    }

    formatPicker.forEach(picker => picker.addEventListener('click', toggleFormats));
    stopBtn.addEventListener('click', stopTimer);
    presetTimers.forEach(btn => btn.addEventListener('click', runTimer));
    document.customForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const mins = this.minutes.value;
      timer(mins * 60)
    });