import { Product } from "../models/Products.ts";

type ConceptProduct = {
  product: Product;
};

export function ConceptProduct({ product }: ConceptProduct) {
  <div className="border cursor-pointer rounded-md">
    <img className=" h-96 w-96  p-5" src={`${product.image}`} alt="" />
    <div className="grid grid-cols-2 p-2">
      <div className="col-span-2 font-bold">{product.name}</div>
      <div className="col-span-2">{product.description}</div>
      <p>מחיר {product.price}</p>
      <p>מחיר אילת {product.eilatPrice.toString().slice(0, 4)}</p>
    </div>
  </div>;
}
