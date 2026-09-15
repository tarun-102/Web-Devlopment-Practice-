import { useEffect, useState } from "react"

interface Product  {
  id: number,
  title: string,
  price: number
}

interface Productresponse {
  products: Product[],
  total: number,
  skip: number,
  limit: number
}



function App() {

  const [products, setProducts] = useState<Product[]>([])
  const [currentpage,setcurrentpage] = useState<number>(1);
  const [loading,setLoading] = useState<boolean>(true);

  const productperpage = 8 ;

  async  function fetchProduct(){
    try{
      const response = await fetch("https://dummyjson.com/products?limit=100")
      
      const data: Productresponse = await response.json()
      setProducts(data.products)
    }catch(error){  
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProduct()
  },[])

  const lastIndex = currentpage * productperpage;
  const firstIndex = lastIndex - productperpage

  const currentProducts = products.slice(firstIndex,lastIndex)

  const totalPage = Math.ceil(
    products.length / productperpage
  );
  if(loading) return <h2>Loading...</h2>
  return (
    <div style={{
      display: "flex",
      gap: "10px"
    }}>
      <h2>Products</h2>
      {currentProducts.map((product) => (
        <div key={product.id}  style={{
          height: "400px",
          width: "400px",
          border: "1px solid white"
        }}> 
          <h3>{product.title}</h3>
          <h3>{product.price}</h3>
        </div>
      ))}

      <div>
        <button 
          disabled={currentpage === 1}
          onClick={() => {
            setcurrentpage(currentProducts - 1 )
          }}
        > Previous</button>



          <button 
          disabled={currentpage === 1}
          onClick={() => {
            setcurrentpage(currentProducts - 2 )
          }}
        > Previous</button>

      </div>

    </div>
  )
}

export default App