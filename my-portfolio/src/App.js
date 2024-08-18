import { Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import Brand from "./components/Brand";
import Owerview from "./components/Owerview";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import Team from "./components/Team";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <div id="content-wrapper">
        <Header />

        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/owerview' element={<Owerview />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/service' element={<Service />} />
          <Route path='/skill' element={<Skills />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/team' element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
