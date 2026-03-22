# CRUD Operations with Local Storage in React.js

This project is designed for beginners to learn and teach CRUD operations in React using browser local storage.

## Tech Used

- React.js (Functional Components)
- `useState` Hook
- `useEffect` Hook
- Browser Local Storage

## What is Local Storage?

Local storage is a browser feature that allows us to:

- Store data in key-value format
- Keep data even after page refresh
- Store data in string format only

Example:

```js
localStorage.setItem('name', 'Vivek')
localStorage.getItem('name')
```

Because local storage saves strings, we use:

- `JSON.stringify()` → Convert object/array to string
- `JSON.parse()` → Convert string back to object/array

## Step-by-Step Implementation

### Step 1: Setup Initial State

In `src/App.jsx`:

- `students` → Stores student list
- `name` → Input field value
- `editIndex` → Tracks which student is being edited

### Step 2: Load Data from Local Storage

- Run once using `useEffect(() => {}, [])`
- Read data using `localStorage.getItem('students')`
- Parse and set state with `setStudents(...)`

### Step 3: Save Data to Local Storage

- Watch `students` using `useEffect(..., [students])`
- Save automatically whenever list changes

### Step 4: Create (Add Student)

- Read input value from controlled input
- Add new item using spread operator:
	`setStudents([...students, trimmedName])`

### Step 5: Edit Student

- Load selected student into input
- Store index in `editIndex`
- Update with `map()` when form is submitted

### Step 6: Delete Student

- Remove selected student using `filter()`
- Update state and local storage automatically

### Step 7: UI Design (Basic)

- Input for student name
- Add/Update button
- Cancel button while editing
- Student list with Edit and Delete actions

## Important Concepts Students Must Understand

- `useState`
- `useEffect`
- Controlled Input
- Array methods (`map`, `filter`, spread operator)
- `JSON.stringify` & `JSON.parse`
- Local Storage behavior

## Run Project

```bash
npm install
npm run dev
```

## Build Check

```bash
npm run build
```

If local storage contains invalid JSON manually inserted by browser tools, the app safely falls back to an empty list.
