<<<<<<< HEAD
// Fade-in sections when visible
const fadeSections = document.querySelectorAll('.fade-section');

function showOnScroll() {
  fadeSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dynamic footer year
document.getElementById('year').textContent = new Date().getFullYear();
=======
function addTask() {
  const input = document.getElementById("task-input");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle("completed");

  const actions = document.createElement("div");
  actions.className = "actions";

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "edit";
  editBtn.onclick = () => {
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
      span.textContent = newTask.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";
  deleteBtn.onclick = () => taskList.removeChild(li);

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);

  taskList.appendChild(li);
  input.value = "";
}
>>>>>>> 2781a2e (initial commit)
