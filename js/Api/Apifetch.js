document.getElementById("userForm").addEventListener("submit", async function (event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    // Data API
    let data = {
        name: name,
        email: email,
        password: password,
        age: Number(age)
    };

    try {

        let response = await fetch("https://node5.onrender.com/user/user", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)
        });

        let result = await response.json();

        console.log(result);

        document.getElementById("message").innerHTML =
            "Data Submitted !!!!";

    } catch (error) {

        console.log(error);

        document.getElementById("message").innerHTML =
            "Error Sending data.....";
    }

});