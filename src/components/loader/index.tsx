import React from "react";
import "./styles.css";

interface Props {
  bg: string;
}

const Index: React.FC<Props> = ({ bg }) => {

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
