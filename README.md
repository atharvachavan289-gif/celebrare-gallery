# Celebrare Photo Gallery - Frontend Internship Assignment

A responsive photo gallery web application built with React, Vite, and Tailwind CSS. This project was developed as a pre-screening assignment for the Frontend React Internship at Celebrare.

## 🚀 Live Demo 
👉 **[Visit the Live Application](https://celebrare-gallery-liard.vercel.app/)**
## ✨ Features

* **Data Fetching:** Fetches 30 images from the public Picsum API on initial load using a custom `useFetchPhotos` hook. Includes loading spinners and error handling states.
* **Responsive Grid:** Fully responsive UI built strictly with Tailwind CSS (4 columns on desktop, 2 on tablet, 1 on mobile). No external UI component libraries were used.
* **Real-time Search:** Users can filter the displayed photos by author name in real-time. This feature implements `useCallback` and `useMemo` to ensure optimal rendering performance without making redundant API calls.
* **Persistent Favourites:** Users can click the heart icon to toggle photos as favourites. This complex state is managed strictly using `useReducer` and persists across page reloads using browser `localStorage`.

## 🛠️ Tech Stack

* **Framework:** React (Functional Components)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS (v3)
* **State Management:** `useReducer`, `useState`
* **Performance Hooks:** `useCallback`, `useMemo`
* **Side Effects & Data:** `useEffect`, Custom Hooks

## 📂 Key Implementations

* `hooks/useFetchPhotos.js`: Custom hook to abstract the API fetching logic, returning `{ photos, loading, error }`.
* `favouritesReducer.js`: Centralized reducer logic to handle the `TOGGLE_FAVOURITE` action and sync the state with `localStorage`.
* `Gallery.jsx`: The main UI component handling the responsive grid, memoized search filtering, and conditional rendering.

## 💻 Local Setup Instructions

To run this project locally on your machine:

```bash
# 1. Clone the repository
git clone [https://github.com/atharvachavan289-gif/celebrare-gallery.git](https://github.com/atharvachavan289-gif/celebrare-gallery.git)

# 2. Navigate into the project directory
cd celebrare-gallery

# 3. Install the dependencies
npm install

# 4. Start the Vite development server
npm run dev
