import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-[#4F46E5] mb-4">
        Product Details
      </h1>
      <p className="text-lg">Product ID: {id}</p>
    </div>
  );
};

export default ProductDetails;