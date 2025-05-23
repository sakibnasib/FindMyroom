# findeMyroom 🏠

**Live Site:** [https://findmyroom-d1044.web.app](https://findmyroom-d1044.web.app)

findeMyroom is a full-featured web application that helps people find compatible roommates and room rental listings with ease. Built with modern web technologies, this platform focuses on user experience, dynamic data, and secure authentication.

---

## 🌟 Features

- 🏡 **Dynamic Home Page** – Includes a banner carousel, featured roommate posts (dynamically showing 6 available ones), and extra meaningful content sections.
- 🔐 **Secure Authentication** – Email/password-based login with Google integration and strong password validation. Protected routes redirect unauthorized users.
- 📝 **Full CRUD Functionality** – Add, update, delete roommate listings, and manage your posts through private routes.
- ❤️ **Like & Reveal Feature** – Users can like posts (except their own) to show interest, which reveals the contact number.
- 🌙 **Dark/Light Mode Toggle** – Seamlessly switch between dark and light themes for better user experience.

---

## 🧭 Pages Overview

- **Home Page** – Banner slider, Featured Roommates section, and two extra sections with useful info.
- **Login/Register** – Email/password with Google Login support. Real-time validation and toast messages.
- **Add Roommate Listing** – Form with fields like title, location, rent, room type, preferences, etc.
- **Browse Listings** – Table view of all roommate posts with “See More” leading to detailed view.
- **Details Page** – Protected route showing full post details, like functionality, and contact reveal.
- **My Listings** – See all your posts with Update and Delete options (accessible only to the user).
- **Update Page** – Pre-filled form to update existing roommate post (optional modal implementation).
- **404 Page** – User-friendly error page for non-existent routes.
- **Loading Spinner** – Appears during async data fetching for better user feedback.

---

## ⚙️ Technologies Used

- React.js & React Router
- Firebase Authentication
- MongoDB & Express (for backend)
- Tailwind CSS / DaisyUI
- Lottie React, React Awesome Reveal, React-tooltip, React Simple Typewriter
- Toastify / SweetAlert for notifications

---

## 📌 Setup Instructions (Optional)

1. Clone the repository.
2. Run `npm install`.
3. Configure Firebase and MongoDB.
4. Run the development server using `npm run dev`.

---

## 🙌 Contribution

Feel free to fork the project and submit a pull request. All feedback and contributions are welcome!

---

