document.addEventListener("DOMContentLoaded", function () {
    let taskInput = document.getElementById("taskInput");
    let addTaskButton = document.getElementById("addTaskButton");
    let taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function() {
        let taskDescription = taskInput.value.trim();
        if (taskDescription !== "") {
            let task = document.createElement("li");
            task.textContent = taskDescription;

            let deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                task.remove();
            });

            task.appendChild(deleteButton);
            taskList.appendChild(task);
            taskInput.value = "";
        }
    });
});
