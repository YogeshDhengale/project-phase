const input = document.getElementById('inputField');
const display = document.getElementById('current-time');

console.log(input, display);

let countdown = display.textContent;

input.addEventListener('keydown', (e) => {

    console.log('enter')
    if (e.key === 'Enter') {
        display.style.color = 'black'
        console.log('Enter Too');

        display.textContent = parseInt(input.value)

        if (display.textContent) {
            clearInterval(countdown);
        }

        countdown = setInterval(() => {
            if (display.textContent < 7) {
                display.style.color = 'red'
            }
            display.textContent =display.textContent - 1;

            if (display.textContent === '0') {
                clearInterval(countdown)
            }
        }, 1000)
    }
})