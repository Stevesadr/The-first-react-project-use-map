import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'
 
function App() {
  const [count, setCount] = useState(0)
  const rest=[
    {name:"iphone 11" , price:200 , count:0 , src:"src/assets/imgs/test.webp"},
    {name:"iphone 12" , price:300 , count:1 , src:"src/assets/imgs/test.webp"},
    {name:"iphone 13" , price:400 , count:2 , src:"src/assets/imgs/test.webp"},
    {name:"iphone 14" , price:500 , count:3 , src:"src/assets/imgs/test.webp"},
  ]
  return (
    <div className='all'>
      {
        rest.map((item)=>{
          return <ProductCard name={item.name} price={item.price} src={item.src}/>
        })
      }
      
    </div>
      
  )
}

export default App
