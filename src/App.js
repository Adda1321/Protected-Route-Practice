import logo from "./logo.svg";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Profile } from "./components/Profile";
import About from "./components/About";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./components/auth";
import { Login } from "./components/Login";
import { RequireAuth } from "./components/RequiredAuth";
import { Products } from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
function App() {
  return (
    <AuthProvider> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route element={<RequireAuth/>} >
        <Route path="/Profile" element={<Profile />} />
        <Route path="/about" element={<About />} />

        </Route>

        <Route path="/Profile" element={
        <RequireAuth>
        <Profile />
        </RequireAuth>
      } />

          <Route path='products' element={<Products />}>
          <Route index element={<FeaturedProducts />} /> 
          <Route path='featured' element={<FeaturedProducts />} />
          <Route path='new' element={<NewProducts />} />
        </Route>


        



      </Routes>
    </AuthProvider>
  );
}

export default App;
