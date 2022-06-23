import React from "react";

import { Form, InputBox } from "./signup,styles";
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

enum userType {
  student = "Student",
  teacher = "Teacher",
}

interface SignUpData {
  email: string;
  password: string;
  userType: any;
  fullName: string;
}

const Index: React.FC = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signupSchema),
  });

  const { loading, postRequest } = UsePostRequest();

  const onSubmit = (data: any) => {
    console.log(data);
    postRequest("/user/create", data, "/login");
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

          <Button margin="40px 0px">Sign Up</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Index;
