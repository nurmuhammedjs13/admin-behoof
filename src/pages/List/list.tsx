import { get, getDatabase, ref, remove } from "firebase/database";
import Header from "../../components/header/header";
import "./list.css";
import { useState } from "react";

function List() {
    const [productsDB, setProductsDB] = useState([]);

    function getproduct() {
        const db = getDatabase();
        const productRef = ref(db, "products");

        get(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log(Object.values(snapshot.val()));
                    setProductsDB(Object.values(snapshot.val()));
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error getting data:", error);
            });
    }

    function removeProduct(ob) {
        const db = getDatabase();
        const productRef = ref(db, "products/" + ob.id);
        remove(productRef).then(() => {
            setProductsDB(productsDB.filter((el) => el.id !== ob.id));
        });
    }
    function removeAllProducts() {
        const db = getDatabase();
        const productRef = ref(db, "products/");
        remove(productRef).then()
    }

    return (
        <>
            <Header />
            <div className="List">
                <div className="container">
                    <div className="List_buttons">
                        <button
                            className="List-renderButton"
                            onClick={getproduct}
                        >
                            обновить
                        </button>
                        <button
                            className="List-renderButton"
                            onClick={removeAllProducts}
                        >
                            очистить все
                        </button>
                    </div>
                    <div className="List__content">
                        {productsDB.map((el) => (
                            <div className="product_content__content_block">
                                <div className="product_content__content_block_info">
                                    <div className="product_content_content_inside">
                                        <div className="product_content__img">
                                            <img
                                                className="product_content__img1"
                                                src={el.img}
                                                alt=""
                                            />
                                        </div>

                                        <div className="product_content__subjest_infos">
                                            <h1 className="info_text">
                                                {el.model}
                                            </h1>

                                            <div className="product_content__subjest_info-items">
                                                <div className="info_item">
                                                    Lorem. :
                                                    <p>Lorem, ipsum dolor.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_content_content_inside2">
                                        <div className="product_content__subtitle">
                                            <div className="phone_info_infos">
                                                <div className="phone_info_info">
                                                    <span>Дизайн</span>

                                                    <div className="phone_info_lines">
                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        el.design
                                                                            ? ""
                                                                            : "phone_info_line_empty"
                                                                    }`}
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="phone_info_info">
                                                    <span>Батарея</span>
                                                    <div className="phone_info_lines">
                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        el.battery
                                                                            ? ""
                                                                            : "phone_info_line_empty"
                                                                    }`}
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="phone_info_info">
                                                    <span>Дисплей</span>
                                                    <div className="phone_info_lines">
                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        el.display
                                                                            ? ""
                                                                            : "phone_info_line_empty"
                                                                    }`}
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="phone_info_info">
                                                    <span>Камера</span>
                                                    <div className="phone_info_lines">
                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        el.camera
                                                                            ? ""
                                                                            : "phone_info_line_empty"
                                                                    }`}
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="phone_info_info">
                                                    <span>Ответ</span>
                                                    <div className="phone_info_lines">
                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        el.answer
                                                                            ? ""
                                                                            : "phone_info_line_empty"
                                                                    }`}
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="phone_info_info">
                                                    <span>Портативность</span>
                                                    <div className="phone_info_lines">
                                                        {Array.from(
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        el.portabl
                                                                            ? ""
                                                                            : "phone_info_line_empty"
                                                                    }`}
                                                                ></div>
                                                            )
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="product_content_price_and_img">
                                                <div className="product_content_price">
                                                    {el.price} c{" "}
                                                </div>
                                            </div>

                                            <div className="product_content_price_color">
                                                <h1 className="product_content_price_color_text">
                                                    Цвет: {el.color}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="product_content_price_color">
                                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                Память: {el.storage}
                                            </div>
                                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                Тип: {el.type}
                                            </div>
                                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                Дата добавления: {el.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_content__subjest-text">
                                    <h1>Описание</h1>
                                    <p>{el.description}</p>
                                </div>
                                <div className="product_content__content_blocks_buttons">
                                    <button className="product_content__content_blocks_editbutton">
                                        изменить
                                    </button>
                                    <button
                                        onClick={() => removeProduct(el)}
                                        className="product_content__content_blocks_deletebutton"
                                    >
                                        удалить
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;
