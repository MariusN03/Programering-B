const hourHand = document.querySelector('.hand-hour');
const minuteHand = document.querySelector('.hand-minute');
const secondHand = document.querySelector('.hand-seconds');


function getTime() {
const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegree = (((seconds / 60) * 360) + 90);
        secondHand.style.transform = `rotate(${secondsDegree}deg)`


        const minutes = now.getMinutes();
        const minutesDegree = (((minutes / 60) * 360) + 90);
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`


        const hours = now.getHours();
        const hoursDegree = ((((hours+minutes/60) / 12) * 360) + 90);
        hourHand.style.transform = `rotate(${hoursDegree}deg)`

}

setInterval(getTime, 1000);

function pewpew() {
    let supreme = document.querySelector('.supreme')
    let clock = document.querySelector('.clock')
    if(supreme.style.transform == 'rotateY(180deg)'){
        supreme.style.transform = 'rotateY(360deg)'
    }
    else {
        supreme.style.transform = 'rotateY(180deg)'
    }
    if(clock.style.transform == 'rotateY(180deg)'){
        clock.style.transform = 'rotateY(360deg)'
    }
    else {
        clock.style.transform = 'rotateY(180deg)'
    }
}

/*setInterval(pewpew, 500);*/