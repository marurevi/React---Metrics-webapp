import styled from 'styled-components';
import { FaRegArrowAltCircleRight } from '@react-icons/all-files/fa/FaRegArrowAltCircleRight';

export const GridContainer = styled.div`
  display: grid;
  height: 100vh;
  background: black;
  color: white;
  grid-template-columns: 45% 45%;
  grid-template-rows: auto;
`;

export const Button = styled.button`
  padding: 0.5rem;
  color: white;
  background: rgb(236,76,138);
  border-radius: 15px;
  margin-top: 1rem;
`;

export const Arrow = styled(FaRegArrowAltCircleRight)`
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
`;
