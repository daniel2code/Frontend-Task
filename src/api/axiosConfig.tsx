import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Client = axios.create({
  baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1/",

  headers: {
    "Content-Type": "application/json",
  },
});

export const UsePostRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage !== "") {
      toast.success(successMessage, {
        className: "suc",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    } else if (errorMessage !== "") {
      toast.error(errorMessage, {
        className: "err",
      });

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  }, [successMessage, errorMessage]);

  const postRequest = async (
    url: string,
    values: any,
    sucMsg: string,
    push?: any
  ) => {
    setLoading(true);
    try {
      let user = await Client({
        method: "POST",
        url,
        data: values,
      });

      console.log(user);
      setLoading(false);
      setSuccessMessage("Success");
      navigate(push);
      
    } catch (err: any) {
      console.log(err.response);
      setErrorMessage(err.response.data.message);
      setLoading(false);
    }
  };

  return { loading, errorMessage, postRequest };
};
