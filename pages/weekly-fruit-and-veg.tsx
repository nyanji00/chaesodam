import styled from "@emotion/styled";
import { NextPage } from "next";
import description from "@/public/images/weekly-fruit-and-veg/description.svg";
import Image from "next/image";
import { HEADER_HEIGHT } from "@/constants/components";

const WeeklyFruitAndVeg: NextPage = () => {
  const images = [
    "서양배",
    "래디쉬",
    "당근",
    "파프리카",
    "아보카도",
    "양파",
    "사과",
    "레몬",
    "자몽",
  ];

  return (
    <GroceryBagRoot>
      <TextContainer>
        <Image src={description} layout="responsive" />
      </TextContainer>
      <div style={{ marginTop: "68.11px" }} />
      <ImageContainer>
        {images.map((i) => (
          <ImagePanel
            key={i}
            data-aos="fade-up-custom"
            background={`/images/weekly-fruit-and-veg/${i}.png`}
          />
        ))}
      </ImageContainer>
    </GroceryBagRoot>
  );
};

const GroceryBagRoot = styled.div`
  padding: ${HEADER_HEIGHT}px 0 38px;
  background: #fffaea;

  [data-aos="fade-up-custom"] {
    opacity: 0;
    transform: translateY(30px);
    transition-property: transform, opacity;

    &.aos-animate {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const TextContainer = styled.div`
  width: 31.49%;
  padding: 4.95vh 0 0 230px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: 0 200px;
`;

const ImagePanel = styled.div<{ background: string }>`
  width: calc((100% - 110px) / 3);
  margin: 0 55px 112px 0;
  padding-top: calc((100% - 110px) / 3 * 1.12);
  background: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-size: contain;
  :nth-of-type(3n) {
    margin-right: 0;
  }
`;

export default WeeklyFruitAndVeg;
