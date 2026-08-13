import { useParams } from "react-router-dom"

function Product() {
    const {id} = useParams<{id: string}> ()
  return (
    <div>Product ID:  {id}</div>
  )
}

export default Product