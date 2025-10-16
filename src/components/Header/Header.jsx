import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const MainButtons = () => (
  <ActionGroup>
    <button>
      <Search size={24} />
    </button>
    <button>
      <Menu size={24} />
    </button>
  </ActionGroup>
);

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <MainButtons />

          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>

      <MainHeader>
        <OnlyDesktop>
          <MainButtons />
        </OnlyDesktop>

        <Logo />

        <SubscribeSection>
          <Button>Subscribe</Button>

          <SubscribeLink>Already a subscriber?</SubscribeLink>
        </SubscribeSection>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media (${QUERIES.laptopAndUp}) {
    display: none;
  }
`;

const OnlyDesktop = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: revert;
  }
`;

const SubscribeSection = styled.div`
  display: none;

  @media (${QUERIES.laptopAndUp}) {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const SubscribeLink = styled.a`
  font-style: italic;
  text-decoration: underline;
  color: var(--color-gray-900);
  font-size: 0.875rem;
  position: absolute;
  width: 100%;
  text-align: center;
  margin-block-start: 8px;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media (${QUERIES.tabletAndUp}) {
    margin-block: 48px 72px;
  }

  @media (${QUERIES.laptopAndUp}) {
    display: grid;
    align-items: center;
    justify-content: revert;
    grid-template-columns: 1fr auto 1fr;
    margin-block: 16px 72px;
  }
`;

export default Header;
