document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newTaskDescription = document.getElementById('new-task-description').value;

      if (newTaskDescription !== "") {
          const taskItem = document.createElement('li');
          taskItem.textContent = newTaskDescription;

          // Adding delete button to each task
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'X';
          deleteButton.addEventListener('click', () => {
              taskItem.remove();
          });

          taskItem.appendChild(deleteButton);
          taskList.appendChild(taskItem);

          // Clear the input field
          form.reset();
      }
  });
});
