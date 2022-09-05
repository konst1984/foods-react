import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NotFound } from "./NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes basename="/foods-react">
          <Route path="/foods-react" element={<Home />} />
          <Route path="/foods-react/about" element={<About />} />
          <Route path="/foods-react/contacts" element={<Contact />} />
          <Route path="/foods-react/category/:name" element={<Category />} />
          <Route path="/foods-react/meal/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
