import React from "react";

import All from "../All/All";
import Company from "../Company/Company";
import Container from "../../Helpers/Container";


const Modell = () => {
  return (
    <div >

      <Container>

      <h2 className="text-3xl  font-semibold my-10">Company</h2>
      </Container>
      <All/> 
      <Company/>   
    </div>
  );
};

export default Modell;
