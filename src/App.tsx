import ProductCart from "./components/ProductCart";

const App = () => {
  return (
    <div>
      <div className="bg-indigo-600 m-5 grid grid-cols-4  p-2 rounded-md">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default App;
