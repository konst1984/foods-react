import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";
import { Home } from "./pages/Home";
import { NotFound } from "./NotFound";
import { Category } from "./pages/Category";
import { Recipe } from "./pages/Recipe";
import ArrowUp from "./ArrowUp/ArrowUp";

function App() {
  return (
    <>
      <Layout>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meal/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
      </Layout>
    </>
  );
}

export default App;

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ArrowUp />
      <Footer />
    </>
  );
};
