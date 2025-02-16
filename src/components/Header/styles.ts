import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 72.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 1.25rem;
`

export const Aside = styled.aside`
  display: flex;
  gap: 0.75rem;
  
  div{
    background-color: ${({ theme }) => theme.colors["purple-light"]};
    padding: 0.625rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 6px;
    gap: 0.25rem;


  svg {
    color: ${({ theme }) => theme.colors["purple-dark"]};
  }
  span{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.purple};
  }
}
  a {
    display: flex;
    align-items: center;

    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    position: relative;

    border-radius: 6px;
  }
`