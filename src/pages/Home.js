import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllData } from '../redux/continent';
import { GridContainer, Arrow } from '../components/Styles/ContinentsStyle';

function Home() {
  const continents = useSelector((state) => state.reduContinent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData);
  }, []);

  return (
    <div>
      <h1>Covid-19 Metrics</h1>
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
              <Link to={`/country/${continent.id}`}>
                <Arrow />
              </Link>
            </li>
          </ul>
        ))}
      </GridContainer>
    </div>
  );
}

export default Home;
