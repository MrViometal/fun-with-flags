import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { DropDownContainer } from './StyledComponents';

//normally this should be dynamic however in this case as they are predetermined it would be an overkill
const REGION_OPTIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

const FilterDropDownMenu = ({ updateSelectInput }) => {
  return (
    <DropDownContainer id='drop-down-container' aria-label='filter by region'>
      <Dropdown
        id='drop-down-menu'
        controlClassName='ddm-control'
        placeholderClassName='ddm-placeholder'
        menuClassName='ddm-menu'
        arrowClassName='ddm-arrow'
        options={REGION_OPTIONS}
        onChange={e => updateSelectInput(e.value)}
        placeholder='Filter by Region'
      />
    </DropDownContainer>
  );
};

export default FilterDropDownMenu;
