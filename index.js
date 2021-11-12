const $main = document.querySelector(".main");

const $headerWrapper = document.createElement("div");
$headerWrapper.classList.add("headerWrapper");

const $logoTasks = document.createElement("img");
$logoTasks.classList.add("logoTasks");
$logoTasks.setAttribute("src", "./images/grupo 1.svg");

const $nameTasks = document.createElement("span");
$nameTasks.classList.add("nameTasks");
$nameTasks.textContent = "Tasks";

const $addTaskWrapper = document.createElement("div");
$addTaskWrapper.classList.add("addTaskWrapper");

const $addTask = document.createElement("input");
$addTask.classList.add("addTask");
$addTask.placeholder = `Digite uma tarefa`;

const $buttonAdd = document.createElement("button");
$buttonAdd.classList.add("buttonAdd");
$buttonAdd.textContent = `ADD`;

const $noTaskWrapper = document.createElement("div");
$noTaskWrapper.classList.add("noTaskWrapper");

const $noTaskTitle = document.createElement("h2");
$noTaskTitle.classList.add("noTaskTitle");
$noTaskTitle.textContent = `Todas as Tarefas`;

const $noTaskImage = document.createElement("img");
$noTaskImage.classList.add("noTaskImage");
$noTaskImage.setAttribute("src", "./images/undraw_to_do.svg");

const $noTaskNoneTxt = document.createElement("span");
$noTaskNoneTxt.classList.add("noTaskNoneTxt");
$noTaskNoneTxt.textContent = `Não há tarefas cadastradas ainda`;

const $buttonRegisterTask = document.createElement("button");
$buttonRegisterTask.classList.add("buttonRegisterTask");
$buttonRegisterTask.textContent = `Cadastrar uma tarefa agora`;

const $withTaskWrapper = document.createElement("div");
$withTaskWrapper.classList.add("withTaskWrapper");

const $completedTasksWrapper = document.createElement("div");
$completedTasksWrapper.classList.add("completedTasksWrapper");

const $completedWrapper = document.createElement("div");
$completedWrapper.classList.add("completedWrapper");

const $completedTitle = document.createElement("h2");
$completedTitle.classList.add("completedTitle");
$completedTitle.textContent = `Concluídas`;

const $completedNumber = document.createElement("span");
$completedNumber.classList.add("completedNumber");

const $completedEvolutionExternal = document.createElement("div");
$completedEvolutionExternal.classList.add("completedEvolutionExternal");

const $completedEvolutionInternal = document.createElement("div");
$completedEvolutionInternal.classList.add("completedEvolutionInternal");

const $taskTitle = document.createElement("h2");
$taskTitle.classList.add("taskTitle");
$taskTitle.textContent = `Todas as Tarefas`;

const $tasksListWrapper = document.createElement("div");
$tasksListWrapper.classList.add("tasksListWrapper");

$main.appendChild($headerWrapper);
$main.appendChild($addTaskWrapper);
$headerWrapper.appendChild($logoTasks);
$headerWrapper.appendChild($nameTasks);
$addTaskWrapper.appendChild($addTask);
$addTaskWrapper.appendChild($buttonAdd);

let totalTasksAdd = 0;
let totalTasksCompleted = 0;

const noTasksAdded = (status) => {
  if (status) {
    $noTaskWrapper.appendChild($noTaskTitle);
    $noTaskWrapper.appendChild($noTaskImage);
    $noTaskWrapper.appendChild($noTaskNoneTxt);
    $main.appendChild($noTaskWrapper);
    $main.appendChild($buttonRegisterTask);
  }
  if (status === false) {
    $noTaskWrapper.remove();
    $buttonRegisterTask.remove();
  }
};

const resetForFinishingTasks = () => {
  $withTaskWrapper.remove();
  noTasksAdded(true);
};

const printCompletedTasks = () => {
  $main.appendChild($withTaskWrapper);
  $withTaskWrapper.appendChild($completedTasksWrapper);
  $withTaskWrapper.appendChild($taskTitle);
  $completedTasksWrapper.appendChild($completedWrapper);
  $completedWrapper.appendChild($completedTitle);
  $completedTasksWrapper.appendChild($completedEvolutionExternal);
  $completedEvolutionExternal.appendChild($completedEvolutionInternal);
};

const relationOfTasks = (completedTasks, totalTasks) => {
  $completedNumber.textContent = `${completedTasks}/${totalTasks}`;
  $completedWrapper.appendChild($completedNumber);
};

const printTask = () => {
  const $tasksWrapper = document.createElement("div");
  $tasksWrapper.classList.add("tasksWrapper");

  const $taskNameWrapper = document.createElement("div");
  $taskNameWrapper.classList.add("taskNameWrapper");

  const $taskName = document.createElement("span");
  $taskName.classList.add("taskName");
  $taskName.textContent = $addTask.value;

  const $checkIcon = document.createElement("img");
  $checkIcon.setAttribute("src", "./images/done-filled.svg");
  $checkIcon.classList.add("checkIcon");
  $checkIcon.addEventListener("click", () => {
    $checkIcon.remove();
    totalTasksCompleted--;
    relationOfTasks(totalTasksCompleted, totalTasksAdd);
    $tasksWrapper.appendChild($buttonTaskChecked);
  });

  const $buttonTaskChecked = document.createElement("button");
  $buttonTaskChecked.classList.add("buttonTaskChecked");
  $buttonTaskChecked.addEventListener("click", () => {
    $buttonTaskChecked.remove();
    totalTasksCompleted++;
    relationOfTasks(totalTasksCompleted, totalTasksAdd);
    $tasksWrapper.appendChild($checkIcon);
  });

  const $deleteIcon = document.createElement("img");
  $deleteIcon.classList.add("deleteIcon");
  $deleteIcon.setAttribute("src", "./images/delete-filled.svg");
  $deleteIcon.addEventListener("click", () => {
    const check = $tasksWrapper.querySelector(".checkIcon");
    if (check) totalTasksCompleted--;
    $tasksWrapper.remove();
    totalTasksAdd--;
    relationOfTasks(totalTasksCompleted, totalTasksAdd);
    if ($tasksListWrapper.textContent === "") resetForFinishingTasks();
  });

  $main.appendChild($tasksListWrapper);
  $tasksListWrapper.appendChild($tasksWrapper);
  $tasksWrapper.appendChild($taskNameWrapper);
  $taskNameWrapper.appendChild($deleteIcon);
  $taskNameWrapper.appendChild($taskName);
  $tasksWrapper.appendChild($buttonTaskChecked);
};

const addTask = () => {
  if ($addTask.value.trim() === "") return ($addTask.value = "");
  if ($addTask.value) {
    totalTasksAdd++;
    noTasksAdded(false);
    printCompletedTasks();
    relationOfTasks(totalTasksCompleted, totalTasksAdd);
    printTask();
    $addTask.value = "";
    $addTask.focus();
  }
};

$buttonAdd.addEventListener("click", addTask);
$buttonRegisterTask.addEventListener("click", () => {
  $addTask.focus();
});

noTasksAdded(true);
