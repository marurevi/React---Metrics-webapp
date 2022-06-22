import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../redux/continent';
import { GridContainer, Button } from './ContinentsStyle';
import Countries from '../Countries/Countries';

function Continents() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.reduContinent);
  const [pais, setpais] = useState('');
  useEffect(() => {
    dispatch(getAllData);
  }, []);

  return (
    <GridContainer>
      {continents.map((continent) => (
        <ul key={continent.id} style={{ listStyle: 'none' }}>
          <li><h2>{continent.continent}</h2></li>
          <li>
            <strong>Cases:</strong>
            {continent.cases}
          </li>
          <li>
            <strong>Deaths:</strong>
            {continent.deaths}
          </li>
          <li>
            <Link to="/country">
              <Button id={continent.id} onClick={(e) => setpais(e.target.id)}>
                Get Info
              </Button>
              <Countries name={pais} style={{ display: 'none' }} />
            </Link>
          </li>
        </ul>
      ))}
    </GridContainer>
  );
}

export default Continents;
