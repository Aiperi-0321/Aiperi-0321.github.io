function addList (){
    const textInput = document.querySelector("input");
    const text = textInput.value.trim()

if (text){
    const li = document.createElement("li");
    li.textContent = text;

const textList = document.querySelector("ul");
textList.append(li);

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";
deleteButton.onclick = function(){
    li.remove();
};
li.append(deleteButton);
textInput.value = "";
}
}