import * as C from "./styled";
import QRCode from "qrcode.react";
import { useState, useEffect, useContext, useRef } from "react";
import { MainContext } from "../../contexts/MainContext";

import { MdFastfood } from "react-icons/md";

import checkInBgMobile from "../../assets/checkin-bg.png";
import checkInBg from "../../assets/checkin-bg.jpg";

import { CartItem } from "../../components/cartItem";

export const CheckOut = () => {
  const { state, dispatch } = useContext(MainContext);
  const ref = useRef(null);
  const [bg, setBg] = useState("");

  useEffect(() => {
    if (ref.current?.clientWidth <= 800) {
      setBg(checkInBgMobile);
    } else {
      setBg(checkInBg);
    }
  }, [ref.current?.clientWidth]);

  const getTotalPrice = () => {
    let total = 0;
    state.production.productsProduction.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <C.CheckOutWrapper ref={ref} bg={bg}>
      <C.CheckOutContainer>
        <C.ContentWrapper>
          <div className="icon">
            <MdFastfood />
            <h1>Santos's Bar</h1>
          </div>
          <C.Bill>
            {state.production.productsProduction.map((item) => (
              <CartItem
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                id={item.id}
                isPayment={true}
              />
            ))}
          </C.Bill>
          <C.Total>
            <h2>Total: R$ {getTotalPrice().toFixed(2)}</h2>
          </C.Total>
          <C.Btn>
            <button onClick={() => ""}>Pagar com pix</button>
          </C.Btn>
        </C.ContentWrapper>
      </C.CheckOutContainer>
    </C.CheckOutWrapper>
  );
};

// <C.QRWrapper>
//   <QRCode value="00020126580014BR.GOV.BCB.PIX0136e019745e-4b2c-4b7f-add6-6072b367ad8752040000530398654045.005802BR5922Tobias dos Santos Neto6009SAO PAULO6108054090006225052186XUxQpRjDO9bqj1d9o026304390C" />
// </C.QRWrapper>
