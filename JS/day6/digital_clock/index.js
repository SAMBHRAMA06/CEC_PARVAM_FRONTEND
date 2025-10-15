const setDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString({ hourCycle: 'h12'});
    console.log(time);
    document.getElementById("date").textContent = `Date: ${date}`;
    document.getElementById("time").textContent = `Time: ${time}`;
};
setDateTime();
setInterval(setDateTime, 1000);