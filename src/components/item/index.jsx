import * as C from "./styled";

export const Item = () => {
  return (
    <>
      <C.ItemRow>
        <div className="card">
          <div className="image">
            <img
              src="https://t1.uc.ltmcdn.com/pt/posts/2/3/8/como_fazer_yakisoba_tradicional_7832_orig.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <div className="meta">
              <p>Yakisoba</p>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <span>R$ 30.99</span>
          </div>
        </div>
      </C.ItemRow>
    </>
  );
};
