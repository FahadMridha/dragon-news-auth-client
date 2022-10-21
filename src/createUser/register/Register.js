import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, userEmailVerification } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [accepted, setAccpeted] = useState(false);
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handlerUpdateProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Successfully toasted!");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };
  const handlerUpdateProfile = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const handleEmailVerification = () => {
    userEmailVerification()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const handleCheckBox = (e) => {
    const accepted = e.target.checked;
    setAccpeted(accepted);
  };
  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="text" placeholder="Enter Youyr Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>PhotoURL</Form.Label>
        <Form.Control name="photoURL" type="text" placeholder="PhotoURL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleCheckBox}
          label={
            <>
              Accpet <Link to="/terms">Terms And Conditon</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <Form.Text className="text-warning">{error} </Form.Text>
    </Form>
  );
};

export default Register;
