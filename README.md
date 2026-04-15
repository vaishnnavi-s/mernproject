# MERN MySQL Authentication CRUD System

## 📌 Project Overview

The **MERN MySQL Authentication CRUD System** is a full-stack web application developed to demonstrate user authentication and basic CRUD operations using modern web technologies.

The application allows users to **register**, **login**, **access a protected dashboard**, **reset password**, and **logout** securely. User data is stored in a **MySQL database**, while the frontend is built using **React.js** and the backend is powered by **Node.js and Express.js**.

This project follows a professional full-stack development structure and demonstrates REST API integration between frontend and backend.

## 🚀 Features

* User Registration
* Secure Login Authentication
* Password Reset Module
* Dashboard Access After Login
* Logout Functionality
* MySQL Database Integration
* RESTful API Communication
* React Routing Navigation
* CRUD Operations Implementation

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router DOM
* Axios
* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js
* MySQL
* bcryptjs (Password Hashing)
* CORS
* dotenv

### Database

* MySQL

### Tools & Software

* VS Code
* MySQL Workbench
* Postman
* Git & GitHub
* Node Package Manager (npm)

## 📂 Project Structure

mern-mysql-auth-crud

Backend:
Handles server-side logic, authentication, APIs, and database operations.

config/         → DB connection setup (db.js)
controllers/    → Business logic (auth, items)
middleware/     → JWT authentication middleware
routes/         → API endpoints (auth & items)
.env            → Environment variables
.env.example    → Sample env file
server.js       → Backend entry point
database.sql    → Database schema
package.json    → Dependencies & scripts

Frontend:
React-based UI for user interaction, authentication, and API communication.

public/         → Static assets
src/
 ├── api/        → Axios API setup
 ├── components/ → Reusable UI components
 ├── context/    → Auth state management
 ├── pages/      → App screens (Login, Register, Dashboard, etc.)
 ├── App.jsx     → Main routing
 ├── main.jsx    → Entry point
 ├── index.css   → Global styles
package.json    → Dependencies & scripts
.gitignore      → Ignored files

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/vaishnnavi-s/mernproject.git
cd mern-mysql-auth-crud

### 2️⃣ Backend Setup

cd backend
npm install
npm start

Backend runs on:
http://localhost:5000


### 3️⃣ Frontend Setup

Open new terminal:

cd frontend
npm install
npm start

Frontend runs on:
http://localhost:3000

## 🗄️ MySQL Database Setup

Create Database:

CREATE DATABASE mern_auth;
Create Users Table:

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

Update database credentials inside backend configuration file.

## 🔄 Application Workflow

1. User registers with name, email, and password.
2. Password is encrypted using bcrypt.
3. User data is stored in MySQL database.
4. User logs in using credentials.
5. Authentication verified through backend API.
6. User redirected to dashboard.
7. Logout destroys session access.
8. Password reset page allows updating credentials.

## 📸 Screenshots

* MySQL Database Table

* Items table:

<img src="screenshots/items-table.png" width="600"/>

* Users table

<img src="screenshots/users-table.png" width="600"/>

* Frontend:

* Login Page

<img src="screenshots/login.png" width="600"/>

* Register Page

<img src="screenshots/register.png" width="600"/>

* Forgot Password Page

<img src="screenshots/forgot-password.png" width="600"/>

* Reset Password Page

<img src="screenshots/reset-password.png" width="600"/>

* Dashboard Page

<img src="screenshots/dashboard.png" width="600"/>


* Postman 

* Add Item Page:

<img src="screenshots/add-item.png" width="600"/>

* Delete Item Page:

<img src="screenshots/delete-item.png" width="600"/>

* Successful Registration:

<img src="screenshots/registration.png" width="600"/>

* Successful Login:

<img src="screenshots/login-jwt-token.png" width="600"/>

* Port

* Backend Port - Server running on 5000
<img src="screenshots/backend-port.png" width="600"/>

<img src="screenshots/backend.png" width="600"/>

* Frontend Port - http://localhost:3000

<img src="screenshots/frontend-port.png" width="600"/>


## 🔗 API Endpoints
* POST /api/auth/register – Register new user
* POST /api/auth/login – Login user & generate JWT
* POST /api/auth/forgot-password – Send password reset request
* PUT /api/auth/reset-password/:token – Reset password using token
* GET /api/dashboard – Fetch protected dashboard data
* POST /api/items – Add new item
* DELETE /api/items/:id – Delete item

## 🎯 Learning Outcomes

* Understanding MERN architecture
* REST API development
* Database connectivity using MySQL
* Authentication workflow implementation
* React component-based development
* Full Stack integration

## 👩‍💻 Author

**Vaishnavi S**
B.E. Computer Science and Engineering

## 📄 License

This project is developed for educational and academic purposes.