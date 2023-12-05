import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import Posts from "./components/Posts";
import Create from "./components/create/Create";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/NotFound";
import AuthGuard from "./guards/AuthGuard";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Logout from "./components/logout/Logout";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<AuthGuard />}>
          <Route path="/posts/create" element={<Create />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
