import styled from "@emotion/styled";
import chaesodam from "@/public/icons/chaesodam.svg";
import brandguide from "@/public/icons/brandguide.svg";
import brandstory from "@/public/icons/brandstory.svg";
import grocerybag from "@/public/icons/grocerybag.svg";
import weeklyfruit from "@/public/icons/weeklyfruit.svg";

import Image from "next/image";

function Header() {
  return (
    <HeaderRoot>
      <ImageWrapper>
        <Image src={brandstory} />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={brandguide} />
      </ImageWrapper>
      <Image src={chaesodam} />
      <ImageWrapper>
        <Image src={grocerybag} />
      </ImageWrapper>
      <ImageWrapper>
        <Image src={weeklyfruit} />
      </ImageWrapper>
    </HeaderRoot>
  );
}

const HeaderRoot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 1920px;
  padding: 13px 200px;
  background: #f6f0dc;
  z-index: 100;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
  position: relative;

  ::after {
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 0px;
    height: 1px;
    background: black;
    content: "";
    transition: all ease-in-out 0.2s;
  }
  :hover::after {
    left: 0;
    width: 100%;
  }
`;

export default Header;
