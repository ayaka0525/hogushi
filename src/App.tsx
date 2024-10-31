import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

/* https://www.section.io/engineering-education/page-transition-in-react-using-framer-motion/ */

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
