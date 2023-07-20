import { Item } from "../../components/item";
import * as C from "./styled";

import { cervejas } from "../../data/produtos";

export const MenuPage = () => {
  return (
    <>
      <C.Menu>
        <div className="section">
          {/* testando uma futura lista feita com map */}

          {/* <Item  className="box"/>
        <Item className="box"/>
        <Item className="box"/>
        <div className="break"/>
        <Item className="box"/>
        <Item className="box"/> */}

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
