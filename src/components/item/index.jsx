import * as C from "./styled";
import { GrAddCircle } from 'react-icons/gr';

export const Item = ({ nome, descricao, preco, img }) => {
  return (
    
    <>
      <C.ItemRow>
        <div className="card">
          <div className="image">
            <img src={img} />
          </div>
          <div className="content">
            <div className="meta">
              <p>{nome}</p>
            </div>
            <p className="description">{descricao}</p>
            <div className="actions">
            <span>R$ {preco}</span>
            <a className="add"> <GrAddCircle/></a>
            </div>
            
          </div>
        </div>
      </C.ItemRow>
    </>
  );
};
