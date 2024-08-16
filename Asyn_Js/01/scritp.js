const start = document.querySelector('#start')
const stop = document.querySelector('#stop')



// ****************Generate Color***************
const randomColor = () => {
    const Hex = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        const randomNo = Math.floor(Math.random() * 16);
        color += Hex[randomNo];
    }
    return color;
}


let intervalId;
const changeColor = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 1000)
    }


}

function stopchangeColor() {
    clearInterval(intervalId)
    intervalId = null
}

start.addEventListener('click', changeColor);
stop.addEventListener('click', stopchangeColor);








