import { Item } from "../../components/item";
import * as C from "./styled";
import { Header } from "../../components/header";

import { cervejas } from "../../data/produtos";

export const MenuPage = () => {
  return (
    <> 
    <Header/>
 
      <C.Menu>
        <div className="section">

          {cervejas.map((item) => (
            <Item
              key={item.id}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              img={item.imagem}
            />
          ))}
        </div>
      </C.Menu>
    </>
  );
};
