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

// enum roleEnum {
//   teacher,
//   student,
// }

interface IFormInput {
  email: String;
  password: string;
  fullname: string;
  role: string;
}

const Index: React.FC = () => {
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm ({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data:any) => console.log(data);

  return (
    <>
      {/* <Loader bg="rgba(0 0 0/0.8)" /> */}
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
              {...register("fullname")}
            />
          </InputBox>

          <InputBox>
            <Label>What is your role</Label>
            <Select margin="7px 0px" {...register("role")}>
              <Option disabled selected >--Select an option--</Option>
              <Option>Teacher</Option>
              <Option>Student</Option>
            </Select>
          </InputBox>

          <Button margin="40px 0px">Sign Up</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Index;
