

const playButton=document.getElementById('play-button')
const pauseButton=document.getElementById('pause-button')
const stopButton=document.getElementById('stop-button')
const textInput=document.getElementById('text')
const speedInput=document.getElementById('speed')

let cutrrentChara;

playButton.addEventListener('click', ()=>{
    playText(textInput.value)
})

pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
speedInput.addEventListener('input', () =>{
    stopText()
    playText(utterance.text.substring(currentChara))
})

//speechsynthsis determines speed what text speaking voice
const utterance = new SpeechSynthesisUtterance()

//this ftn will tell when it is done speaking
utterance.addEventListener('end', ()=>{
 textInput.disabled=false   
})
//to change speech rate in between
utterance.addEventListener('boundary', e => {
    currentChara = e.charIndex
})

function playText(text){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume()
    }
    if (speechSynthesis.speaking) return    
    utterance.text=text
    utterance.rate = speedInput.value || 1

   //disabling text editing while speaking
   textInput.disabled = true
   speechSynthesis.speak(utterance)
}

function pauseText(){
    if(speechSynthesis.speaking)
        speechSynthesis.pause()
    
}

function stopText(){
    speechSynthesis.resume()  //this takes us out of the paused state
    speechSynthesis.cancel() //this cancels everything after coming out from paused state from above line
}