import React from 'react';
import getAllContinents from '../Data/Data';
import { GridContainer, AmericaNor, AmericaSur, Africa, Asia, Europe, Oceania } from './ContinentsStyle';

function Continents() {
  console.log(getAllContinents());
  return (
    <GridContainer>
      <AmericaNor>
        North America
      </AmericaNor>
      <AmericaSur>
        South America
      </AmericaSur>
      <Europe>
        Europe
      </Europe>
      <Asia>
        Asia
      </Asia>
      <Africa>
        Africa
      </Africa>
      <Oceania>
        Oceania
      </Oceania>
    </GridContainer>
  );
}

export default Continents;
