import { React } from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const mystyle = {
    fontSize: 40,
    fontWeight: 600,
  };
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty)
    return (
      <h1 style={mystyle} className="text-center">
        cart is empty
      </h1>
    );
  return (
    <section className="container mx-auto lg:w-1/2 w-full pb-24">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1 style={{ fontSize: 20, fontWeight: 500 }}>
            Cart ({totalUniqueItems}) total Items: ({totalItems})
          </h1>
          <table className="table table-light table-hover mt-6">
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td className="w-1/5">
                    <img src={item.img} alt="" className="h-22 w-22 mb-10 rounded-full" />
                  </td>
                  <th className="w-1/5 pb-10 px-4">{item.title}</th>
                  <th className="w-1/5 pb-10">{item.size}</th>
                  <th className="w-1/5 pb-10">{item.price}</th>
                  <th className="w-1/5 pb-10">Quantity: ({item.quantity}) </th>
                  <th className="w-1/2 pb-10  flex text-center">
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                      className=" bg-yellow-500 px-4 ml-2 py-2 rounded"
                    >
                      -
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                      className="bg-yellow-500  ml-2 px-4 py-2 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className=" bg-red-500 px-4  ml-2 py-2 rounded"
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="flex justify-between">
          <div style={{ marginLeft: 400 }}>
            <b> Total Price: Rs. {cartTotal}</b>

            <button
              onClick={() => emptyCart()}
              className="bg-yellow-500 py-1 px-2 ml-4 mt-4 rounded"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
