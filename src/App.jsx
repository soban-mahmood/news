import { useState } from "react"
import Navbar from "./component/Navbar"
import Newsboard from "./component/Newsboard"



const App = () => {
  const[category,setCategory]=useState('general')
  return (
    <>
    <Navbar setCategory={setCategory}/>
    <Newsboard category={category}/>
    
    
    </>
  )
}

export default App
