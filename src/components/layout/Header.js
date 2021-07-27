import React from 'react';
import { ThemeToggleButton } from '../buttons';
import { HeaderContainer, HeaderWrapper } from './StyledComponents';

const Header = ({ updateTheme }) => {
  return (
    <HeaderWrapper id='header'>
      <HeaderContainer id='header-content-container' aria-label='header'>
        Where in the World?
        <ThemeToggleButton id='theme-toggle-button' updateTheme={updateTheme} />
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
