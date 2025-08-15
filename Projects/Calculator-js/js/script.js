function display_value(val){
    document.getElementById('display').value = document.getElementById('display').value + val;
}

function clear_display(){
    document.getElementById('display').value = "";
}

function backspace_display(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0,-1);
}

function calculate(){
    document.getElementById('display').value = eval(document.getElementById('display').value)
}