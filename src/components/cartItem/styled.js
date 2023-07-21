import { styled } from "styled-components";

export const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  margin-bottom: 1rem;
  text-align: justify;
  padding: 12px;
  padding-top: 15px;
`;

export const ItemImg = styled.img`
  width: 150px;
  height: 98px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  //max-width: 132px;
`;

export const ItemName = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const ItemDescription = styled.p``;

export const AmountHandler = styled.div`
  display: flex;
  font-size: 18px;
  display: flex;
  align-items: center;

  .preco-unitario {
    margin-left: 2rem;
  }
`;

export const ItemQuant = styled.p`
  font-weight: 600;
`;

export const ItemBtns = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.6rem;
  color: #ffcc00;
`;

export const ItemBtnText = styled.p`
  cursor: pointer;
`;

export const ItemPrice = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const RemoveBtn = styled.a`
  cursor: pointer;
  font-size: 20px;
  color: #ffcc00;
`;
