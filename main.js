let input = document.querySelector(".add-task input");
let plusBtn = document.querySelector(".add-task .plus");
let taskContent = document.querySelector(".tasks-content");
let count = document.querySelector(".task-count span");
let completed = document.querySelector(".task-completed span");
let disabled = document.querySelector(".disabled");

// Focus On The Input Feiled
window.onload = function () {
  input.focus();
};

// Sweet Alert

function sweetAlarm() {
  let container = document.createElement("div");
  container.classList = "alert";

  let div = document.createElement("div");
  div.innerHTML = "Please Make Sure That The Input Is Not Empty";

  let iconContainer = document.createElement("div");
  iconContainer.classList = "iconContainer";
  let icon = document.createElement("i");
  icon.classList = "fa-solid fa-xmark";

  let h3 = document.createElement("h3");
  h3.innerHTML = "Oops...";

  let btn = document.createElement("button");
  btn.innerHTML = "OK";

  btn.addEventListener("click", (e) => {
    container.remove();
    disabled.classList.remove("disablDiv");
  });

  let link = document.createElement("a");
  link.innerHTML = "Whay do you have this issue ?";
  link.href = "https://sweetalert2.github.io/#examples";

  document.querySelector(".container").appendChild(container);
  container.appendChild(div);
  container.prepend(h3);
  iconContainer.appendChild(icon);
  container.prepend(iconContainer);
  container.appendChild(btn);
  container.appendChild(link);

  disabled.classList = "disablDiv";
}

// Adding New Elements

plusBtn.onclick = function () {
  if (input.value === "") {
    // Add Sweet Alert
    let task = document.querySelector(".container");
    for (i = 0; i < task.length; i++) {
      task[i].disabled = true;
    }
    sweetAlarm();
  } else {
    let noTask = document.querySelector(".no-task");
    if (noTask) {
      noTask.remove();
    }

    let div = document.createElement("div");
    div.classList = "new-task";
    div.textContent = input.value;
    let span = document.createElement("span");
    span.classList = "del";
    span.textContent = "Delete";

    div.appendChild(span);
    taskContent.appendChild(div);
    input.value = "";
    input.focus();
    calculateTask();
  }
};

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    e.target.parentNode.remove();

    if (taskContent.childElementCount === 0) {
      noTaskMsg();
    }
    calculateTask();
  }
  if (e.target.classList.contains("new-task")) {
    e.target.classList.toggle("finish");
    calculateTask();
  }
});

function noTaskMsg() {
  let noTask = document.createElement("div");

  noTask.textContent = "No Task To Show";
  noTask.classList = "no-task";

  taskContent.appendChild(noTask);
}

function calculateTask() {
  count.innerHTML = document.querySelectorAll(
    ".tasks-content .new-task"
  ).length;

  completed.innerHTML = document.querySelectorAll(
    ".tasks-content .finish"
  ).length;
}
