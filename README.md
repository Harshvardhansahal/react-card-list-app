# 🧩 React Card List App (Vite + JSON Server)

This is a simple React app built with **Vite** that displays a list of cards using a mock API. It supports **adding**, **deleting**

---

## 🚀 Features

- ⚛️ Built with **React + Vite**
- 📦 Uses `json-server` for mock API
-  Add new cards to the list
-  Delete cards from the list
- 📁 Clean folder structure and reusable components

---

## 🖼️ Preview

![image](https://github.com/user-attachments/assets/a291eab3-d7e9-4ce6-95e9-19fcda122037)


---

## 📂 Project Structure

react-card-list-app/
├── public/
├── src/
│ ├── api/
│ │ └── cardService.js
│ ├── components/
│ │ └── Card.jsx
│ ├── styles/
│ │ └── Card.css
│ ├── App.jsx
│ └── main.jsx
├── db.json
├── package.json
└── README.md


---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/react-card-list-app.git
cd react-card-list-app
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the mock API server
```bash
npm run server
```
This runs json-server at: http://localhost:3001/cards
### 4. Start the React app
```bash
npm run dev
```
React app runs at: http://localhost:5173
