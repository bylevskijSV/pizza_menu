import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { pizzaData } from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      <Pizza />
    </main>
  );
}

function Pizza() {
  return (
    <div className="pizza">
      <img src="pizzas/spinaci.jpg" alt="Pizza spinaci" />
      <h3>Pizza</h3>
      <p>ingredients</p>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const workHours = { start: 10, close: 22 };
  const isOpen = hour >= workHours.start && hour <= workHours.close;
  const msg = isOpen ? "We're currently open!" : "We close now!";

  return <footer className="footer">{msg}</footer>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
