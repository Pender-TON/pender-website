function updateTimer() {
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.querySelectorAll('.ass-timer-digit').forEach(function(element) {
            const timerType = element.dataset.timerType;
            switch(timerType) {
                case 'days':
                    element.textContent = padZero(days);
                    break;
                case 'hours':
                    element.textContent = padZero(hours);
                    break;
                case 'minutes':
                    element.textContent = padZero(minutes);
                    break;
                case 'seconds':
                    element.textContent = padZero(seconds);
                    break;
            }
        });
    } else {
        clearInterval(timerInterval);
        document.querySelectorAll('.ass-timer-digit').forEach(function(element) {
            element.textContent = '00';
        });
    }
}

function padZero(number) {
    return number < 10 ? '0' + number : number;
}

const endDate = new Date('May 15, 2024 00:00:00').getTime();

const timerInterval = setInterval(updateTimer, 1000);
updateTimer();
