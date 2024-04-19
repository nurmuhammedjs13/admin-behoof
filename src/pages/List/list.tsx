import Header from "../../components/header/header";
import './list.css'
import Product from "../../components/product_content/product_content";

function List() {
    return (
        <>
            <Header />
            <div className="List">
                <div className="container">
                    <div className="List__content">
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;
