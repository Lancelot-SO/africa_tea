import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Shop from "./pages/Shop"
import Blog from "./pages/Blog"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Membership from "./pages/Membership"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
