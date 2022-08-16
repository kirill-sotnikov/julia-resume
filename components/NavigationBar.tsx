import styled from "styled-components";

const NavigationBar = () => {
  return (
    <NavigationBarWrapper>
      <p style={{ color: "white" }}>Hello</p>
      <p></p>
      <p></p>
    </NavigationBarWrapper>
  );
};

export default NavigationBar;

const NavigationBarWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 20px;
`;
