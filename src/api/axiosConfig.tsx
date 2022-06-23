import axios from "axios";
import { useState } from "react";

const Client = axios.create({
  baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const UsePostRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const postRequest = async (url: string, values: any) => {
    setLoading(true);
    try {
      let user = await Client({
        method: "POST",
        url,
        data: values,
      });

      console.log(user);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong")
      setLoading(false);
    }
  };

  return { loading, errorMessage, postRequest };
};
