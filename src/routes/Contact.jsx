import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <h1>My contacts: @Caiorossi.dev</h1>
      {/* {Nested Routes} */}
      {/* { O id, representado pelos números 1, 2, 3 seria gerado diretamente do banco de dados do backend, gerando uma página com um identificador único dinâmico} */}
      <p>
        <Link to="/contact/1">Contact 1</Link>
        <Link to="/contact/2">Contact 2</Link>
        <Link to="/contact/3">Contact 3</Link>
      </p>
    </>
  );
};

export default Contact;
