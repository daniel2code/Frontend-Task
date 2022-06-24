import React from "react";

import { Form, InputBox, ActionText } from "./signup,styles";
import {
  Wrapper,
  Button,
  Input,
  Select,
  Label,
  Option,
  Loader,
} from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../../helpers/resolvers/signupSchema";
import { UsePostRequest } from "../../api/axiosConfig";
import { Link } from "react-router-dom";

enum userType {
  student = "student",
  teacher = "teacher",
}

interface SignUpData {
  email: string;
  password: string;
  userType: any;
  fullName: string;
}

const Index: React.FC = () => {
  const { register, reset, handleSubmit } = useForm<SignUpData>({
    resolver: yupResolver(signupSchema),
  });

  const { loading, postRequest } = UsePostRequest();

  const onSubmit = (data: any) => {
    postRequest(
      "/user/create",
      data,
      "You have successfully signed up",
      "/login"
    );
    reset();
  };

  return (
    <>
      {loading && <Loader bg="rgba(0 0 0/0.8)" />}
      <Wrapper title="Signup">
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
              name="password"
            />
          </InputBox>

          <InputBox>
            <Label>Full name</Label>
            <Input
              margin="7px 0px"
              placeholder="Enter your full name"
              type="text"
              {...register("fullName")}
            />
          </InputBox>

          <InputBox>
            <Label>What is your role</Label>
            <Select margin="7px 0px" {...register("userType")}>
              <Option disabled selected>
                --Select an option--
              </Option>
              <Option>{userType.teacher}</Option>
              <Option>{userType.student}</Option>
            </Select>
          </InputBox>

          <ActionText>
            Have an account?{" "}
            <Link to="/login" className="link">
              Login
            </Link>
          </ActionText>

          <Button margin="40px 0px">Sign Up</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Index;
