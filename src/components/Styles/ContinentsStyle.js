import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: stretch;
  color: white;
  width: 100vw;
`;

export const Arrow = styled(FaRegArrowAltCircleRight)`
  color: white;
  font-size: 1.8rem;
  &:hoverul {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    transform: scale(1.5);    
  }
`;

export const MapBackground = styled.div`
  width: 100vw;
  height: 25vh;
  background: linear-gradient(to right, #000, rgb(236,76,138));
`;

export const Title = styled.h1`
 color: white;
 font-weight: bold;
 text-shadow: #000 2px 2px 3px;
 position: absolute;
 top: 3rem;
 right: 2rem;
`;

export const Card = styled.ul`
  list-style: none;
  width: 100%;
  background: rgb(236,76,138);
  box-shadow: 1px 1px 20px black;
  padding: 2rem 1rem;
  margin: 0;
  &:hover {
    filter: contrast(1.2);
  }
`;
