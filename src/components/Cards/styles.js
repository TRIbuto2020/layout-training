import styled from "styled-components";
import {breakpoints} from "../../styles"

export const Bg = styled.div`
  background-color: white;
  width:100vw;

`

export const Container = styled.div`
  display: flex;
  width: 80vw;
  margin: 0 auto;
  padding: 80px 0;

  @media (max-width: ${breakpoints.tablet}){
    flex-direction: column;
  }
`

export const Card = styled.div`
  z-index: 1;
  background: #ebebeb;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  transition: 0.4s;
  img{
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #333;
  }
  p {
      color: #999;
    }

  &:not(:first-child) {
  margin-left: calc(4rem*-1);

    @media (max-width: ${breakpoints.tablet}){
      margin-left: 0;
      margin-top: calc(4rem*-1);
    }
  }

  
  
`