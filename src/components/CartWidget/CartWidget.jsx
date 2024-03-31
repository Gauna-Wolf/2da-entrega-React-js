import { useCart } from "../../Context/CartContext"
import cart from "../assets/cart.svg"
const CartWidget = () => {
  const {totalQuantity} = useCart()
  return (
    <div style={{color:"black"}}>
        <img style={{width:20,color:"black"}} src={cart} />
        {totalQuantity} 
    </div>
  )
}

export default CartWidget


