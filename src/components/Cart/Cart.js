import React from "react";
import Button from "@atlaskit/button";

const Cart = () => {
    return (
        <div className="cart-container">
            <h1>Thực đơn đã chọn</h1>
            <div className="cart-food">
                <div className="cart-food__name">Ếch chiên giòn</div>
                <div className="cart-food-money">90000 ₫</div>
                <div className="cart-food__button">
                    <Button className="btn-choose">+</Button>
                    <Button className="btn-disable" isDisabled="true">
                        1
                    </Button>
                    <Button className="btn-choose">-</Button>
                    <Button className="btn-choose">X</Button>
                </div>
            </div>
            <div className="cart-food">
                <div className="cart-food__name">Ếch chiên giòn</div>
                <div className="cart-food-money">90000 ₫</div>
                <div className="cart-food__button">
                    <Button className="btn-choose">+</Button>
                    <Button className="btn-disable" isDisabled="true">
                        1
                    </Button>
                    <Button className="btn-choose">-</Button>
                    <Button className="btn-choose">X</Button>
                </div>
            </div>
            <div></div>
            <div className="cart-total">
                <div className="cart-total__quantity">
                    Số lượng<Button>4 món</Button>
                </div>
                <div className="cart-total__money">
                    Tổng tiền<Button>90000 ₫</Button>
                </div>

                <div className="cart-total__timeremaning">
                    Thời gian chờ <Button>10:00 Phút</Button>
                </div>
                <div className="cart-total__button">
                    <Button>Chốt đơn</Button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
