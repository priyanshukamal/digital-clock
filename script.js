function updateClock() {
    const clockTime = document.getElementById('clock-time');
    const now = new Date();
    const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    clockTime.innerText = formattedTime;
}

function setAlarms() {
    const wakeUpTime = document.getElementById('wake-up-time').value;
    const lunchTime = document.getElementById('lunch-time').value;
    const napTime = document.getElementById('nap-time').value;
    const nightTime = document.getElementById('night-time').value;

    const alarmList = document.getElementById('alarm-list');
    if (wakeUpTime || lunchTime || napTime || nightTime) {
        alarmList.innerHTML = `
            Wake Up: ${wakeUpTime || 'Not Set'}<br>
            Lunch: ${lunchTime || 'Not Set'}<br>
            Nap: ${napTime || 'Not Set'}<br>
            Night: ${nightTime || 'Not Set'}
        `;
    } else {
        alarmList.innerText = 'No alarms set';
    }

    alert("Alarms have been set successfully!");
}

document.getElementById('set-alarm-btn').addEventListener('click', setAlarms);
setInterval(updateClock, 1000);
