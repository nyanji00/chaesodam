import styled from "@emotion/styled";
import { NextPage } from "next";
import weekly_title from "@/public/icons/weekly_title.svg";
import weekly_description from "@/public/icons/weekly_description.svg";
import Image from "next/image";

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
    "감자",
    "로메인",
    "단호박",
  ];

  return (
    <GroceryBagRoot>
      <TextContainer>
        <Image src={weekly_title} />
        <div style={{ marginTop: "30.26px" }} />
        <Image src={weekly_description} />
      </TextContainer>
      <div style={{ marginTop: "68.11px" }} />
      <ImageContainer>
        {images.map((i) => (
          <ImagePanel
            key={i}
            data-aos="fade-up-custom"
            background={`/images/${i}.png`}
          />
        ))}
        <Overlay />
      </ImageContainer>
    </GroceryBagRoot>
  );
};

const GroceryBagRoot = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 151.48px 0 0 230.96px;
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
  :nth-last-child(4),
  :nth-last-child(3),
  :nth-last-child(2) {
    padding-top: calc((100% - 110px) / 3);
    margin-bottom: 0;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 345px;
  background: linear-gradient(
    0deg,
    #fffaea 0%,
    rgba(246, 240, 220, 0.498897) 53.76%,
    rgba(246, 240, 220, 0) 100%
  );
`;

export default WeeklyFruitAndVeg;
