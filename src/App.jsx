import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer.jsx"
import { CartProvider } from "./Context/CartContext.jsx"
import Cart from "./components/Cart/Cart.jsx"
//import Checkout from "./components/Checkout/Checkout"
import { NotificationProvider } from "./Context/Notification.jsx"
function App() {
  return (
    <>
      <BrowserRouter>
        <NotificationProvider >
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={"Bienvenidos"} />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/checkout" element={<Checkout />} /> */}
              <Route path="*" element={<h1>404 NOT FOUND</h1>} />
            </Routes>
          </CartProvider>
          <Footer />
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App