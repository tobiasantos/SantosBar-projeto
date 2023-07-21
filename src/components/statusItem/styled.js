import { styled } from "styled-components";

export const StatusWrapper = styled.div`
  padding: 12px;
  display: flex;
  color: black;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0%.8;

  .waiting {
    color: #ffcc00;
    font-weight: 600;
  }
  .prep {
    color: orange;
    font-weight: 600;
  }
  .done {
    color: green !important;
    font-weight: 600;
  }
  .x {
    color: green !important;
    font-weight: 600;
  }
`;

export const Img = styled.img`
  max-width: 120px;
  margin-right: 1rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Name = styled.p`
  margin-right: 0.3rem;
  font-size: 18px;
  font-weight: 600;
`;

export const StatusMsg = styled.p`
  font-size: 18px;
`;
