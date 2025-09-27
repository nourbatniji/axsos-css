function deleteUser() {
    let button = document.querySelector(".delete")
    let number = document.querySelector("#numberOfReq")
    button.remove()
    number.innerText = Number(number.innerText) - 1
}
name_list = ["adrien-s", "alayne-s", "anne-s", "arry-s", "phil-s", "todd-s"];

function changeName() {
    let userName = document.querySelector("#username")
    userName.innerText = "Nour"
}


function addConnection() {
    let numberConnections = document.querySelector("#numberOfConnections")
    numberConnections.innerText = Number(numberConnections.innerText) + 1
}