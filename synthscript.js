let keys = document.querySelectorAll(".key");


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

document.body.addEventListener("keydown",testFunk);


function testFunk(){
    let pressed = event.keyCode;
    console.log("I pressed the key "+pressed);
    document.body.addEventListener("keyup",testFun);
}

function testFun(){
    let pressed = event.keyCode;
    console.log("I stopped pressing the key "+pressed);
}