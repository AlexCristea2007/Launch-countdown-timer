const countdown = () => {
    let days = 8; 
    let hours = 23;
    let minutes = 55;
    let seconds = 41;

    const updateCountdown = () => {
        document.getElementById("days").innerHTML = String(days).padStart(2, '0');
        document.getElementById("hours").innerHTML = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerHTML = String(seconds).padStart(2, '0');

        if (seconds > 0) {
            seconds--;
        } else {
            if (minutes > 0) {
                minutes--;
                seconds = 59;
            } else {
                if (hours > 0) {
                    hours--;
                    minutes = 59;
                    seconds = 59;
                } else {
                    if (days > 0) {
                        days--;
                        hours = 23;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        clearInterval(timerInterval);
                    }
                }
            }
        }
    };

    const timerInterval = setInterval(updateCountdown, 1000);
};

countdown();
