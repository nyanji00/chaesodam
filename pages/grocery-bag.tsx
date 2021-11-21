import styled from "@emotion/styled";
import { NextPage } from "next";
import grocery_title from "@/public/icons/grocery_title.svg";
import grocery_description from "@/public/icons/grocery_description.svg";
import Image from "next/image";
import Slider from "react-slick";

const GroceryBag: NextPage = () => {
  const settings = {
    draggable: false,
    infinite: false,
  };

  return (
    <GroceryBagRoot>
      <TextContainer>
        <Image src={grocery_title} />
        <div style={{ marginTop: "27.11px" }} />
        <Image src={grocery_description} />
      </TextContainer>
      <SliderWrapper>
        <Slider {...settings}>
          <Bag background="/icons/bag1.svg" />
          <Bag background="/icons/bag2.svg" />
          <Bag background="/icons/bag3.svg" />
          <Bag background="/icons/bag4.svg" />
          <Bag background="/icons/bag5.svg" />
          <Bag background="/icons/bag6.svg" />
          <Bag background="/icons/bag7.svg" />
        </Slider>
      </SliderWrapper>
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

const SliderWrapper = styled.div`
  position: relative;
  width: 26.04%;
  padding: 45.84px 0 0 215px;
  .slick-slider {
    width: 100%;
    height: 100%;
    .slick-arrow {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 16px;
      height: 52px;
      margin: auto;
      padding: 0;
      font-size: 0;
      cursor: pointer;
      z-index: 100;
    }
    .slick-prev {
      left: -16px;
      background: url("/icons/prev.svg");
    }
    .slick-next {
      right: -16px;
      background: url("/icons/next.svg");
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

const Bag = styled.div<{ background: string }>`
  width: 26.04%;
  padding-top: 100%;
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default GroceryBag;
