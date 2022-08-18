import styled from "styled-components";

interface PriceBlockPropsType {
  children: string;
  titleOnHover: string;
}

const PriceBlock = ({ children, titleOnHover }: PriceBlockPropsType) => {
  return (
    <PriceBlockWrapper>
      <PriceText>{children}</PriceText>
      <PriceTextHover>{titleOnHover}</PriceTextHover>
    </PriceBlockWrapper>
  );
};

export default PriceBlock;

const PriceBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 25px;
  border: 1px solid white;
  width: calc(100% - 50px);
  height: 174px;
  max-width: 308px;
  justify-self: center;
  transition: all ease 1s;

  @media screen and (max-width: 360px) {
    margin: 15px 0;
    width: 90%;
  }

  &:hover {
    transition: all ease 1s;
    background-color: white;
    border: none;
  }
`;

const PriceText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  color: white;
  cursor: default;

  @media screen and (max-width: 360px) {
    font-size: 30px;
  }

  ${PriceBlockWrapper}:hover & {
    display: none;
  }
`;

const PriceTextHover = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  color: black;
  display: none;
  cursor: default;

  @media screen and (max-width: 360px) {
    font-size: 30px;
  }

  ${PriceBlockWrapper}:hover & {
    display: block;
  }
`;
