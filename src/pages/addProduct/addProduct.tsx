function AddProduct() {
    return (
        <>
            <div className="add_product">
                <div className="container">
                    <div className="add_product_content">
                        <div className="add_product_content_ex"></div>
                        <div className="add_product_content_inf">
                            <div className="add_product_content_inf_inputs img_input">
                                <h1 className="add_product_content_inf_inputs-text">
                                    вставьте изображение товара
                                </h1>
                                <input
                                    placeholder="URL"
                                    className="add_product_content_inf_inputs-input"
                                    type="text"
                                />
                                <button className="add_product_content_inf_inputs-button">
                                    добавить
                                </button>
                            </div>
                            <div className="add_product_content_inf_inputs type_input">
                                <h1 className="add_product_content_inf_inputs-text">
                                    тип товара{" "}
                                </h1>
                                <button className="add_product_content_inf_inputs-button">
                                    добавить
                                </button>
                            </div>
                            <div className="add_product_content_inf_inputs model_input">
                                <h1 className="add_product_content_inf_inputs-text">
                                    модель товара
                                </h1>
                                <input
                                    placeholder=""
                                    className="add_product_content_inf_inputs-input"
                                    type="text"
                                />
                                <button className="add_product_content_inf_inputs-button">
                                    добавить
                                </button>
                            </div>
                            <div className="add_product_content_inf_inputs price_input">
                                <h1 className="add_product_content_inf_inputs-text">
                                    цена{" "}
                                </h1>
                                <input
                                    placeholder=""
                                    className="add_product_content_inf_inputs-input"
                                    type="text"
                                />
                                <button className="add_product_content_inf_inputs-button">
                                    добавить
                                </button>
                            </div>
                            <div className="add_product_content_inf_inputs storage_input">
                                <h1 className="add_product_content_inf_inputs-text">
                                    накопитель{" "}
                                </h1>
                                <input
                                    placeholder=""
                                    className="add_product_content_inf_inputs-input"
                                    type="text"
                                />
                                <button className="add_product_content_inf_inputs-button">
                                    добавить
                                </button>
                            </div>
                            <div className="add_product_content_inf_inputs color_input"></div>
                            <div className="add_product_content_inf_inputs description_input">
                                <h1 className="add_product_content_inf_inputs-text">
                                    описание{" "}
                                </h1>
                                <input
                                    placeholder=""
                                    className="add_product_content_inf_inputs-input"
                                    type="text"
                                />
                                <button className="add_product_content_inf_inputs-button">
                                    добавить
                                </button>
                            </div>
                            <div className="add_product_content_inf inputs_marks">
                                <div className="add_product_content_inf_inputs battery_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        состояние аккумулятора{" "}
                                    </h1>
                                    <input
                                        placeholder=""
                                        className="add_product_content_inf_inputs-input"
                                        type="text"
                                    />
                                    <button className="add_product_content_inf_inputs-button">
                                        добавить
                                    </button>
                                </div>
                                <div className="add_product_content_inf_inputs display_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        дисплей{" "}
                                    </h1>
                                    <input
                                        placeholder=""
                                        className="add_product_content_inf_inputs-input"
                                        type="text"
                                    />
                                    <button className="add_product_content_inf_inputs-button">
                                        добавить
                                    </button>
                                </div>
                                <div className="add_product_content_inf_inputs camera_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        камера{" "}
                                    </h1>
                                    <input
                                        placeholder=""
                                        className="add_product_content_inf_inputs-input"
                                        type="text"
                                    />
                                    <button className="add_product_content_inf_inputs-button">
                                        добавить
                                    </button>
                                </div>
                                <div className="add_product_content_inf_inputs answer_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        отзывы{" "}
                                    </h1>
                                    <input
                                        placeholder=""
                                        className="add_product_content_inf_inputs-input"
                                        type="text"
                                    />
                                    <button className="add_product_content_inf_inputs-button">
                                        добавить
                                    </button>
                                </div>
                                <div className="add_product_content_inf_inputs Prtability_input">
                                    <h1 className="add_product_content_inf_inputs-text">
                                        портативность{" "}
                                    </h1>
                                    <input
                                        placeholder=""
                                        className="add_product_content_inf_inputs-input"
                                        type="text"
                                    />
                                    <button className="add_product_content_inf_inputs-button">
                                        добавить
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="add_product_content_check"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddProduct;
