import styled from "@emotion/styled";
import bowl from "@/public/images/brand-story/bowl.svg";
import description1 from "@/public/images/brand-story/description1.svg";
import description2 from "@/public/images/brand-story/description2.svg";
import Image from "next/image";
import { HEADER_HEIGHT } from "@/constants/components";

function BrandStory() {
  return (
    <BrandStoryRoot>
      <div style={{ marginTop: "120px" }} />
      <Image src={bowl} />
      <div style={{ marginTop: "86.36px" }} />
      <Image src={description1} />
      <div style={{ marginTop: "46px" }} />
      <Image src={description2} />
    </BrandStoryRoot>
  );
}

const BrandStoryRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - ${HEADER_HEIGHT}px);
  padding: 98px 0 0 0;
  background: #fffaea;
`;

export default BrandStory;
