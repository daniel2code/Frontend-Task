import { ReactNode } from "react";
import { Container } from "./wrapper.styles";

interface Props {
  children: ReactNode;
  title?: string;
}

const Index: React.FC<Props> = ({ children, title }) => {
  return (
    <Container>
      <div className="wrapperBox">
        <h1 className="title">{title}</h1>
        <div className="content">{children}</div>
      </div>
    </Container>
  );
};

export default Index;
