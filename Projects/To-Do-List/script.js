









"use strict";

const taskManager = document.querySelector(".taskManager");
const myInput = document.querySelector(".inputText");
const form = document.querySelector(".form");

// Prevent page reload on form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTask();
});

// Function to create a new task
const addTask = () => {
  const myTask = myInput.value.trim();

  if (myTask === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task container
  const taskBox = document.createElement("div");
  taskBox.classList.add("taskArea");

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("inputTick");

  // Task text
  const p = document.createElement("p");
  p.classList.add("taskText");
  p.textContent = myTask;

  // Strike-through when checked
  checkbox.addEventListener("change", () => {
    p.style.textDecoration = checkbox.checked ? "line-through" : "none";
    p.style.color = checkbox.checked ? "gray" : "black";
  });

  // ✅ Inline Update button
  const updateBtn = document.createElement("button");
  updateBtn.textContent = "Edit";
  updateBtn.classList.add("update");
  updateBtn.addEventListener("click", () => {
    // Create input field with current text
    const input = document.createElement("input");
    input.type = "text";
    input.value = p.textContent;
    input.classList.add("editInput");

    // Replace <p> with input
    taskBox.replaceChild(input, p);

    // Save changes on blur or Enter key
    input.addEventListener("blur", () => {
      p.textContent = input.value.trim() || p.textContent;
      taskBox.replaceChild(p, input);
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        input.blur(); // triggers blur event
      }
    });

    input.focus();
  });

  // Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove");
  removeBtn.addEventListener("click", () => {
    taskBox.remove();
  });

  // Assemble task
  taskBox.appendChild(checkbox);
  taskBox.appendChild(p);
  taskBox.appendChild(updateBtn);
  taskBox.appendChild(removeBtn);

  // Add to task manager
  taskManager.appendChild(taskBox);

  // Clear input
  myInput.value = "";
};
