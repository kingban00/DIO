function adiciona(){
    var toDoWrapper = document.getElementById('txtodo')
    var toDo = toDoWrapper.value
    var check = document.getElementById('check')

    check.innerHTML += `<p>
                        <input type="checkbox" name="toDoElement" id="toDoElement">
                        <label for="toDoElement">${toDo}</label>
                        </p>`
}
