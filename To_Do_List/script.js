const todoList = document.getElementById("todoList");
const newToDoInput = document.getElementById("newToDoInput");
const addTodoBtn = document.getElementById("addTodoBtn");


addTodoBtn.addEventListener("click",()=>{
    const newTodotext = newToDoInput.value;

    if(newTodotext !== ""){
        const newTodoItem= document.createElement("li");
        newTodoItem.innerText= newTodotext;
        const deleteTodoBtn = document.createElement("button");
        deleteTodoBtn.innerText= "X";


        deleteTodoBtn.classList.add("delete-todo-btn");
        deleteTodoBtn.addEventListener("click",function(){
            newTodoItem.remove();
        });

        newTodoItem.appendChild(deleteTodoBtn);
        todoList.appendChild(newTodoItem);
        newToDoInput.value="";

    }
});