import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ContactForm from "./pages/Contactus";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Error404 from "./pages/Error404";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Food from "./pages/Food";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  return (
    <div>
      <Navbar />
      <TransitionGroup>
        <CSSTransition key={window.location.key} classNames="fade" timeout={300}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food" element={<Food />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contactus" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </div>
  );
}

export default App;
