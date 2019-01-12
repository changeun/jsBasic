// const toDoForm = document.querySelector(".js-toDoform"),
// toDoInput = toDoForm.querySelector("input"),
// toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = 'toDos';

// let toDos = [];

// function deleteToDo(event) {
//     const btn = event.target;
//     const li = btn.parentNode;
//     toDoList.removeChild(li);

//     const cleanToDos = toDos.filter(function(toDo){
//         return toDo.id !== parseInt(li.id);
//     }); // filter : 배열의 모든 요소를 함수를 통해 접근하여 true인 것만 반환
//     toDos = cleanToDos;
//     saveToDos();
// }

// function saveToDos() {
//     localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function paintToDo(text){
//     const li = document.createElement("li");
//     const delBtn = document.createElement("button");
//     const span = document.createElement("span");
//     const newId = toDos.length + 1;

//     delBtn.innerText = "X"; // Ctrl + Command + Space Bar
//     delBtn.addEventListener("click", deleteToDo);
//     span.innterText = text;

//     li.appendChild(span);
//     li.appendChild(delBtn);
//     li.id = newId;

//     toDoList.appendChild(li);

//     const toDoObj = { //Object
//         text: text,
//         id: newId
//     };
//     toDos.push(toDoObj);
//     saveToDos();
// }

// function handleSubmit(event){
//     event.preventDefault();
//     const currentValue = toDoInput.value;
//     paintToDo(currentValue);

//     toDoInput.value = "";
// }

// function loadToDos() {
//     const loadToDos = localStorage.getItem(TODOS_LS);
//     if(loadToDos !== null){
//         const parsedToDos = JSON.parse(loadToDos);
//         parsedToDos.forEach(function(toDo){ // 배열을 한번씩 실행하는 것.
//             paintToDo(toDo.text);
//         })
//     }
// }

// function init() {
//     loadToDos();
//     toDoForm.addEventListener("submit", handleSubmit);
// }

// init();

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);

  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  }); // filter : 배열의 모든 요소를 함수를 통해 접근하여 true인 것만 반환

  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  const className = "toDo";

  delBtn.innerText = "X"; // Ctrl + Command + Space Bar
  delBtn.className = "toDo_button";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  li.className = className;

  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
    className: className
  };

  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();