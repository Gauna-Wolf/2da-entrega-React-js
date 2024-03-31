import { getProducts, getProductsByCategory } from "../../asyncMock";
import React, { useState } from "react";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;
        
        asyncFunction(categoryId)
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryId]);

    if (loading) {
        return <h1>Cargando Productos...</h1>;
    }

    return (
        <div className="container BgItemListContainer mb-5 mt-5 ">
            <h1 className="d-flex justify-content-center pt-4 pb-2">{greeting}</h1>
            <div className="line"></div>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
