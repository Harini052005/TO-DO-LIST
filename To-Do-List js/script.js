const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
     inputBox.value = "";
     storeData();
}
listContainer.addEventListener("click", event => {
    if(event.target.tagName === "LI"){
       event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
    storeData();
});

function storeData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function displayTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayTask();