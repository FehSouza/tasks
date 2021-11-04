const $main = document.querySelector(".main");

const $headerWrapper = document.createElement("div");
$headerWrapper.classList.add("headerWrapper");

const $logoTasks = document.createElement("img");
$logoTasks.classList.add("logoTasks");
$logoTasks.setAttribute("src", "./images/grupo 1.svg");

const $nameTasks = document.createElement("span");
$nameTasks.classList.add("nameTasks");
$nameTasks.textContent = "Tasks";

$headerWrapper.appendChild($logoTasks);
$headerWrapper.appendChild($nameTasks);

const $addTaskWrapper = document.createElement("div");
$addTaskWrapper.classList.add("addTaskWrapper");

const $addTask = document.createElement("input");
$addTask.classList.add("addTask");
$addTask.placeholder = `Digite uma tarefa`;

const $buttonAdd = document.createElement("button");
$buttonAdd.classList.add("buttonAdd");
$buttonAdd.textContent = `ADD`;

$addTaskWrapper.appendChild($addTask);
$addTaskWrapper.appendChild($buttonAdd);

const noTasksAdded = () => {
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

  $noTaskWrapper.appendChild($noTaskTitle);
  $noTaskWrapper.appendChild($noTaskImage);
  $noTaskWrapper.appendChild($noTaskNoneTxt);

  const $buttonRegisterTask = document.createElement("button");
  $buttonRegisterTask.classList.add("buttonRegisterTask");
  $buttonRegisterTask.textContent = `Cadastrar uma tarefa agora`;

  $main.appendChild($noTaskWrapper);
  $main.appendChild($buttonRegisterTask);
};

const withTasksAdded = () => {
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
  $completedNumber.textContent = `2/4`;

  const $completedEvolutionExternal = document.createElement("div");
  $completedEvolutionExternal.classList.add("completedEvolutionExternal");

  const $completedEvolutionInternal = document.createElement("div");
  $completedEvolutionInternal.classList.add("completedEvolutionInternal");

  $withTaskWrapper.appendChild($completedTasksWrapper);
  $completedTasksWrapper.appendChild($completedWrapper);
  $completedWrapper.appendChild($completedTitle);
  $completedWrapper.appendChild($completedNumber);
  $completedTasksWrapper.appendChild($completedEvolutionExternal);
  $completedEvolutionExternal.appendChild($completedEvolutionInternal);

  const $tasksWrapper = document.createElement("div");
  $tasksWrapper.classList.add("tasksWrapper");

  const $taskTitle = document.createElement("h2");
  $taskTitle.classList.add("taskTitle");
  $taskTitle.textContent = `Todas as Tarefas`;

  const $tasksAddWrapper = document.createElement("div");
  $tasksAddWrapper.classList.add("tasksAddWrapper");

  const $taskAdd = document.createElement("div");
  $taskAdd.classList.add("taskAdd");

  const $taskNameWrapper = document.createElement("div");
  $taskNameWrapper.classList.add("taskNameWrapper");

  const $deleteIcon = document.createElement("img");
  $deleteIcon.classList.add("deleteIcon");
  $deleteIcon.setAttribute("src", "./images/delete-filled.svg");

  const $taskName = document.createElement("span");
  $taskName.classList.add("taskName");
  $taskName.textContent = `Tarefa 01`;

  const $taskChecked = document.createElement("img");
  $taskChecked.classList.add("taskChecked");
  $taskChecked.setAttribute("src", "./images/done-filled.svg");

  $withTaskWrapper.appendChild($tasksWrapper);
  $tasksWrapper.appendChild($taskTitle);
  $tasksWrapper.appendChild($tasksAddWrapper);
  $tasksAddWrapper.appendChild($taskAdd);
  $taskAdd.appendChild($taskNameWrapper);
  $taskNameWrapper.appendChild($deleteIcon);
  $taskNameWrapper.appendChild($taskName);
  $taskAdd.appendChild($taskChecked);

  $main.appendChild($withTaskWrapper);
};

$main.appendChild($headerWrapper);
$main.appendChild($addTaskWrapper);

// noTasksAdded();
withTasksAdded();
