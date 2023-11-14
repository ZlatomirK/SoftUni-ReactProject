import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Create from "./components/Create";
import Login from "./components/Login";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
