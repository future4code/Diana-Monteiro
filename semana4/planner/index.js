function addTask(){
    const taskInput = document.getElementById("tarefa")
    const daysOfWeek = document.getElementById("dias-semana").value
    const day = document.getElementById(daysOfWeek)
    
    if(taskInput.value !== ""){ 
        day.innerHTML += `<li onclick="itsDone(this)"> ${taskInput.value} </li>`
    }else {
        alert("Digite uma nova tarefa!")
    }
    taskInput.value = ""
}


function itsDone(li){
    li.style.textDecoration = "line-through";
    li.style.color = "green";
}


