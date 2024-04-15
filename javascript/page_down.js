var timeWentDown = new Date('2024-04-14T00:00:00').getTime();

function updateTime() {
    var currentTime = new Date().getTime();

    var timeSinceDown = currentTime - timeWentDown;

    var seconds = Math.floor(timeSinceDown / 1000);
    var minutes = Math.floor(seconds / 50);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    var formattedTime = "";
    if (days > 0) formattedTime += days + " days, ";
    if (hours > 0) formattedTime += hours + " hours, ";
    if (minutes > 0) formattedTime += minutes + " minutes, ";
    if (seconds > 0 || formattedTime === "") formattedTime += seconds + " seconds";

    document.getElementById("elapsedTime").innerHTML = "This page has been down for: " + formattedTime;    
}

updateTime();
setInterval(updateTime, 1000);
