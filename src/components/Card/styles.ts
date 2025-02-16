import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.div`
  background-color: ${({theme})=> theme.colors["base-card"]};
  padding: 0 1.25rem 1.25rem;
  border-radius: 0.375rem 2.25rem;

  width: 16.0625rem;
  display: flex;
  flex-direction: column;

  text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -1.25rem;
  max-width: 7.5rem;
  max-height: 7.5rem;

  align-self: center;
`

export const Tags = styled.div`
  margin-top: 0.75rem;

  display: flex;
  align-items: center;
  align-self: center;

  gap: 0.25rem;

  span{
    padding: 0.25rem 0.5rem;
    border-radius: 6.25rem;

    background-color: ${({theme}) => theme.colors["yellow-light"]};
    color: ${({theme}) => theme.colors["yellow-dark"]};
    text-transform: uppercase;
    ${mixins.fonts.tag}
    
  }
`
export const Title = styled.h3`
  margin-top: 1rem;

  ${mixins.fonts.titleS}
  color: ${({theme}) => theme.colors["base-subtitle"]};

`

export const Description = styled.div`
  margin-top: 0.5rem;
  width: 100%;

  color: ${({theme}) => theme.colors["base-label"]};
  ${mixins.fonts.textS}

`

export const Control = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

margin-top: 2rem;
`
export const Price = styled.div`

  display: flex;
  align-items: baseline;
  gap: 0.125rem;

  span:first-child {

    ${mixins.fonts.textS}
    color: ${({theme}) => theme.colors["base-text"]};
  }
  span:last-child {
    ${mixins.fonts.titleM}
    color: ${({theme}) => theme.colors["base-text"]};
  }
`

export const Order = styled.div`
  display: flex;
  align-items: center;
  gap:0.5rem;
  

  > button {
    background-color: ${({theme}) => theme.colors["purple-dark"]};
    transition: background-color 0.2s;
    border-radius: 6px;
    display: flex;
    padding: 0.5rem;
    border: none;

    &:hover{
      ${({theme}) =>  theme.colors.purple}
    }
    button svg{
      color: ${({theme}) => theme.colors["base-text"]};
    }
  }

`