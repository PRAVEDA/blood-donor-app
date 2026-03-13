# 🩸 Community Blood Donor Finder (React Project)

A simple **React web application** that helps users find blood donors by filtering donors based on **blood group, city, and availability**.

The application fetches user data from an API, converts them into donors, and allows users to search and request help from available donors.

---

## 🚀 Features

* 🔍 **Search by City**
  Users can search donors based on their city.

* 🩸 **Filter by Blood Group**
  Filter donors using a dropdown list of blood groups.

* 📊 **Sort by Availability**
  Sort donors so that **available donors appear first**.

* 📩 **Request Blood**
  Users can send a request to a donor.
  Once a request is sent, the button becomes **disabled**.

* 🌙 **Dark Mode / Light Mode**
  Toggle between dark and light themes for better UI experience.

* 📈 **Available Donor Counter**
  Displays the number of donors who are currently available.

* ⚡ **API Data Fetching**
  Donor data is fetched from a public API and transformed into donor objects.

* 📱 **Responsive Layout**
  Donor cards are displayed in a responsive grid layout.

* 🎨 **Interactive UI**
  Includes hover effects, badges for blood groups, and availability indicators.

---

## 🛠️ Technologies Used

* **React.js**
* **JavaScript (ES6)**
* **HTML5**
* **CSS3**
* **Fetch API**

---

## 📂 Project Structure

```
project-folder
│
├── src
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── public
│
└── README.md
```

---

## ⚙️ How It Works

1. When the application loads, it fetches user data from the API:

```
https://jsonplaceholder.typicode.com/users
```

2. The users are converted into **donor objects** with:

* Name
* City
* Blood Group (randomly generated)
* Availability (randomly generated)

3. Users can then:

* Search donors by city
* Filter donors by blood group
* Sort donors by availability
* Send blood requests

---

## ▶️ How to Run the Project

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/blood-donor-finder.git
```

### 2️⃣ Go to the project folder

```
cd blood-donor-finder
```

### 3️⃣ Install dependencies

```
npm install
```

### 4️⃣ Start the development server

```
npm run dev
```

The application will run on:

```
http://localhost:5173
```

---

## 💡 Future Improvements

Possible enhancements for this project:

* Add **donor registration form**
* Add **backend database**
* Add **authentication system**
* Add **location-based donor search**
* Integrate **real blood bank APIs**
* Add **pagination for large donor lists**

---

## 📸 Preview

A simple interface that allows users to quickly find available blood donors with filtering and sorting options.

Website Link - https://blood-donor-app-alpha.vercel.app/
---

## 👩‍💻 Author

**Praveda**

React Mini Project – Community Blood Donor Finder
