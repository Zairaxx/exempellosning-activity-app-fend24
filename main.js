//Local storage

//När sidan laddas gör vi följande:

//Kollar om värde i sessionStorage finns
console.log(sessionStorage.getItem("active"));


//Kollar om värde i localStorage finns

if(localStorage.getItem("myObj")){
    //Om värde finns - gör om strängen vi sparat till ett objekt
    let obj = JSON.parse(localStorage.getItem("myObj"))

    //Sen kan vi skriva ut värden från objektet
    let greeting = document.createElement("h2");
    greeting.textContent = ` Welcome ${obj.name} - ${obj.age}` 
    document.body.append(greeting)
} else {
    console.log("No value found.")
}

document.querySelector("button").addEventListener("click", () => {
    
    //Spara värde i session storage vid klick
    sessionStorage.setItem("active", true)

})

// JSON.stringify & JSON.parse

// Vi kan endast spara strängar i local/session storage.
// För att spara data (objekt, arrays) måste vi göra om dem till strängar först
// Det kan vi göra med metoden JSON.stringify()
let obj = {
    name: "Brandon",
    age: 30
}

    // Vi lagrar inte objektet direkt, utan vi gör om det till en sträng först

localStorage.setItem("myObj", JSON.stringify(obj));


