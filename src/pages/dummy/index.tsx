import React from "react";

import { Container } from "./dummy.styles";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <Container>
      <h1 className="heading">Welcome to your dashboard</h1>
      <Link to="/" className="link">Go Back Home</Link>
    </Container>
  );
};

export default Index;
