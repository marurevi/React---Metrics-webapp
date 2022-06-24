import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllData } from '../redux/continent';
import {
  GridContainer, MapBackground, Arrow, Title, Card,
} from '../components/Styles/ContinentsStyle';
import Imagen from '../components/images/mapa-mundi.png';

function Home() {
  const continents = useSelector((state) => state.reduContinent);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllData);
  }, []);

  return (
    <div>
      <MapBackground>
        <Title>
          Covid-19
          <br />
          Metrics
        </Title>
        <img src={Imagen} alt="mapa-mundi" width={400} />
      </MapBackground>
      <GridContainer>
        {continents.map((continent) => (
          <Card key={continent.id}>
            <li style={{ position: 'relative', left: '4rem' }}>
              <Link to={`/country/${continent.id}`}>
                <Arrow />
              </Link>
            </li>
            <li><h2>{continent.continent}</h2></li>
            <li>
              <strong>Cases:</strong>
              {continent.cases}
            </li>
            <li>
              <strong>Deaths:</strong>
              {continent.deaths}
            </li>
          </Card>
        ))}
      </GridContainer>
    </div>
  );
}

export default Home;
