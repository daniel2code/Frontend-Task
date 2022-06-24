import { Routes, Route } from "react-router-dom";
import { Login, SignUp, Dashboard } from "../pages";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Dashboard />} />
    </Routes>
  );
};

export default RoutesConfig;
