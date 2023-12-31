import styled from 'styled-components'

export const ItemRow = styled.div`
  .card {
    position: relative;
    float: left;
    margin-right: 50px !important;
    margin-left: 50px !important;
    margin-bottom: 35px;
    width: 300px;
    /* height: 322px;  */
    overflow: hidden;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15), 0 3px 3px rgba(0, 0, 0, 0.15);
  }

  .card .image {
    width: 100%;
    /* height: 200px; */
  }

  .card .image img {
    object-fit: cover;
    max-width: 100%;
    height: 220px !important;
    width: 365px;
  }

  .content {
    position: absolute;
    bottom: -18%;
    width: 300px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.5s ease;
  }

  .card:hover .content {
    bottom: 0;
  }

  .content p {
    color: white;
    font-size: 17px;
    font-weight: 500;
  }
  .meta {
    margin-bottom: 0.4rem;
    text-transform: uppercase;

    line-height: 1.2;
  }

  .meta p {
    color: #ffcc00;
    font-size: 18px !important;
    font-weight: 600;
    margin-top: 0.6rem;
    margin-bottom: 0;
  }

  .content .description {
    margin-top: 0;
  }

  .content span {
    font-weight: 600;
  }

  .actions {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffcc00;
  }

  .actions span {
    color: white;
  }

  .actions .addRemove {
    font-size: 20px;
    cursor: pointer;
  }

  .actions #add {
    margin-left: 8.8rem;
  }

  .quantity {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 42px;
    height: 42px;
    background-color: #ffcc00;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 21px;
  }

  .quantity span {
    color: white;
    font-weight: 600;
  }
`
