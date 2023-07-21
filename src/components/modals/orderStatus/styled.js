import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Container = styled.div`
  width: 55%;
  height: 90%;
  background: #ededed;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */

  position: relative;
  overflow-y: scroll;

  .sendButton {
    margin-top: 0.5rem;
    cursor: pointer;
    background-color: #ffcc00;
    padding: 12px;
    border-radius: 5px;
    opacity: 0.6;
    transform: scale(0.9);
  }

  .sendButton:hover {
    opacity: 1;
    transition: ease-in-out 0.2s;
    transform: scale(1);
  }

  /* .esc {
    cursor: pointer;
    color: black;
    font-size: 20px;
    position: relative;
    bottom: 0.6rem;
    left: 28rem;
  } */

  .esc {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #ffcc00;
    font-size: 1rem;
    position: absolute;
    left: 8px;
    top: 8px;

    img {
      width: 1.5rem;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;
