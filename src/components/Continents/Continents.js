import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../redux/continent';
import GridContainer from './ContinentsStyle';

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
          <li>{continent.continent}</li>
          <li>
            Cases:
            {continent.cases}
          </li>
          <li>
            Deaths:
            {continent.deaths}
          </li>
        </ul>
      ))}
    </GridContainer>
  );
}

export default Continents;
