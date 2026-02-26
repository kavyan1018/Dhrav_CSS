let students = [];
let roll = 1;

function addStudent()
{
    let name = document.getElementById("name").value;
    let marks = document.getElementById("marks").value;

    if(name == "" || marks == "")
    {
        alert("Enter name and marks");
        return;
    }

    let student = {
        rollNo: roll,
        name: name,
        marks: marks
    };

    students.push(student);
    roll++;

    displayStudents();

    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}

function displayStudents()
{
    let list = document.getElementById("studentList");
    list.innerHTML = "";

    for(let i = 0; i < students.length; i++)
    {
        list.innerHTML += `
        <tr>
            <td>${students[i].rollNo}</td>
            <td>${students[i].name}</td>
            <td>${students[i].marks}</td>
            <td>
                <button onclick="deleteStudent(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
}

function deleteStudent(index)
{
    students.splice(index, 1);
    displayStudents();
}