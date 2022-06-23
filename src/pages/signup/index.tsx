import React from "react";

import { Form, InputBox } from "./signup,styles";
import {
  Wrapper,
  Button,
  Input,
  Select,
  Label,
  Option,
} from "../../components";

const Index: React.FC = () => {
  return (
    <Wrapper title="Signup">
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

        <InputBox>
          <Label>Full name</Label>
          <Input
            margin="7px 0px"
            placeholder="Enter your full name"
            type="text"
          />
        </InputBox>

        <InputBox>
          <Label>What is your role</Label>
          <Select margin="7px 0px">
            <Option>--Select an option--</Option>
            <Option>Teacher</Option>
            <Option>Student</Option>
          </Select>
        </InputBox>

        <Button margin="35px 0px">Sign Up</Button>
      </Form>
    </Wrapper>
  );
};

export default Index;
