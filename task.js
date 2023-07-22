function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();
  
    if (task !== "") {
      const taskList = document.getElementById("taskList");
      const li = document.createElement("li");
      li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">delete</button>
      `;
      taskList.appendChild(li);
      input.value = "";
    }
  }
  
  function removeTask(button) {
    const li = button.parentElement;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(li);
  }
  