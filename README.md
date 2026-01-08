# UI Task – News Module (React + Redux)

## Live Demo
https://ui-task-react.vercel.app/

---

## Overview
This project implements a front-end technical task based on the provided Figma design.  
The goal was to build a pixel-accurate UI while demonstrating proper state management,
clean component structure, and realistic user interactions.

The application displays a list of news items with search, sorting, pagination,
and a side drawer that shows detailed content for each item.

No backend integration is used. All data is mocked locally.

---

## Tech Stack
- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Vite

---

## Setup & Run Locally

### Prerequisites
- Node.js (v16 or later)
- npm

### Steps
```bash
git clone <repository-url>
cd ui-task-react
npm install
npm run dev
```

The application will run on:
```
http://localhost:5173
```

---

## Features

### UI Implementation
- Pixel-perfect implementation based on Figma
- RTL support
- Responsive layout
- Clean and reusable components

---

### News Listing
- News displayed in a card grid
- Each card includes:
  - Image
  - Title
  - Description
  - Date
  - Read More button

---

### Search
- Implemented using Redux
- Filters news by title and description
- Pagination resets when the search query changes
- Handles empty results safely

---

### Sorting
- Implemented via Redux state
- Supports newest and oldest sorting
- Optimized using memoized selectors

---

### Pagination
- Client-side pagination
- 6 items per page
- Mock pagination with 999 pages
- Circular pagination logic to avoid empty pages

---

### Drawer / Side Panel
- Opens on clicking Read More
- Slides from the right
- Height is less than full viewport to match Figma
- Background scroll is locked
- Scroll enabled only inside the drawer
- Displays:
  - Image
  - Title
  - Date
  - Long scrollable content

---

### Mock Data
- Data generated locally
- Structured to simulate real API responses
- Long content generated dynamically to test scrolling behavior

---

## State Management
- Redux Toolkit used for global state
- Managed state includes:
  - News items
  - Search query
  - Sort option
- Derived data handled using memoized selectors

---

## Assumptions
- No backend integration was required
- Pagination is client-side for demonstration purposes
- A fixed number of pages is used to showcase pagination behavior
- Focus was on layout accuracy and core functionality

---

## Notes
The project structure is ready to be connected to a real backend with minimal changes.

---

## Author
Marwa
