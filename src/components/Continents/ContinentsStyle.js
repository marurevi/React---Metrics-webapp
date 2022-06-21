import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 4.5fr 4.5fr 1fr;
  grid-template-rows: 1fr 9fr 1fr;
  grid-template-areas:
  'amNor amNor amSur amSur'
  'eur eur asia asia'
  'afr afr oce oce';
`;

export const AmericaNor = styled.div`
  grid-area: amNor;
`;

export const AmericaSur = styled.div`
  grid-area: amSur;
`;

export const Europe = styled.div`
  grid-area: eur;
`;

export const Asia = styled.div`
  grid-area: asia;
`;

export const Africa = styled.div`
  grid-area: afr;
`;

export const Oceania = styled.div`
  grid-area: oce;
`;
