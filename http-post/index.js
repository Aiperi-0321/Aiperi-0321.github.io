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


const input1 = document.querySelector(".fullname");
const input2 = document.querySelector(".email");
const savebtn = document.querySelector(".save");

const createStudents = () => { 
const students = {
    fullname: input1.value,
    email: input2.value,
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
};


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


const updatebtn = document.querySelector(".save")
const updateStud = () => {
    const updateStud = {
        fullname: "Aiperi",
        email: "aiperi@gmail.com",
    };

  fetch(url + "/14", {
    method: "PUT",
    headers: {
        "Content-Type": "aplication/json",
    }, body: JSON.stringify(updateStud),
})
  .then((res) => res.json())
  .then((data) => {console.log(data);
    getStud();
  }).catch((error) => console.log(error))
}
updatebtn.addEventListener("click", updateStud);



function greeting(name, owner) {
    if (name == owner) {
        return "Hello, Owner";
    }else{
        return "Hello, Guest"
    }
};
console.log( greeting ("Aiperi", "Aiperi"));
console.log(greeting("Aiperi", "Janna"));

function partOfMonth(month) {
    if (month >= 1 && month <= 3) {
        return "First quarter";
    }else if(month >= 4 && month <= 6) {
        return "Second quarter";
    }else if(month >= 7 && month <= 9) {
        return "Third quarter";
    }else if(month >= 10 && month <= 12) {
        return "Forth quarter";
    }else {
        return "enter correct data";
    }
}
console.log(partOfMonth(2));
console.log(partOfMonth(20));





 