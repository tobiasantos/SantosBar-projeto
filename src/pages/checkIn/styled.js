import { styled } from "styled-components";

export const CheckInWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 800px) {
    background: url(${(props) => props.bgMobile});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const Container = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: center;
  color: rgb(24, 36, 58);
  background: rgba(255, 255, 255, 0.4);
  border-radius: 16px;
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 4rem;
  }

  .greetings {
    margin-top: 0.5rem;
  }

  .table-info {
    margin-top: 1rem;
    font-size: large;
  }

  button {
    margin: 1rem 0;
    cursor: pointer;
    border: none;
    background: #4caf50;
    color: white;
    padding: 1rem;
    font-size: 1rem;
  }

  button:hover {
    background: #3e8e41;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;
