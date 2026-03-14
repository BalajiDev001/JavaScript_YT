function clockupdate(){
    let now=new Date()
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();

    if(hours<10) hours= "0" + hours;
    if(minutes<10) minutes= "0" + minutes;
    if(seconds<10) seconds= "0" + seconds;

    let currentTime= hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").textContent= currentTime;
}

setInterval(clockupdate,1000)
clockupdate();


// function clockupdate(){
//     document.getElementById("clock").textContent=new Date()
// }
// clockupdate()