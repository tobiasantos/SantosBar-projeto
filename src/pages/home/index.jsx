import * as C from "./styled";

import { Header } from "../../components/header";

export const HomePage = () => {
  return (
    <C.HomeContainer>
      <Header />
      <div className="section">
        <h2>FAÇA SEU PEDIDO</h2>
        <div className="cards">
          <div
            className="bigCard"
            style={{
              background: `url(https://ibis.accor.com/editorial/imagerie/article/comida-mineira-pratos-tipicos-de-cada-regiao-do-brasil-358a_660x440.jpg) center center`,
            }}
          >
            <div className="cover">
              <div className="bigCardText">
                <h3>PRATOS PRINCIPAIS</h3>
              </div>
            </div>
          </div>
          <div
            className="smallCard"
            style={{
              background: `url(https://ellebrasil-wp-images.s3.amazonaws.com/2022/09/image-288.jpg) center center`,
            }}
          >
            <div className="cover">
              <div className="smallCardText">
                <h3>SOBREMESAS</h3>
              </div>
            </div>
          </div>
          <div
            className="smallCard"
            style={{
              background: `url(https://careclub.com.br/wp-content/uploads/2022/09/As-Principais-Diferenc%CC%A7as-entre-as-Bebidas-Alcoo%CC%81licas.jpg) center center`,
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
