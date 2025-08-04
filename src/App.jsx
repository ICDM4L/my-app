import React from "react";
import TodosPage from "./pages/TodosPage";
import ContactPage from "./pages/ContactPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/todos">Todos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}
console.log(TodosPage);
console.log(ContactPage);