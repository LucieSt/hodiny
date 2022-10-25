
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

// const Clock = (props) => {

//     return props.map((prop) => {
//         const { hours, minutes } = prop
//         return `
//         <div class="clock">
//             <span class="clock__hours">${hours}</span>:<span class="clock__minutes">${minutes}</span>
//         </div>
//         `;
//     }).join('');

// }

const Clock = (props) => {

        let { hours, minutes } = props

        // let propAray = [hours, minutes]
        // const shortNumber = (number) => {
        //     // console.log(number)
        //     if (number.toString().length === 1) {
        //         console.log(number)
        //         number = "0" + number.toString()
        //         console.log(number)
        //     }
        //     return number
        // }

        // propAray.map((item) => {
        //     shortNumber(item);
        // })

        // console.log(propAray)

        if (hours.toString().length === 1) {
            hours = "0" + hours.toString()
        }
        
        if (minutes.toString().length === 1) {
            minutes = "0" + minutes.toString()
        }

        return `
        <div class="clock">
            <span class="clock__hours">${hours}</span>:<span class="clock__minutes">${minutes}</span>
        </div>
        `;

}

const renderClock = () => {
    const myElement = document.getElementById("app");
    myElement.innerHTML = clock
    .map((time) => Clock(time))
    .join('');
}


renderClock()