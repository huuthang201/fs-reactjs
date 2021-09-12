<li key={index} className="Gfood-cart__details--item">
    <div className="Gfood-cart__details--container">
        <div className="Gfood-cart__top">
            <div className="Gitem-img">
                <img src={item.img} alt="" />
            </div>
            <div className="Gitem-price">{item.price} ₫</div>
        </div>
        <div className="Gfood-cart__bottom">
            <div className="Gitem-name">{item.name}</div>
            <div className="Gitem-description">{item.description}</div>
            <div className="item-choose" onClick={() => onAdd(food)}>
                Đặt ngay
            </div>
        </div>
    </div>
</li>;
