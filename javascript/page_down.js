var timeWentDown = new Date('2024-04-14T00:00:00').getTime();

function updateTime() {
    var currentTime = new Date().getTime();
    var timeSinceDown = currentTime - timeWentDown;

    console.log('timeSinceDown:', timeSinceDown);

    var days = Math.floor(timeSinceDown / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeSinceDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeSinceDown % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeSinceDown % (1000 * 60)) / 1000);
    
    console.log('Down For:', days, ':', hours, ':',  minutes, ':',  seconds);


    var formattedTime = "";
    if (days === 1) {
        formattedTime += "1 day, ";
    } else if (days > 1) {
        formattedTime += days + " days, ";
    }
    if (hours > 0) formattedTime += hours + " hours, ";
    if (minutes > 0) formattedTime += minutes + " minutes, ";
    if (seconds > 0 || formattedTime === "") formattedTime += seconds + " seconds";


    document.getElementById("elapsedTime").innerHTML = "This page has been down for: " + formattedTime;    
}

updateTime();
setInterval(updateTime, 1000);
