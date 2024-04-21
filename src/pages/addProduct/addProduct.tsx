import DropDownColor from "../../components/DropDown-color/DropDown-color";
import DropDownStorage from "../../components/DropDown-storage/DropDown-storage";
import DropDownType from "../../components/DropDown-type/DropDown-type";
import "./addProduct.css";
import Header from "../../components/header/header";
import Product from "../../components/product_content/product_content";
import { useMemo, useState } from "react";

function AddProduct() {
    const options = useMemo(
        () => ({
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }),
        []
    );
    const [currentDate] = useState(
        new Date().toLocaleDateString("ru-RU", options)
    );

    const [data, setData] = useState({
        img: "",
        type: "",
        model: "",
        price: "",
        storage: "",
        color: "",
        description: "",
        battery: "",
        display: "",
        camera: "",
        answer: "",
        design: "",
        portabl: "",
    });

    function addInfoHandler(key: string, value: string) {
        if (key in data) {
            setData((prevData) => ({
                ...prevData,
                [key]: value,
            }));
        }
        console.log(data);
    }

    function addProduct() {
        const newData = {
            ...data,

            date: currentDate,
        };
        setData(newData);
        console.log(newData);
    }

    return (
        <>
            <Header />
            <div className="add_product">
                <div className="container">
                    <div className="add_product_content">
                        <div className="add_product_content_ex">
                            <Product />
                        </div>
                        <div className="add_product_content_block">
                            <div className="add_product_content_inf">
                                <div className="add_product_content_inf_inputs img_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        вставьте изображение товара
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "img",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="URL"
                                            className="add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                        <button
                                            onClick={addInfoHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs_type storage_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        тип товара{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding-type">
                                        <DropDownType
                                            data={[
                                                "Смартфон",
                                                "Ноутбуки",
                                                "Планшеты",
                                                "Умные часы",
                                                "Игровые приставки",
                                                "Наушники",
                                                "Портативные колонки",
                                                "Аксессуары",
                                            ]}
                                            defaultType="тип товара"
                                            onSelect={(value) =>
                                                addInfoHandler("type", value)
                                            }
                                        />
                                        <button
                                            onClick={addInfoHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs model_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        модель товара
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "model",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                        <button
                                            onClick={addInfoHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs price_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        цена{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "price",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                        <button
                                            onClick={() =>
                                                addInfoHandler(
                                                    "img",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs_storage storage_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        накопитель{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding-storage">
                                        <DropDownStorage
                                            data={[
                                                "16гб",
                                                "32гб",
                                                "64гб",
                                                "128гб",
                                                "256гб",
                                                "512гб",
                                                "1тб",
                                            ]}
                                            defaultStorage="накопитель"
                                            onSelect={(value) =>
                                                addInfoHandler("storage", value)
                                            }
                                        />
                                        <button
                                            onClick={addInfoHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs_color color_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        цвет товара{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding-color">
                                        <DropDownColor
                                            data={[
                                                "черный",
                                                "белый",
                                                "серый",
                                                "красный",
                                                "фиолетовый",
                                            ]}
                                            defaultColor="цвет"
                                            onSelect={(value) =>
                                                addInfoHandler("color", value)
                                            }
                                        />
                                        <button
                                            onClick={addInfoHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs description_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        описание{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                        <button
                                            onClick={addInfoHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            добавить
                                        </button>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf inputs_marks">
                                    <div className="add_product_content_inf_inputs battery_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            состояние аккумулятора{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "battery",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="text"
                                            />
                                            <button
                                                onClick={addInfoHandler}
                                                className="add_product_content_inf_inputs-button"
                                            >
                                                добавить
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add_product_content_inf_inputs display_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            дисплей{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "display",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="text"
                                            />
                                            <button
                                                onClick={addInfoHandler}
                                                className="add_product_content_inf_inputs-button"
                                            >
                                                добавить
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add_product_content_inf_inputs camera_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            камера{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "camera",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="text"
                                            />
                                            <button
                                                onClick={addInfoHandler}
                                                className="add_product_content_inf_inputs-button"
                                            >
                                                добавить
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs answer_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            отзывы{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "answer",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="text"
                                            />
                                            <button
                                                onClick={addInfoHandler}
                                                className="add_product_content_inf_inputs-button"
                                            >
                                                добавить
                                            </button>
                                        </div>
                                    </div>
                                    <div className="add_product_content_inf_inputs design_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            дизайн{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "design",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="text"
                                            />
                                            <button
                                                onClick={addInfoHandler}
                                                className="add_product_content_inf_inputs-button"
                                            >
                                                добавить
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs Prtability_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            портативность{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "portabl",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="text"
                                            />
                                            <button
                                                onClick={addInfoHandler}
                                                className="add_product_content_inf_inputs-button"
                                            >
                                                добавить
                                            </button>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                                <button
                                    onClick={addProduct}
                                    className="add_product_content_inf-add-button"
                                >
                                    отправить
                                </button>
                            </div>

                            <div className="add_product_content_check">
                                <h1 className="add_product_content_check-rule">
                                    Правила заполнение
                                </h1>
                                <div className="add_product_content_check_content">
                                    <h1 className="add_product_content_check_content-text url">
                                        ссылка изображения
                                    </h1>
                                    <h1 className="add_product_content_check_content-text type">
                                        выберите тип продукта
                                    </h1>
                                    <h1 className="add_product_content_check_content-text model">
                                        напишите модель продукта
                                    </h1>
                                    <h1 className="add_product_content_check_content-text price">
                                        цена за которую вы хотите продать
                                    </h1>
                                    <h1 className="add_product_content_check_content-text storage">
                                        накопитель девайса
                                    </h1>
                                    <h1 className="add_product_content_check_content-text color">
                                        цвет продукта
                                    </h1>
                                    <h1 className="add_product_content_check_content-text description">
                                        описание продукта
                                    </h1>
                                </div>
                                <div className="add_product_content_check_content_marks">
                                    <h1 className="add_product_content_check_content_marks-rule">
                                        оценка в баллах от 1 до 5
                                    </h1>
                                    <div className="add_product_content_check_content_marks_mark">
                                        <h1 className="add_product_content_check_content-text battery">
                                            оценка состояние батареи
                                        </h1>
                                        <h1 className="add_product_content_check_content-text display">
                                            оценка дисплея
                                        </h1>
                                        <h1 className="add_product_content_check_content-text camera">
                                            оценка камеры
                                        </h1>
                                        <h1 className="add_product_content_check_content-text mark">
                                            оценка отзывов
                                        </h1>
                                        <h1 className="add_product_content_check_content-text portabl">
                                            оценка портативности
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
