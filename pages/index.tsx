import { HEADER_HEIGHT } from "@/constants/components";
import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import Slider from "react-slick";
import main1 from "@/public/images/main1.png";
import main2 from "@/public/images/main2.png";
import main3 from "@/public/images/main3.png";

const Home: NextPage = () => {
  const handleArrowClick = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  const settings = {
    draggable: false,
    infinite: true,
    fade: true,
  };

  return (
    <HomeRoot>
      <Slider {...settings}>
        <ImageContainer index={1} />
        <ImageContainer index={2} />
        <ImageContainer index={3} />
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
  height: calc(100vh - ${HEADER_HEIGHT}px);
  background: url(${({ index }) => `/images/main${index}.png`});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Home;
