const keys = document.querySelectorAll(".key");
const allKeys =     ["90","83","88","68","67","86","71","66","72","78","74","77"];
const sounds =   ["C" ,"Db","D" ,"Eb","E" ,"F" ,"Gb","G" ,"Ab","A" ,"Bb","B"];

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
    let foundya = allKeys.indexOf(`${pressed}`);
    let note = sounds[foundya];
    let activeTo = document.getElementById(note);
    activeTo.classList.add("active");
    console.log("wtf "+foundya);
        let keySound = new Audio("sounds/"+note+".mp3");
        keySound.loop = true;
        keySound.play();
        document.body.addEventListener("keyup", () => {
            keySound.pause();
            activeTo.classList.remove("active");
        });
    console.log("I pressed the key "+foundya);
    
});
