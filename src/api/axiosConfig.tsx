import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Client = axios.create({
  baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const UsePostRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const navigate = useNavigate();

  const postRequest = async (url: string, values: any, push?: any) => {
    setLoading(true);
    try {
      let user = await Client({
        method: "POST",
        url,
        data: values,
      });

      console.log(user);
      setLoading(false);
      navigate(push);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
      setLoading(false);
    }
  };

  return { loading, errorMessage, postRequest };
};
