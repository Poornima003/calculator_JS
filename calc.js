var screen = document.getElementById('screen')

function btnClick(value){
    screen.value +=value
}


function scrnclr(){
    screen.value = ""
}

function getResult(){
   result = eval(screen.value)
   screen.value = result
}