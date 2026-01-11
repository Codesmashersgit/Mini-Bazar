import { products } from "../data/data";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { type } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category === type
  );

  return (
    <div className="py-20">
      <h1>{type.toUpperCase()}</h1>
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
