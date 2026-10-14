```sql
-- Create Database
CREATE DATABASE IF NOT EXISTS student_management;

-- Select Database
USE student_management;

-- Create Students Table
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    roll VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    course VARCHAR(50) NOT NULL,
    year INT NOT NULL,
    phone VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Student Records
INSERT INTO students
    (roll, name, email, course, year, phone)
VALUES
    ('101', 'Aman Sharma', 'aman@example.com', 'BCA', 1, '9876543210'),
    ('102', 'Simran Kaur', 'simran@example.com', 'MCA', 2, '9876501234'),
    ('103', 'Rahul Verma', 'rahul@example.com', 'B.Tech', 3, '9876512345');

-- Display All Students
SELECT * FROM students;

-- Search Student by Roll Number
SELECT * FROM students
WHERE roll = '101';

-- Update Student Details
UPDATE students
SET course = 'MCA', year = 2
WHERE roll = '101';

-- Delete a Student Record
DELETE FROM students
WHERE roll = '103';
```
