# Furniro - E-Commerce Landing Page

<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/JSON_Server-323330?style=for-the-badge&logo=json&logoColor=white" alt="JSON Server" />
  <img src="https://img.shields.io/badge/Splide.js-000000?style=for-the-badge&logo=javascript&logoColor=white" alt="Splide" />
</p>

A modern, responsive, and interactive e-commerce interface developed as a technical challenge solution. The project simulates the storefront of a high-end furniture store, featuring data consumption via a simulated REST API, an interactive carousel, form validation, and a layout architecture built without external libraries.

## Features

- **Dynamic Storefront:** Rendering of products fetched from a simulated local API.
- **Visual Feedback:** Friendly floating notification system when adding products to the cart.
- **Newsletter Validation:** Email format verification using Regex, with custom success or error feedback.
- **Interactive Carousel:** Elegant display of inspiring environments using smooth sliders.
- **Architectural Mosaic:** "Share your setup" image gallery built 100% with native CSS/Tailwind Flexbox.
- **Responsive Design:** Interface adaptable to mobile devices, tablets, and desktops.

## Technologies Used

This project was built with the following technologies and ecosystems:

- **[React 19](https://react.dev/):** Main library for building the component-based interface.
- **[TypeScript](https://www.typescriptlang.org/):** JavaScript superset that adds static typing, ensuring safer and more scalable code.
- **[Vite](https://vitejs.dev/):** High-performance build tool for the modern ecosystem.
- **[Tailwind CSS](https://tailwindcss.com/):** CSS utility framework for agile and responsive styling directly in JSX.
- **[JSON Server](https://github.com/typicode/json-server):** Quick creation of a complete fake REST API (mock) to provide product data.
- **[React Hot Toast](https://react-hot-toast.com/):** Lightweight library for notifications (toasts) in the cart and email flow.
- **[Splide.js (@splidejs/react-splide)](https://splidejs.com/):** Lightweight and accessible engine used exclusively for the slider in the "Rooms Inspiration" section.

## How to Run the Project

**Prerequisites:** You need to have [Node.js](https://nodejs.org/) installed on your machine.

**1. Clone the repository**
```bash
git clone https://github.com/Lucas-Folharini/Furniro-homepage---Desafio-1-Sprint-2.git
cd Furniro-homepage---Desafio-1-Sprint-2
```

**2. Install dependencies**
```Bash
npm install
```
**3. Start the Data Server**
In one terminal, start json-server to provide the product data. The server will run on port 3000.
```Bash
npm run server
```
**4. Start the Frontend**
Open a second terminal tab/window and start the Vite development environment:
```Bash
npm run dev
```
Open the local address shown in the terminal in your browser to see the project running.