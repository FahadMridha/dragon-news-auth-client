import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarusale from "../BrandCarusale/BrandCarusale";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {
  const { providerLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handlerGoogleSignIN = () => {
    providerLogin(googleProvider)
      .then(() => {
        // const user = result.user.displayName;
        // console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handlerGoogleSignIN} variant="outline-primary">
          Sign in with Google <FaGoogle></FaGoogle>
        </Button>
        <Button variant="outline-dark">
          Sing in with GitHub <FaGithub></FaGithub>
        </Button>
      </ButtonGroup>
      <div className="mt-4 mb-4">
        <h3>Found Us On</h3>
        <ListGroup>
          <ListGroup.Item>Facebook</ListGroup.Item>
          <ListGroup.Item>WhatsApp</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarusale></BrandCarusale>
      </div>
    </div>
  );
};

export default RightSideNav;
