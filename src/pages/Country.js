import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/continent';
import { Button } from '../components/Styles/CountriesStyle';
import CountryInfo from '../components/CountryInfo/CountryInfo';

function Country() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData);
  }, []);
  const { continent } = useParams();
  const continents = useSelector((state) => state.reduContinent);
  const filtercontinent = continents.filter((item) => (item.id === continent))[0];
  const { countries } = filtercontinent;
  const [country, setCountry] = useState(countries[0]);

  return (
    <div>
      <h1>{continent}</h1>
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

export default Country;
