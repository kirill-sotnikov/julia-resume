import styled from "styled-components";
import { SmallText } from ".";
import NavigationBar from "../src/components/NavigationBar";

const About = () => (
  <div>
    <NavigationBar page="About" />
    <TextWrapper>
      <SmallText style={{ fontSize: "max(21px,4.5vw)" }}>
        JULA GRUZDEVA
      </SmallText>
      <div style={{ marginTop: 45, display: "flex", alignItems: "center" }}>
        <LeftLine />
        <SubText>
          Привет! Меня зовут Юля.
          <br /> Я - веб-дизайнер. Рисую лендинги, сайты для компаний,
          интернет-магазины, приложения, логотипы, векторные иллюстрации. Также
          придумываю и рисую интернет-баннеры.
          <br />
          <br /> Имею опыт в программировании. Знаю, как макет превращают в
          рабочий сайт. Создам для Вас уникальный и качественный дизайн!
        </SubText>
      </div>
    </TextWrapper>
  </div>
);

export default About;

const TextWrapper = styled.div`
  margin-top: 20vh;
  margin-left: 10%;

  @media screen and (max-width: 600px) {
    margin-top: 30%;
  }
`;

const LeftLine = styled.div`
  height: 220px;
  background-color: white;
  width: 1px;

  @media screen and (max-width: 371px) {
    height: 288px;
  }
`;

const SubText = styled.p`
  font-family: sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  line-height: 22px;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: 20px;
  max-width: 480px;
  color: white;

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;
