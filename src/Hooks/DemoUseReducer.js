import React, { useReducer } from "react";
const initCart = [{}];
const cartReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "add_cart": {
      let cart_update = [...state];
      let index = cart_update.findIndex((item) => item.id === action.item.id);

      if (index !== -1) {
        console.log("11111");
        cart_update[index].quantity += 1;
      } else {
        console.log("22222");
        const item_cart = { ...action.item, quantity: 1 };
        cart_update.push(item_cart);
      }
      return cart_update;
    }
  }
  return [...state];
};

const arrProduct = [
  { id: 1, name: "Iphone13", price: 3000 },
  { id: 2, name: "Iphone12", price: 2000 },
  { id: 3, name: "Iphone11", price: 1000 },
];
const DemoUseReducer = () => {
  let [cart, disptach] = useReducer(cartReducer, initCart);
  const addToCart = (product) => {
    let action = {
      type: "add_cart",
      item: product,
    };
    disptach(action);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          {arrProduct.map((product, index) => (
            <>
              <div className="col-4" key={index}>
                <div className="card">
                  <img
                    src={"https://picsum.photos/200/200"}
                    alt="a"
                    className="card-img-top"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{product.name}</h4>
                  <p className="card-text">{product.price}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => addToCart(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
        <h3>giỏ hàng</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((cart, index) => (
              <>
                <tr key={index}>
                  <td>{cart.id}</td>
                  <td>{cart.name}</td>
                  <td>{cart.price}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.quantity * cart.price}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DemoUseReducer;
