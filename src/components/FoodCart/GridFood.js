import React from "react";
import { FoodCartItems } from "./FoodCartItems";

const GridFood = () => {
    return (
        <div className="Gfood-cart__details">
            <ul>
                {FoodCartItems.map((item, index) => {
                    return (
                        <li key={index} className="Gfood-cart__details--item">
                            <div className="Gfood-cart__details--container">
                                <div className="Gfood-cart__top">
                                    <div className="Gitem-img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="Gitem-price">
                                        {item.price} ₫
                                    </div>
                                </div>
                                <div className="Gfood-cart__bottom">
                                    <div className="Gitem-name">
                                        {item.name}
                                    </div>
                                    <div className="Gitem-description">
                                        {item.description}
                                    </div>

                                    <a href={item.url}>Đặt ngay</a>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default GridFood;
