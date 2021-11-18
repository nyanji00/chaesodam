import styled from "@emotion/styled";
import type { NextPage } from "next";
import Image from "next/image";
import main1 from "@/public/images/main1.png";
import main_chunk1 from "@/public/icons/main_chunk1.svg";
import main_chunk1_fruit from "@/public/icons/main_chunk1_fruit.svg";
import double_arrow from "@/public/icons/double-arrow.svg";
import main2 from "@/public/images/main2.png";
import main_chunk2 from "@/public/icons/main_chunk2.svg";
import main_chunk2_fruit1 from "@/public/icons/main_chunk2_fruit1.svg";
import main_chunk2_fruit2 from "@/public/icons/main_chunk2_fruit2.svg";
import arrow from "@/public/icons/arrow.svg";
import main3 from "@/public/images/main3.png";
import main_chunk3 from "@/public/icons/main_chunk3.svg";
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
        <Image src={main1} width={1440} height={970} layout="fixed" />
        <div id="letters">
          <Image src={main_chunk1} />
        </div>
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
        <div id="letters">
          <Image src={main_chunk2} />
          <div id="fruit1">
            <Image src={main_chunk2_fruit1} />
          </div>
        </div>
        <Image src={main2} width={1440} height={970} layout="fixed" />
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
        <Image src={main3} width={1440} height={970} layout="fixed" />
        <div id="letters">
          <Image src={main_chunk3} />
        </div>
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
  width: 100%;
  background: #f6f0dc;
`;

const Chunk1 = styled.div`
  display: flex;
  position: relative;
  background: #eb613a;
  #letters {
    display: flex;
    align-items: flex-end;
    padding: 0 0 62.73px 37.3px;
    z-index: 50;
  }
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

const Chunk2 = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  background: #235b4e;
  #letters {
    display: flex;
    align-items: flex-end;
    position: relative;
    padding: 0 36.52px 63.2px 0;
    z-index: 50;
  }
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

const Chunk3 = styled.div`
  display: flex;
  position: relative;
  background: #e4007f;
  #letters {
    display: flex;
    align-items: flex-start;
    position: relative;
    padding: 55.3px 0 0 37.3px;
    z-index: 50;
  }
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

export default Home;
