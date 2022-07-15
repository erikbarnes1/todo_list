const task = document.querySelector("#newtask");
task.textContent = task;
const date = document.querySelector("#date");

const checkPrio = () => {
  const priority = document.querySelector('input[name="priority"]:checked');
  if (priority != null) {
    return priority.value;
  } else {
    return "no prio";
  }
};

const newTaskBtn = document.querySelector("#newtaskbtn");
newTaskBtn.addEventListener("click", () => {
  console.log(task.value, date.value, checkPrio());
});
