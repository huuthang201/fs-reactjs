import React from "react";
import { FoodCartItems } from "./FoodCartItems";

const FoodCartDetails = () => {
    return (
        <div className="food-cart__details">
            <ul>
                {FoodCartItems.map((item, index) => {
                    return (
                        <li key={index} className="food-cart__details--item">
                            <div className="food-cart__details--container">
                                <div className="food-cart__top">
                                    <div className="item-name">{item.name}</div>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="food-cart__bottom">
                                    <div className="item-description">
                                        {item.description}
                                    </div>
                                    <div className="item-price">
                                        {item.price} ₫
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

export default FoodCartDetails;
