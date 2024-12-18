
# Communus App

## Overview
The Communus app is a simple application with a **Login Page** and a **Home Page**. It demonstrates basic authentication and image gallery functionality.

## Features

### Login Page:
- **Fields**: 
  - Username
  - Password
- **Login Credentials**: 
  - Username: admin
  - Password: 123456
- **Validation**: 
  - The Submit button remains disabled until both fields are validated.
  - Basic validation ensures fields are not empty.
- **Access Control**: 
  - Login is mandatory to access the Home Page.
  - Direct access to the Home Page without logging in is restricted.

### Home Page:
- Displays an **image gallery** fetched from an API.
- Clicking on an image opens a **popup modal** that shows:
  - The selected image.
  - The author's name.
- Includes functionality to return to the Login Page.

## Project Setup

### Prerequisites:
- **Node.js** installed on your machine. (Download from [Node.js official site](https://nodejs.org))
- **Ionic CLI** installed globally. If not already installed, run:
  ```bash
  npm install -g @ionic/cli
  ```

### Installation:
1. Clone the repository:
   ```bash
   git clone https://github.com/nitinborse/ComunusApp.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App:
- To start the app in your browser:
  ```bash
  ionic serve
  ```
- To run the app on a real device or emulator:
  ```bash
  ionic capacitor run android
  ```
  > Ensure that you have set up Android Studio and SDK.



## Notes:
- The app uses a hardcoded API for demonstration purposes to fetch images and display them on the Home Page.
- The Login page restricts access to the Home Page until the user successfully logs in.
- The popup modal on the Home Page displays image details.

## Credentials:
- **Username:** admin  
- **Password:** 123456  

Use these credentials to log in.

---
Let me know if you'd like to modify or add more features!
