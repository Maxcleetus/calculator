function buttonClick(val){
    document.getElementById("main-bar").value=document.getElementById("main-bar").value+val
}
function buttonClear(){
    document.getElementById("main-bar").value=''
}
function buttonPress(){
    var text = document.getElementById("main-bar").value
    var result = eval(text)
    document.getElementById("main-bar").value=result
}