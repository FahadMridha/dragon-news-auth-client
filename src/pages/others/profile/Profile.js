import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user.displayName);
  const photoUrlRef = useRef(user.photoURL);

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(photoUrlRef.current.value);
  };

  const handlerNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  };
  return (
    <Form onSubmit={handlerSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          readOnly
          defaultValue={user.email}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          type="text"
          onChange={handlerNameChange}
          defaultValue={name}
          placeholder="Your Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Photo</Form.Label>
        <Form.Control
          type="text"
          ref={photoUrlRef}
          defaultValue={user?.photoURL}
          placeholder="Your Photo"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
