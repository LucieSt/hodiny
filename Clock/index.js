
export const Clock = (props) => {

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