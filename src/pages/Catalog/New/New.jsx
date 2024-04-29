import React from "react";
import Catalog from "../../../components/Catalog/Catalog";
import Container from "../../../Helpers/Container";
import NewProducts from "./NewProducts/NewProducts";
import Sale from "./Sale/Sale";
import Melissa from "./Melissa/Melissa";


const New = () => {
  return (
    <div className="mt-[30px] font-semibold">
      <Container>
        <div className=" border-2 leading-[50px] w-[200px] absolute  z-10 rounded-lg  h-[160px]  shadow-lg shadow-black-500/50 font-semibold bg-white">
          <Catalog />
        </div> 
        <NewProducts/>
        <Sale/>
        <Melissa/>
      </Container>
    </div>
  );
};

export default New;
