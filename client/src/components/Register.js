import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const addUserData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    formData.append("name", name);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    //   const res = await axios.post(
    //     "http://localhost:4004/register",
    //     formData,
    //     config
    //   );

    //   if (res.status === 200) {
    //     navigate("/");
    //   } else {
    //     alert("error");
    //   }
    // };

    //   try {
    //     const res = await axios.post(
    //       "http://localhost:4004/register",
    //       formData,
    //       config
    //     );

    //     if (res.status === 200) {
    //       navigate("/");
    //     } else {
    //       console.error("Registration Error:", res.data); // Log detailed error from server
    //       alert("Registration failed! Check console for details.");
    //     }
    //   } catch (error) {
    //     console.error("Error:", error);
    //     alert("An error occurred. Please try again later.");
    //   }
    // };

    try {
      const res = await axios.post(
        "http://localhost:4004/register",
        formData,
        config
      );

      console.log("Registration Response:", res.data); // Log successful response for debugging

      if (res.status === 200) {
        navigate("/");
      } else {
        console.error("Registration Error:", res.data); // Log detailed error from server for debugging
        alert("Registration failed! Check console for details.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="container mt-3">
        <h1>Upload your Img Here</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={addUserData}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Register;
