import styled from 'styled-components'
import { colors, textShadows, breakpoints } from '../../styles'

export const Body = styled.div`
  position: relative;
  height: 100vh;

  @media (max-width: ${breakpoints.tablet}){
    height: 50vh;
  }
`

export const WaveTop = styled.svg`
  position: absolute; 
`

export const Bubbles = styled.img`
  position: absolute;
  top: 0;
  width: 100%;
  @media (max-width: ${breakpoints.tablet}){
    
  }
`

export const Title = styled.h1`
  transform: rotate(-15deg);
  position: absolute;
  top: 30%;
  width: 100%;
  text-align: center;
  font-size: 10rem;
  color: ${colors.red};
  ${textShadows};

  @media (max-width: ${breakpoints.tablet}){
    font-size: 3rem;
  }
`

