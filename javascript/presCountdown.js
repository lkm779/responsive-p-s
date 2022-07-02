import { fetchApi } from "./fetchApi.js";

export const presCountdown = async () => {
    const nextPres = await fetchApi()

    console.log(nextPres)

    if (nextPres) {
        setInterval(() => {
            let presDate = new Date(nextPres.json().date)
            let dateNow = new Date()

            let seconds = Math.floor((presDate - dateNow) / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);

            hours = hours - (days * 24);
            minutes = minutes - (days * 24 * 60) - (hours * 60);
            seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

            document.getElementById("days").innerText = days.toString()
            document.getElementById("hours").innerText = hours.toString()
            document.getElementById("minutes").innerText = minutes.toString()
            document.getElementById("seconds").innerText = seconds.toString()

            //do something later when date is reached
            if ((presDate - dateNow) <= 0) {
                document.getElementById("headtitle").innerText = "PARTY TIME!";
                document.getElementById("countdown").style.display = "none";
            }
        }, 0)
    } else {
        document.getElementById("headtitle").innerText = "PARTY TIME!";
        document.getElementById("countdown").style.display = "none";
    }
}