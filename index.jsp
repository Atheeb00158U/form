<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <title>Registration</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <div class="navbar">
        <div class="logo-container">
            <img class="logo" src="prime.png" alt="Logo 2">
        </div>
    </div>
    
    <div id="base-container">
    <h1 id="stud-head">Student Details Form</h1>
    <form id="studentForm" method="post" action="">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required>
        
        <label for="lastName">Last Name</label>
        <input type="text" id="lastName" name="lastName" required>
        
        <label for="dob">Date of Birth</label>
        <input type="date" id="dob" name="dob" required>
        
        <label for="email">Email ID</label>
        <input type="email" id="email" name="email" required>
        
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required>
        
        <label for="school">School Name:</label>
        <input type="text" id="school" name="school" required>
        
        <label for="board">Board:</label>
        <select id="board" name="board" required>
            <option value="">Select Board</option>
            <option value="CBSE">CBSE</option>
            <option value="IB">IB</option>
            <option value="IGCSE">IGCSE</option>
            <option value="STATE BOARD">State Board</option>
        </select>
        
        <label for="grade">Grade:</label>
        <select id="grade" name="grade" required>
            <option value="">Select Grade</option>
            <option value="Recently Graduated">Recently Graduated</option>
            <option value="6th">6th</option>
            <option value="7th">7th</option>
            <option value="8th">8th</option>
            <option value="9th">9th</option>
            <option value="10th">10th</option>
            <option value="11th">11th</option>
            <option value="12th">12th</option>
        </select>
        
        <button type="submit">Submit</button>
        <button type="button" onclick="clearForm()">Clear</button>
    </form></div>
    <div id="how-to">
        <a href="https://drive.google.com/file/d/1iAFcJuylP7ROzOgB_aa13VQwA377A7uQ/view?usp=drive_link" id="how-to-head" target="_blank">HOW TO REGISTER?</a>
    </div>
    <script src="script.js"></script>
</body>
</html>
