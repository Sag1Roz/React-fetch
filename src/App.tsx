import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([] as any[]);
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
    <div className="grid grid-cols-4 p-5 gap-2">
      {products.map((product, i) => {
        return (
          <div key={i}>
            <div className="border cursor-pointer rounded-md">
              <img className="" src={`${product.image}`} alt="" />
              <div className="grid grid-cols-2 p-2">
                <div className="col-span-2 font-bold">{product.name}</div>
                <p>מחיר {product.price}</p>
                <p>מחיר אילת {product.eilatPrice.toString().slice(0, 4)}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
