import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";

import { ContactMe } from "./pages/ContactMe";
import { Footer } from "./components/Footer";
import "./SCSS/app.scss";
import "./SCSS/mobile.scss";

import { WordlePage } from "./components/wordle/WordlePage";
import { GetQuote } from "./components/quote/GetQuote";
import RefreshmentEnglishCourse from "./pages/courses/RefreshmentEnglishCourse";
import DailyEnglish from "./pages/courses/DailyEnglish";
import BusinessEnglish from "./pages/courses/BusinessEnglish";
import YoungLearners from "./pages/courses/YoungLearners";
import EnglishForTeenagers from "./pages/courses/EnglishForTeenagers";
import GrammarEssentials from "./pages/courses/GrammarEssentials";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/wordle" element={<WordlePage />}></Route>
          <Route path="/quote" element={<GetQuote />}></Route>
          <Route path="/blog" element={<Blog />}></Route>

          <Route path="/contact" element={<ContactMe />}></Route>
          <Route
            path="/courses/refreshment-english"
            element={<RefreshmentEnglishCourse />}
          ></Route>

          <Route
            path="/courses/english-for-daily-life"
            element={<DailyEnglish />}
          ></Route>
          <Route
            path="/courses/business-english-essentials"
            element={<BusinessEnglish />}
          ></Route>

          <Route
            path="/courses/english-for-young-learners"
            element={<YoungLearners />}
          ></Route>
          <Route
            path="/courses/english-for-teenagers"
            element={<EnglishForTeenagers />}
          ></Route>

          <Route
            path="/courses/grammar-essentials"
            element={<GrammarEssentials />}
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
