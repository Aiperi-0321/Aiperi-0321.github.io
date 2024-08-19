document.querySelector("button").addEventListener("click", () => {
    console.log("button clicked");
});



let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;  
}
console.log(sum);
console.log("rundom message");

function multiple() {
    for (let i = 0; i <= 10; i++) {
        console.log((`2 * ${i} = ${2 * i}`));
    }
}
multiple();

setTimeout(() => {
    console.log("message from setTimeout");
}, 1000);


let people = [];

setTimeout(() => {
const lydi = [
    {name: "Alice", age: 25, occupation: "Engineer"},
    {name: "Bob", age: 30, occupation: "Designer"},
    {name: "Charlie", age: 37, occupation: "Teacher"},
    {name: "Diana", age: 26, occupation: "Doctor"},
    {name: "Eva", age: 22, occupation: "Student"},
];
people = lydi;
const ul = document.querySelector("ul");

people.forEach((person) => {
    const li = `<li>${person.name}</li>`;
    ul.insertAdjacentHTML("beforeend", li);
})
},2000);


fetch("http://fakestoreapi.com/products")
.then((result) => result.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));


document.querySelector("#getDog").addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((result) => result.json())
    .then((data) =>{
        console.log(data); 
        document.querySelector("img").setAttribute("src", data.message)
    })
    .catch((error) => console.log(error));
});






