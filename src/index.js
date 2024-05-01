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

      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </main>
  );
}

function Pizza({ pizza }) {
  return (
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : pizza.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const workHours = { start: 10, close: 22 };
  const isOpen = hour >= workHours.start && hour <= workHours.close;
  const open_to_order = (
    <>
      <p>
        Now: {new Date().toLocaleTimeString()}. We're open until{" "}
        {workHours.close}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </>
  );

  const close_to_order = (
    <p>
      Now: {new Date().toLocaleTimeString()}. We're closed until{" "}
      {workHours.start}:00. Come visit us in work hours.
    </p>
  );

  return (
    <footer className="footer">
      <div className="order">{isOpen ? open_to_order : close_to_order}</div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
