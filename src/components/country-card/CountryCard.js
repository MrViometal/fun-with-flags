import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, CountryFlag, CountryDetails } from './StyledComponents.js';

const CountryCard = ({ country }) => {
  const history = useHistory();
  return (
    <Card
      aria-label={`${country.name}`}
      onClick={() => {
        history.push(`/${country?.alpha3Code}`);
      }}
    >
      <CountryFlag id='country-flag' src={country?.flag} />
      <CountryDetails id='country-details'>
        <p id='country-name' className='country-name' aria-label='name'>
          {country?.name}
        </p>

        <p id='population' className='population' aria-label='population'>
          <span className='title'>Population: </span>
          {country?.population?.toLocaleString()}
        </p>

        <p id='region' className='region' aria-label='region'>
          <span className='title'>Region: </span>
          {country?.region}
        </p>

        <p id='capital' className='capital' aria-label='capital'>
          <span className='title'>Capital: </span>
          {country?.capital}
        </p>
      </CountryDetails>
    </Card>
  );
};

export default CountryCard;
