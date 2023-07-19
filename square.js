function calculateCube(){
    var Num1=document.getElementById('Num1').value;
    var Results=Math.sqrt(Num1);
    // var Results=Num1 * Num1; 
    document.getElementById('Result').value=Results;
}

function reset(){
    document.getElementById('Num1').value = ""
    document.getElementById('Result').value = ""
}