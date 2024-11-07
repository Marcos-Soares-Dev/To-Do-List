const main = document.querySelector('main')
const themeSwitchIcon = document.getElementById('themeSwitchIcon')
const themeSwitchResponsive = document.querySelector('.themeSwitchResponsive')
const addTaskBtn = document.getElementById('addTaskBtn')
const addTaskBtnResponsive = document.getElementById('addTaskBtnResponsive')
const tasks = document.getElementById('tasks')
const searchBar = document.getElementById('searchBar')

addTaskBtn.addEventListener('click', () => {
    const dateTask = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    const newTask = document.createElement('div')
    newTask.innerHTML = `
      <div class="taskCard">
        <div class="cardContent">
          <input type="text" name="task" class="taskTitle" placeholder="Nome da tarefa"></input>
          <textarea class="taskDescription" name="taskDescription" placeholder="Descrição da tarefa" rows="4"></textarea>
        </div>
        <div class="taskOptions">
          <span id="dateTask">${dateTask}</span>
          <div class="addRemoveTask">
            <label class="saveTaskMessage">Salvar!</label>
            <i class="fas fa-check saveTaskIcon"></i>
            <i class="fas fa-pen editTaskIcon"></i>
            <i class="fas fa-trash removeTaskIcon"></i>
          </div>
        </div>
      </div>
    `
    
    
    newTask.querySelector('.saveTaskIcon').addEventListener('click', () => {
      
      newTask.querySelector('.cardContent input').disabled = true
      newTask.querySelector('.cardContent textarea').disabled = true
      
      
      newTask.querySelector('.saveTaskIcon').style.display = 'none'
      newTask.querySelector('.saveTaskMessage').style.display = 'none'

      
      newTask.id = newTask.querySelector('.taskTitle').value
    })

    newTask.querySelector('.saveTaskMessage').addEventListener('click', () => {
      
      newTask.querySelector('.cardContent input').disabled = true
      newTask.querySelector('.cardContent textarea').disabled = true
      
      
      newTask.querySelector('.saveTaskIcon').style.display = 'none'
      newTask.querySelector('.saveTaskMessage').style.display = 'none'

      
      newTask.id = newTask.querySelector('.taskTitle').value
    })
    
    
    newTask.querySelector('.editTaskIcon').addEventListener('click', () => {
      
      newTask.querySelector('.cardContent input').disabled = false
      newTask.querySelector('.cardContent textarea').disabled = false
      
      
      newTask.querySelector('.saveTaskIcon').style.display = 'block'
      newTask.querySelector('.saveTaskMessage').style.display = 'block'
    })
    
    
    newTask.querySelector('.removeTaskIcon').addEventListener('click', () => {
      
      const condition = confirm('Tem certeza que deseja excluir a tarefa: ' + newTask.querySelector('.taskTitle').value + '?')

      if (condition) {
        newTask.remove()
        return
      } else {
        return
      }      
    })
    
    tasks.appendChild(newTask)
  })

addTaskBtnResponsive.addEventListener('click', () => {
    const dateTask = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    
    const newTask = document.createElement('div')
    newTask.innerHTML = `
      <div class="taskCard">
        <div class="cardContent">
          <input type="text" name="task" class="taskTitle" placeholder="Nome da tarefa"></input>
          <textarea class="taskDescription" name="taskDescription" placeholder="Descrição da tarefa" rows="4"></textarea>
        </div>
        <div class="taskOptions">
          <span id="dateTask">${dateTask}</span>
          <div class="addRemoveTask">
            <label class="saveTaskMessage">Salvar!</label>
            <i class="fas fa-check saveTaskIcon"></i>
            <i class="fas fa-pen editTaskIcon"></i>
            <i class="fas fa-trash removeTaskIcon"></i>
          </div>
        </div>
      </div>
    `
    
    
    newTask.querySelector('.saveTaskIcon').addEventListener('click', () => {
      
      newTask.querySelector('.cardContent input').disabled = true
      newTask.querySelector('.cardContent textarea').disabled = true
      
      
      newTask.querySelector('.saveTaskIcon').style.display = 'none'
      newTask.querySelector('.saveTaskMessage').style.display = 'none'

      
      newTask.id = newTask.querySelector('.taskTitle').value
    })
    
    
    newTask.querySelector('.editTaskIcon').addEventListener('click', () => {
      
      newTask.querySelector('.cardContent input').disabled = false
      newTask.querySelector('.cardContent textarea').disabled = false
      
      
      newTask.querySelector('.saveTaskIcon').style.display = 'block'
      newTask.querySelector('.saveTaskMessage').style.display = 'block'
    })
    
    
    newTask.querySelector('.removeTaskIcon').addEventListener('click', () => {
      
      const condition = confirm('Tem certeza que deseja excluir a tarefa: ' + newTask.querySelector('.taskTitle').value + '?')

      if (condition) {
        newTask.remove()
        return
      } else {
        return
      }      
    })
    
    tasks.appendChild(newTask)
  })


  searchBar.addEventListener('keyup', () => {
    const allTasks = document.querySelectorAll('.taskCard');
    const searchText = searchBar.value.toLowerCase();

    if (searchText.length > 0) {
        allTasks.forEach((task) => {
            const taskTitle = task.querySelector('.taskTitle');
            if (taskTitle && taskTitle.value.toLowerCase().includes(searchText)) {
                task.style.display = 'flex';
            } else {
                task.style.display = 'none';
            }
        });
    } else {
        allTasks.forEach((task) => {
            task.style.display = 'flex';
        });
    }
});

themeSwitchIcon.addEventListener('click', () => {
    document.body.classList.toggle('themeDark')
    

    if (document.body.classList.contains('themeDark')) {
        themeSwitchIcon.classList.replace('fa-moon', 'fa-sun')
    } else {
        themeSwitchIcon.classList.replace('fa-sun', 'fa-moon')
    }
})

themeSwitchResponsive.addEventListener('click', () => {
    document.body.classList.toggle('themeDark')
    document.querySelectorAll(".taskTitle").forEach(element => element.classList.toggle('themeDark'));
    document.querySelectorAll(".taskDescription").forEach(element => element.classList.toggle('themeDark'));

    if (document.body.classList.contains('themeDark')) {
        themeSwitchResponsive.classList.replace('fa-moon', 'fa-sun')
    } else {
        themeSwitchResponsive.classList.replace('fa-sun', 'fa-moon')
    }
})