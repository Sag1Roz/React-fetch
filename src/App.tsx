import { useEffect, useState } from "react";
import { ConceptProduct } from "./Components/ConcepteProudect";
import { Product } from "./models/Products.ts";

function App() {
  const [products, setProducts] = useState([] as Product[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    fetch("https://fake-admin-panel.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) return;
        console.log(data);

        setProducts([...data.products]);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) return <h1 className="text-4xl">Loading...</h1>;
  if (isError)
    return <h1 className="text-4xl text-red-600">Error getting products</h1>;

  return (
    <div className="grid grid-cols-3 p-5 gap-2">
      {products.map((product) => {
        return <ConceptProduct key={product.id} product={product} />;
      })}
    </div>
  );
}

export default App;
