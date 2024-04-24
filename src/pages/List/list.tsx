import { get, getDatabase, ref } from "firebase/database";
import Header from "../../components/header/header";
import "./list.css";
// import { useState } from "react";

function List() {

    // const [productsDB, setProductsDB] = useState([])

    function getproduct() {
        const db = getDatabase();

        const productRef = ref(db, "products/");
        get(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(Object(snapshot.val()));
                    
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error getting data:", error);
            });
    }

    return (
        <>
            <Header />
            <div className="List">
                <div className="container">
                    <div className="List__content">
                        <button onClick={getproduct}>обновить</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;
