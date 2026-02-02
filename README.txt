# 💰 Money Manager Application

A full-stack Money Manager application built using **React, Node.js, Express, and MongoDB**.  
This app allows users to manage **accounts**, record **income and expenses**, and track balances with filters and edit functionality.

---

## 🚀 Features

### 📌 Accounts
- Create multiple accounts (Cash, Bank, Wallet, etc.)
- View individual account balances
- Transfer money between accounts
- Dynamic account list used across the app

### 📌 Transactions
- Add Income and Expense transactions
- Select account while adding a transaction
- Edit existing transactions
- Transactions are stored persistently in MongoDB

### 📌 Dashboard
- Total Balance calculation
- Total Income and Total Expense
- Real-time updates after add/edit actions

### 📌 Filters
- Filter by division (Personal / Office)
- Filter by date:
  - Today
  - Last 7 Days
  - This Month
  - This Year
  - Custom Date Range

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📂 Project Structure

money-manager/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── Home.jsx
│ │ │ └── Accounts.jsx
│ │ ├── components/
│ │ │ ├── AddTransactionModal.jsx
│ │ │ ├── EditTransactionModal.jsx
│ │ │ ├── AddAccountModal.jsx
│ │ │ ├── TransactionCard.jsx
│ │ │ └── TransactionFilters.jsx
│ │ ├── services/
│ │ │ └── api.js
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── controllers/
│ │ ├── accountController.js
│ │ └── transactionController.js
│ ├── routes/
│ │ ├── accountRoutes.js
│ │ └── transactionRoutes.js
│ ├── models/
│ │ ├── Account.js
│ │ └── Transaction.js
│ ├── server.js
│ └── package.json
│
└── README.md