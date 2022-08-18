import Link from "next/link";
import { memo } from "react";
import styled from "styled-components";

const NavigationBarItem = memo(
  ({ children, active }: { children?: string; active?: boolean }) => {
    return (
      <NavigationBarItemWrapper>
        <Link href={`/${children.toLocaleLowerCase()}`}>
          <NavigationBarItemInner>{children}</NavigationBarItemInner>
        </Link>
        <BorderBottom
          style={{
            backgroundColor: active && "white",
          }}
        />
      </NavigationBarItemWrapper>
    );
  }
);

NavigationBarItem.displayName = "NavigationBarItem";

export default NavigationBarItem;

const NavigationBarItemWrapper = styled.div`
  margin-left: 20px;
`;

const NavigationBarItemInner = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 17px;
  color: #dadada;
  cursor: pointer;
  line-height: 30px;

  &:hover {
    color: white;
  }

  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const BorderBottom = styled.div`
  height: 1px;
  padding: 0 2px;
  transition: all ease 1s;

  @keyframes showBorder {
    from {
      width: 0%;
      margin: 0 auto;
    }
    to {
      width: 100%;
      margin: 0 auto;
    }
  }

  ${NavigationBarItemWrapper}:hover & {
    background-color: #b9b9b9;
    transition: all ease 300ms;
    width: 100%;
    animation: showBorder 300ms ease;
  }
`;
