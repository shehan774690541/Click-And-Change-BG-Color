var i = 0

function load(){
    i = i + 1
    
    
    if (i == 1){
        document.getElementById("clrS").style.backgroundColor = "red";
    }
    if (i == 2){
        document.getElementById("clrS").style.backgroundColor = "blue";
    }
    if (i == 3){
        document.getElementById("clrS").style.backgroundColor = "green";
        i = 0
    }


    
    
}