import styled from "styled-components";
import NavigationBar from "../src/components/NavigationBar";
import PriceBlock from "../src/components/PriceBlock";

const Prices = () => (
  <div>
    <NavigationBar page="Prices" />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
      }}
    >
      <PricesWrapper>
        <PriceBlock titleOnHover="500 - 2000₽">Landing page</PriceBlock>
        <PriceBlock titleOnHover="200 - 1500₽">Baner</PriceBlock>
        <PriceBlock titleOnHover="500 - 1000₽">Logo</PriceBlock>
        <PriceBlock titleOnHover="3000 - 7000₽">Internet Store</PriceBlock>
        <PriceBlock titleOnHover="500 - 1000₽">Vector</PriceBlock>
        <PriceBlock titleOnHover="1000 - 2000₽">Site</PriceBlock>
      </PricesWrapper>
    </div>
  </div>
);

export default Prices;

const PricesWrapper = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  width: calc(100% - 50px);

  @media screen and (min-width: 1124px) {
    grid-template-columns: repeat(3, 358px);
    width: fit-content;
  }

  @media screen and (max-width: 1075px) and (min-width: 751px) {
    grid-template-columns: repeat(2, 358px);
    width: fit-content;
    margin-top: 10vw;
  }

  @media screen and (max-width: 750px) and (min-width: 361px) {
    grid-template-columns: 358px;
    width: fit-content;
    margin-top: 10vw;
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: 308px;
    width: fit-content;
    margin-top: 15vw;
  }
`;
