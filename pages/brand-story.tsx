import styled from "@emotion/styled";
import bowl from "@/public/images/brand-story/bowl.svg";
import text1 from "@/public/images/brand-story/text1.svg";
import text2 from "@/public/images/brand-story/text2.svg";
import Image from "next/image";
import { HEADER_HEIGHT } from "@/constants/components";

function BrandStory() {
  return (
    <BrandStoryRoot>
      <ImageContainer>
        <Image src={bowl} layout="responsive" />
      </ImageContainer>
      <TextContainer className="text1" index={0}>
        <Image src={text1} layout="responsive" />
      </TextContainer>
      <TextContainer className="text2" index={1}>
        <Image src={text2} layout="responsive" />
      </TextContainer>
    </BrandStoryRoot>
  );
}

const BrandStoryRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  padding-top: ${HEADER_HEIGHT}px;
  background: #fffaea;

  .text1 {
    width: 39.34%;
    padding-top: 8vh;
  }
  .text2 {
    width: 39.18%;
    padding-top: 4.26vh;
  }
`;

const ImageContainer = styled.div`
  width: 18.69%;
  padding-top: 11.11vh;
`;

const TextContainer = styled.div<{ index: number }>`
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

export default BrandStory;
