import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

if (!root) throw "root element is undefined";

createRoot(root).render(<App />);
