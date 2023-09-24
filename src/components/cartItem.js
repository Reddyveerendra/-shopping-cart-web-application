export const CartItem = (props) => {
    return (
        <div className="cartItem">
            <div className="cartLeft"><img src={props.image} alt={props.name} /></div>
            <div className="cartRight">
                <h1>{props.name}</h1>
                <div className="value">
                    <button onClick={props.add} id={props.id} className="add">+</button>
                    <h3>{props.orders}</h3>
                    <button onClick={props.sub} id={props.id} className="sub">-</button>
                </div>
            </div>
        </div>
    )
}