import styled from "styled-components";
import BG from "../../assets/patternBg.jpg"
import { colors, textShadows, breakpoints } from "../../styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  background-color: red;  background-image: url(${BG});
  background-attachment: fixed; 
  height: 50vh;

  @media (max-width: ${breakpoints.tablet}){
    background-size: cover;
  }

`

export const Title = styled.h2`
  text-align: center;
  font-size: 10rem;
  color: ${colors.red};
  ${textShadows};

  @media (max-width: ${breakpoints.tablet}){
    font-size: 3rem;
  }

`