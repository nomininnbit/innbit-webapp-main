import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

interface SingleProductProps {
  productName: string;
  retailerName: string;
  price: number;
  quantity: number;
  category: string;
  imageSrc: string;
  description: string;
}

const SingleProductPage: NextPage<SingleProductProps> = ({
  productName,
  retailerName,
  price,
  quantity,
  category,
  imageSrc,
  description,
}) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 flex justify-center items-center">
      <div className="relative bg-white rounded-lg shadow-xl w-3/4 max-w-4xl">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 bg-gray-100 rounded-full p-2"
        >
          <Image src="/icons/cross.svg" alt="Close" width={24} height={24} />
        </button>
        <div className="flex">
          <div className="w-1/2 p-4">
            <Image
              src={imageSrc}
              alt={productName}
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-bold">{productName}</h2>
            <h3 className="text-xl">{retailerName}</h3>
            <p className="text-md mt-2">{description}</p>
            <div className="mt-4">
              <span className="text-lg font-semibold">{price.toFixed(2)}€</span>
              <div className="mt-4">
                <span className="text-sm font-semibold">Category: </span>
                {category}
              </div>
              <div className="mt-4">
                <span className="text-sm font-semibold">Quantity: </span>
                {quantity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data fetching logic moved outside the component
export async function getStaticProps(context: {
  params: { productId: string };
}) {
  const { productId } = context.params as { productId: string };
  // Replace with your actual API call
  const res = await fetch(`YOUR_API_ENDPOINT/${productId}`);
  const product = await res.json();

  return {
    // Remove the extra comma here
    props: {
      product,
    },
  };
}

export default SingleProductPage;
