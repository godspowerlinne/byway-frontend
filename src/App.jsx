import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Category from './pages/Category'
import Checkout from './pages/Checkout'
import Course from './pages/Course'
import Mentor from './pages/Mentor'
import OrderComplete from './pages/OrderComplete'
import ShoppingCart from './pages/ShoppingCart'
import StudentProfile from './pages/StudentProfile'
import StudentLearning from './pages/StudentLearning'

const App = () => {
  return (
    <div>
      <Router>
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
      </Router>
    </div>
  )
}

export default App