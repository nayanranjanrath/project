let button=document.getElementById("a")
button.onclick=async function start(params) {
    

function  sound(){
    return new Promise((resolve , reject) => {
        
    
let audio=new Audio("start1.mp3")
audio. play();
audio .onended=resolve ;})
}

 await sound()

 {window.location.href="2nd.html",3000}
}

