import DropDownColor from "../../components/DropDownSelection/DropDown-selection";
import DropDownType from "../../components/DropDown-type/DropDown-type";
import "./addProduct.css";
import Header from "../../components/header/header";
import { useMemo, useState } from "react";
import { DateTimeFormatOptions } from "intl";
import { getDatabase, set, ref } from "firebase/database";
import { v4 as uuidv4 } from "uuid";

function AddProduct() {
    const id = uuidv4();

    // const [detail, setDetail] = useState<{
    //     key: string;
    //     value: string;
    //     id?: string;
    // }>({
    //     key: "",
    //     value: "",
    //     id,
    // });
    // const [details, setDetails] = useState<{ key: string; value: string }[]>(
    //     []
    // );

    // const [littleImg, setLittleImg] = useState<{ imgs: string }>({ imgs: "" });
    // const [arrLittleImg, setArrLittleImg] = useState<{ imgs: string }[]>([]);

    // const [marks] = useState<{
    //     battery: number;
    //     display: number;
    //     camera: number;
    //     answer: number;
    //     design: number;
    //     portabl: number;
    // }>({
    //     battery: 0,
    //     display: 0,
    //     camera: 0,
    //     answer: 0,
    //     design: 0,
    //     portabl: 0,
    // });

    const [data, setData] = useState<{
        img: string;
        type: string;
        model: string;
        price: number;
        storage: string;
        color: string;
        description: string;
        date: string;
        id: string;
        battery: number;
        display: number;
        camera: number;
        answer: number;
        design: number;
        portabl: number;
        littleImg: string;
        arrLittleImg: { imgs: string }[];
        details: { key: string; value: string }[];
    }>({
        img: "",
        type: "",
        model: "",
        price: 0,
        storage: "",
        color: "",
        description: "",
        date: "",
        id: "",
        battery: 0,
        display: 0,
        camera: 0,
        answer: 0,
        design: 0,
        portabl: 0,
        littleImg: "",
        arrLittleImg: [{ imgs: "" }],
        details: [{ key: "", value: "" }],
    });

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
    const intlOptions = useMemo(
        () =>
            ({
                ...options,
                hour12: false,
            } as DateTimeFormatOptions),
        [options]
    );

function addInfoHandler(key: string, value: string) {
    setData((prevData) => ({
        ...prevData,
        arrLittleImg: [...prevData.arrLittleImg, { imgs:value }],
        [key]: value,
        details: [...prevData.details, { key, value }],
    }));

    function addProductHandler() {
        const newData = {
            ...data,
            date: new Date().toLocaleDateString("ru-RU", intlOptions),
            id,
        };
        setData(newData);
        console.log(newData);

        const db = getDatabase();
        const dbRef = ref(db, `products/${id}`);

        set(dbRef, newData).then(() => {
            console.log("данные добавлены");
        });
    }
    function deleteHandler() {
        setData((prevData) => ({
            ...prevData,
            img: "",
            type: "",
            model: "",
            price: 0,
            storage: "",
            color: "",
            description: "",
            date: "",
            battery: 0,
            display: 0,
            camera: 0,
            answer: 0,
            design: 0,
            portabl: 0,
            littleImg: "",
            arrLittleImg: [],
            details: [],
        }));
    }
    function addInputs(newData: any) {
        setData([...data, newData]);
    }

    function addImgHandler() {
        setData([...data, littleImg]);
    }

    return (
        <>
            <Header />
            <div className="add_product">
                <div className="container">
                    <div className="add_product_content">
                        <div className="add_product_content_ex">
                            <div className="product_content__content_block">
                                <div className="product_content__content_block_info">
                                    <div className="product_content_content_inside">
                                        <div className="product_content__img">
                                            <img
                                                className="product_content__img1"
                                                src={data.img}
                                                alt=""
                                            />
                                        </div>
                                        <div className="product_content__img_imgs">
                                            {data.arrLittleImg.map(
                                                (item, index) => (
                                                    <div key={index}>
                                                        <img
                                                            className="product_content__img2"
                                                            src={item.imgs}
                                                            alt=""
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <div className="product_content__subjest_infos">
                                            <h1 className="info_text">
                                                {data.model}
                                            </h1>

                                            <div className="product_content__subjest_info-items">
                                                {data.details.map(
                                                    (item, index) => (
                                                        <div
                                                            key={index}
                                                            className="info_item"
                                                        >
                                                            {item.key} :{" "}
                                                            <p>{item.value}</p>
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
                                                            { length: 5 },
                                                            (_, index) => (
                                                                <div
                                                                    key={index}
                                                                    className={`phone_info_line ${
                                                                        index <
                                                                        data.design
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
                                                                        data.battery
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
                                                                        data.display
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
                                                                        data.camera
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
                                                                        data.answer
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
                                                                        data.portabl
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
                                                <h1 className="product_content_price">
                                                    {data.price} c{" "}
                                                </h1>
                                            </div>

                                            <div className="product_content_price_color">
                                                <h1 className="product_content_price_color_text">
                                                    Цвет: {data.color}
                                                </h1>
                                            </div>
                                        </div>
                                        <div className="product_content_price_color">
                                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                Память: {data.storage}
                                            </div>
                                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                Тип: {data.type}
                                            </div>
                                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                                Дата добавления: {data.date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="product_content__subjest-text">
                                    <h1 className="product_content__subjest-text-title">
                                        Описание
                                    </h1>
                                    <h1 className="product_content__subjest-text-des">
                                        {data.description}
                                    </h1>
                                </div>
                                <div className="product_content__content_blocks_buttons">
                                    <button className="product_content__content_blocks_deletebutton">
                                        удалить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="add_product_content_block">
                            <div className="add_product_content_inf">
                                <div className="add_product_content_inf_inputs img_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        вставьте изображение товара
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            value={data.img}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "img",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="URL"
                                            className=" add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                    </div>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            value={data.littleImg}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "imgs",
                                                    e.target.value
                                                )
                                            }
                                            placeholder="URL"
                                            className=" add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                        <button
                                            onClick={addImgHandler}
                                            className="add_product_content_inf_inputs-button"
                                        >
                                            Добавить
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
                                            defaultType={
                                                !data.type
                                                    ? "тип товара"
                                                    : data.type
                                            }
                                            onSelect={(value) =>
                                                addInfoHandler("type", value)
                                            }
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs model_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        модель товара
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            value={data.model}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "model",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs price_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        цена{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            value={data.price}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "price",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-input"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs_storage storage_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        накопитель{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding-storage">
                                        <DropDownColor
                                            data={[
                                                "16гб",
                                                "32гб",
                                                "64гб",
                                                "128гб",
                                                "256гб",
                                                "512гб",
                                                "1тб",
                                            ]}
                                            defaultSelection={
                                                !data.storage
                                                    ? "накопитель"
                                                    : data.storage
                                            }
                                            onSelect={(value) =>
                                                addInfoHandler("storage", value)
                                            }
                                        />
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
                                            defaultSelection={
                                                !data.color
                                                    ? "цвет"
                                                    : data.color
                                            }
                                            onSelect={(value) =>
                                                addInfoHandler("color", value)
                                            }
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs description_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        описание{" "}
                                    </h1>
                                    <div className="add_product_content_inf_inputs_adding">
                                        <input
                                            value={data.description}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs-input"
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_inputs_detail">
                                    <h1 className="add_product_content_inf_inputs_detail-text">
                                        детали
                                    </h1>
                                    <div className="add_product_content_inf_inputs_detail_adding">
                                        <input
                                            placeholder="ключ"
                                            value={[data.details.key]}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "key",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs_detail-input"
                                            type="text"
                                        />
                                        <input
                                            placeholder="значение"
                                            value={data.details,value}
                                            onChange={(e) =>
                                                addInfoHandler(
                                                    "value",
                                                    e.target.value
                                                )
                                            }
                                            className="add_product_content_inf_inputs_detail-input"
                                            type="text"
                                        />
                                    </div>
                                    <button
                                        onClick={addInputs}
                                        className="add_product_content_inf_inputs_detail-addKey"
                                    >
                                        +
                                    </button>
                                </div>
                                <hr />
                                <div className="add_product_content_inf inputs_marks">
                                    <div className="add_product_content_inf_inputs battery_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            состояние аккумулятора{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                value={data.battery}
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "battery",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs display_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            дисплей{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                value={data.display}
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "display",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs camera_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            камера{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                value={data.camera}
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "camera",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs answer_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            отзывы{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                value={data.answer}
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "answer",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs design_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            дизайн{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                value={data.design}
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "design",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="add_product_content_inf_inputs Prtability_input">
                                        <h1 className="add_product_content_inf_inputs-text">
                                            портативность{" "}
                                        </h1>
                                        <div className="add_product_content_inf_inputs_adding">
                                            <input
                                                value={data.portabl}
                                                onChange={(e) =>
                                                    addInfoHandler(
                                                        "portabl",
                                                        e.target.value
                                                    )
                                                }
                                                className="add_product_content_inf_inputs-input"
                                                type=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="add_product_content_inf_buttons">
                                    <button
                                        onClick={addProductHandler}
                                        className="add_product_content_inf-add-button"
                                    >
                                        отправить
                                    </button>
                                    <button
                                        onClick={deleteHandler}
                                        className="add_product_content_inf-delete-button"
                                    >
                                        очистить
                                    </button>
                                </div>
                            </div>

                            <div className="add_product_content_check">
                                <h1 className="add_product_content_check-rule">
                                    Правила заполнение
                                </h1>
                                <div className="add_product_content_check_content">
                                    <h1
                                        className={
                                            data.img === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        ссылка изображения
                                    </h1>
                                    <h1
                                        className={
                                            data.type === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        выберите тип продукта
                                    </h1>
                                    <h1
                                        className={
                                            data.model === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        {" "}
                                        напишите модель продукта
                                    </h1>
                                    <h1
                                        className={
                                            data.price === 0
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        {" "}
                                        цена за которую вы хотите продать
                                    </h1>
                                    <h1
                                        className={
                                            data.storage === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        {" "}
                                        накопитель девайса
                                    </h1>
                                    <h1
                                        className={
                                            data.color === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        {" "}
                                        цвет продукта
                                    </h1>
                                    <h1
                                        className={
                                            data.description === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        {" "}
                                        описание продукта
                                    </h1>
                                    <h1
                                        className={
                                            data.description === ""
                                                ? "add_product_content_check_content-text"
                                                : "add_product_content_check_content-text-true"
                                        }
                                    >
                                        {" "}
                                        особенности продукта в деталях{" "}
                                    </h1>
                                </div>
                                <div className="add_product_content_check_content_marks">
                                    <h1 className="add_product_content_check_content_marks-rule">
                                        оценка в баллах от 1 до 5
                                    </h1>
                                    <div className="add_product_content_check_content_marks_mark">
                                        <h1
                                            className={
                                                data.battery === 0
                                                    ? "add_product_content_check_content-text"
                                                    : "add_product_content_check_content-text-true"
                                            }
                                        >
                                            {" "}
                                            оценка состояние батареи
                                        </h1>
                                        <h1
                                            className={
                                                data.display === 0
                                                    ? "add_product_content_check_content-text"
                                                    : "add_product_content_check_content-text-true"
                                            }
                                        >
                                            {" "}
                                            оценка дисплея
                                        </h1>
                                        <h1
                                            className={
                                                data.camera === 0
                                                    ? "add_product_content_check_content-text"
                                                    : "add_product_content_check_content-text-true"
                                            }
                                        >
                                            {" "}
                                            оценка камеры
                                        </h1>
                                        <h1
                                            className={
                                                data.answer === 0
                                                    ? "add_product_content_check_content-text"
                                                    : "add_product_content_check_content-text-true"
                                            }
                                        >
                                            {" "}
                                            оценка отзывов
                                        </h1>
                                        <h1
                                            className={
                                                data.design === 0
                                                    ? "add_product_content_check_content-text"
                                                    : "add_product_content_check_content-text-true"
                                            }
                                        >
                                            {" "}
                                            оценка дизайна
                                        </h1>
                                        <h1
                                            className={
                                                data.portabl === 0
                                                    ? "add_product_content_check_content-text"
                                                    : "add_product_content_check_content-text-true"
                                            }
                                        >
                                            {" "}
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
