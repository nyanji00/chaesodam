import Image from "next/image";
import one from "@/public/images/brand-guide/one.svg";
import two from "@/public/images/brand-guide/two.svg";
import three from "@/public/images/brand-guide/three.svg";
import four from "@/public/images/brand-guide/four.svg";
import five from "@/public/images/brand-guide/five.svg";
import fruit_bag from "@/public/images/brand-guide/fruit-bag.svg";
import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "@/constants/components";

function BrandGuide() {
  return (
    <BrandGuideRoot>
      <ImageContainer index={0}>
        <Image src={one} />
      </ImageContainer>
      <ImageContainer index={1}>
        <Image src={two} />
      </ImageContainer>
      <ImageContainer index={2}>
        <Image src={three} />
      </ImageContainer>
      <ImageContainer index={3}>
        <Image src={four} />
      </ImageContainer>
      <ImageContainer index={4}>
        <Image src={five} />
      </ImageContainer>
      <BagImageContainer>
        <Image src={fruit_bag} layout="responsive" />
      </BagImageContainer>
    </BrandGuideRoot>
  );
}

const BrandGuideRoot = styled.div`
  position: relative;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  padding-top: ${HEADER_HEIGHT}px;
  background: #fffaea;
`;

const ImageContainer = styled.div<{ index: number }>`
  padding-left: 230px;
  :first-of-type {
    padding-top: 4.82vh;
  }
  :not(:last-of-type) {
    padding-bottom: 6.96vh;
  }

  opacity: 0;
  animation: fadein 1s;
  -moz-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  -o-animation: fadein 1s;
  animation-delay: ${({ index }) => index / 4}s;
  animation-fill-mode: forwards;

  @keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @-moz-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @-webkit-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @-o-keyframes fadein {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const BagImageContainer = styled.div`
  position: absolute;
  top: calc(${HEADER_HEIGHT}px + 9.17vh);
  right: 13.5%;
  width: 31.25%;
`;

export default BrandGuide;
