import React from "react";
import logo2 from "../../assets/logo2.png";
import Container from "../../Helpers/Container";
import HomeContent from "../HomeContent/HomeContent";

const LogoHome = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[500px]"
        style={{ backgroundImage: `url(${logo2})` }}
      >
        <Container>
            <HomeContent/>
        </Container>
      </div>
    </div>
  );
};

export default LogoHome;
