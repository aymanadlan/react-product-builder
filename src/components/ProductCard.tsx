import { txtSlicer } from "../utils/functions";
import CircleColor from "./CircleColor";
import Image from "./Image";
import { IProduct } from "./interfaces";
import Button from "./ui/Button";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const { title, description, imageURL, price, colors, category } = product;

  /** RENDERS */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

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

      <div className="flex items-center flex-wrap space-x-1 mt-2">
        {renderProductColors}
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
