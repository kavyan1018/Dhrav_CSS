function findDay() {
    let day = parseInt(document.getElementById("dayInput").value);
    let result = document.getElementById("result");

    switch (day) {
        case 1:
            result.innerText = "Monday";
            break;
        case 2:
            result.innerText = "Tuesday";
            break;
        case 3:
            result.innerText = "Wednesday";
            break;
        case 4:
            result.innerText = "Thursday";
            break;
        case 5:
            result.innerText = "Friday";
            break;
        case 6:
            result.innerText = "Saturday";
            break;
        case 7:
            result.innerText = "Sunday";
            break;
        default:
            result.innerText = "Invalid day number!";
    }
}