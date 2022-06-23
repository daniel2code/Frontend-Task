import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface Props {
  bg: string;
}

const Index: React.FC<Props> = ({ bg }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/signup");
    }, 3000);
  }, []);

  return (
    <div className="container" style={{ backgroundColor: bg }}>
      <div className="loader-3">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default Index;
