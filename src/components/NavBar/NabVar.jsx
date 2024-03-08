import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav style={{display: "flex", justifyContent:"space-between", alignItems: "centerv"}}>
            <h1>Ecomerce</h1>
            <section>
                <Link to={"/category/Celular"}>Televisor</Link>
                <Link to={"/category/Tablet"}>Heladera</Link>
                <Link to={"/category/Computers"}>Cocina</Link>
            </section>
            <CartWidget />
        </nav>
    );
}

export default NavBar