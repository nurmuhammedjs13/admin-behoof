import Apple2 from "../../assets/Apple2.png";
import "./product_content.css";

function product_content() {
    return (
        <>
            <div className="product_content__content_block">
                <div className="product_content__content_block_info">
                    <div className="product_content_content_inside">
                        <div className="product_content__img">
                            <img
                                className="product_content__img1"
                                src={Apple2}
                                alt=""
                            />
                        </div>

                        <div className="product_content__subjest_infos">
                            <h1 className="info_text">
                                Apple iPhone 13 Pro Max
                            </h1>
                            <div className="product_content__subjest_info-items">
                                <div className="info_item">
                                    Камера <p>48 MPx</p>
                                </div>
                                <div className="info_item">
                                    Система <p>iOS</p>
                                </div>
                                <div className="info_item">
                                    Диагональ <p>6,1”</p>
                                </div>
                                <div className="info_item">
                                    Зарядка <p>Беспроводная</p>
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
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Батарея</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Дисплей</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Камера</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Ответ</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                    </div>
                                </div>
                                <div className="phone_info_info">
                                    <span>Портативность</span>
                                    <div className="phone_info_lines">
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line"></div>
                                        <div className="phone_info_line phone_info_line_empty"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="product_content_price_and_img">
                                <div className="product_content_price">
                                    78 999 ₽{" "}
                                </div>
                            </div>

                            <div className="product_content_price_color">
                                <h1 className="product_content_price_color_text">
                                    Цвет: серый
                                </h1>
                            </div>
                        </div>
                        <div className="product_content_price_color">
                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                Память: 256 ГБ
                            </div>
                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                Тип: Смартфон
                            </div>
                            <div className="product_content_price_storage_div product_content_price_storage_div_active">
                                Дата добавления: 12.03.2024
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product_content__subjest-text">
                    <h1>Описание</h1>
                    <p>
                        Смартфон Apple iPhone 13 выполнен в компактном корпусе с
                        привлекательной розовой расцветкой и защищенной
                        конструкцией по стандарту IP68. Мощный чип A15 Bionic
                        обеспечивает быструю и стабильную работу при запуске
                        приложений, просмотре видео, веб-серфинге и выполнении
                        других задач. На дисплее 6.1 дюйма OLED выводится четкая
                        и красочная картинка. На тыловой стороне расположена
                        камера с двумя датчиками по 12 Мп, которые при поддержке
                        ряда технологий и функций позволяют создавать
                        реалистичные снимки в различных условиях. На передней
                        стороне имеется камера 12 Мп для селфи и общения. В
                        мобильном устройстве предлагается широкий набор
                        беспроводных интерфейсов и разъем Lightning 8-pin.
                        Аккумулятор гарантирует продолжительное время
                        автономности. Из особенностей отмечаются поддержка
                        быстрой зарядки, беспроводной зарядки и устройств
                        MagSafe с магнитным позиционированием.
                    </p>
                </div>
                <div className="product_content__content_blocks_buttons">
                    <button className="product_content__content_blocks_deletebutton">
                        удалить
                    </button>
                </div>
            </div>
        </>
    );
}

export default product_content;
