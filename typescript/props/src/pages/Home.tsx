import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()
  return (
    <div>Home 
      <button onClick={() => {
        navigate("product/15")
      }}>View Product</button>
    </div>
  )
}

export default Home