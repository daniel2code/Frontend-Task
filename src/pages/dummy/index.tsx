import React, { useEffect } from "react";

import { Container } from "./dummy.styles";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Index: React.FC = () => {
  useEffect(() => {
    if (document.cookie) {
      toast.success("You have successfully logged in", {
        className: "suc",
      });
    }
  }, []);

  return (
    <Container>
      <h1 className="heading">Welcome to your dashboard</h1>
      <Link to="/" className="link">
        Go Back Home
      </Link>

      <ToastContainer />
    </Container>
  );
};

export default Index;
