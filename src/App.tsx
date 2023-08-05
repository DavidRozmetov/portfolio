import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Portfolio } from "./pages/Portfolio";
import { ContactMe } from "./pages/ContactMe";
import { Footer } from "./components/Footer";
import "./SCSS/app.scss";
import "./SCSS/mobile.scss";
import { PhonicsPink } from "./pages/projects/PhonicsPink";
import { PhonicsBlue } from "./pages/projects/PhonicsBlue";
import { SnappyLike } from "./pages/projects/SnappyLike";
import { WWTABM } from "./pages/projects/WWTBAM";
import { TestGenerator } from "./pages/projects/TestGenerator";
import { TestWorms } from "./pages/projects/TestWorms";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route
            path="/portfolio/phonics-pink"
            element={<PhonicsPink />}
          ></Route>
          <Route
            path="/portfolio/phonics-blue"
            element={<PhonicsBlue />}
          ></Route>
          <Route path="/portfolio/snappylike" element={<SnappyLike />}></Route>
          <Route
            path="/portfolio/who-wants-to-be-a-mil.."
            element={<WWTABM />}
          ></Route>
          <Route
            path="/portfolio/test-generator"
            element={<TestGenerator />}
          ></Route>
          <Route path="/portfolio/testworms" element={<TestWorms />}></Route>
          <Route path="/contact" element={<ContactMe />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
