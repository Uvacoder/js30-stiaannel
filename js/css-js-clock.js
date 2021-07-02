    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const dMin = document.querySelector('.min');
    const dHour = document.querySelector('.hour');
    const dSec = document.querySelector('.sec');

    function setDate() {
      const now = new Date();
      const sec = now.getSeconds()
      secondHand.style.transition = (sec === 0) ? "none" : "all 0.05s cubic-bezier(0.29, 2.63, 0.58, 1)";
      const secDeg = ((sec / 60) * 360) + 90
      secondHand.style.transform = `rotate(${secDeg}deg)`
      dSec.innerHTML = (sec < 10) ? `0${sec}` : sec

      const mins = now.getMinutes();
      minHand.style.transition = (mins === 0) ? "none" : "all 0.05s cubic-bezier(0.29, 2.63, 0.58, 1)";
      const minDeg = ((mins / 60) * 360) + 90
      minHand.style.transform = `rotate(${minDeg}deg)`
      dMin.innerHTML = (mins < 10) ? `0${mins}` : mins

      const hours = now.getHours()
      hourHand.style.transition = (hours === 0) ? "none" : "all 0.05s cubic-bezier(0.08, 3.29, 0.25, 1)";
      const hourDeg = ((hours / 12) * 360) + 90
      hourHand.style.transform = `rotate(${hourDeg}deg)`
      dHour.innerHTML = (hours < 10) ? `0${hours}` : hours
    }
    setInterval(setDate, 1000);
