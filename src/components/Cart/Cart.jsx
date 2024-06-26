import { useContext } from "react"
import { CartContext } from "../../Context/CartContext.jsx"
import { Link } from "react-router-dom"
import CartItem from '../CartItem/CartItem.jsx'
//import CartItem from "../cartItem/CartItem.jsx"

const Cart = () => {
  const { cart, clearCart, totalQuantity, getPriceTotal, } = useContext(CartContext)

console.log(cart);
  if (totalQuantity === 0) {
    return (
      <div className="cartStyle  text-center">
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option btn btn-outline-info -">Productos</Link>
      </div>
    )
  }
const total= getPriceTotal ()

  return (
    <div className="cartStyle  text-center">
      <h2>Carrito de compras</h2>
      <div className="container">
       {cart.map(p => <CartItem key={p.id} {...p} />)}
      </div>
      
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="btn btn-outline-info mb-2" >Vaciar carrito</button>
      <Link to="/checkout" className="Option btn btn-outline-info mb-2">Finalizar Compra</Link>
    </div>
  )
}

export default Cart
