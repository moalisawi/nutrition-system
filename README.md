# 🧠 Nutrition System

A complete system for managing subscribers, subscriptions, payments, and installments, with a real-time dashboard powered by Firebase.

---

## 🚀 Overview

This project is a web-based dashboard designed to manage a nutrition/subscription business. It allows you to:

* Manage subscribers efficiently
* Track payments and installments
* View real-time analytics (daily / monthly)
* Control user roles and permissions
* Log all system activities (audit logs)

---

## ✨ Features

### 👥 Subscribers Management

* Add / edit / delete subscribers
* Assign subscription packages (Silver / Gold)
* Track subscription status (active / expired)

---

### 💳 Payments & Installments

* Add payments per subscriber
* Support partial payments (installments)
* Automatically calculate:

  * Paid amount
  * Remaining balance
* Multi-currency support (with USD conversion)

---

### 📊 Analytics Dashboard

* Statistics by:

  * Month
  * Day
  * Package type
  * Country
  * Employee
  * Payment method
* Daily subscription tracking
* Revenue insights

---

### 🔐 Roles & Permissions

* **Owner** (full control)
* **Admin**
* **Employee**

---

### 🧾 Audit Logs

* Tracks all actions:

  * Create
  * Update
  * Delete
* Logs are immutable (cannot be edited)

---

### 📎 Attachments

* Optional payment receipt upload
* Supported formats:

  * Images (JPG / PNG)
  * PDF

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Firebase
* **Database:** Firestore
* **Authentication:** Firebase Auth
* **Storage:** Firebase Storage

---

## ⚙️ Project Structure

```bash
.
├── index.html        # Main dashboard
├── users.html        # User management
├── logs.html         # Audit logs
├── firebase.json     # Firebase hosting config
├── firestore.rules   # Firestore security rules
└── .gitignore
```

---

## 🔧 Setup & Run

### 1. Clone the repository

```bash
git clone https://github.com/moalisawi/nutrition-system.git
```

---

### 2. Open the project

Simply open:

```bash
index.html
```

(No server required)

---

### 3. Firebase Configuration

Make sure to add your Firebase config:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
};
```

---

## 📦 Deployment

### Firebase Hosting

```bash
firebase deploy
```

---

## 🔐 Security Notes

* Do not expose sensitive Firebase credentials
* Use Firestore Rules to control access
* Validate user permissions before actions

---

## 🤝 Contributing

Contributions are welcome!

### Steps:

1. Fork the repository
2. Create a branch:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Add feature"
```

4. Push:

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📌 Future Improvements

* Better UI/UX
* Charts & visual analytics
* PDF reports
* Subscription expiry notifications
* Advanced role management

---

## 👨‍💻 Author

**Mohammed (Mido)**
GitHub: https://github.com/moalisawi

---

## 📄 License

MIT License
