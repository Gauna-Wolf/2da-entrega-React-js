import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NabVar"
import { BrowserRouter, Routes, Route  } from "react-router-dom"
function App() {

  return (
    <><BrowserRouter>
      <NavBar />
      <Routes>
        <Route 
        path="/" 
        element={<ItemListContainer greeting={"Listado de los Productos"} />} />
        <Route 
        path="/category/:categoryId" 
        element={<ItemListContainer greeting={"Listado de los Productos filtrados"} />} />
        <Route path= "/detail/:productId" element={<ItemDetailContainer />}/>
      
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
