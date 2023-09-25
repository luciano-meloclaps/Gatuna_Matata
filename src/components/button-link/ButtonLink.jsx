import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

const ButtonLink = ({ children, route }) => {
  const navigate = useNavigate();

  const myNavigateExample = () => {
    //hacemos una funcion que tenga la ruta
    //y después se la pasamos al boton con un click
    navigate(`/${route}`);
  };

  return (
    <Button /* onClick={myNavigateExample} */ className="primary-color">
      {children}
    </Button>
  );
};

export default ButtonLink;
