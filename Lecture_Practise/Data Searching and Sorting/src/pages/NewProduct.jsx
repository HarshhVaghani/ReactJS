import ProductCard from "../components/ProductCard";
import { useOutletContext } from "react-router-dom";

const NewProduct = () => {
  const { proData } = useOutletContext();

  return (
  <>
  <div className="flex flex-wrap container mx-auto">
    {proData.filter((item) => item.rating > 3).map((item) => {
      return (
          <ProductCard key={item.id} product={item}/>
      )
    })}
  </div>
  </>
  );
};

export default NewProduct;
