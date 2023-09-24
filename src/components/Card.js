export const Card = (props) => {
    return (
        <a href={'/item'} onClick={props.function}>
            <div className="card" id={props.num} onClick={props.function}>
                <img src={props.image} alt={props.name} id={props.num} />
                <h3 id={props.num}>{props.name}</h3>
                <h3 id={props.num}>₹{props.price}</h3>
            </div>
        </a>
    )
}