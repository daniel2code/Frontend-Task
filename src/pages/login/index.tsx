import React from "react";

import { Button, Input, Wrapper, Label } from "../../components";
import { Form, InputBox } from "./login.styles";

const Index: React.FC = () => {
  return (
    <Wrapper title="Login">
      <Form>
        <InputBox>
          <Label>Email address</Label>
          <Input
            margin="7px 0px"
            placeholder="Enter your email address"
            type="email"
          />
        </InputBox>

        <InputBox>
          <Label>Password</Label>
          <Input
            margin="7px 0px"
            placeholder="Enter your password"
            type="password"
          />
        </InputBox>

        <Button margin="35px 0px">Log in</Button>
      </Form>
    </Wrapper>
  );
};

export default Index;
