import styled from "styled-components";

export const HomeContainer = styled.div`
  .header {
    padding-top: 1.5rem;
    height: 11rem;
    width: 100%;
    background-color: #ffcc00;
    color: white;
    margin-top: 0;
    text-align: center;
  }

  .header h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-size: 42px;
  }

  .header .icon {
    font-size: 55px;
    margin-top: 0;
  }

  .section {
    text-align: center;
  }

  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section h2 {
    margin-bottom: 3.5rem;
  }
  .cover {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 5%, transparent 95%);
  }

  .bigCard {
    margin-bottom: 35px;
    width: 630px;
    height: 360px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15), 0 3px 3px rgba(0, 0, 0, 0.15);
    border-radius: 20px;
    transform: scale(0.95)
    
  }

  .bigCard:hover{
    transform: scale(1);
    transition: ease-in-out 0.3s;
  }

  .bigCard .bigCardText {
    position: relative !important;
    top: 16rem !important;
    padding: 18px;
    text-align: center;
    color: azure;
  }

  .smallCard {
    margin-left: 3.2rem !important;
    margin-bottom: 35px;
    width: 370px;
    height: 360px;
    overflow: hidden;
    background-size: cover !important;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15), 0 3px 3px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    border-radius: 20px;
    transform: scale(0.95)
  }

  .smallCard:hover{
    transform: scale(1);
    transition: ease-in-out 0.3s;
  }

  .image {
    width: 100%;
    height: 201px;
    overflow: hidden;
  }

  .smallCard .smallCardText {
    position: relative !important;
    top: 16rem !important;
    padding: 18px;
    text-align: center;
    color: azure;
  }
`;
