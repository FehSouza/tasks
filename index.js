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
$addTask.maxLength = "60";

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

const $container = document.createElement("div");
$container.classList.add("container");

const $content = document.createElement("section");
$content.classList.add("content");

const $taskTitle = document.createElement("h2");
$taskTitle.classList.add("taskTitle");
$taskTitle.textContent = `Todas as Tarefas`;

const $tasksListWrapper = document.createElement("ul");
$tasksListWrapper.classList.add("tasksListWrapper");

$main.appendChild($headerWrapper);
$main.appendChild($addTaskWrapper);
$main.appendChild($container);
$headerWrapper.appendChild($logoTasks);
$headerWrapper.appendChild($nameTasks);
$addTaskWrapper.appendChild($addTask);
$addTaskWrapper.appendChild($buttonAdd);
$container.appendChild($withTaskWrapper);
$container.appendChild($content);
$content.appendChild($taskTitle);
$content.appendChild($tasksListWrapper);

const createCheckBox = () => {
  const $checkBox = document.createElement("button");
  $checkBox.classList.add("checkBox");
  $checkBox.addEventListener("click", () => $checkBox.remove());

  const $checkIcon = document.createElement("img");
  $checkIcon.setAttribute("src", "./images/done-filled.svg");
  $checkIcon.classList.add("checkIcon");
  $checkIcon.addEventListener("click", () => $checkIcon.remove());

  return $checkBox;
};

const createDeleteIcon = (actionRemove) => {
  const $deleteIcon = document.createElement("img");
  $deleteIcon.setAttribute("src", "./images/delete-filled.svg");
  $deleteIcon.classList.add("deleteIcon");
  $deleteIcon.addEventListener("click", actionRemove);

  return $deleteIcon;
};

const createTask = (task, actionRemove) => {
  const $tasksWrapper = document.createElement("li");
  $tasksWrapper.classList.add("tasksWrapper");
  const $taskNameWrapper = document.createElement("div");
  $taskNameWrapper.classList.add("taskNameWrapper");
  const $taskName = document.createElement("span");
  $taskName.classList.add("taskName");
  $taskName.textContent = task;

  const $deleteIcon = createDeleteIcon(actionRemove);
  const $checkBox = createCheckBox();

  $tasksWrapper.appendChild($taskNameWrapper);
  $taskNameWrapper.appendChild($deleteIcon);
  $taskNameWrapper.appendChild($taskName);
  $tasksWrapper.appendChild($checkBox);

  return $tasksWrapper;
};

const renderNoTasks = () => {
  $noTaskWrapper.appendChild($noTaskTitle);
  $noTaskWrapper.appendChild($noTaskImage);
  $noTaskWrapper.appendChild($noTaskNoneTxt);
  $main.appendChild($noTaskWrapper);
  $main.appendChild($buttonRegisterTask);
};

const removeNoTasks = () => {
  $noTaskWrapper.remove();
  $buttonRegisterTask.remove();
};

const toggleNoTasks = (status) => {
  if (status) renderNoTasks();
  if (status === false) removeNoTasks();
};

let tasks = [];

const addTask = (name, status) => {
  tasks.push({ name: name, completed: status });
};

const removeTask = (position) => {
  let newTasks = [];
  for (const index in tasks) {
    if (position !== index) newTasks.push(tasks[index]);
  }
  tasks = newTasks;
};

const handleRemoveTask = (position) => {
  removeTask(position);
  renderTasks();
};

const renderTasks = () => {
  $tasksListWrapper.innerHTML = "";
  for (const index in tasks) {
    const $task = createTask(tasks[index].name, () => handleRemoveTask(index));
    $tasksListWrapper.appendChild($task);
  }
};

const handleAddTask = () => {
  const nameTask = $addTask.value;
  addTask(nameTask, false);
  renderTasks();
};

$buttonAdd.addEventListener("click", handleAddTask);
