
import { Clock } from "./Clock/index.js";

const clock = [
    {
        hours: 2,
        minutes: 34,
    },
    {
        hours: 11,
        minutes: 4,
    },
    {
        hours: 5,
        minutes: 6,
    },
    {
        hours: 22,
        minutes: 50,
    }
]

const renderClock = () => {
    const myElement = document.getElementById("app");
    myElement.innerHTML = clock
    .map((time) => Clock(time))
    .join('');
}

renderClock()