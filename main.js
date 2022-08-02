//the repository was tested and functional, if there is any error, contact us for resolution.

//get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(event)
{
  let audioKeyCode = getKeyCode (event);

    //typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    //if key exists
    const cantFoundAnyKey = !key


    if(cantFoundAnyKey) 
    {
        return;
    }
    console.log('play audio')

    //play audio
    addPlayinClass(key)
    playAudio(audioKeyCode)

}
function addPlayinClass(key)
{
    key.classList.add('playing')
}
function getKeyCode (event)
{
  let keyCode;

    const isKeyboard = event.type === "keydown"
    if(isKeyboard)
    {
        keyCode = event.keyCode
    }
    else
    {
        keyCode = event.target.dataset.ket
    }
    return keyCode 
}
function playAudio(audioKeyCode)
{
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass (envet)
{
    event.target.classList.remove("playing")
}
//click with mouse
function registerEvents()
{
    keys.forEach( function(key)
    {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })
    //keyboard type
    window.addEventListener("keydown",playNote )
}

window.addEventListener("load",registerEvents)


