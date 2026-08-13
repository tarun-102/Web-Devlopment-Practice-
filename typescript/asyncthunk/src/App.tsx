import { useEffect } from 'react'
import './App.css'
import { fetchProducts } from './app/productSlice'
import {  useAppDispatch, useAppSelector } from './hook/useRedux'
function App() {
  const {products, loading,error} = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
      dispatch(fetchProducts())
    },[])

    if(loading) return <h1>loading...</h1>
    if(error) return <h1>{error}</h1>
  return (
    <>
        {
          products.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnail} alt="" />
              <h2>${item.price}</h2>
              <h1>{item.title}</h1>
            </div>
          ))
        }
    </>
  )
}

export default App
