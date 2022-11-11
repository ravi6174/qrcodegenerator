let inputElement=document.getElementById("inputElement");
let btn = document.getElementById("generateBtn");
let imgDiv = document.getElementById("imgContainer");
let paraGraph = document.getElementById("para");
let Error = document.getElementById("error");
errorValue=Error.textContent;


function generate(){
   

        let inputValue=inputElement.value;
        let image = document.createElement("img");
        image.classList.add(".Img")
        image.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+inputValue;
        imgDiv.appendChild(image)
        paraGraph.classList.toggle("d-none")
        previous=inputValue;
        document.getElementById("error").textContent="";

}

function generateqr(){

    let inputValue=inputElement.value;
    imgDiv.textContent=""
   

    if(inputValue==""){
        Error.textContent="Input can't be Empty"
        Error.classList.toggle("d-none")
    }
    else{
        paraGraph.classList.toggle("d-none")
        setTimeout(generate,400)
    }
   
}

btn.addEventListener("click",generateqr);