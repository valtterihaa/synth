const keys = document.querySelectorAll(".key");
const keyNumbers =      ["90","83","88","68","67","86","71","66","72","78","74","77"];
const keyBoardKeys =    ["z","s","x","d","c","v","g","b","h","n","j","m"]
const sounds =          ["C" ,"Db","D" ,"Eb","E" ,"F" ,"Gb","G" ,"Ab","A" ,"Bb","B"];

keys.forEach((note) => {
    note.addEventListener("mousedown",playAudio)
    note.addEventListener("mouseup",stopAudio)
});

document.body.addEventListener("keydown", e => {
    if (e.repeat) return
    if (!keyBoardKeys.includes(e.key)) return
    let keyIndex = keyBoardKeys.indexOf(e.key)
    let audioElement = document.getElementById(`${sounds[keyIndex].toUpperCase()}.opus`)
    let highLightElement = document.getElementById(`${sounds[keyIndex].toUpperCase()}`)
    highLightElement.classList.add("active")
    console.log(e.key.toUpperCase())
    audioElement.play()
    audioElement.loop = true
    document.body.addEventListener("keyup", e => {
        if (e.repeat) return
        if (!keyBoardKeys.includes(e.key)) return
        let stopKeyIndex = keyBoardKeys.indexOf(e.key)
        let stopAudioElement = document.getElementById(`${sounds[stopKeyIndex].toUpperCase()}.opus`)
        let unHighLightElement = document.getElementById(`${sounds[stopKeyIndex].toUpperCase()}`)
        unHighLightElement.classList.remove("active")
        stopAudioElement.pause()
    })
})

function playAudio(){
    let audio = document.getElementById(this.id+".opus")
    audio.loop = true
    audio.play()
}

function stopAudio(){
    console.log(this.id)
    let audio = document.getElementById(this.id+".opus")
    audio.pause()
}