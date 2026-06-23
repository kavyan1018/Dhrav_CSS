const button = document.getElementById("btn");


button.addEventListener("click",()=>{

    const mydiv = document.getElementById("myDiv");

    // element creation

    const name = document.createElement("h1");  // h1
    name.innerHTML = "Hello World";  // text


    mydiv.appendChild(name) // binding new creted h1 to div
})
