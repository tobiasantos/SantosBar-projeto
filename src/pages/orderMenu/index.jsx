import { Item } from "../../components/item";
import * as C from "./styled";

export const MenuPage = () => {
  return (
    <>
    <C.Menu>
      <div className="section">
        {/* testando uma futura lista feita com map */}

        <Item  className="box"/>
        <Item className="box"/>
        <Item className="box"/>
        <div className="break"/>
        <Item className="box"/>
        <Item className="box"/>
      </div>
      </C.Menu>
    </>
  );
};
