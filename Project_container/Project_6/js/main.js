
const addButton = document.getElementById("add");
const waitList = document.getElementById("done");
const input = document.getElementById("input");
const fieldForm = document.querySelectorAll("#todo")

function toDoList() {
    // e fshin nese perdor veq space
    if (input.value.trim() === "") {
        return;
    }
    const newItem = document.createElement('div');
    newItem.classList.add("elements");
    waitList.appendChild(newItem);

    const newText = document.createElement('span');
    newText.textContent = input.value; // teksti
    newItem.appendChild(newText)


    const removeButton = document.createElement('button');
    removeButton.classList.add("btn");
    removeButton.textContent = "Done";
    
    // remove
    removeButton.onclick = function(){
        newItem.remove();
    }
    
    newItem.appendChild(removeButton);


    input.value = "";
}

addButton.addEventListener('click', toDoList);

// MOST IMPORTANT LESSON I LEARNED IN RANDOM NIGHT
input.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        toDoList();
    }
})
