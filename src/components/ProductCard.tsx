import { txtSlicer } from "../utils/functions";
import Image from "./Image";
import { IProduct } from "./interfaces";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, category } = product;
  return (
    <div className="w-72 h-96 md:w-80 md:h-96 mx-auto md:mx-0 border rounded-md p-2 flex flex-col justify-between">
      <Image
        imageURL={imageURL}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{txtSlicer(title, 25)}</h3>
      <p className="text-xs text-gray-500 break-words">
        {txtSlicer(description, 100)}
      </p>

      <div className="flex items-center my-4 space-x-2">
        <span className="w-5 h-5 bg-indigo-400 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-pink-400 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-green-400 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span>{price}</span>
        <Image
          imageURL={category.imageURL}
          alt={category.name}
          className="w-10 h-10 rounded-full object-bottom"
        />
      </div>

      <div className="flex items-center justify-between space-x-2 mt-5">
        <Button
          className="bg-indigo-900 hover:bg-indigo-800"
          width="w-full"
          onClick={() => {}}
        >
          EDIT
        </Button>
        <Button className="bg-red-900 hover:bg-red-800" width="w-full">
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
