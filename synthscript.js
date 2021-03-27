let keys = document.querySelectorAll(".key");
let keyCodes = [
    {code:"90",key:"z",note:"C"},
    {code:"88",key:"x",note:"D"},
    {code:"67",key:"c",note:"E"},
    {code:"86",key:"v",note:"F"},
    {code:"66",key:"b",note:"G"},
    {code:"78",key:"n",note:"A"},
    {code:"77",key:"m",note:"B"},
];

let whiteKeys =     ["90","83","88","68","67","86","71","66","72","78","74","77"];
let whiteSounds =   ["C" ,"Db","D" ,"Eb","E" ,"F" ,"Gb","G" ,"Ab","A" ,"Bb","B"];

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
    console.log("wtf "+whiteKeys.indexOf(`${pressed}`));
        let keySound = new Audio("sounds/"+whiteSounds[foundya]+".mp3");
        keySound.loop = true;
        keySound.play();

        document.body.addEventListener("keyup", () => {
            keySound.pause();
        });
    console.log("I pressed the key "+pressed);
    
        document.body.addEventListener("keyup",testFun);
});

    


function testFun(){
    let pressed = event.keyCode;
    console.log("I stopped pressing the key "+pressed);
}