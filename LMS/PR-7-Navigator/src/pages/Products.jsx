import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    { id: 1, name: "Laptop", price: "₹50,000" },
    { id: 2, name: "Mobile", price: "₹20,000" },
    { id: 3, name: "Headphones", price: "₹3,000" }
  ];

  return (
    <div>
      <p className="text-gray-600 mb-8">
        Browse our latest tech products and explore their details.
      </p>

      <h1 className="text-3xl font-bold text-[#4F46E5] mb-6">Products</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="mb-4 text-gray-600">{product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="bg-[#38BDF8] text-white px-4 py-2 rounded hover:bg-sky-500"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;