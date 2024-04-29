// \import "./product_content.css";

//     return (
//         <>
//             <div className="product_content__content_block">
//                 <div className="product_content__content_block_info">
//                     <div className="product_content_content_inside">
//                         <div className="product_content__img">
//                             <img
//                                 className="product_content__img1"
//                                 src={data.img}
//                                 alt=""
//                             />
//                         </div>
//                         <div className="product_content__img_imgs">
//                             {arrlitteImg.map((item, index) => (
//                                 <div key={index}>
//                                     <img
//                                         className="product_content__img2"
//                                         src={item.imgs}
//                                         alt=""
//                                     />
//                                 </div>
//                             ))}
//                         </div>
//                         <div className="product_content__subjest_infos">
//                             <h1 className="info_text">{data.model}</h1>

//                             <div className="product_content__subjest_info-items">
//                                 {details.map((item, index) => (
//                                     <div key={index} className="info_item">
//                                         {item.key} : <p>{item.value}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="product_content_content_inside2">
//                         <div className="product_content__subtitle">
//                             <div className="phone_info_infos">
//                                 <div className="phone_info_info">
//                                     <span>Дизайн</span>

//                                     <div className="phone_info_lines">
//                                         {Array.from(
//                                             { length: 5 },
//                                             (_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`phone_info_line ${
//                                                         index < data.design
//                                                             ? ""
//                                                             : "phone_info_line_empty"
//                                                     }`}
//                                                 ></div>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>

//                                 <div className="phone_info_info">
//                                     <span>Батарея</span>
//                                     <div className="phone_info_lines">
//                                         {Array.from(
//                                             { length: 5 },
//                                             (_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`phone_info_line ${
//                                                         index < data.battery
//                                                             ? ""
//                                                             : "phone_info_line_empty"
//                                                     }`}
//                                                 ></div>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="phone_info_info">
//                                     <span>Дисплей</span>
//                                     <div className="phone_info_lines">
//                                         {Array.from(
//                                             { length: 5 },
//                                             (_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`phone_info_line ${
//                                                         index < data.display
//                                                             ? ""
//                                                             : "phone_info_line_empty"
//                                                     }`}
//                                                 ></div>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="phone_info_info">
//                                     <span>Камера</span>
//                                     <div className="phone_info_lines">
//                                         {Array.from(
//                                             { length: 5 },
//                                             (_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`phone_info_line ${
//                                                         index < data.camera
//                                                             ? ""
//                                                             : "phone_info_line_empty"
//                                                     }`}
//                                                 ></div>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="phone_info_info">
//                                     <span>Ответ</span>
//                                     <div className="phone_info_lines">
//                                         {Array.from(
//                                             { length: 5 },
//                                             (_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`phone_info_line ${
//                                                         index < data.answer
//                                                             ? ""
//                                                             : "phone_info_line_empty"
//                                                     }`}
//                                                 ></div>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                                 <div className="phone_info_info">
//                                     <span>Портативность</span>
//                                     <div className="phone_info_lines">
//                                         {Array.from(
//                                             { length: 5 },
//                                             (_, index) => (
//                                                 <div
//                                                     key={index}
//                                                     className={`phone_info_line ${
//                                                         index < data.portabl
//                                                             ? ""
//                                                             : "phone_info_line_empty"
//                                                     }`}
//                                                 ></div>
//                                             )
//                                         )}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="product_content_price_and_img">
//                                 <div className="product_content_price">
//                                     {data.price} c{" "}
//                                 </div>
//                             </div>

//                             <div className="product_content_price_color">
//                                 <h1 className="product_content_price_color_text">
//                                     Цвет: {data.color}
//                                 </h1>
//                             </div>
//                         </div>
//                         <div className="product_content_price_color">
//                             <div className="product_content_price_storage_div product_content_price_storage_div_active">
//                                 Память: {data.storage}
//                             </div>
//                             <div className="product_content_price_storage_div product_content_price_storage_div_active">
//                                 Тип: {data.type}
//                             </div>
//                             <div className="product_content_price_storage_div product_content_price_storage_div_active">
//                                 Дата добавления: {data.date}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="product_content__subjest-text">
//                     <h1>Описание</h1>
//                     <p>{data.description}</p>
//                 </div>
//                 <div className="product_content__content_blocks_buttons">
//                     <button className="product_content__content_blocks_deletebutton">
//                         удалить
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Product_content;
