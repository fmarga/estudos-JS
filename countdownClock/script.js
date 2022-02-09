const btn = document.querySelector(".btn");
const eventName = document.querySelector("#event-name");
const date = document.querySelector(".calendar");
const input = document.querySelector(".input");

btn.addEventListener("click", initCountdown);

function initCountdown() {
  let startTimer = "";
  if (!eventName.checkValidity()) {
    eventName.classList.add("invalid");
  } else if (!date.checkValidity()) {
    date.classList.add("invalid");
  } else {
    eventName.classList.remove("invalid");
    date.classList.remove("invalid");
    const dateUser = new Date(date.value).getTime();

    function changeTime() {
      const now = new Date().getTime();

      const distance = dateUser - now;

      if (now >= dateUser) {
        clearInterval(startTimer);
        const container = document.querySelector(".container");
        container.innerText = `your event "${eventName.value}" is now!`;
        container.classList.add("time-zero");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector(".clock-day").innerHTML = days;
        document.querySelector(".clock-hours").innerHTML = hours;
        document.querySelector(".clock-minutes").innerHTML = minutes;
        document.querySelector(".clock-seconds").innerHTML = seconds;
      }
    }

    startTimer = setInterval(() => {
      changeTime();
    }, 1000);
  }
}
