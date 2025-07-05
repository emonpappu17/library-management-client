# Minimal Library Management System

A modern and minimal library management system built with **React**, **Redux Toolkit Query**, **TypeScript**, **Tailwind CSS**, and **Node.js + Express + MongoDB**. It enables book management and borrowing without login or payment—focusing on clean design, performance, and core functionality.

---

## Live Demo

**Frontend** 👉 [Library-Management](https://library-management-client-chi.vercel.app/)

**Backend** 👉 [library-management-server-one-coral.vercel.app](https://library-management-server-one-coral.vercel.app/)

---

## Features

### Book Management

- View all books in a table (Title, Author, Genre, ISBN, Copies, Availability, Actions)
- Add new books
- Edit books
- Delete books (with confirmation)
- Borrow books (with due date & quantity)

> Logic:
> 
> - Quantity can't exceed available copies
> - If `copies === 0`, book becomes unavailable

---

### Borrow Summary

- Aggregated view of all borrowed books
- Shows: Title | ISBN | Total Quantity Borrowed

---

## Tech Stack

| Layer | Tech |
| --- | --- |
| Frontend | React, TypeScript |
| State | Redux Toolkit + RTK Query |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Toast UI | React Hot Toast |

---

## Pages / Routes

- `/books` – Book list view
- `/create-book` – Add book form
- `/borrow-summary` – Borrow summary

---

## Setup Instructions

---

```
# Clone the repository
git clone https://github.com/emonpappu17/library-management-client.git
cd library-management-client

# Install dependencies
npm install

# Create a .env file
cp .env.example .env

# Set environment variables
VITE_API_URL=http://localhost:5000/api
MONGODB_URI=your-mongo-db-uri

# Run the command
npm run dev
```