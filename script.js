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

        // Handling finding a power of a number
        display.value = display.value.replace(/(\d+)\^(\d+)/g, "Math.pow($1,$2)");

        // Handling finding a square root of a number
        display.value = display.value.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");

        // Handling the sin, cos and tan functions
        display.value = display.value.replace(/sin\(([^)]+)\)/g, "Math.sin($1 * Math.PI / 180)"); // sin

        display.value = display.value.replace(/cos\(([^)]+)\)/g, "Math.cos($1 * Math.PI / 180)"); // cos

        display.value = display.value.replace(/tan\(([^)]+)\)/g, "Math.tan($1 * Math.PI / 180)"); // tan

        // Handling PI
        display.value = display.value.replace(/π/g, "Math.PI");



        display.value = eval(display.value);
    }
    catch(error)
    {
        display.value = "Error";
    }

}