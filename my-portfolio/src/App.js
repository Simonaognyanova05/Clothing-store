import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Header from "./components/user/Header";
import About from "./components/user/About";
import Contact from "./components/user/Contact";
import Home from "./components/user/Home";
import Project from "./components/user/Project";
import Login from "./components/admin/Login";
import Footer from "./components/user/Footer";
import HomeAdmin from "./components/admin/HomeAdmin";
import Logout from "./components/admin/Logout";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/logout" element={<Logout />} />
          <Route path="/admin/" element={<HomeAdmin />} />


        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
