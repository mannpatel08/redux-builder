# 📝 Task Builder Application (Redux Toolkit + React)

## 📌 Project Overview
The Task Builder Application is a simple React-based project that demonstrates **global state management using Redux Toolkit**.  
Users can add and delete tasks while the application maintains a centralized and predictable state.

This project is designed to understand **Redux architecture, data flow, and clean separation of UI and business logic**.

---

## 🎯 Objectives
- Understand Redux architecture and unidirectional data flow  
- Manage global state efficiently in a React application  
- Implement Redux Toolkit with a clean and scalable structure  
- Separate UI components from state management logic  

---

## 🛠️ Technologies Used
- React.js  
- Redux Toolkit  
- React Redux  
- JavaScript (ES6+)  
- HTML & CSS  

---

## 🏗️ System Architecture
The application follows Redux’s standard architecture:

- **UI Components** – Handle user interaction  
- **Redux Store** – Holds the global application state  
- **Actions** – Describe events triggered by the user  
- **Reducers** – Update state based on actions  

---

## 🔁 Redux App Flow
1. User interacts with the UI (add/delete task)  
2. Component dispatches an action  
3. Reducer processes the action  
4. Redux store updates the state  
5. UI automatically re-renders  

**One-line Flow:**  
## 📂 Folder Structure
src/
│
├── app/
│ └── store.js
│
├── features/
│ └── tasks/
│ └── taskSlice.js
│
├── components/
│ └── TaskList.jsx
│
├── App.jsx
├── App.css
└── main.jsx


---

## ⚙️ Redux Store Configuration
The Redux store is configured using `configureStore` from Redux Toolkit and combines all feature reducers into a single global store.

---

## 🧩 Redux Slice (Task Slice)
The task slice handles:
- Adding new tasks
- Deleting existing tasks

Redux Toolkit simplifies state updates by allowing direct state mutation using **Immer**.

---

## 🎨 UI & Styling
All styles are centralized in a single file:

This ensures:
- Consistent styling
- Easy maintenance
- Simple project structure

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone <repository-url>
cd task-builder-app
npm install
npm run dev



<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b690c334-9ebc-4e0b-acc5-38585b0ee5d9" />
