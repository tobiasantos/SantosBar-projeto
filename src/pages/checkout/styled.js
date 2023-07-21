import { styled } from "styled-components";

export const CheckOutWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 800px) {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const CheckOutContainer = styled.div`
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

export const ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  overflow: auto;
  flex-direction: column;
  /* align-items: center; */
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
    width: 60%;
  }

  button:hover {
    background: #3e8e41;
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

export const Total = styled.div``;

export const Bill = styled.div``;

export const Btn = styled.div``;

export const QRWrapper = styled.div``;
