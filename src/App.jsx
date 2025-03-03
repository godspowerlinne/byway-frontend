import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

// Base Components
import Auth from "./base/Auth";
import Modal from "./base/Modal";
import JsonPlaceholder from "./base/JsonPlaceholder";
import Theme from "./base/Theme";

// Pages Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Course from "./pages/Course";
import Mentor from "./pages/Mentor";
import OrderComplete from "./pages/OrderComplete";
import ShoppingCart from "./pages/ShoppingCart";
import StudentProfile from "./pages/StudentProfile";
import StudentLearning from "./pages/StudentLearning";


// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const AppLayout = () => {
  const location = useLocation();
  const AuthPage = location.pathname === "/login" || location.pathname === "/signup";
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Guest User Routes  */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* Authenticated User Routes  */}
        <Route path="/category" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/course" element={<Course />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/student-profile" element={<StudentProfile />} />
        <Route path="/student-learning" element={<StudentLearning />} />
      </Routes>
      {!AuthPage && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Auth>
        <Modal>
          <JsonPlaceholder>
            <Theme>
              <Router>
                <AppLayout />
              </Router>
            </Theme>
          </JsonPlaceholder>
        </Modal>
      </Auth>
    </div>
  );
};

export default App;
