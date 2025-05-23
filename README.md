# findeMyroom 🏠

**Live Site:** [https://findmyroom-d1044.web.app](https://findmyroom-d1044.web.app)

findeMyroom is a full-featured roommate and rental discovery platform built with modern technologies. It offers an intuitive user experience with dynamic listings, secure authentication, interactive UI components, and clean UI feedback.

---

## 🌟 Key Features

- 🏡 **Interactive Home Page**
  - 🎞️ Swiper.js-powered banner/slider with at least 3 slides and meaningful messaging.
  - ⭐ Featured Roommates section showing 6 dynamic posts using MongoDB's `limit()` query.
  - 📚 Two extra meaningful content sections for user guidance or testimonials.

- 🔐 **Secure Auth System**
  - Email/password login & registration (with Google login).
  - Strong password policy (uppercase, lowercase, min 6 chars).
  - Toast notifications using **Mosan SweetAlert2** for all success/error messages.

- 🛠️ **Full CRUD Support**
  - Add, update, and delete roommate posts via protected routes.
  - Update via full page or modal.
  - MongoDB used for storing all listing data.

- ❤️ **Engaging Details Page**
  - Like system to show interest (excluding self-posts).
  - Dynamic count of interested users shown.
  - Reveal contact number only after liking the post.

- 🌘 **Theme Switcher**
  - Toggle between light and dark mode for improved accessibility and user preference.

---

## 🧭 Core Pages

- **Home Page** – Swiper carousel, featured roommate section, and two extra helpful sections.
- **Login/Register** – Email/password auth with Google login. Realtime validation + SweetAlert2 feedback.
- **Add Roommate Post** – Form-based listing creation (with read-only name/email).
- **Browse Listings** – All user listings shown in table format with “See More” links.
- **Details Page** – Shows full post info. Protected route.
- **My Listings** – View, update, and delete your own posts only.
- **Update Page** – Edit previously created roommate listings.
- **404 Page** – Friendly error page for invalid routes.
- **Loading Spinner** – Appears during data fetching.

---

## 🧩 Tech Stack

- **Frontend**: React, Tailwind CSS, DaisyUI
- **Routing**: React Router
- **State/Data**: Firebase Auth, MongoDB, Axios
- **UI Libraries**:
  - [SweetAlert2](https://sweetalert2.github.io/) (via Mosan) for clean toast alerts
  - [Swiper.js](https://swiperjs.com/) for responsive slider
  - Lottie React, React Awesome Reveal, React Simple Typewriter, React Tooltip

---

## 🚀 Getting Started

1. Clone this repository.
2. Install dependencies: `npm install`
3. Configure `.env` with Firebase and MongoDB info.
4. Start dev server: `npm run dev`

---

## 🙌 Contribute

Want to contribute? Pull requests and feedback are welcome!

---

