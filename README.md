# Student Management System

A simple and user-friendly Student Management System built using HTML, CSS, JavaScript, and MySQL. This project demonstrates a basic interface for managing student records.

## Features

- Add new student records.
- Display student details in a table.
- Delete student records with confirmation.
- Prevent duplicate roll numbers.
- Responsive design for mobile and desktop screens.
- Save records in browser local storage.
- MySQL database script for student record management.

## Technologies Used

- **HTML5** – Structure of the web page.
- **CSS3** – Styling and responsive layout.
- **JavaScript** – Student record management and browser storage.
- **MySQL** – Database structure and SQL queries.

## Project Structure

```text
Student-Management-System/
│
├── student.html
├── style.css
├── script.js
├── student.sql
└── README.md
```

## Installation and Setup

1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Make sure `student.html` is linked to `style.css` and `script.js`.
4. Open `student.html` in your web browser.

### Database Setup

1. Install and start XAMPP.
2. Start MySQL.
3. Open `http://localhost/phpmyadmin`.
4. Open the SQL tab.
5. Import or execute the `student.sql` file.

The SQL script creates the `student_management` database and the `students` table with sample records.

**Note:** The current HTML and JavaScript interface uses browser `localStorage`. The MySQL database is not yet connected to the webpage. A PHP backend is required to store and retrieve records from MySQL.

## Future Improvements

- Connect the webpage to MySQL using PHP.
- Add student update and search functionality.
- Implement login and authentication.
- Add student attendance and marks management.

## Author

Student Management System Project

## License

This project is intended for educational and learning purposes.
