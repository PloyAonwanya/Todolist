
const input_task = document.getElementById("input_task");
const add_task = document.getElementById("add_task");
const todo_wrapper= document.querySelector(".todo_wrapper");




add_task.addEventListener('click',()=>{
    // displayTodo();
    if(input_task.value != ""){
        const task = input_task.value; 
        input_task.value = "";
        displayTodo(task);
          
    }
})

 

function displayTodo(task){
    taskHTML= `
        <div class="todo_task flex items-center  justify-between  bg-white w-96 h-14   text-2xl px-4 rounded">
            <div class="part1_todo flex items-center">
                <input type="checkbox" class="checkbox mr-2">
                <p class="name_task truncate max-w-[200px] break-words text-ellipsis overflow-hidden">${task}</p>
            </div>
            <div class="actions flex items-center ">
                <button class="edit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>  
                </button>
                <button class="delet px-2">     
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
    
                </button>
            </div>
        </div>
    `;
    todo_wrapper.insertAdjacentHTML('beforeend', taskHTML);

    
    const allTasks = document.querySelectorAll(".todo_task");
    const lastTask = allTasks[allTasks.length - 1];

    // delet task
    const button_delet =lastTask.querySelector(".delet");
    // const todo_task = document.querySelector(".todo_task");
    button_delet.addEventListener('click',()=>{
        lastTask.remove();
    })
    
    // event->checkbok
    const name_task = lastTask.querySelector(".name_task");
    const checkbox = lastTask.querySelector(".checkbox");
    checkbox.addEventListener('click',()=>{
        name_task.classList.toggle("line-through");
        lastTask.classList.toggle("bg-gray-200");
        complete();
       
    })

    // edit
    const edit_button = lastTask.querySelector(".edit");
    edit_button.addEventListener("click", () => {
    let currentTextElement = lastTask.querySelector(".name_task");

    
    if (lastTask.querySelector("input.rename_input")) return;

    const currentText = currentTextElement.textContent;

    const input = document.createElement("input");
    input.type = "text";
    input.value = currentText;
    input.className = "rename_input text-xl p-1 w-full text-black bg-gray-100 rounded";
    
    currentTextElement.replaceWith(input);
    input.focus();

    input.addEventListener("blur", () => {
        const newText = input.value.trim() || currentText;

        const newP = document.createElement("p");
        newP.className = "name_task";
        newP.textContent = newText;

        input.replaceWith(newP);
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            input.blur();
        }
    });
});}


// show message->complete task
function showPopup(message) {
    const popup = document.getElementById("popup");
    const messageBox = popup.querySelector(".message"); 
    messageBox.textContent = message; 
    popup.classList.remove("hidden");

    setTimeout(() => {
        popup.classList.add("hidden");
    }, 2000);
}


function complete(){
    const checkboxes = document.querySelectorAll(".todo_task .checkbox");
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    if (checkboxes.length > 0 && allChecked) {
        showPopup("เก่งมาก");

        setTimeout(() => {
            const allTasks = document.querySelectorAll(".todo_task");
            allTasks.forEach(task => task.remove());
        }, 2000); 
      
    }
} 








