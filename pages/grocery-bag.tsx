import styled from "@emotion/styled";
import { NextPage } from "next";
import grocery_title from "@/public/icons/grocery_title.svg";
import grocery_description from "@/public/icons/grocery_description.svg";
import Image from "next/image";

const GroceryBag: NextPage = () => {
  return (
    <GroceryBagRoot>
      <TextContainer>
        <Image src={grocery_title} />
        <div style={{ marginTop: "27.11px" }} />
        <Image src={grocery_description} />
      </TextContainer>
    </GroceryBagRoot>
  );
};

const GroceryBagRoot = styled.div`
  width: 100%;
  height: 100vh;
  background: url("/images/grocerybag_background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom 0;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 151.48px 0 0 230.96px;
`;

export default GroceryBag;
