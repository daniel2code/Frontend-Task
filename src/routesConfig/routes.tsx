import { Routes, Route } from "react-router-dom";
import { Home, Login, SignUp } from "../pages";

 const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesConfig
