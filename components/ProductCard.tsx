import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface ProductCardProps {
  productName: string;
  retailerName: string;
  price: number;
  quantity: number;
  category: string;
  imageSrc: string;
}

const ProductCard: FC<ProductCardProps> = ({
  productName,
  retailerName,
  price,
  quantity,
  category,
  imageSrc,
}) => {
  const [count, setCount] = useState(quantity);
  const [isStarred, setIsStarred] = useState(false);
  const [isInBasket, setIsInBasket] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const toggleStar = () => setIsStarred(!isStarred);
  const toggleBasket = () => setIsInBasket(!isInBasket);

  return (
    <div className="flex bg-white rounded-lg border border-gray-200 w-auto min-w-fit">
      <div className="flex flex-col justify-center items-center w-40 relative">
        <Image
          src={imageSrc}
          alt={productName}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      <div>
        <div className="flex p-4">
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <span className="text-xs text-blue-500 ring-1 rounded-sm p-1">
                {category}
              </span>
              <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                In My Products: x8
              </span>
            </div>
            <h3 className="text-sm font-semibold mt-4">{retailerName}</h3>
            <h2 className="text-lg font-bold">{productName}</h2>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 px-4 pb-4">
          <div className="flex justify-between">
            <div className="text-xl font-semibold">
              {(price * count).toFixed(2)}€
            </div>
          </div>
          <div className="flex justify-between ring-1 rounded-lg ring-innbitRed">
            <div className="flex items-center">
              <button
                onClick={decrement}
                className="px-2 py-1 hover:font-bold rounded h-10 w-10"
              >
                -
              </button>
              <span className="px-4 hover:font-bold">{count}</span>
              <button
                onClick={increment}
                className="px-2 py-1 hover:font-bold rounded h-10 w-10"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <button
              onClick={toggleStar}
              className={`bg-innbitRed text-white rounded-lg p-2 flex items-center justify-center gap-2 h-10 w-10 ${
                isStarred ? "bg-green-900" : ""
              }`}
            >
              <Image
                src={"/icons/star.svg"}
                alt={"Star Icon"}
                width={20}
                height={20}
              />
            </button>
            <button
              onClick={toggleBasket}
              className={`bg-innbitRed text-white rounded-lg p-2 flex items-center justify-center gap-2 h-10 w-10 ${
                isInBasket ? "bg-green-900" : ""
              }`}
            >
              <Image
                src={"/icons/basket.svg"}
                alt={"Basket Icon"}
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
