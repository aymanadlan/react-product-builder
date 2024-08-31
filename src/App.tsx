import { ChangeEvent, FormEvent, useState } from "react";
import { colors, formInputList, ProductList } from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./validation";
import ErrorMessages from "./components/ErrorMessages";
import CircleColor from "./components/CircleColor";

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
  const defaultErrorMessage = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [errors, setError] = useState(defaultErrorMessage);
  const [tempColors, setTempColor] = useState<string[]>([]);
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

    setError({
      ...errors,
      [name]: "",
    });
  };

  // const onCancel = (event: FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault();

  //   setProduct(defaultProductObject);
  //   setError(defaultErrorMessage);
  //   closeModal();
  // };
  const onCancel = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault(); // Prevent default button behavior

    setProduct(defaultProductObject);
    setError(defaultErrorMessage);
    setTempColor([]);
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
      setError(errors);
      return;
    }

    console.log("SEND THIS PRODUCT TO OUR SERVER");
  };

  /* ---- RENDER---- */
  const renderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderProductColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
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
      <ErrorMessages message={errors[input.name]} />
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
          <div className="flex flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>

          <div className="flex flex-wrap items-center space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                className="p-1 mr-1 text-xs rounded-md text-white"
                style={{ backgroundColor: color }}
              >
                {color}
              </span>
            ))}
          </div>

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
