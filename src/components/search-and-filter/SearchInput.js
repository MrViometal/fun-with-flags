import React from 'react';
import useTheme from '../../hooks/themeContext';
import { darkThemeSearch, lightThemeSearch } from '../../svgs';
import { SearchInputContainer, StyledInput } from './StyledComponents';

const SearchInput = ({ updateSearchInput }) => {
  const { isLightTheme } = useTheme();
  return (
    <SearchInputContainer id='search-input-container'>
      <img
        alt='search'
        id='search-icon'
        src={isLightTheme ? lightThemeSearch : darkThemeSearch}
      />
      <StyledInput
        id='search-input'
        placeholder='Search for a country...'
        aria-label='Search for a country'
        onChange={ev => updateSearchInput(ev.target.value)}
      />
    </SearchInputContainer>
  );
};

export default SearchInput;
