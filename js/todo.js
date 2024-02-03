// localStorage 내용은 개발자도구 Application에서 확인 가능.

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); 위와 동일한 의미의 코드
const toDoList = document.getElementById("todo-list");

// 기존에 localStorage에 있던 내역을 유지하면서 새로운 내용도 추가하기 위해 let 사용
let toDos = [];

const TODOS_KEY = "todos"

// console창에서 localStorage.getItem("todos")로 내역 확인가능
// JSON.stringify로 text를 리스트모양의 단순string 으로 바꿈.
// 그리고서 paint 전에 JSON.parse를 통해 모양만 list인 단순sting를 찐 리스트화.

// 투두가 하나도 없으면 문구 표시하는 함수-------------------------------------------
function todoLessCheck() {
    const todoLess = document.querySelector("#todoLess");
    if (toDos.length === 0) {
        todoLess.classList.remove("hidden");
    } 
    else {
        todoLess.classList.add("hidden");
    }
}
// -------------------------------------------------------------------

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // li === 이벤트가 발생된 button의 부모
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));    // 클릭된 id인 애 빼고 새 배열 만든다는 뜻.
    saveToDos();    // 필터 후 이 코드도 추가 해야 함!
    li.remove();
    todoLessCheck();    // 투두가 하나도 없으면 문구 표시
    //console.dir(event.target.parentElement.innerText);  // 버튼 중 어떤 버튼이 클릭됐는지 확인
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "✖️";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
    //console.log(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    if (toDos.length < 8){
        const newTodo = toDoInput.value;
        toDoInput.value ="";
        const newTodoObj = {
            text: newTodo,
            id: Date.now(),
        };
        toDos.push(newTodoObj);    // toDos가 const였어도 값은 추가 가능. 재할당이 금지되는 것임.
    
        paintToDo(newTodoObj);
        saveToDos();
        todoLessCheck();    // 투두가 하나도 없으면 문구 표시
    }
    else {
        toDoInput.value ="";
        alert("TODO는 8개가 최대예요");
    }

}

toDoForm.addEventListener("submit", handleToDoSubmit);


// 새로고침해도 화면에 기존 로컬스토리지 내용 불러오기 ---------------------------------
// function sayHello(listOfItem) {
//     console.log("this is the turn of", listOfItem);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;    // 새로고침시에 배열이 초기화되므로, toDos를 ToDos항목들로 초기화(재할당해야 해서 let형이어야.)
                            // 이 라인이 없으면, 새 값 입력시 func handleToDoSubmit이 toDos.push에서 빈배열에 새 값을 추가하게 되어 기존 값이 없어지는 문제발생.
                            // 즉, 로컬스토리지와 toDos 배열은 별개로 움직인다.
    console.log(parsedToDos);
    parsedToDos.forEach(paintToDo);

    //parsedToDos.forEach(sayHello);
    // 위 동작을 아래처럼 한 줄에도 표현 가능. 함수 포함하여.
    //parsedToDos.forEach((listOfItem) => console.log("this is the turn of", listOfItem));
}
todoLessCheck();     // 투두가 하나도 없으면 문구 표시

// if (savedToDos === null || savedToDos === '[]') {
//     const todoLess = document.querySelector("#todoLess");
//     todoLess.classList.remove("hidden");
// }




// filter 쓰는 법----------------------------------------------
// filter란, 배열을 수정하는 게 아님. 조건에 맞는 아이템만 남기고 그외 아이템은 제외하는 새 배열을 만드는 것.
// function sexyFilter(item) {
//     return item !== 3
// }

// [1,2,3,4,5].filter(sexyFilter)

//------------------------------------------------------------

