import { ChangeEvent, FormEvent, useState } from "react";
import { formInputList, ProductList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./validation";

const App = () => {
  const defaultProductObject = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      name: "",
      imageURL: "",
    },
  };
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [isOpen, setIsOpen] = useState(false);

  /* ---- HANDLER---- */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  const onCancel = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setProduct(defaultProductObject);
    closeModal();
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price,
    });

    //console.log(errors);

    //** Check if any properity has a value of "" & check if all properities have a value of "" */
    const hasErrorMessage =
      !Object.values(errors).some((value) => value === "") ||
      !Object.values(errors).every((value) => value === "");

    console.log(errors);
    console.log(hasErrorMessage);

    if (hasErrorMessage) {
      return;
    }

    console.log("SEND THIS PRODUCT TO OUR SERVER");
  };

  /* ---- RENDER---- */
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  const renderFormInputList = formInputList.map((input) => (
    <div className="flex flex-col " key={input.id}>
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        id={input.id}
        type={input.type}
        name={input.name}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
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
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderFormInputList}
          <div className="flex items-center space-x-3 mt-4">
            <Button
              className="bg-indigo-900 hover:bg-indigo-800"
              width="w-full"
            >
              Submit
            </Button>
            <Button
              className="bg-gray-700 hover:bg-gray-600"
              width="w-full"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
