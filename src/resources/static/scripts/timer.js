console.log("Timer.js");


//Starting Minutes
const startingMinutes = 1;
let time = startingMinutes * 60;
let countdown = document.getElementById("countdown");
countdown.innerHTML = `${startingMinutes}` + ":" + `00`;




//Timer object
let timer = {
    getSeconds: () => {
            const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            return seconds;
    },
    getMinutes: () => {
        const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            return minutes;
    },
    printTimer: () => {
        const minutes = Math.floor(time / 60);
            let seconds = time % 60;
            console.log("Debug: " +`${minutes}` + ":" + `${seconds}`);
    }

};




//repeats a task at a given interval
let intervalId = setInterval(updateCountDown, 1000);

console.log(intervalId);




    




function updateCountDown(){
    // Divide the seconds to get the total mintues
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    //adjust display helper
    if(seconds < 10){
        seconds = '0' + seconds
    }else{
        seconds;
    }

    // console.log("Debug: " +`${minutes}` + ":" + `${seconds}`);
   
    //display timer
    countdown.innerHTML = `${minutes}:${seconds}`
    //Decrease time
    time --; 

    if(minutes == 0 && seconds == 0){
        countdown.innerHTML = "Done"
        clearInterval(intervalId);
    }
}