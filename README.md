<h1 align="center">🏠 FindMyRoom</h1>

<p align="center">
  A modern roommate and rental listing platform built with <strong>React</strong>, <strong>Firebase</strong>, <strong>MongoDB</strong>, and <strong>Tailwind CSS</strong>.
</p>

<p align="center">
  🔗 <a href="https://findmyroom-d1044.web.app" target="_blank"><strong>Live Site</strong></a>
</p>

---

## 📸 Preview

![FindMyRoom Banner](https://i.ibb.co/yf6t9tk/findmyroom-banner.png) <!-- Replace with your own banner or GIF -->

---

## 🌟 Features

- 🔐 **Secure Authentication**
  - Firebase login/register (Email + Google)
  - Client-side validation + SweetAlert2 feedback

- 🏠 **Add & Manage Roommate Listings**
  - Add, update, and delete posts (only by owner)
  - Read-only email/name autofilled from Firebase

- 🧠 **Like System + Contact Reveal**
  - Users can like posts to express interest
  - Contact number shown only after liking

- 🎨 **Modern UI**
  - Swiper.js sliders
  - Responsive tables, cards, and form components
  - Skeleton loaders while fetching data

- 🌗 **Dark/Light Mode Toggle**

---

## 🗂️ Core Pages

| Route                        | Description                                |
|-----------------------------|--------------------------------------------|
| `/`                         | Homepage with slider, featured listings    |
| `/auth/login` / `/auth/register`      | Auth pages with Firebase integration       |
| `/das/addRoommate`          | Add new roommate post                      |
| `/das/my-listings`          | Edit/delete your own listings              |
| `/das/browseListing`        | See all available roommate posts           |
| `/details/:id`              | Full listing info + like functionality     |
| `/das/upDateRoommateInfo/:id` | Update form for existing listing        |
| `*`                         | Custom 404 page                            |

---

## 🌐 Backend API

Hosted on **Vercel**:  
**`https://find-my-roommate-server.vercel.app`**

| Endpoint                              | Method | Description                                 |
|---------------------------------------|--------|---------------------------------------------|
| `/roommates`                          | GET    | Get all listings                            |
| `/roommates/email/:email`            | GET    | Get listings by user email                  |
| `/roommates/:id`                      | GET    | Get single roommate by ID                   |
| `/roommates`                          | POST   | Add new roommate post                       |
| `/roommates/:id`                      | PUT    | Update post                                 |
| `/roommates/:id`                      | DELETE | Delete post                                 |
| `/roommates/like/:id`                 | PATCH  | Like a post                                 |

---

## 🛠️ Tech Stack

### 💻 Frontend
- React (Vite)
- Tailwind CSS + DaisyUI
- React Router DOM
- Firebase Authentication
- Axios for API calls

### 🎨 UI Libraries
- **Swiper.js** – responsive carousels  
- **SweetAlert2** – for alerts/toasts  
- **React Awesome Reveal**, **Typewriter**, **Tooltip**, **Lottie** – visual enhancements

### 🔧 Backend
- Node.js & Express (Vercel hosted)
- MongoDB Atlas
- Firebase Auth for secured endpoints

---

## ⚙️ Setup Instructions

### 🔐 .env.local Configuration

Create a `.env.local` file in the root directory with:

```env
# Firebase Auth Configuration
VITE_apiKey=AIzaSyB86dJMzjPvvjDjkt6zaXj4uI_YmvbSZTc
VITE_authDomain=findmyroom-d1044.firebaseapp.com
VITE_projectId=your_project_id
VITE_storageBucket=your_storage_bucket
VITE_messagingSenderId=your_messagingSenderId
VITE_appId=your_app_id

# Image Upload (imgbb)
VITE_IMGBB_API_KEY=your_imgbb_api_key

# Backend API
VITE_API_URL=https://find-my-roommate-server.vercel.app
