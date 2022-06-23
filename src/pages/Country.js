import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/continent';
import { getCountryInfo } from '../redux/country';
import { Container, List, Button } from '../components/Styles/CountriesStyle';

function Country() {
  const dispatch = useDispatch();
  const { continent } = useParams();
  const continents = useSelector((state) => state.reduContinent) || [];
  const countryInfo = useSelector((state) => state.reduCountry);
  useEffect(() => {
    dispatch(getAllData);
  }, []);

  const filtercontinent = continents.filter((item) => (item.id === continent))[0];
  const { countries } = filtercontinent;
  const [country, setCountry] = useState();

  return (
    <Container>
      <h1>{continent}</h1>
      <List name="country" onChange={(e) => setCountry(e.target.value)}>
        {countries.map((ctry) => <option value={`${ctry}`} key={ctry}>{ctry}</option>)}
      </List>
      <Button type="button" onClick={() => dispatch(getCountryInfo(country))}>Show Info</Button>
      {country && (country === countryInfo.id)
        ? (
          <ul style={{ listStyle: 'none' }}>
            <li>
              <strong>Info Country:</strong>
              {' '}
              {countryInfo.id}
            </li>
            <li>
              <strong>Cases:</strong>
              {' '}
              {countryInfo.cases}
            </li>
            <li>
              <strong>Active:</strong>
              {' '}
              {countryInfo.active}
            </li>
            <li>
              <strong>Critical:</strong>
              {' '}
              {countryInfo.critical}
            </li>
            <li>
              <strong>Recovered:</strong>
              {' '}
              {countryInfo.recovered}
            </li>
            <li>
              <strong>Deaths:</strong>
              {' '}
              {countryInfo.deaths}
            </li>
            <li>
              <strong>Population:</strong>
              {' '}
              {countryInfo.population}
            </li>
          </ul>
        )
        : 'CHOOSE A COUNTRY'}
    </Container>
  );
}

export default Country;
