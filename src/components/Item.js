export const Item = (props) => {
    return (
        <div className="item">
            <div className="left">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="right">
                <h1>{props.name}</h1>
                <h3>J.K. Rowling</h3>
                <p>{props.description}</p>
                <button id={props.id} onClick={props.function}>ADD TO CARAT</button>
            </div>
        </div>
    )
}