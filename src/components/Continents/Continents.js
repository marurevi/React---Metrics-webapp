import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../redux/continent';
import { GridContainer, Button } from './ContinentsStyle';

function Continents() {
  const dispatch = useDispatch();
  const continents = useSelector((state) => state.reduContinent);

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
            <Button id={continent.id} onClick={(e) => console.log('click ', e.target.id)}>Get Info</Button>
          </li>
        </ul>
      ))}
    </GridContainer>
  );
}

export default Continents;
