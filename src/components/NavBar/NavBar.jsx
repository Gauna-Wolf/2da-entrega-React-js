import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{display: "flex", justifyContent:"space-between", alignItems: "centerv"}}>
            <h1>Ecomerce</h1>
            <section>
                <Link to={"/category/Celular"}>Celulares</Link>
                <Link to={"/category/Tablet"}>Tablet</Link>
                <Link to={"/category/Computers"}>Computadoras</Link>
            </section>
            <CartWidget />
        </nav>
    );
}

export default NavBar