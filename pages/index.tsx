import { HEADER_HEIGHT } from "@/constants/components";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Slider from "react-slick";
import Image from "next/image";
import text1 from "@/public/images/main/text1.svg";
import text2 from "@/public/images/main/text2.svg";
import text3 from "@/public/images/main/text3.svg";

const Home: NextPage = () => {
  const settings = {
    draggable: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7500,
    pauseOnHover: false,
  };

  return (
    <HomeRoot>
      <Slider {...settings}>
        <ImageContainer index={1}>
          <TextContainer>
            <Image src={text1} />
          </TextContainer>
        </ImageContainer>
        <ImageContainer index={2}>
          <TextContainer>
            <Image src={text2} />
          </TextContainer>
        </ImageContainer>
        <ImageContainer index={3}>
          <TextContainer>
            <Image src={text3} />
          </TextContainer>
        </ImageContainer>
      </Slider>
    </HomeRoot>
  );
};

const HomeRoot = styled.div`
  position: relative;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  padding-top: ${HEADER_HEIGHT}px;
  background: #fffaea;
  .slick-slider {
    width: 100%;
    height: 100%;
    .slick-arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 20px;
      height: 65px;
      margin: auto;
      padding: 0;
      font-size: 0;
      cursor: pointer;
      z-index: 100;
    }
    .slick-prev {
      left: 30px;
      background: url("/icons/prev.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .slick-next {
      right: 30px;
      background: url("/icons/next.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .slick-list {
      width: 100%;
      height: 100%;
    }
  }
`;

const ImageContainer = styled.div<{ index: number }>`
  position: relative;
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: url(${({ index }) => `/images/main${index}.png`});
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export default Home;
