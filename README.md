# Sports-Management-Portal

### Problem Statement
Sports tournaments organised by the hostels and other groups are only available through physical notices or other means that only reach a few people. There is no other way for students to know about events like Hostel Premier League (HPL) or other informal touraments organized by societies or students. Thus some students miss out on the fun of competitive sports. Students are also looking for other students with similar interests, who are hard to come by in early years.


### Solution
This is a web application that can be used by the hostel committees, societies and students. With this application they can create, update, register for any sports event on the platform. The students will be able to register from the same platform they can organize their own informal events and build teams together through this platform. You can see pre-existing matches and their locations and join those matches as well. This will allow for a seamless and hassle-free sports environment. 


# About Sports Management Portal

**Sports Management Portal** is a fully responsive web application built with **React** and **Firebase**. The platform allows users to create, manage, and register for sports tournaments, with live updates on registrations, authentication and authorization, and the ability to upload images. The application is designed to cater to both regular users and admins.

## Features

### Authentication & Authorization
- **Firebase Authentication**: Secure user registration and login.
- **Admin Privileges**: Admins can upload images and manage tournament details.

### Tournament Creation & Management
- **Create Tournaments**: Users can create and manage their own tournaments.
- **Real-time Registration Updates**: Live updates on how many users have registered.
- **Edit Tournaments**: Users can modify any tournaments they’ve created.

### Registration and Dashboard
- **Register for Tournaments**: Users can easily register for tournaments.
- **Dashboard**: View all tournaments you’ve registered for on your dashboard.

### Admin Features
- **Image Upload**: Admins can upload images for specific tournaments.

## Deployment Information

The app is deployed on **Render**, and due to server inactivity, it occasionally requires a manual reboot. If you encounter any issues with functionality, please be patient as the server may need a manual restart. Despite this, you can still view the main page even if the functionality is temporarily unavailable.

## Technology Stack

- **Frontend**: React
- **Backend**: Firebase (Firestore, Storage)
- **Hosting**: Render, Vercel

## How to Run Locally

1. **Clone Repository**:
   ```bash  
   git clone https://github.com/ar-rana/Sports-Management-Portal.git
   ```

2. **Navigate to Project Directory**:
   ```bash
   cd client
   ```
   **for server:**
   ```bash
   cd server
   ```

4. **Install Dependencies**:
   After succesfull installation of pnpm on your system, install the required node modules and dependencies for the project.
   ```bash
   npm install
   ```

5. **Start Development Server**:
   ```bash
   npm start
   ```
   **for server:**
   ```bash
   nodemon server
   ```
   


