## Whatsapp Messenger:
Dive into a cool, seamless chat experience with WhatsApp Messenger! Designed to keep your conversations flowing smoothly and effortlessly, offers a refreshing take on staying connected.

## Objective:
The main objective of project is to make practical use of socket.io to reach real time messaging using MERN Stack.

This repository contains the backend code for chatApp as well as frontend code too.

# Backend
It is built using Node.js, Express.js, and MongoDB (NEM) as the backend stack.

## Models

### User Model

{
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    }
}

### Conversation Model
{
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
}

### Message Model
{
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
}

## API Endpoints

### User Authentication

- **POST** /api/signup

  - **Description**: Register a new user.
  

- **POST** /api/login

  - **Description**: Log in with existing credentials.
  

### Messages

- **POST** /api/send/:id

  - **Description**: send message


- **GET** api/:id

  - **Description**: get messages
 


# Frontend
It is built using React.js as the frontend stack.


## Deployed Link:

https://whatsapp-6up1.onrender.com/

## Tech Stack 💻:

HTML, CSS, JavaScript
MERN
Socket.io


## Key Features:
1. User Authentication:
-signup, login

2. Homepage:
-sidebar: To show all the people who signed in
Top categories section.
3. Message section:
-Sending real time messages.

4. Search Functionality:
-Implemented search bar for searching particular people with name


## Snap Shots 📷:

**Signup Page**
![alt text]()



# Conclusion: 
Messenger is giving a real time conversation experience with online indicator who is online and is created to satisfy user experience.

