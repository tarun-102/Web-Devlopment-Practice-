interface ProductProps {
  id: number;
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}
function ProductCard({id,name,price,category,inStock} : ProductProps) {
  return <div>
    <h1>{id}</h1>
    <h1>{name}</h1>
    <h1>{price}</h1>
    <h1>{category}</h1>
   {inStock ? <h1>Available</h1>  :  <h1> Not Available</h1>}
  </div>;
}

export default ProductCard;
