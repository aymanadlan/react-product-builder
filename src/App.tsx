import { useState } from "react";
import { ProductList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";

const App = () => {
  /* ---- STATE---- */
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  /* ---- RENDER---- */
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <main className="container">
      <Button
        className="bg-indigo-900 hover:bg-indigo-800"
        width="w-full"
        onClick={openModal}
      >
        ADD
      </Button>
      <div
        className="flex-wrap gap-8 m-5 grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4 
      p-2 rounded-md"
      >
        {renderProductList}
      </div>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <div className="flex items-center space-x-3">
          <Button className="bg-indigo-900 hover:bg-indigo-800" width="w-full">
            Submit
          </Button>
          <Button
            className="bg-gray-700 hover:bg-gray-600"
            width="w-full"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
