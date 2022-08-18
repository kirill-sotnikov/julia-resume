import { memo } from "react";
import styled from "styled-components";
import NavigationBarItem from "./NavigationBarItem";

interface NavigationBarPropsType {
  page?: "About" | "Works" | "Prices" | "Contacts";
}

const NavigationBar = memo(({ page }: NavigationBarPropsType) => {
  const pages = ["About", "Works", "Prices", "Contacts"];
  return (
    <NavigationBarWrapper>
      {pages.map((item) => (
        <NavigationBarItem active={page === item} key={item}>
          {item}
        </NavigationBarItem>
      ))}
    </NavigationBarWrapper>
  );
});

NavigationBar.displayName = "NavigationBar";

export default NavigationBar;

const NavigationBarWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;

  @media screen and (max-width: 700px) {
    left: calc(50% - 140px);
    width: fit-content;
    margin-left: -10px;
  }
`;
