# User Management System

## Features

### User Account Management
1. **Account Creation**:
   - Users can create an account using their name, email, password, and phone number.
   - Validations:
     - Email format is validated.
     - Password must be at least 8 characters long.
   
2. **Login**:
   - Registered users can log in using their email and password.
   - Graceful error messages are displayed for invalid credentials.

3. **View and Update Profile**:
   - Logged-in users can view their details (name, email, phone number).
   - Users can update their details if needed.

4. **Account Deactivation**:
   - Users can deactivate their accounts.
   - **Key Decision**: Account data is retained in the database, but the user is restricted from logging in. This allows for potential reactivation or auditing purposes.

### Super Admin Management
1. **Super Admin Access**:
   - Super Admin has the ability to log in and view details of all users.There is one super admin whoc can view details of user

2. **Super Admin Implementation**:
   - A separate database table is used for managing Super Admin details for better isolation and security.
   - Super Admin account creation:
     - The initial Super Admin account is created manually or through a secure setup process.
     - Super Admin credentials are not handled through regular registration.

## Tech Stack
Node.js ,Express.js,MondoDB

## Setup Instruction

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   PORT=5000
   MONGO_URI=<your-mongo-db-uri>
   JWT_SECRET=<your-secret-key>
   ```

4. To create the super admin
   ```bash
   npm run create-admin
   ```

5. Start the server:
   ```bash
   npm run dev
   ```


