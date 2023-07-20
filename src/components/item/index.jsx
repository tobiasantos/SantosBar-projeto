import * as C from "./styled";

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
            <span>{preco}</span>
          </div>
        </div>
      </C.ItemRow>
    </>
  );
};
