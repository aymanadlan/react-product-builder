import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import { IProduct } from "./interfaces";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image imageURL={imageURL} alt={title} className="rounded-md mb-2" />
      <h3>{title}</h3>
      <p>{txtSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-400 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-pink-400 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-400 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          imageURL={imageURL}
          alt={title}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-700"
          width="w-full"
          onClick={() => {
            console.log("Edit");
          }}
        >
          EDIT
        </Button>
        <Button className="bg-red-700" width="w-full">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
