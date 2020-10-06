function addTask(){
    const taskInput = document.getElementById("tarefa")
    const daysOfWeek = document.getElementById("dias-semana").value
    const timeInput = document.getElementById("time")
    const day = document.getElementById(daysOfWeek)
    
    if(taskInput.value !== ""){ 
        day.innerHTML += `<li class="list" onclick="itsDone(this)"> &#10149; ${timeInput.value} - ${taskInput.value} </li>`
    }else {
        alert("Digite uma nova tarefa!")
    }
    taskInput.value = ""
}


function itsDone(li){
    li.style.textDecoration = "line-through";
    li.style.color = "green";
}

function cleanTask(){
    const deleteList = document.getElementsByClassName("list")
    for (let i=0; i<deleteList.length; i++){
        deleteList[i].innerHTML = ""
    }

    return
}
