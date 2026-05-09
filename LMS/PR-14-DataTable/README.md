# Student Data Table Management System (ReactJS)

A dynamic data table built with ReactJS that supports displaying, searching, sorting, filtering, and pagination of student/user data.

## Features

- **Display Data**: Shows user information including Name, Email, Phone, and City
- **Search**: Search by Name or Email
- **Sorting**: Sort data alphabetically (A → Z or Z → A) by name
- **Filtering**: Filter by City
- **Pagination**: Navigate through data with 5 or 10 rows per page
- **Actions**: Edit and Delete buttons (Delete functionality implemented)

## Technologies Used

- React 19
- Vite
- CSS3
- JSONPlaceholder API for sample data

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── App.jsx          # Main application component
├── Table.jsx        # Data table component
├── Search.jsx       # Search input component
├── Filter.jsx       # City filter dropdown
├── Pagination.jsx   # Pagination controls
├── App.css          # Main styles
└── main.jsx         # Application entry point
```

## API

Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) for sample user data.

## Build

To build for production:
```bash
npm run build
```

## Evaluation Criteria

- UI Design: Clean, responsive table design
- Search: Functional search by name/email
- Sorting: Alphabetical sorting by name
- Pagination: Working pagination with row controls
- Code Structure: Well-organized React components
