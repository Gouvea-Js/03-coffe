import styled from "styled-components"

import { mixins } from "./../../styles/mixins"

export const Hero = styled.section`
  position: relative;

  img#bg-hero{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-height: 34rem;
    object-fit: cover;
    z-index: -1;

  }
`

export const HeroContainer = styled.div`
  width: 72.5rem;
  padding: 5.875rem 1.25rem;
  margin: 0 auto;
  gap: 3.5rem;


  display: flex;
  align-items: flex-start;

  > div{
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3.5rem;
  }

`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1{
    ${mixins.fonts.titleXL}
    color: ${(props) => props.theme.colors["base-title"]};
  }
  span {
    ${mixins.fonts.textL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`

export const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1.25rem;

  > div{
    display: flex;
    align-items: center;
    gap: 12px;

    svg{
      border-radius: 50%;
      padding: 0.5rem;
    }

    span{
      ${mixins.fonts.textM}
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }
`

export const CoffeeList = styled.section`
  width: 72rem;
  margin: 0 auto;
  padding: 2rem 1.25rem 9.375rem;

  display: flex;
  flex-direction: column;
  gap: 3.5625rem;

  h1{
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2rem;
    align-items: center;
  }

`