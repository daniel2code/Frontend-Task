import React from "react";

import { Button, Input, Wrapper, Label, Loader } from "../../components";
import { Form, InputBox, ActionText } from "./login.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/resolvers/loginSchema";
import { UsePostRequest } from "../../api/axiosConfig";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { postRequest, loading } = UsePostRequest();

  const onSubmit = (data: any) => {
    postRequest(
      "/user/login",
      data,
      "You have successfully logged in",
      "/home"
    );
    reset();
  };

  return (
    <>
      {loading && <Loader bg="rgba(0 0 0/0.8)" />}
      <Wrapper title="Login">
        <Form onSubmit={handleSubmit(onSubmit)}>
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

          <ActionText>
            Don't have an account?{" "}
            <Link to="/" className="link">
              Sign up
            </Link>
          </ActionText>

          <Button margin="40px 0px">Log in</Button>
        </Form>
      </Wrapper>

    </>
  );
};

export default Index;
