import { get, getDatabase, ref, remove } from "firebase/database";
import Header from "../../components/header/header";
import "./list.css";
import { Key, useEffect, useState } from "react";

function List() {
    const [productsDB, setProductsDB] = useState<any[]>([]);

    useEffect(() => {
        getproduct();
    }, []);

    function getproduct() {
        const db = getDatabase();
        const productRef = ref(db, "products");

        get(productRef)
            .then((snapshot) => {
                if (snapshot.exists()) {
                    const products = Object.values(snapshot.val());
                    setProductsDB(products);
                } else {
                    console.log("No data available");
                }
            })
            .catch((error) => {
                console.error("Error getting data:", error);
            });
    }

    function removeProduct(ob: { id: string }) {
        const db = getDatabase();
        const productRef = ref(db, "products/" + ob.id);
        remove(productRef).then(() => {
            setProductsDB(productsDB.filter((el) => el.id !== ob.id));
        });
    }
    function removeAllProducts() {
        const db = getDatabase();
        const productRef = ref(db, "products/");
        remove(productRef).then();
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
                        {productsDB.map((product, index) => (
                            <div className="map" key={index}>
                                <div className="product_content__content_block">
                                    <div className="product_content__content_block_info">
                                        <div className="product_content_content_inside">
                                            <div className="product_content__img">
                                                <img
                                                    className="product_content__img1"
                                                    src={product.img}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="product_content__img_imgs">
                                                {product.arrLittleImg &&
                                                    product.arrLittleImg.map(
                                                        (item, index) => (
                                                            <div key={index}>
                                                                <img
                                                                    className="product_content__img2"
                                                                    src={
                                                                        item.imgs
                                                                    }
                                                                    alt=""
                                                                />
                                                            </div>
                                                        )
                                                    )}
                                            </div>
                                            <div className="product_content__subjest_infos">
                                                <h1 className="info_text">
                                                    {product.model}
                                                </h1>

                                                <div className="product_content__subjest_info-items">
                                                    {product.details.map(
                                                        (
                                                            item: {
                                                                key:
                                                                    | string
                                                                    | number
                                                                    | boolean
                                                                    | ReactElement<
                                                                          any,
                                                                          | string
                                                                          | JSXElementConstructor<any>
                                                                      >
                                                                    | Iterable<ReactNode>
                                                                    | ReactPortal
                                                                    | null
                                                                    | undefined;
                                                                value:
                                                                    | string
                                                                    | number
                                                                    | boolean
                                                                    | ReactElement<
                                                                          any,
                                                                          | string
                                                                          | JSXElementConstructor<any>
                                                                      >
                                                                    | Iterable<ReactNode>
                                                                    | ReactPortal
                                                                    | null
                                                                    | undefined;
                                                            },
                                                            index:
                                                                | Key
                                                                | null
                                                                | undefined
                                                        ) => (
                                                            <div
                                                                key={index}
                                                                className="info_item"
                                                            >
                                                                {item.key} :{" "}
                                                                <p>
                                                                    {item.value}
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
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
                                                                {
                                                                    length: 5,
                                                                },
                                                                (_, index) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`phone_info_line ${
                                                                            index <
                                                                            product.design
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
                                                                {
                                                                    length: 5,
                                                                },
                                                                (_, index) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`phone_info_line ${
                                                                            index <
                                                                            product.battery
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
                                                                {
                                                                    length: 5,
                                                                },
                                                                (_, index) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`phone_info_line ${
                                                                            index <
                                                                            product.display
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
                                                                {
                                                                    length: 5,
                                                                },
                                                                (_, index) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`phone_info_line ${
                                                                            index <
                                                                            product.camera
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
                                                                {
                                                                    length: 5,
                                                                },
                                                                (_, index) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`phone_info_line ${
                                                                            index <
                                                                            product.answer
                                                                                ? ""
                                                                                : "phone_info_line_empty"
                                                                        }`}
                                                                    ></div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="phone_info_info">
                                                        <span>
                                                            Портативность
                                                        </span>
                                                        <div className="phone_info_lines">
                                                            {Array.from(
                                                                {
                                                                    length: 5,
                                                                },
                                                                (_, index) => (
                                                                    <div
                                                                        key={
                                                                            index
                                                                        }
                                                                        className={`phone_info_line ${
                                                                            index <
                                                                            product.portabl
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
                                                        {product.price} c{" "}
                                                    </div>
                                                </div>

                                                <div className="product_content_price_color">
                                                    <h1 className="product_content_price_color_text">
                                                        Цвет: {product.color}
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="product_content_price_color">
                                                <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                    Память: {product.storage}
                                                </div>
                                                <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                    Тип: {product.type}
                                                </div>
                                                <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                    Дата добавления:{" "}
                                                    {product.date}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product_content__subjest-text">
                                        <h1>Описание</h1>
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="product_content__content_blocks_buttons">
                                        <button
                                            onClick={() =>
                                                removeProduct(product)
                                            }
                                            className="product_content__content_blocks_deletebutton"
                                        >
                                            удалить
                                        </button>
                                    </div>
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
