# 🛒 E-Commerce with Cloud Integration

## 📌 Project Overview

This project is a cloud-enabled E-Commerce Web Application developed using **React** and **Azure Cloud Services**. It allows users to browse products, manage their shopping cart, proceed to checkout, and store order details in **Azure Blob Storage** using **Azure Functions**.

---

## 🚀 Features

* Browse products using API
* Product details page
* Category-wise filtering
* Shopping Cart
* Wishlist
* Quantity Management
* Checkout Page
* Order Summary
* Responsive UI
* Cloud-based Order Storage

---

## ☁️ Cloud Integration

### Azure Static Web Apps

* Hosted the React frontend on Azure Static Web Apps.

### Azure Functions

* Created a serverless backend (`saveOrder`) to receive customer orders.

### Azure Blob Storage

* Order details are stored as JSON files inside an Azure Blob Storage container named **orders**.

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router DOM
* Redux Toolkit
* Bootstrap
* JavaScript
* HTML5
* CSS3

### Cloud

* Azure Static Web Apps
* Azure Functions
* Azure Blob Storage

---

## 📂 Project Structure

```
E-Commerce-with-Cloud
│
├── src
│   ├── components
│   ├── pages
│   ├── redux
│   └── images
│
├── ecommerce_api
│   ├── src/functions
│   ├── package.json
│   ├── host.json
│   └── local.settings.json (Not uploaded)
│
├── public
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

Run the React application

```bash
npm run dev
```

---

## Azure Function

Move to the Azure Function folder

```bash
cd ecommerce_api
```

Install dependencies

```bash
npm install
```

Deploy using Azure Functions extension in Visual Studio Code.

## Cloud Workflow

```
Customer
      │
      ▼
React Frontend
      │
      ▼
Azure Function (saveOrder)
      │
      ▼
Azure Blob Storage
      │
      ▼
orders/order-xxxxxxxx.json
```

---


## Future Enhancements

* User Authentication
* Online Payment Gateway
* Order History
* Admin Dashboard
* Email Notifications
* Inventory Management

