
function addTodo() {
    const element = document.querySelector("input");
    const val = element.value;

    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");
    spanEl.innerHTML = val;
    buttonEl.innerHTML = "Delete";
    /////
    const divEl = document.createElement("div");
    divEl.appendChild(spanEl);
    divEl.appendChild(buttonEl);

    document.querySelector("body").appendChild(divEl);

}


