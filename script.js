
const display=document.getElementById("display")


function appenddisplay(input){

    display.value+=input;
}

function clearDisplay(){
    display.value = " ";
}

function submit(){
try {
    display.value = math.evaluate(display.value);
  } catch {
    display.value = "Error";
  }
}