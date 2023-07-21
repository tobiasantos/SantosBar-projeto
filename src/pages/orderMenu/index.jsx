import { Item } from "../../components/item";
import * as C from "./styled";
import { Header } from "../../components/header";
import { MainContext } from "../../contexts/MainContext";
import { useState, useContext } from "react";

import { cervejas, petiscos, pratos } from "../../data/produtos";

export const MenuPage = () => {
  const { state, dispatch } = useContext(MainContext);

  const getProducts = (currentView) => {
    if (currentView === "bebidas") {
      return cervejas.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          img={item.imagem}
        />
      ));
    } else if (currentView === "petiscos") {
      return petiscos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          img={item.imagem}
        />
      ));
    } else if (currentView === "pratos") {
      return pratos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          nome={item.nome}
          descricao={item.descricao}
          preco={item.preco}
          img={item.imagem}
        />
      ));
    }
  };

  return (
    <>
      <Header />

      <C.Menu>
        <div className="section">
          {getProducts(state.info.currentProductView)}
        </div>
      </C.Menu>
    </>
  );
};
