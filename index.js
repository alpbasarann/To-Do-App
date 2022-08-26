let formDOM = document.querySelector("#form")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault()
    let toDoInputDOM = document.querySelector("#toDo")
    const liDOM = document.createElement("li")
    liDOM.innerHTML = toDoInputDOM.value
    document.getElementById("output").appendChild(liDOM);
    let deleteButton = document.createElement('button')
    deleteButton.setAttribute("id","deleteButton");
    deleteButton.innerHTML = "Remove"
    deleteButton.style= "color:black; position: absolute; right: 150px"
    liDOM.appendChild(deleteButton)
    deleteButton.onclick = function(){
        deleteButton.parentElement.remove()
        return;
    };
    toDoInputDOM.value = '';
}
