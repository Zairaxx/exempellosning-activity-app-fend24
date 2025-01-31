//Local storage

console.log(sessionStorage.getItem("active"));



if(localStorage.getItem("myObj")){

    let obj = JSON.parse(localStorage.getItem("myObj"))

    console.log(obj);

    let greeting = document.createElement("h2");
    greeting.textContent = ` Welcome ${obj.name} - ${obj.age}` 
    document.body.append(greeting)
} else {
    console.log("No value found.")
}

document.querySelector("button").addEventListener("click", () => {

    sessionStorage.setItem("active", true)

})

// JSON Stringify + parse - Hantera och lagra objekt med data

let obj = {
    name: "Brandon",
    age: 30
}

localStorage.setItem("myObj", JSON.stringify(obj));
//Session storage

