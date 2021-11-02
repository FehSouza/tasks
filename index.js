const $main = document.querySelector(".main");

const headerWrapper = document.createElement("div");
headerWrapper.classList.add("headerWrapper");

const logoTasks = document.createElement("img");
logoTasks.classList.add("logoTasks");
logoTasks.setAttribute("src", "./images/grupo 1.svg");

const nameTasks = document.createElement("span");
nameTasks.classList.add("nameTasks");
nameTasks.textContent = "Tasks";

headerWrapper.appendChild(logoTasks);
headerWrapper.appendChild(nameTasks);

const addAssignmentWrapper = document.createElement("div");
addAssignmentWrapper.classList.add("addAssignmentWrapper");

const addAssignment = document.createElement("input");
addAssignment.classList.add("addAssignment");
addAssignment.placeholder = `Digite uma tarefa`;

const buttonAdd = document.createElement("button");
buttonAdd.classList.add("buttonAdd");
buttonAdd.textContent = `ADD`;

addAssignmentWrapper.appendChild(addAssignment);
addAssignmentWrapper.appendChild(buttonAdd);

$main.appendChild(headerWrapper);
$main.appendChild(addAssignmentWrapper);
