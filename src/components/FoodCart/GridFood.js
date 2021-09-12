import React from "react";

const GridFood = ({ Foods, onAdd }) => {
    return (
        <div className="Gfood-cart__details">
            <ul>
                {Foods.map((food) => (
                    <li key={food.id} className="Gfood-cart__details--item">
                        <div className="Gfood-cart__details--container">
                            <div className="Gfood-cart__top">
                                <div className="Gitem-img">
                                    <img src={food.img} alt="" />
                                </div>
                                <div className="Gitem-price">
                                    {food.price} ₫
                                </div>
                            </div>
                            <div className="Gfood-cart__bottom">
                                <div className="Gitem-name">{food.name}</div>
                                <div className="Gitem-description">
                                    {food.description}
                                </div>
                                <div
                                    className="Gitem-choose"
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

export default GridFood;
