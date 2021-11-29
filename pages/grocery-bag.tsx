import styled from "@emotion/styled";
import { NextPage } from "next";
import description from "@/public/images/grocery-bag/description.svg";
import Image from "next/image";
import Slider from "react-slick";
import { HEADER_HEIGHT } from "@/constants/components";

const GroceryBag: NextPage = () => {
  const settings = {
    draggable: false,
    infinite: false,
  };

  return (
    <GroceryBagRoot>
      <TextContainer>
        <Image src={description} layout="responsive" />
      </TextContainer>
      <SliderWrapper>
        <Slider {...settings}>
          <Bag index={1} />
          <Bag index={2} />
          <Bag index={3} />
          <Bag index={4} />
          <Bag index={5} />
          <Bag index={6} />
          <Bag index={7} />
        </Slider>
      </SliderWrapper>
    </GroceryBagRoot>
  );
};

const GroceryBagRoot = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: ${HEADER_HEIGHT}px;
  background: url("/images/grocerybag_background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom 0;
`;

const TextContainer = styled.div`
  width: 38.9%;
  padding: 4.91vh 0 0 230px;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 26.04%;
  padding: 4.24vh 0 0 250px;
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
      left: -16px;
      background: url("/icons/prev.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .slick-next {
      right: -16px;
      background: url("/icons/next.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
    .slick-disabled {
      display: none !important;
    }
    .slick-list {
      width: 100%;
      height: 100%;
    }
  }
`;

const Bag = styled.div<{ index: number }>`
  width: 26.04%;
  padding-top: 100%;
  background: url(${({ index }) => `/images/grocery-bag/bag${index}.png`});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default GroceryBag;
