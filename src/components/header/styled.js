import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: baseline;
  height: 8rem;
  padding-top: 1.5rem;
  background-color: #ffcc00;
  color: white;
  text-align: center;
  margin-bottom: 2.5rem;

  .logo {
    display: flex;
    gap: 1rem;
    align-items: baseline;
  }

  .btns {
    display: flex;
    width: 50%;
    gap: 1.5rem;
    align-items: baseline;
    justify-content: flex-end;
  }

  h1 {
    margin-bottom: 0.5rem;
    font-size: 32px;
  }

  .icon {
    font-size: 42px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const HomeBtn = styled.button`
  cursor: ${(props) =>
    props.reference === "cart" && !props.isEnabled ? "not-allowed" : "pointer"};
  border: 1px solid white;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  width: 6%;
  img {
    max-width: 100%;
    filter: invert(1);
  }

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 800px) {
    width: 100%;
    scale: 1.5;
    border: none;
  }
`;
