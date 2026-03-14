# Social Media Application

## About the Project
This project is a real-time social media application designed to facilitate seamless communication among users[cite: 7]. [cite_start]It is inspired by real-world social platforms and focuses on features like following users, chatting, and receiving notifications[cite: 8]. [cite_start]The application is built to provide a clean, intuitive interface where users can engage with their community effectively[cite: 14]. 

## Key Features
* [cite_start]**Real-Time Chat Interface:** Provides a live messaging environment featuring typing indicators and instant message updates[cite: 78, 79].
* [cite_start]**Follow System:** Displays a clean interface that lists all the users you are following and your followers, building a foundation for social connections[cite: 58, 59].
* [cite_start]**Notification System:** Alerts users in real-time when they receive a new follow or a message request, keeping them informed and engaged[cite: 96, 97].

## Screenshots
*(Note: Create an `images` folder in your repository, upload your screenshots there, and update the file paths below)*

### Real-Time Chat Interface
![Real-Time Chat Interface](./images/screenshot2.png)
[cite_start]*Showcases a live messaging environment with typing indicators and instant message updates[cite: 79].*

### Follow System Page
![Follow System Page](./images/screenshot1.png)
[cite_start]*Displays a clean interface listing all users being followed and followers[cite: 58].*

## Technology Stack
* [cite_start]**MongoDB Atlas:** Cloud-based data storage used to securely house user profiles, chat logs, and application data[cite: 32, 33].
* [cite_start]**Express.js:** A secure server-side framework that handles routing, user authentication, and database communication[cite: 38, 39].
* [cite_start]**React & Tailwind CSS:** Used to build a dynamic, modern, and responsive frontend user interface[cite: 36, 37].
* [cite_start]**Node.js:** The JavaScript runtime environment powering the backend APIs[cite: 26].
* [cite_start]**Socket.IO:** The real-time communication engine that facilitates instant, bidirectional messaging over WebSockets[cite: 34, 35].

## Team 66 Contributions

| Team Member | Role | Key Contributions |
| :--- | :--- | :--- |
| **Yuvraj Singh** | Frontend Dev | [cite_start]Designed the React components for the chat UI, sidebar navigation, and notification panel[cite: 25]. |
| **Md. Taqreem Khan** | Backend Dev | [cite_start]Created Node.js and Express APIs for user registration, login, the follow system, and the WebSocket server[cite: 26]. |
| **Anipra Pandya** | Database & Deployment | [cite_start]Handled MongoDB Atlas schema design, user-message models, and hosted the backend[cite: 27]. |
| **Ujjwal Sharma** | Socket & Integration | [cite_start]Implemented real-time chat using Socket.IO and managed state synchronization between users[cite: 28]. |

## Challenges and Solutions

| Challenge | Impact | Solution |
| :--- | :--- | :--- |
| **Lag in Message Syncing** | [cite_start]Inconsistent real-time communication during high user activity[cite: 41, 42]. | [cite_start]Implemented Socket.IO rooms to isolate conversations and used acknowledged events to confirm delivery[cite: 43]. |
| **Database Rate Limiting** | [cite_start]Database operations were throttled when handling multiple simultaneous updates[cite: 44, 45]. | [cite_start]Optimized database queries and applied proper indexing on frequently accessed user collections[cite: 46]. |

## Future Scope
* [cite_start]**Profile Enhancements:** Plans to allow users to share temporary stories or set status updates for more expressive interactions[cite: 102, 103].
* [cite_start]**Voice/Video Chat:** Expanding communication capabilities to include secure voice and video calling[cite: 104].
* [cite_start]**React Native Mobile App:** Developing a cross-platform mobile application for Android and iOS devices[cite: 106].
* [cite_start]**AI Integration:** Implementing AI-based message filtering for moderation and offering smart friend suggestions based on user preferences[cite: 107].

---
[cite_start]*Developed by Team 66 (April 15, 2025)* [cite: 2, 3]
