import { Link } from "react-router-dom";
import Iphone from "../../assets/Apple2.png";
import heart from "../../assets/heart1.png";
import differences from "../../assets/chart1.png";
import "../../pages/List/list.css";

function List() {
  return (
    <>
      <div className="List">
        <div className="container">
          <div className="List_groupOfProducts_content_objects">
            <div className="List_groupOfProducts_content_objects_object">
              <img
                src={Iphone}
                alt=""
                className="List_groupOfProducts_content_objects_object-img"
              />{" "}
              <div className="List_groupOfProducts_content_objects_object_info">
                <div className="List_groupOfProducts_content_objects_object_info_buttons">
                  <button className="List_groupOfProducts_content_objects_object_info_button">
                    <img src={heart} alt="" />
                  </button>
                  <Link
                    to={"/differences"}
                    className="List_groupOfProducts_content_objects_object_info_button"
                  >
                    <img src={differences} alt="" />
                  </Link>
                </div>
                <div className="List_groupOfProducts_content_objects_object_info_advantage">
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_title">
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-name">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-price">
                      78 999 ₽
                    </h1>
                  </div>
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_info">
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block1">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 6.1 inches, 1170 x 2532 px Display with Small Notch
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Bionic A15, Hexa Core, 3.22 GHz Processor
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 12 MP + 12 MP Dual Rear & 12 MP Front Camera
                      </h1>
                    </div>
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block2">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✕ Memory Card Not Supported
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 3240 mAh Battery with Fast Charging
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="List_groupOfProducts_content_objects_object_characteristics">
                <div className="List_phone_info_infos ">
                  <div className="List_phone_info_info">
                    <span>Дизайн</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Батарея</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Дисплей</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Камера</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Ответ</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Портативность</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="List_groupOfProducts_content_objects">
            <div className="List_groupOfProducts_content_objects_object">
              <img
                src={Iphone}
                alt=""
                className="List_groupOfProducts_content_objects_object-img"
              />{" "}
              <div className="List_groupOfProducts_content_objects_object_info">
                <div className="List_groupOfProducts_content_objects_object_info_buttons">
                  <button className="List_groupOfProducts_content_objects_object_info_button">
                    <img src={heart} alt="" />
                  </button>
                  <Link
                    to={"/differences"}
                    className="List_groupOfProducts_content_objects_object_info_button"
                  >
                    <img src={differences} alt="" />
                  </Link>
                </div>
                <div className="List_groupOfProducts_content_objects_object_info_advantage">
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_title">
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-name">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-price">
                      78 999 ₽
                    </h1>
                  </div>
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_info">
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block1">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 6.1 inches, 1170 x 2532 px Display with Small Notch
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Bionic A15, Hexa Core, 3.22 GHz Processor
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 12 MP + 12 MP Dual Rear & 12 MP Front Camera
                      </h1>
                    </div>
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block2">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✕ Memory Card Not Supported
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 3240 mAh Battery with Fast Charging
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="List_groupOfProducts_content_objects_object_characteristics">
                <div className="List_phone_info_infos ">
                  <div className="List_phone_info_info">
                    <span>Дизайн</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Батарея</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Дисплей</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Камера</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Ответ</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Портативность</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="List_groupOfProducts_content_objects">
            <div className="List_groupOfProducts_content_objects_object">
              <img
                src={Iphone}
                alt=""
                className="List_groupOfProducts_content_objects_object-img"
              />{" "}
              <div className="List_groupOfProducts_content_objects_object_info">
                <div className="List_groupOfProducts_content_objects_object_info_buttons">
                  <button className="List_groupOfProducts_content_objects_object_info_button">
                    <img src={heart} alt="" />
                  </button>
                  <Link
                    to={"/differences"}
                    className="List_groupOfProducts_content_objects_object_info_button"
                  >
                    <img src={differences} alt="" />
                  </Link>
                </div>
                <div className="List_groupOfProducts_content_objects_object_info_advantage">
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_title">
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-name">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-price">
                      78 999 ₽
                    </h1>
                  </div>
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_info">
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block1">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 6.1 inches, 1170 x 2532 px Display with Small Notch
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Bionic A15, Hexa Core, 3.22 GHz Processor
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 12 MP + 12 MP Dual Rear & 12 MP Front Camera
                      </h1>
                    </div>
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block2">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✕ Memory Card Not Supported
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 3240 mAh Battery with Fast Charging
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="List_groupOfProducts_content_objects_object_characteristics">
                <div className="List_phone_info_infos ">
                  <div className="List_phone_info_info">
                    <span>Дизайн</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Батарея</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Дисплей</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Камера</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Ответ</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Портативность</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="List_groupOfProducts_content_objects">
            <div className="List_groupOfProducts_content_objects_object">
              <img
                src={Iphone}
                alt=""
                className="List_groupOfProducts_content_objects_object-img"
              />{" "}
              <div className="List_groupOfProducts_content_objects_object_info">
                <div className="List_groupOfProducts_content_objects_object_info_buttons">
                  <button className="List_groupOfProducts_content_objects_object_info_button">
                    <img src={heart} alt="" />
                  </button>
                  <Link
                    to={"/differences"}
                    className="List_groupOfProducts_content_objects_object_info_button"
                  >
                    <img src={differences} alt="" />
                  </Link>
                </div>
                <div className="List_groupOfProducts_content_objects_object_info_advantage">
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_title">
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-name">
                      Apple iPhone 13 Pro Max 256 ГБ серый
                    </h1>
                    <h1 className="List_groupOfProducts_content_objects_object_info_advantage-price">
                      78 999 ₽
                    </h1>
                  </div>
                  <div className="List_groupOfProducts_content_objects_object_info_advantage_info">
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block1">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Dual Sim, 3G, 4G, 5G, VoLTE, Wi-Fi, NFC
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 6.1 inches, 1170 x 2532 px Display with Small Notch
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ Bionic A15, Hexa Core, 3.22 GHz Processor
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 12 MP + 12 MP Dual Rear & 12 MP Front Camera
                      </h1>
                    </div>
                    <div className="List_groupOfProducts_content_objects_object_info_advantage_info_block2">
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 4 GB RAM, 128 GB inbuilt
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✕ Memory Card Not Supported
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ 3240 mAh Battery with Fast Charging
                      </h1>
                      <h1 className="List_groupOfProducts_content_objects_object_info_advantage_info_block1-text">
                        ✓ iOS v15
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="List_groupOfProducts_content_objects_object_characteristics">
                <div className="List_phone_info_infos ">
                  <div className="List_phone_info_info">
                    <span>Дизайн</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Батарея</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Дисплей</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Камера</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Ответ</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                    </div>
                  </div>
                  <div className="List_phone_info_info">
                    <span>Портативность</span>
                    <div className="List_phone_info_lines">
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line"></div>
                      <div className="List_phone_info_line phone_info_line_empty"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default List;
