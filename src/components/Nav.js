export const Nav = (props) => {
    return (
        <div className="nav">
            <div className="logo">
                <a href="/">ShoppingCart</a>
            </div>
            <div>
                <ul className="features">
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li className="cart"><a href="/cart" className="cart">{props.num}</a></li>
                </ul>
            </div>
        </div>
    )
}