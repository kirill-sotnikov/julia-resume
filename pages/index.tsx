import Image from "next/image";
import { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import NavigationBar from "../src/components/NavigationBar";

const HomePage = () => {
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerHeight > window.innerHeight * 2.5) {
      }
    });
  });

  return (
    <HomePageWrapper>
      <NavigationBar />
      <LampImageWrapper style={{ width: "30vh", margin: "0 auto" }}>
        <Image
          src="/img/lamp.svg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </LampImageWrapper>
      <div style={{ textAlign: "center", gridRowStart: 2 }}>
        <BigBoldText>Web Designer</BigBoldText>
        <SmallText>JULA GRUZDEVA</SmallText>
        <ButtonMyWork>MY WORKS</ButtonMyWork>
        <SportOfLightImageWrapper>
          <LampImageWrapper style={{ height: 70, marginTop: 20 }}>
            <Image
              src="/img/spotOfLight.svg"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </LampImageWrapper>
        </SportOfLightImageWrapper>
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled.div`
  display: grid;
  grid-template-rows: 30% 70%;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const LampImageWrapper = styled.div`
  grid-row-start: 1;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    min-height: 100px;
  }
`;

const animationItems = keyframes`
  from{
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

const BigBoldText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: max(35px, 7vw);
  margin: 0;
  margin-top: 50px;
  color: #ffffff;
  animation: ${animationItems} 3s linear;

  @media screen and (max-width: 500px) {
    margin-top: 25px;
  }

  @media screen and (width > calc(100vh * 1.7)) {
    margin-top: 30px;
  }
`;

const SmallText = styled.p`
  font-family: "Zen Maru Gothic";
  font-style: normal;
  font-weight: 400;
  font-size: max(16px, 3.5vw);
  color: #ffffff;
  margin: 0;
  animation: ${animationItems} 3s linear;
`;

const ButtonMyWork = styled.button`
  margin-top: 100px;
  border: 1px solid white;
  background-color: transparent;
  color: white;
  padding: 0.8em 3em;
  font-family: "Zen Maru Gothic";
  font-style: normal;
  font-weight: 400;
  font-size: max(12px, 1.2vw);
  transition: all ease 1s;
  animation: ${animationItems} 3s linear;
  cursor: pointer;

  &:hover {
    color: #111;
    background-color: #fff;
    transition: all ease 1s;
  }

  @media screen and (width > calc(100vh * 1.5)) {
    margin-top: 80px;
  }
`;

const SportOfLightImageWrapper = styled.div`
  position: absolute;
  left: calc(50% - 250px);
  width: 500px;
  bottom: 0;
  animation: ${animationItems} 3s linear;

  @media screen and (max-width: 600px) {
    left: calc(50% - 100px);
    width: 200px;
    bottom: auto;
  }
`;
