const taskInput = document.querySelector("#taskInput");
const timeInput = document.querySelector("#timeInput");
const addBtn = document.querySelector("#addTask");
const deleteAllBtn = document.querySelector("#deleteAll");
const ul = document.querySelector("ul");
const noTasksMessage = document.querySelector("#noTasks");


// Function to toggle "No tasks" message visibility
function toggleNoTasksMessage() {
    if (ul.children.length === 0) {
        noTasksMessage.classList.remove("hidden");
    } else {
        noTasksMessage.classList.add("hidden");
    }
}

// Add new task with timing
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value;

    if (taskText === "" || taskTime === "") {
        alert("Please enter both task and time.");
        return;
    }

    let newTask = document.createElement("li");
    newTask.innerHTML = `
        ${taskText}
        <span class="time">[${taskTime}]</span>
    `;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    newTask.appendChild(delBtn);
    ul.appendChild(newTask);

    // Clear inputs
    taskInput.value = "";
    timeInput.value = "";

    toggleNoTasksMessage();
});

// Delete a single task
ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        toggleNoTasksMessage();
    }
});

// Delete all tasks
deleteAllBtn.addEventListener("click", function () {
    ul.innerHTML = ""; // Clear all tasks
    toggleNoTasksMessage();
});

// Show "No tasks" message initially
toggleNoTasksMessage();

/* 
let delBtns = document.querySelectorAll(".delete");   
for(delBtn of delBtns) {                              
    delBtn.addEventListener("click", function() {     
        let par = this.parentElement;              
        par.remove();                                 
    });                                               
}
*/

/*
This delBtn will not work for the new Added Task because if we have create any new element
and for the same element if we have created any Event Listener, then they will not aplied
on the new Element. And if we want that the same event listener will apply for the new elements,
then we use Event Delegation. Event Delegation is a type of phenomenon in which we use our
Event Bubbling Property. so basically what we do, if we want any new child element will trigger
by the same Event Listener then inspite of givin it to existed child we give to its parents.
*/