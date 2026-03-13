# 🚀 Asynchronous Product Viewer

A dynamic web application built to demonstrate asynchronous data fetching between a client and a server without reloading the page. This project uses a local REST API built with Express to serve product data, which is then dynamically rendered on the frontend using Vanilla JavaScript.

## ✨ Features

- **Asynchronous Data Fetching:** Utilizes the modern `Fetch API` and `async/await` syntax to retrieve data seamlessly.
- **Real-time Search:** Includes a built-in search bar that filters products instantly as the user types.
- **Dynamic DOM Manipulation:** Renders product cards on the fly and handles empty states (e.g., displaying a "No results found" message).
- **UX Improvements:** Features a custom CSS loading spinner to provide visual feedback during the simulated network request.
- **REST API Simulation:** Includes a lightweight Express server that serves JSON data with an artificial delay to mimic real-world network latency.

## 🛠️ Tech Stack

- **Frontend:** HTML5, Custom CSS, Vanilla JavaScript (ES6+)
- **Backend:** Node.js, Express.js

## 🚀 How to Run Locally

1. Clone the repository:
   git clone https://github.com/your-username/your-repo-name.git

2. Navigate to the project directory:
   cd your-repo-name

3. Install the dependencies:
   npm install

4. Start the local server:
   node server.js

5. Open your browser and visit:
   http://localhost:3000
