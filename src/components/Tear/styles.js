import styled from "styled-components";
import papel from "../../assets/pplRsg.png"
import { colors, textShadows, breakpoints } from '../../styles'


export const Rasgado = styled.div`
  background-image: url(${papel});
  height: 400px;
  background-repeat: repeat-x;
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-left: 32px;
  gap: 16px;

  h2, p {
    font-family: serif;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 6rem;
  color: ${colors.beige};

  @media (max-width: ${breakpoints.tablet}){
    font-size: 1rem;
  }

`

export const Text = styled.p`
  color: ${colors.beige};
  width: 50vw;
  font-size: 18px;

`