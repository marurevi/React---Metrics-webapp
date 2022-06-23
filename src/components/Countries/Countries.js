import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../redux/continent';
import { Button } from './CountriesStyle';
import CountryInfo from '../CountryInfo/CountryInfo';

function Countries(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData);
  }, []);

  const continents = useSelector((state) => state.reduContinent);
  const { name } = props;
  const filtercontinent = continents.filter((continent) => (continent.id === name))[0];
  const { countries } = filtercontinent;
  const [country, setCountry] = useState(countries[0]);

  return (
    <div>
      <h1>{name}</h1>
      <form onSubmit={() => setCountry()}>
        <select name="country">
          {countries.map((country) => <option value={`${country}`} key={country.split(3)}>{country}</option>)}
        </select>
        <Button type="submit">Show Info</Button>
      </form>
      <CountryInfo country={country} />
    </div>
  );
}

Countries.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Countries;
