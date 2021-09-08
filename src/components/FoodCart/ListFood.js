import React from "react";
import Textfield from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import Avatar from "@atlaskit/avatar";
import FoodCartDetails from "./FoodCartDetails";
import TagFilter from "../TagFilter/TagFilter";
import View from "../View/View";

const ListFood = () => {
    return (
        <div className="list-food">
            <h1 className="list-food__title">Danh sách món ăn 😋</h1>
            <Textfield
                className="list-food__search"
                name="list-food__search"
                placeholder="Tìm món ăn ngay nào ..."
                elemBeforeInput={
                    <Avatar
                        appearance="square"
                        size="medium"
                        src="https://thumbs.dreamstime.com/b/fast-food-unhealthy-eating-concept-close-up-snacks-yellow-background-top-view-copy-space-still-life-flat-lay-102920362.jpg"
                    />
                }
                elemAfterInput={
                    <Button className="search-button">Tìm ngay</Button>
                }
            />
            <div className="list-food__view">
                <View />
            </div>
            <div className="list-food__filter">
                <TagFilter />
            </div>
            <div className="list-food__detail">
                <FoodCartDetails />
            </div>
        </div>
    );
};

export default ListFood;
