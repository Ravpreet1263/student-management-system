```javascript
// Get HTML elements
const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");

// Load saved student records
let students = JSON.parse(localStorage.getItem("students")) || [];

// Save records in browser storage
function saveStudents() {
    localStorage.setItem("students", JSON.stringify(students));
}

// Display student records
function displayStudents() {
    table.replaceChildren();

    if (students.length === 0) {
        const row = table.insertRow();
        const cell = row.insertCell();

        cell.colSpan = 7;
        cell.textContent = "No student records available.";
        return;
    }

    students.forEach((student, index) => {
        const row = table.insertRow();

        [
            student.roll,
            student.name,
            student.email,
            student.course,
            student.year,
            student.phone
        ].forEach(value => {
            const cell = row.insertCell();
            cell.textContent = value;
        });

        // Create delete button
        const actionCell = row.insertCell();
        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-btn";
        deleteButton.type = "button";

        deleteButton.addEventListener("click", () => {
            const confirmDelete = confirm(
                "Are you sure you want to delete this student?"
            );

            if (confirmDelete) {
                students.splice(index, 1);
                saveStudents();
                displayStudents();
            }
        });

        actionCell.appendChild(deleteButton);
    });
}

// Add a new student
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const student = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        roll: document.getElementById("roll").value.trim(),
        course: document.getElementById("course").value,
        year: document.getElementById("year").value,
        phone: document.getElementById("phone").value.trim()
    };

    // Check required values
    if (
        !student.name ||
        !student.email ||
        !student.roll ||
        !student.course ||
        !student.year ||
        !student.phone
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // Prevent duplicate roll numbers
    const duplicate = students.some(
        s => s.roll.toLowerCase() === student.roll.toLowerCase()
    );

    if (duplicate) {
        alert("This roll number already exists!");
        return;
    }

    // Add and save student
    students.push(student);
    saveStudents();
    displayStudents();

    form.reset();

    alert("Student added successfully!");
});

// Display records when the page opens
displayStudents();
```
