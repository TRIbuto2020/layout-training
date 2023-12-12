import styled from "styled-components";
import { colors, textShadows, blockShadows, breakpoints } from '../../styles'

export const Title = styled.h2`
  font-size: 4rem;
  text-align: center;
  color: ${colors.red};
  ${textShadows};
  margin-top: 72px;
`

export const Text = styled.p`
  color: ${colors.deep};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;
  width: 80%;
  margin: 24px auto 40px;

  @media (max-width: ${breakpoints.tablet}){
    grid-template-columns: 1fr;
  }

`

export const Left = styled.div`
  
  padding: 16px;
  border: 4px solid ${colors.purple};
  background-color: ${colors.beige};
  border-radius: 16px;
  ${blockShadows}
  
`

export const Right = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`

export const Top = styled.div`

  padding: 16px;
  border: 4px solid ${colors.purple};
  background-color: ${colors.beige};
  border-radius: 16px;
  margin-bottom: 16px;
  ${blockShadows}

  @media (min-width: ${breakpoints.tablet}){
    height: calc(50% - 8px)
  }
`

export const Bottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}){
    grid-template-columns: 1fr;
  }

  div{
    padding: 16px;
    border: 4px solid ${colors.purple};
    background-color: ${colors.beige};
    border-radius: 16px;
    ${blockShadows}
  }
`