import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import main_chunk1_fruit from "@/public/icons/main_chunk1_fruit.svg";
import double_arrow from "@/public/icons/double-arrow.svg";
import main_chunk2_fruit1 from "@/public/icons/main_chunk2_fruit1.svg";
import main_chunk2_fruit2 from "@/public/icons/main_chunk2_fruit2.svg";
import arrow from "@/public/icons/arrow.svg";
import main_chunk3_fruit from "@/public/icons/main_chunk3_fruit.svg";

const Home: NextPage = () => {
  const handleArrowClick = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <HomeRoot>
      <Chunk1 id="chunk1">
        <ImageArea1 />
        <TextArea1 />
        <div id="fruit">
          <Image src={main_chunk1_fruit} />
        </div>
        <div id="arrow">
          <div onClick={() => handleArrowClick("chunk2")}>
            <Image src={double_arrow} />
          </div>
        </div>
      </Chunk1>

      <div style={{ marginTop: "160px" }} />

      <Chunk2 id="chunk2">
        <TextArea2>
          <div id="fruit1">
            <Image src={main_chunk2_fruit1} />
          </div>
        </TextArea2>
        <ImageArea2 />
        <div id="fruit2">
          <Image src={main_chunk2_fruit2} />
        </div>
        <div id="arrow">
          <div onClick={() => handleArrowClick("chunk3")}>
            <Image src={arrow} />
          </div>
        </div>
      </Chunk2>

      <div style={{ marginTop: "160px" }} />

      <Chunk3 id="chunk3">
        <ImageArea3 />
        <TextArea3 />
        <div id="fruit">
          <Image src={main_chunk3_fruit} />
        </div>
        <div id="arrow">
          <div onClick={() => handleArrowClick("chunk1")}>
            <Image src={double_arrow} />
          </div>
        </div>
      </Chunk3>
    </HomeRoot>
  );
};

const HomeRoot = styled.div`
  padding-top: 110px;
  background: #f6f0dc;
`;

const Chunk1 = styled.div`
  position: relative;
  height: calc(100vh - 110px);
  background: #eb613a;

  #fruit {
    position: absolute;
    right: 0;
    bottom: -50px;
  }
  #arrow {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    div {
      cursor: pointer;
    }
  }
`;

const ImageArea1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc((100vh - 110px) * 144 / 97);
  height: 100%;
  background: url("/images/main1.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const TextArea1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - (100vh - 110px) * 144 / 97);
  height: 100%;
  background: url("/icons/main_chunk1.svg");
  background-repeat: no-repeat;
  background-size: calc(100% - 104.31px);
  background-position: bottom 9.56% left 35.48%;
  z-index: 50;
`;

const Chunk2 = styled.div`
  position: relative;
  height: calc(100vh - 110px);
  background: #235b4e;

  #fruit1 {
    position: absolute;
    top: -50px;
    right: -45.91px;
  }
  #fruit2 {
    position: absolute;
    left: 0;
    bottom: -50px;
  }
  #arrow {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    div {
      cursor: pointer;
    }
  }
`;

const ImageArea2 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc((100vh - 110px) * 144 / 97);
  height: 100%;
  background: url("/images/main2.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const TextArea2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - (100vh - 110px) * 144 / 97);
  height: 100%;
  background: url("/icons/main_chunk2.svg");
  background-repeat: no-repeat;
  background-size: 58.65%;
  background-position: bottom 9.63% right 18.4%;
  z-index: 50;
`;

const Chunk3 = styled.div`
  position: relative;
  height: calc(100vh - 110px);
  background: #e4007f;

  #fruit {
    position: absolute;
    right: 0;
    top: -50px;
  }
  #arrow {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    transform: rotate(-180deg);
    div {
      cursor: pointer;
    }
  }
`;

const ImageArea3 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: calc((100vh - 110px) * 144 / 97);
  height: 100%;
  background: url("/images/main3.png");
  background-repeat: no-repeat;
  background-size: contain;
`;

const TextArea3 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - (100vh - 110px) * 144 / 97);
  height: 100%;
  background: url("/icons/main_chunk3.svg");
  background-repeat: no-repeat;
  background-size: 70.09%auto;
  background-position: top 7.44% left 35.98%;
  z-index: 50;
`;

export default Home;
