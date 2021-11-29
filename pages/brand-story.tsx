import styled from "@emotion/styled";
import bowl from "@/public/images/brand-story/bowl.svg";
import Image from "next/image";
import { HEADER_HEIGHT } from "@/constants/components";

function BrandStory() {
  return (
    <BrandStoryRoot>
      <ImageContainer>
        <Image src={bowl} layout="responsive" />
      </ImageContainer>
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
`;

const ImageContainer = styled.div`
  width: 40%;
  padding-top: 11.11vh;
`;

export default BrandStory;
