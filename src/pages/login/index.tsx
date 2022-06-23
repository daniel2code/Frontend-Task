import React from "react";

import { Button, Input, Wrapper, Label, Loader } from "../../components";
import { Form, InputBox } from "./login.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/resolvers/loginSchema";

const Index: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <>
      {/* <Loader bg="rgba(0 0 0/0.8)" /> */}
      <Wrapper title="Login">
        <Form>
          <InputBox>
            <Label>Email address</Label>
            <Input
              margin="7px 0px"
              placeholder="Enter your email address"
              type="email"
              {...register("email")}
            />
          </InputBox>

          <InputBox>
            <Label>Password</Label>
            <Input
              margin="7px 0px"
              placeholder="Enter your password"
              type="password"
              {...register("password")}
            />
          </InputBox>

          <Button margin="40px 0px">Log in</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Index;
