import { ChangeEvent, FormEvent, useState } from "react";
import {
  categories,
  colors,
  formInputList,
  ProductList,
} from "./components/data";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IProduct } from "./components/interfaces";
import { productValidation } from "./validation";
import ErrorMessages from "./components/ErrorMessages";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { TProductInput } from "./components/types";

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
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObject);
  const [errors, setError] = useState(defaultErrorMessage);
  const [tempColors, setTempColor] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  console.log("Product to edit : ", productToEdit);

  /* ---- HANDLER---- */
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openEditModal = () => setIsOpenEditModal(true);
  const closeEditModal = () => setIsOpenEditModal(false);
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

  const onChangeEditHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setError({
      ...errors,
      [name]: "",
    });
  };

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

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defaultProductObject);
    setTempColor([]);

    closeModal();

    console.log(products);
  };

  const onSubmitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const { title, description, imageURL, price } = productToEdit;

    const errors = productValidation({
      title: title,
      description: description,
      imageURL: imageURL,
      price: price,
    });

    //** Check if any properity has a value of "" & check if all properities have a value of "" */
    const hasErrorMessage =
      !Object.values(errors).some((value) => value === "") ||
      !Object.values(errors).every((value) => value === "");

    if (hasErrorMessage) {
      setError(errors);
      return;
    }

    // setProducts((prev) => [
    //   {
    //     ...product,
    //     id: uuid(),
    //     colors: tempColors,
    //     category: selectedCategory,
    //   },
    //   ...prev,
    // ]);

    setProductToEdit(defaultProductObject);
    setTempColor([]);

    closeModal();

    console.log(products);
  };

  /* ---- RENDER---- */
  const renderProductList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
    />
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

  const renderProductEditWithErrorMessage = (
    id: string,
    label: string,
    type: string,
    name: TProductInput
  ) => {
    return (
      <div className="flex flex-col ">
        <label htmlFor={"title"}>{label}</label>
        <Input
          id={id}
          type={type}
          name={name}
          value={productToEdit[name]}
          onChange={onChangeHandler}
        />
        <ErrorMessages message={errors[name]} />
      </div>
    );
  };

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
      /** ADD NEW PRODUCT MODAL */
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD A NEW PRODUCT">
        <form className="space-y-3" onSubmit={onSubmitHandler}>
          {renderFormInputList}

          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />

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
      /** EDIT PRODUCT MODAL */
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="EDIT PRODUCT"
      >
        <form className="space-y-3" onSubmit={onSubmitEditHandler}>
          {renderProductEditWithErrorMessage()}
          {/* <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          /> */}

          {/* <div className="flex flex-wrap items-center space-x-1">
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
          </div> */}

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
