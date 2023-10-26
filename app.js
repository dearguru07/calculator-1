let output=document.getElementById('input')

function show(num){
    output.value =  output.value+num
}
function calculate(){
try{
    output.value=eval(output.value)
}
catch{
    output.value='Entha Taagav...🍻🤣'
}
}
function clr(){
    output.value=''
}
function dlt(){
    output.value=output.value.slice(0,-1)
}



















