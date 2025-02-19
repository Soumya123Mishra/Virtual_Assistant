let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice =  document.querySelector("#voice");

function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text);
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishes(){
let day = new Date()
let hours= day.getHours()
if(hours>=0  && hours<12){
speak("Good Morning")
}
else if(hours>=12 && hours < 16){
speak("Good afternoon")}
else{
    speak("good evening")
 }
}
window.addEventListener('load',()=>{
  wishes();
})

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =  new speechRecognition()
recognition.onresult=(event)=>{
  
  let currentIndex = event.resultIndex
   let transcript = event.results[currentIndex][0].transcript
   content.innerText = transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click" ,()=>{
    recognition.start()
    btn.style.display ="none"
    voice.style.display= "block"
})
 function takeCommand(message){
    btn.style.display = "flex"
    voice.style.display="none";

  if(message.includes("hello") || message.includes("hii")){
    speak("hello What i can help you")
  }
  else if(message.includes("who are you")){
       speak("i am  your virtual assistant shifra created by soumya mishra")
  }
  else if(message.includes("open Youtube")){
    speak("opening Youtube")
    window.open("https://www.youtube.com/")
  }
  else if(message.includes("open Facebook")){
    speak("opening facebook")
    window.open("https://www.facebook.com/")
  }
  else if(message.includes("open Whatsapp ")){
    speak("opening Whasapp")
    window.open("whatsapp://")
  }
  else if(message.includes("open InstaGram")){
    speak("opening Instagram ")
    window.open("https://www.instagram.com/")
  }
  else if(message.includes("open  Google")){
    speak("opening Google")
    window.open("https://www.google.com/")
  }
  else if(message.includes("open calculator")){
    speak("opening Calculator")
    window.open("calculator://")
  }
  else if(message.includes("open linkidin")){
    speak("opening linkidin")
    window.open("linkidin://")
  }
  else if(message.includes("time")){
   let time = new Date().toLocaleString (undefined,{hour:"numeric", min:"numeric"})
   speak(time)
  }
  else if(message.includes("date")){
    let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"})
    speak(date)
   }
   else if(message.includes("day")){
    let day = new Date().toLocaleString(undefined,{month:"short"})
    speak(day)
   }
  else{
    let finalText = "This is i Found On internet regarding" + message.replace("shipra", "")
    ||message.replace("shifra", "")
    speak(finalText)
    window.open(`https://www.google.com/search?q=${message.replace("shipra" ,"")}`,"_blank")
        
  }
}