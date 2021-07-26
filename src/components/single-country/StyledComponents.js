import styled from 'styled-components';
import {
  desktopView,
  mobileView,
  tabletView
} from '../../constants/stylingVariables';

export const SingleCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  width: 80%;

  @media (max-width: ${tabletView}) {
    margin: 20px;
    width: 90%;
  }

  @media (max-width: ${mobileView}) {
    margin: 20px 0px;
    width: 100%;
  }
`;

export const BackButton = styled.button`
  width: 150px;
  padding: 10px;
  background-color: ${props => props.theme.elementsBG};
  border: none;
  box-shadow: 0 0px 18px -3px ${props => props.theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  #back-arrow {
    margin-right: 15px;
    margin-left: -20px;
    width: 20px;
  }

  @media (max-width: ${mobileView}) {
    width: 120px;
    padding: 8px;
  }
`;

export const CountryContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;

  #flag {
    flex: 1;
    img {
      width: 550px;
      object-fit: cover;
    }
  }

  #details {
    display: flex;
    flex-direction: column;
    margin: auto 0;
    padding: 0 20px;
    flex: 1;

    #name {
      font-size: 32px;
      font-weight: 600;
    }

    #columns-container {
      display: flex;
      flex-direction: row;
    }

    .details-field {
      font-size: 16px;
    }

    .title {
      font-weight: 800;
    }
  }

  @media (max-width: ${desktopView}) {
    #flag > img {
      width: 450px;
    }
  }

  @media (max-width: ${tabletView}) {
    #flag > img {
      width: 100%;
    }

    #details {
      padding: 0;

      #name {
        font-size: 22px;
        font-weight: 600;
      }

      .details-field {
        font-size: 12px;
      }
    }
  }

  @media (max-width: ${mobileView}) {
    margin-top: 40px;
    flex-direction: column;

    #flag {
      margin-bottom: 30px;
    }

    #details {
      #columns-container {
        flex-direction: column;
      }

      .details-field {
        font-size: 14px;
      }
    }
  }
`;

export const BorderCountriesContainer = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;

  #border-countries-title {
    padding-top: 10px;
    flex-shrink: 0;
    width: 30%;
  }

  #countries-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  #country-card {
    display: block;
    padding: 5px 15px;
    margin: 5px;
    font-size: 14px;

    background-color: ${props => props.theme.elementsBG};
    box-shadow: 0 0px 18px -3px ${props => props.theme.shadow};
  }

  @media (max-width: ${mobileView}) {
    flex-direction: column;
    #border-countries-title {
      width: 100%;
      padding: 20px 0;
    }
  }
`;

export const DetailsColumns = styled.div`
  flex: 1;

  @media (max-width: ${tabletView}) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
