import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Posts from "./components/posts/Posts";
import Create from "./components/create/Create";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NotFound from "./components/NotFound";
import AuthGuard from "./guards/AuthGuard";

import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/authContext";
import Logout from "./components/logout/Logout";
import Details from "./components/details/Details";
import Edit from "./components/edit/Edit";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:postId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<AuthGuard />}>
          <Route path="/posts/:postId/edit" element={<Edit />} />
          <Route path="/posts/create" element={<Create />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
