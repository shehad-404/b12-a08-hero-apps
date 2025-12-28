# 📱 AppVerse – Modern App Store Platform

## 📖 Description
**AppVerse** is a responsive modern app store platform built using **React**.  
The application allows users to explore apps, view app details, install and uninstall apps using localStorage, and manage their installed applications.  
It provides a smooth user experience with live search, loading animations, interactive charts, and toast notifications.

---

## 🛠️ Technologies Used
- **React JS**
- **React Router DOM**
- **Tailwind CSS**
- **Recharts**
- **React Hot Toast**
- **LocalStorage API**
- **JavaScript (ES6+)**
- **Vite**

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
