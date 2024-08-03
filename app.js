const inp = document.querySelector("input");
const btn = document.querySelector("button");
const ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let newTask = document.createElement("li");
    newTask.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add = "delete";

    newTask.appendChild(delBtn);
    ul.appendChild(newTask);
    inp.value = "";
});

ul.addEventListener("click", function(event) {          // Event Delegation through Event Bubbling
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

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