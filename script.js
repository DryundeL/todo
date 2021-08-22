let date = new Date()
let day = date.getDay()
let month = date.getMonth()
let number = date.getDate()

const taskList = document.querySelector(".tasks-list")
const btnAdd = document.querySelector(".btn")
const input = document.querySelector(".what-to-do")
const tabs = document.querySelectorAll(".tabs-list__item")
const activeTasks = document.querySelector(".active")

for (let tab = 0; tab<tabs.length; tab++){
    tabs[tab].addEventListener('click', function(){
        tabs.forEach(el=>{
            el.classList.remove("isActive")
        })
        tabs[tab].classList.toggle("isActive")
        getTodo()
    })    
}

function getTodo(){
    fetch('./todo.php')
    .then(res => res.json())
    .then(res=>{
        if (tabs[0].classList.contains("isActive")){
            renderTasks(res)
            ActiveTasks(res)   
        }
        else if(tabs[1].classList.contains("isActive")){
            CompletedTasks(res)
            ActiveTasks(res)
        }
    })
}

getTodo()

switch (day){
    case 0: day = "Sunday"; break
    case 1: day = "Monday"; break
    case 2: day = "Tuesday"; break
    case 3: day = "Wednesday"; break
    case 4: day = "Thursday"; break
    case 5: day = "Friday"; break
    case 6: day = "Saturday"; break
}

switch(month){
    case 0: month = "January"; break
    case 1: month = "February"; break
    case 2: month = "March"; break
    case 3: month = "April"; break
    case 4: month = "May"; break
    case 5: month = "June"; break
    case 6: month = "July"; break
    case 7: month = "August"; break
    case 8: month = "September"; break
    case 9: month = "October"; break
    case 10: month = "November"; break
    case 11: month = "December"; break
}

document.getElementById('date').innerHTML = day+", " + month + " " + number

function renderTasks(tasks){
    taskList.innerHTML = ""
    tasks.forEach(task =>{
        console.log(task)
        if (task.complited === "0")
        taskList.innerHTML += `
        <li class="tasks-list__item" data-id = '${task.id_task}'>
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" class = 'ok'  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 34.988281 14.988281 A 1.0001 1.0001 0 0 0 34.171875 15.439453 L 23.970703 30.476562 L 16.679688 23.710938 A 1.0001 1.0001 0 1 0 15.320312 25.177734 L 24.316406 33.525391 L 35.828125 16.560547 A 1.0001 1.0001 0 0 0 34.988281 14.988281 z"/></svg>
            <p class="name-to-do">${task.text}</p>
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" class = 'trash'  viewBox="0 0 16 16" width="25px" height="25px"><path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 10.5 14 C 11.324219 14 12 13.324219 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 4 4 L 11 4 L 11 12.5 C 11 12.78125 10.78125 13 10.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 Z M 5 5 L 5 12 L 6 12 L 6 5 Z M 7 5 L 7 12 L 8 12 L 8 5 Z M 9 5 L 9 12 L 10 12 L 10 5 Z"/></svg>
        </li>
        `
    })
}

function CompletedTasks(tasks){
    taskList.innerHTML = ""
    tasks.forEach(task=>{
        if (task.complited === "1")
        taskList.innerHTML+= `
        <li class="tasks-list__item" data-id = '${task.id_task}'>
        <svg width="21px" height="21px" viewBox="0 0 21 21" class="backup" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="matrix(0 1 1 0 2.5 2.5)"><path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"/><path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"/></g></svg>
            <p class="name-to-do back">${task.text}</p>
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" class = 'trash'  viewBox="0 0 16 16" width="25px" height="25px"><path d="M 6.496094 1 C 5.675781 1 5 1.675781 5 2.496094 L 5 3 L 2 3 L 2 4 L 3 4 L 3 12.5 C 3 13.324219 3.675781 14 4.5 14 L 10.5 14 C 11.324219 14 12 13.324219 12 12.5 L 12 4 L 13 4 L 13 3 L 10 3 L 10 2.496094 C 10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2 L 8.503906 2 C 8.785156 2 9 2.214844 9 2.496094 L 9 3 L 6 3 L 6 2.496094 C 6 2.214844 6.214844 2 6.496094 2 Z M 4 4 L 11 4 L 11 12.5 C 11 12.78125 10.78125 13 10.5 13 L 4.5 13 C 4.21875 13 4 12.78125 4 12.5 Z M 5 5 L 5 12 L 6 12 L 6 5 Z M 7 5 L 7 12 L 8 12 L 8 5 Z M 9 5 L 9 12 L 10 12 L 10 5 Z"/></svg>
        </li>
        `
    })
}

function ActiveTasks(tasks){
    counter = 0
    tasks.forEach(task =>{
        if (task.complited === "0"){
            counter+=1
        }
    })
    activeTasks.innerHTML = counter + " " + "Active Tasks"
}

function addTask(){
    fetch("./todo.php", {
        method: "POST",
        body: JSON.stringify({
            text: input.value
        })
    }).then(res=>getTodo())
    input.value = ""
}

function completeTask(id){
    console.log(id)
    fetch("./todo.php", {
        method: "PUT",
        body: JSON.stringify({
            id: id
        })
    }).then(res=>getTodo())
}

function deleteTask(id){
    fetch("./todo.php", {
        method: "DELETE",
        body: JSON.stringify({
            id: id
        })
    }).then(res=>getTodo())
}

function recoverTask(id){
    fetch("./todo.php", {
        method: "PATCH",
        body: JSON.stringify({
            id: id
        })
    }).then(res=>getTodo())
}

btnAdd.addEventListener("click", addTask)
window.addEventListener("keyup", e => {if(e.key === "Enter") addTask()})

taskList.addEventListener("click", e =>{
    if(e.target.classList.contains("ok")){
        const id = e.target.parentNode.dataset.id
        completeTask(id)
    }
    else if (e.target.classList.contains("trash")){
        const id = e.target.parentNode.dataset.id
        deleteTask(id)
    }
    else if(e.target.classList.contains("backup")){
        const id = e.target.parentNode.dataset.id
        recoverTask(id)
    }
    
})



