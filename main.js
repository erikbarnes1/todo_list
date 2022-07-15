const taskList = [];
let taskListLength = taskList.length;

const task = document.querySelector("#newtask");
const date = document.querySelector("#date");
const taskContainer = document.querySelector(".task_container");

const checkPrio = () => {
  const priority = document.querySelector('input[name="priority"]:checked');
  return priority.value;
};

const factoryTask = (task_a, date_b, priority_c) => {
  return { task_a, date_b, priority_c };
};

const addTask = () => {
  let newTask = Object.create(factoryTask(task.value, date.value, checkPrio()));
  taskList.push(newTask);
  let div = document.createElement("div");
  div.classList.add("displayed_task");
  taskContainer.appendChild(div);
  let a = document.createElement("div");
  a.classList.add("task_description");
  a.textContent = newTask.task_a;
  let b = document.createElement("div");
  b.classList.add("task_date");
  b.textContent = newTask.date_b;
  let c = document.createElement("div");
  c.classList.add("task_prio");
  c.textContent = newTask.priority_c;
  let x = document.createElement("button");
  x.classList.add("delete_task");
  x.textContent = "x";
  x.addEventListener("click", () => {
    div.remove();
  });
  div.appendChild(a);
  div.appendChild(b);
  div.appendChild(c);
  div.appendChild(x);
};

const newTaskBtn = document.querySelector("#newtaskbtn");
newTaskBtn.addEventListener("click", addTask);

// Folders

const folder = document.querySelector("#newfolder");
const folderContainer = document.querySelector("#folder_container");

const addFolder = () => {
  let folderDiv = document.createElement("div");
  folderDiv.classList.add("displayed_folder");
  folderContainer.appendChild(folderDiv);
  let d = document.createElement("div");
  d.classList.add("folder_name");
  d.textContent = folder.value;
  folderDiv.appendChild(d);
  d.addEventListener("click", displayTaskLoop);
};

const newFolderBtn = document.querySelector("#newfolderbtn");
newFolderBtn.addEventListener("click", addFolder);

// Loop through tasks on folder click

const displayTaskLoop = () => {
  taskList.forEach(({ date_b, priority_c, task_a }) => {
    let div = document.createElement("div");
    div.classList.add("displayed_task");
    taskContainer.appendChild(div);
    let a = document.createElement("div");
    a.classList.add("task_description");
    a.textContent = task_a;
    let b = document.createElement("div");
    b.classList.add("task_date");
    b.textContent = date_b;
    let c = document.createElement("div");
    c.classList.add("task_prio");
    c.textContent = priority_c;
    let x = document.createElement("button");
    x.classList.add("delete_task");
    x.textContent = "x";
    x.addEventListener("click", () => {
      div.remove();
    });
    div.appendChild(a);
    div.appendChild(b);
    div.appendChild(c);
    div.appendChild(x);
  });
};
