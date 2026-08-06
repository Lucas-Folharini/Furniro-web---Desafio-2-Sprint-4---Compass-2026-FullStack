# Furniro E-Commerce | Compass UOL Challenge

<div align="center">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-%23443E38.svg?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

<br/>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeORM](https://img.shields.io/badge/TypeORM-%23FE0803.svg?style=for-the-badge&logo=typeorm&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)

</div>

---

##  About The Project

This project was developed as part of the **Challenge 2** for the Compass UOL Fellowship Program. It consists of a pixel-perfect recreation of **Furniro**, a modern e-commerce furniture interface, fully integrated with a custom RESTful API.

The goal was to deliver a robust, scalable, and responsive full-stack application, ensuring high performance and an intuitive user experience while adhering strictly to the provided Figma prototypes and business rules.

---

##  Features

- **Dynamic Product Listing:** Server-side pagination, category filtering, and price sorting.
- **Single Product Page:** Detailed product views with dynamic pricing calculation based on user selection (size and color variations).
- **Advanced State Management:** A fully functional Shopping Cart handled globally via Zustand, persisting data in Local Storage.
- **Checkout Simulation:** Cart manipulation (add, update quantity, remove) and checkout feedback using custom Toasts.
- **Custom REST API:** Built from scratch using Node.js and TypeORM, seeding the SQLite database automatically upon startup.
- **Fully Responsive:** Mobile-first approach tailored with Tailwind CSS for seamless navigation across all devices.

---

##  Architecture & Technologies

The repository is structured as a monorepo containing two main directories:

### Front-end (`/front-end`)

Built for speed and developer experience.

- React.js (via Vite)
- TypeScript
- Tailwind CSS
- React Router DOM
- Zustand
- Splide.js
- React Hot Toast

###  Back-end (`/back-end`)

A scalable backend architecture replacing the standard `json-server` requirement to provide robust filtering and real relational data.

- Node.js
- Express.js
- TypeScript
- TypeORM
- SQLite
- Swagger

---

##  Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have **Node.js (v18 or higher)** and **npm** installed on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Lucas-Folharini/Furniro-web---Desafio-2-Sprint-4---Compass-2026-FullStack.git

```

### 2. Running the Back-end (API)

The backend utilizes an SQLite database. When starting the server in development mode, it will automatically parse the `db.json` file and seed the database with the initial products.

Run the following commands:

```bash
cd back-end
npm install
npm run dev
```

The API will be available at:

```text
http://localhost:3000
```

### 3. Running the Front-end

Open a new terminal window in the project root and run:

```bash
cd front-end
npm install
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

Open this URL in your browser to explore **Furniro**.

---

##  The Team

This project was brought to life by a dedicated group:

- Alana Agne Brandão Rocha
- Brunno Felipe Bezerra
- Gustavo Siqueira De Lima
- Lucas Folharini
- Pedro Lucas Galdino Leite

---

##  Acknowledgements

Developed with dedication for the **Compass UOL Fellowship Program**.