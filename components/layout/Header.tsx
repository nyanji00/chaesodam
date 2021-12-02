import styled from "@emotion/styled";
import chaesodam from "@/public/icons/header/chaesodam.svg";
import brandguide from "@/public/icons/header/brandguide.svg";
import brandstory from "@/public/icons/header/brandstory.svg";
import grocerybag from "@/public/icons/header/grocerybag.svg";
import weeklyfruit from "@/public/icons/header/weeklyfruit.svg";

import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { HEADER_HEIGHT } from "@/constants/components";

function Header() {
  const router = useRouter();
  const handleItemClick = (to: string) => {
    router.push(to);
  };

  const [background, setBackground] = useState<boolean>(true);
  useEffect(() => {
    if (router.route.startsWith("/grocery-bag")) {
      setBackground(false);
    } else {
      setBackground(true);
    }
  }, [router.route]);

  return (
    <HeaderRoot background={background}>
      <ImageWrapper
        className="brand-story"
        isActive={router.route === "/brand-story"}
        onClick={() => handleItemClick("/brand-story")}
      >
        <Image src={brandstory} />
      </ImageWrapper>
      <ImageWrapper
        className="brand-guide"
        isActive={router.route === "/brand-guide"}
        onClick={() => handleItemClick("/brand-guide")}
      >
        <Image src={brandguide} />
      </ImageWrapper>
      <LogoWrapper onClick={() => handleItemClick("/")}>
        <Image src={chaesodam} />
      </LogoWrapper>
      <ImageWrapper
        className="grocery-bag"
        isActive={router.route === "/grocery-bag"}
        onClick={() => handleItemClick("/grocery-bag")}
      >
        <Image src={grocerybag} />
      </ImageWrapper>
      <ImageWrapper
        className="weekly-fruit-and-veg"
        isActive={router.route === "/weekly-fruit-and-veg"}
        onClick={() => handleItemClick("/weekly-fruit-and-veg")}
      >
        <Image src={weeklyfruit} />
      </ImageWrapper>
    </HeaderRoot>
  );
}

const HeaderRoot = styled.div<{ background: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${HEADER_HEIGHT}px;
  padding: 0 200px;
  background: ${({ background }) => (background ? "#FFFAEA" : "none")};
  z-index: 100;
  box-sizing: border-box;

  .brand-story {
    left: 200px;
  }
  .brand-guide {
    left: calc((50vw - 339px) / 2 + 249.5px);
  }
  .grocery-bag {
    right: calc((50vw - 407px) / 2 + 316px);
  }
  .weekly-fruit-and-veg {
    right: 200px;
  }
`;

const ImageWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  width: fit-content;
  height: 44px;
  padding: 0 2px;
  cursor: pointer;
  position: absolute;

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

  ${({ isActive }) =>
    isActive &&
    css`
      ::after {
        left: 0;
        width: 100%;
      }
    `}
`;

const LogoWrapper = styled.div`
  cursor: pointer;
`;

export default Header;
