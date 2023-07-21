import * as C from "./styled";

import { Header } from "../../components/header";
import { useState, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { state, dispatch } = useContext(MainContext);
  const navigate = useNavigate();

  return (
    <C.HomeContainer>
      <Header />

      <div className="section">
        <h2>FAÇA SEU PEDIDO</h2>
        <div className="cards">
          <div
            className="smallCard"
            style={{
              background: `url(https://ibis.accor.com/editorial/imagerie/article/comida-mineira-pratos-tipicos-de-cada-regiao-do-brasil-358a_660x440.jpg) center center`,
            }}
            onClick={() => {
              dispatch({
                type: "UPDATE_INFO",
                payload: { currentProductView: "pratos" },
              });
              navigate("/menu");
            }}
          >
            <div className="cover">
              <div className="smallCardText">
                <h3>PRATOS PRINCIPAIS</h3>
              </div>
            </div>
          </div>
          <div
            className="smallCard"
            style={{
              background: `url(https://www.baressp.com.br/barreporter/imgs2/petiscos-para-bares-e-botecos-baressp-1-min_210520201658.jpg) center center`,
            }}
            onClick={() => {
              dispatch({
                type: "UPDATE_INFO",
                payload: { currentProductView: "petiscos" },
              });
              navigate("/menu");
            }}
          >
            <div className="cover">
              <div className="smallCardText">
                <h3>PETISCOS</h3>
              </div>
            </div>
          </div>
          <div
            className="smallCard"
            style={{
              background: `url(https://careclub.com.br/wp-content/uploads/2022/09/As-Principais-Diferenc%CC%A7as-entre-as-Bebidas-Alcoo%CC%81licas.jpg) center center`,
            }}
            onClick={() => {
              dispatch({
                type: "UPDATE_INFO",
                payload: { currentProductView: "bebidas" },
              });
              navigate("/menu");
            }}
          >
            <div className="cover">
              <div className="smallCardText">
                <h3>BEBIDAS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </C.HomeContainer>
  );
};
