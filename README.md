# 📱 AppVerse – Modern App Store Platform

## 📖 Description

**AppVerse** is a responsive modern app store platform built using **React**.  
The application allows users to explore apps, view app details, install and uninstall apps using localStorage, and manage their installed applications.  
It provides a smooth user experience with live search, loading animations, interactive charts, and toast notifications.

---

## 🛠️ Technologies Used

- **React JS**  
  Used to build a fast, component-based user interface with reusable UI components.

- **React Router DOM**  
  Handles client-side routing and navigation between pages without reloading the browser.

- **Tailwind CSS**  
  Utility-first CSS framework used to design responsive and modern UI quickly.

- **Recharts**  
  Used to create responsive and interactive charts for visualizing app review data.

- **React Hot Toast**  
  Displays lightweight and customizable toast notifications for user actions like install/uninstall.

- **LocalStorage API**  
  Stores installed app data in the browser so the data persists after page reload.

- **JavaScript (ES6+)**  
  Provides modern JavaScript features such as arrow functions, destructuring, and modules.

- **Vite**  
  A fast build tool and development server that improves performance and developer experience.

---

## 🧱 Layout & Data Design

### 🔹 Header

- Logo navigates to **Home Page**
- Navigation links:
  - Home
  - Apps
  - Installation
- Active route indication
- Contribution button linking to GitHub profile

### 🔹 Footer

- Custom designed footer with creative layout and styling

### 🔹 Data

- App data stored as a **JSON array (12–20 objects)**
- Each app object follows this structure:

```js
{
  image: string,
  title: string,
  companyName: string,
  id: number,
  description: string,
  size: number,
  reviews: number,
  ratingAvg: number,
  downloads: number,
  ratings: [
    { name: "1 star", count: number },
    { name: "2 star", count: number },
    { name: "3 star", count: number },
    { name: "4 star", count: number },
    { name: "5 star", count: number }
  ]
}
```
