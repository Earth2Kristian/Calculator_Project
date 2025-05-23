const display = document.getElementById("display")


function appendToDisplay(input){
      display.value += input;
}

function backDisplay(){
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    display.value = "";

}

function calculate(){

    try{

        display.value = display.value.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");

        display.value = display.value.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");

        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }

}