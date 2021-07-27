import React from 'react';
import { getValuesByFields } from '../../utilities/getValuesByField';
import { useHistory } from 'react-router-dom';
import { darkThemeArrow, lightThemeArrow } from '../../svgs';
import useTheme from '../../hooks/themeContext';
import {
  SingleCountryContainer,
  BackButton,
  CountryContentContainer,
  BorderCountriesContainer,
  DetailsColumns
} from './StyledComponents';
import { getCountryByCode } from '../../services';

const LeftColumn = ({ nativeName, population, region, subregion, capital }) => {
  return (
    <DetailsColumns>
      <p id='nativeName' className='details-field' aria-label='native name'>
        <span className='title'>Native Name: </span>
        {nativeName}
      </p>
      <p id='population' className='details-field' aria-label='population'>
        <span className='title'>Population: </span>
        {population?.toLocaleString()}
      </p>
      <p id='region' className='details-field' aria-label='region'>
        <span className='title'>Region: </span>
        {region}
      </p>
      <p id='subregion' className='details-field' aria-label='subregion'>
        <span className='title'>Sub Region: </span>
        {subregion}
      </p>
      <p id='capital' className='details-field' aria-label='capital'>
        <span className='title'>Capital: </span>
        {capital}
      </p>
    </DetailsColumns>
  );
};

const RightColumn = ({ topLevelDomain, currencies, languages }) => {
  return (
    <DetailsColumns>
      <p
        id='top-level-domain'
        className='details-field'
        aria-label='top-level-domain'
      >
        <span className='title'>Top Level Domain: </span>
        {topLevelDomain}
      </p>
      <p id='currencies' className='details-field' aria-label='currencies'>
        <span className='title'>Currencies: </span>
        {getValuesByFields(currencies, 'name')}
      </p>
      <p id='languages' className='details-field' aria-label='languages'>
        <span className='title'>Languages: </span>
        {getValuesByFields(languages, 'name')}
      </p>
    </DetailsColumns>
  );
};

const BorderCountries = ({ borderCountriesArray }) => {
  return (
    <BorderCountriesContainer
      id='border-countries-container'
      aria-label='border countries'
    >
      <span id='border-countries-title' className='title'>
        Border Countries:
      </span>
      <div id='countries-cards'>
        {borderCountriesArray.map(countryName => (
          <div id='country-card' key={countryName}>
            {countryName}
          </div>
        ))}
      </div>
    </BorderCountriesContainer>
  );
};

const SingleCountry = ({ country }) => {
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = country;

  const [borderCountries, updateBorderCountries] = React.useState([]);

  React.useEffect(() => {
    const getCountriesNamesByCodes = async countriesCodes => {
      return Promise.all(
        countriesCodes.map(countryCode =>
          getCountryByCode(countryCode).then(country => country.name)
        )
      );
    };

    borders &&
      getCountriesNamesByCodes(borders).then(countriesNamesArr =>
        updateBorderCountries(countriesNamesArr)
      );
  }, [borders]);

  const history = useHistory();
  const { isLightTheme } = useTheme();

  return (
    <SingleCountryContainer id='single-country-container'>
      <BackButton
        aria-label='back'
        id='back-button'
        onClick={() => history.goBack()}
      >
        <img
          id='back-arrow'
          alt='back-arrow'
          src={isLightTheme ? lightThemeArrow : darkThemeArrow}
        />
        Back
      </BackButton>
      <CountryContentContainer id='country-content-container'>
        <div id='flag' aria-label={`flag of ${name}`}>
          <img id='flag-img' src={flag} alt='country-flag' />
        </div>
        <div id='details'>
          <h1 id='name' aria-label='name'>
            {name}
          </h1>

          <div id='columns-container'>
            <LeftColumn
              id='left-column'
              nativeName={nativeName}
              population={population}
              region={region}
              subregion={subregion}
              capital={capital}
            />

            <RightColumn
              id='right-column'
              topLevelDomain={topLevelDomain}
              currencies={currencies}
              languages={languages}
            />
          </div>
          <BorderCountries borderCountriesArray={borderCountries} />
        </div>
      </CountryContentContainer>
    </SingleCountryContainer>
  );
};

export default React.memo(SingleCountry);
