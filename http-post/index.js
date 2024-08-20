const people = [];
const url = "http://solar-poised-salad.glitch.me/todos";

const getAll = () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
getAll();

const todo = {
    title: "Learn React",
    isCompleted: false,
}

const addTodo = () => {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(todo)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const getBtn = document.querySelector(".get");
const createBtn = document.querySelector(".post");

getBtn.addEventListener("click", () => {
    getTodos();
});

createBtn.addEventListener("click", () => {
    addTodo();
});


const input2 = document.querySelector(".fullname");
const input3 = document.querySelector(".email");
const savebtn = document.querySelector(".save");

const createStudents = () => { 
const students = {
    fullname: input2.value,
    email: input3.value,
    isActive: true,
};
fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(students),
})
.then((response) => response.json())
.then((student) => console.log(student))
.catch((error) => console.log(error));
}
savebtn.addEventListener("click", createStudents);

const ul = document.querySelector("ul")
function getStud(){
    fetch("http://solar-poised-salad.glitch.me/students")
    .then((res) => res.json())
    .then((data) => {
        data.forEach(student => {
             if(student.fullname !== "" && student.email !== ""){
            const studentList = `<li>${student.fullname} - ${student.email}</li>`
            ul.insertAdjacentHTML("beforeend", studentList)
        }
        })
    }).catch((error) => console.log(error))
}
getStud();
