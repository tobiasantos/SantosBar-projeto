import * as C from "./styled";
import { useState, useEffect, useContext, useRef } from "react";
import { MainContext } from "../../contexts/MainContext";

import { MdFastfood } from "react-icons/md";

import checkInBgMobile from "../../assets/checkin-bg.png";
import checkInBg from "../../assets/checkin-bg.jpg";

import { CartItem } from "../../components/cartItem";
import { PixModal } from "../../components/modals/spawnPix";

export const CheckOut = () => {
  const { state, dispatch } = useContext(MainContext);
  const ref = useRef(null);
  const [bg, setBg] = useState("");
  const [pixIsOpen, setPixIsOpen] = useState(false);

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
      <PixModal isOpen={pixIsOpen} setIsOpen={setPixIsOpen} />
      <C.CheckOutContainer>
        <C.ContentWrapper>
          <div className="icon" onClick={() => console.log(state)}>
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
            <button onClick={() => setPixIsOpen(true)}>Pagar com pix</button>
          </C.Btn>
        </C.ContentWrapper>
      </C.CheckOutContainer>
    </C.CheckOutWrapper>
  );
};
