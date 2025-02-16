import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors["base-button"] };

  gap: 0.25rem;

  button{
    background: transparent;
    align-items: center;
    display: flex;
    border: none;
  }

  button svg{
    color: ${({theme}) => theme.colors.purple};

    transition: all 0.2s;

    &:hover{
      color: ${(props) => props.theme.colors["purple-dark"]};
    }
  }
  span{
    ${mixins.fonts.textM}
    padding-top: 2px;
    color: ${(props) => props.theme.colors["base-title"]};
  }
`