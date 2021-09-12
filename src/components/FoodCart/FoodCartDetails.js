import React from "react";
// import { v4 } from "uuid";
// import { useCallback } from "react";

const FoodCartDetails = ({ Foods, onAdd }) => {
    return (
        <div className="food-cart__details">
            <ul>
                {Foods.map((food) => (
                    <li key={food.id} className="food-cart__details--item">
                        <div className="food-cart__details--container">
                            <div className="food-cart__top">
                                <div className="item-name">{food.name}</div>
                                <img src={food.img} alt="" />
                            </div>
                            <div className="food-cart__bottom">
                                <div className="item-description">
                                    {food.description}
                                </div>
                                <div className="item-price">{food.price} ₫</div>
                                <div
                                    className="item-choose"
                                    onClick={() => onAdd(food)}
                                >
                                    Đặt ngay
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodCartDetails;
