import { ProductList } from "./components/data";
import ProductCard from "./components/ProductCard";

const App = () => {
  //Render
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div>
      <div
        className="m-5 grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4 
      p-2 rounded-md"
      >
        {renderProductList}
      </div>
    </div>
  );
};

export default App;
