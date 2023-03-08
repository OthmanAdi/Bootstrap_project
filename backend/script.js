function AddToTodo() {
    let todolistText = document.querySelector("#todoInput").value;
    let listItem = document.createElement("li");
    let textNode = document.createTextNode(todolistText);

    listItem.appendChild(textNode);
    document.querySelector("#myUL").appendChild(listItem);
}