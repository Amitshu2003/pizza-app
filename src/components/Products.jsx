import Product from "./Product";
import data from "../data";
const Products = () => {
 
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-2xl font-bold my-8 text-center mx-14">OUR PRODUCTS</h1>
      <div className="grid grid-cols-5 my-8 gap-24 mt-10 mx-20">
        {data.productData.map((items, index) => {
          return (
            <Product
              img={items.img}
              title={items.title}
              price={items.price}
              items={items}
              size={items.size}
              topping={items.topping}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
