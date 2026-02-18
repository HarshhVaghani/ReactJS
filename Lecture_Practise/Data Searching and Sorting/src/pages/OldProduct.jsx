import ProductCard from '../components/ProductCard'
import { useOutletContext } from 'react-router-dom'

const OldProduct = () => {

  const {proData} = useOutletContext()

  console.log("oldProductData" , proData);
  

  return (
    <>
     <div className="flex flex-wrap container mx-auto">
    {proData.filter((item) => item.rating < 3).map((item) => {
      return (
           <ProductCard key={item.id} product={item}/>
      )
    })}
    </div>
  </>
  )
}

export default OldProduct