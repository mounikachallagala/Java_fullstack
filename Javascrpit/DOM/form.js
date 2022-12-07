function focusHandler(){
    document.getElementById('abc').style.backgroundColor='yellow'
}
function changeCase(){
    let name = document.getElementById('uname').value;
    console.log(name)
    document.getElementById('uname').value= name.toUpperCase()
}
