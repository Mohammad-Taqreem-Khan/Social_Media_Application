# Social Media Application

## About the Project
This project is a real-time social media application designed to facilitate seamless communication among users. It is inspired by real-world social platforms and focuses on features like following users, chatting, and receiving notifications. The application is built to provide a clean, intuitive interface where users can engage with their community effectively. 

## Key Features
* **Real-Time Chat Interface:** Provides a live messaging environment featuring typing indicators and instant message updates.
* **Follow System:** Displays a clean interface that lists all the users you are following and your followers, building a foundation for social connections.
* **Notification System:** Alerts users in real-time when they receive a new follow or a message request, keeping them informed and engaged.

## Technology Stack
* **MongoDB Atlas:** Cloud-based data storage used to securely house user profiles, chat logs, and application data.
* **Express.js:** A secure server-side framework that handles routing, user authentication, and database communication.
* **React & Tailwind CSS:** Used to build a dynamic, modern, and responsive frontend user interface.
* **Node.js:** The JavaScript runtime environment powering the backend APIs.
* **Socket.IO:** The real-time communication engine that facilitates instant, bidirectional messaging over WebSockets.

## Team 66 Contributions

| Team Member | Role | Key Contributions |
| :--- | :--- | :--- |
| **Yuvraj Singh** | Frontend Dev | Designed the React components for the chat UI, sidebar navigation, and notification panel. |
| **Md. Taqreem Khan** | Backend Dev | Created Node.js and Express APIs for user registration, login, the follow system, and the WebSocket server. |
| **Anipra Pandya** | Database & Deployment | Handled MongoDB Atlas schema design, user-message models, and hosted the backend. |
| **Ujjwal Sharma** | Socket & Integration | Implemented real-time chat using Socket.IO and managed state synchronization between users. |

## Challenges and Solutions

| Challenge | Impact | Solution |
| :--- | :--- | :--- |
| **Lag in Message Syncing** | Inconsistent real-time communication during high user activity. | Implemented Socket.IO rooms to isolate conversations and used acknowledged events to confirm delivery. |
| **Database Rate Limiting** | Database operations were throttled when handling multiple simultaneous updates. | Optimized database queries and applied proper indexing on frequently accessed user collections. |

## Future Scope
* **Profile Enhancements:** Plans to allow users to share temporary stories or set status updates for more expressive interactions.
* **Voice/Video Chat:** Expanding communication capabilities to include secure voice and video calling.
* **React Native Mobile App:** Developing a cross-platform mobile application for Android and iOS devices.
* **AI Integration:** Implementing AI-based message filtering for moderation and offering smart friend suggestions based on user preferences.

---
*Developed by Team 66 (April 15, 2025)*
