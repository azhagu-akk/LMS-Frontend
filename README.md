# Library Management using (MERN)
## Overview
The Library Management System (LMS) is a web application designed to streamline the management of library books, user accounts, book borrowing and returns, and user reviews. 
It features an admin interface for managing books, users, and reviews, while providing a user-friendly experience for library members to borrow, return, and review books.
This project uses the MERN stack (MongoDB, Express.js, React, Node.js) and TailwindCSS for styling 
. The system includes role-based access control (RBAC) with different user roles (e.g., admin, user).

## Demo : [Click Here!!!](https://lms-front-nd.netlify.app/)
## Features
### User Features:
- **Book Borrowing:** Users can borrow books from the library, with limits and due dates.
- **Book Returns:** Users can return borrowed books, with overdue notifications and fines.
- **Book Reservations:** Users can reserve books that are currently checked out or in high demand.
- **Search and Filtering:** Users can search books by title, author, genre, or ISBN and filter results.
- **User Profile:** Users can manage their profiles and view borrowing history and reserved books.
- **User Reviews:** Users can rate and review books they’ve borrowed.

## Admin Features:
- **Book Management:** Admins can add, update, and delete books in the inventory.
- **User Management:** Admins can manage user accounts and roles (e.g., promoting users to admin).
- **Review Management:** Admins can approve/reject user reviews and delete inappropriate reviews.
- **Reports and Analytics:** Admins can view reports on the total number of books, borrowed books, overdue books, and more.
- **Role-Based Access Control:** Admins can manage user roles and permissions.

## Tech Stack
- **Frontend:** React, TailwindCSS, Axios
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Styling:** TailwindCSS
- **Libraries & Tools:**
    - bcryptjs (for password hashing)
    - jsonwebtoken (for JWT authentication)
    - dotenv (for environment variables)

 ## User Roles
- **Admin:** Can manage books, users, reviews, and view reports (email : `admin@gmail.com` , password : `admin`) <br>
- **User:** Can borrow, return, and review books.

## Installation
### 1. Clone the Repository <br>
Clone the repository to your local machine.

```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### 2. Backend Setup <br>
**Install Backend Dependencies** <br>
Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

**Configure Environment Variables** <br>
Create a `.env` file in the `backend` folder and add the following:

```makefile
MONGO_URI=your-mongodb-connection-uri
JWT_SECRET=your-secret-key
PORT=5000
```
**Start the Backend Server** <br>
Start the server with the following command:

```bash
npm start
```
The backend will be running on `http://localhost:5000.`

### 3. Frontend Setup
**Install Frontend Dependencies** <br>
Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```
**Start the Frontend Server** <br>
Start the React development server with the following command:

```bash
npm start
```
The frontend will be running on `http://localhost:3000.`

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Conclusion
This Library Management System (LMS) allows seamless management of library operations, empowering both admins and users with intuitive features. 
You can customize this project further to fit additional requirements such as late fee calculations, user analytics, or advanced reporting features.
