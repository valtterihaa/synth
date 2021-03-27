const keys = document.querySelectorAll(".key");
const whiteKeys =     ["90","83","88","68","67","86","71","66","72","78","74","77"];
const whiteSounds =   ["C" ,"Db","D" ,"Eb","E" ,"F" ,"Gb","G" ,"Ab","A" ,"Bb","B"];

keys.forEach((note) => {
    note.addEventListener("mousedown",synthPress);
});

function synthPress(){
    let soundOBject = new Audio("sounds/"+this.id+".mp3");
    soundOBject.loop = true;
    soundOBject.play();

    keys.forEach((note) => {
        note.addEventListener("mouseup", () => {
            soundOBject.pause();
        });
    });
};

document.body.addEventListener("keydown", (e) => {
    if (e.repeat) return;
    let pressed = event.keyCode;
    let foundya = whiteKeys.indexOf(`${pressed}`);
    // let activeTo = document.getElementById(`whiteSounds[foundya]`);
    // console.log("this is"+activeTo);
    // activeTo.classList.add("active");
    console.log("wtf "+whiteKeys.indexOf(`${pressed}`));
        let keySound = new Audio("sounds/"+whiteSounds[foundya]+".mp3");
        keySound.loop = true;
        keySound.play();

        document.body.addEventListener("keyup", () => {
            keySound.pause();
            // activeTo.classList.remove("active");
        });
    console.log("I pressed the key "+pressed);
    
});
