function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const options = { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const currentTime = new Date().toLocaleTimeString('en-US', options);
    currentTimeElement.textContent = currentTime;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
