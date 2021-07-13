import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  max-width: 1440px;
  @media (max-width: 720px) {
    width: 90vw;
    margin: 0 5vw;
  }
`;

export const Link = styled.a`
  text-decoration: none;
  color: #000;
  opacity: 0.5;
  transition: all ease 0.2s;
  cursor: pointer;
  display: block;
  @media (max-width: 768px) {
    color: white;
    opacity: 1;
  }
  &:hover {
    opacity: 0.9;
  }

  ${(props) =>
    props.button &&
    css`
      background: var(--cyan);
      padding: 0.25rem 1.25rem;
      opacity: 1;
      color: white;
      border-radius: 4rem;
      @media (max-width: 560px) {
        padding: 0.5rem 30%;
      }
    `};

  ${(props) =>
    props.buttonLarge &&
    css`
      background: var(--cyan);
      padding: 0.5rem 1.5rem;
      border-radius: 4rem;
      font-size: 1.5rem;
      opacity: 1;
      color: white;
      display: inline-block;
      @media (max-width: 1024px) {
        font-size: 1rem;
        padding: 0.75rem 2rem;
      }
    `}
`;
