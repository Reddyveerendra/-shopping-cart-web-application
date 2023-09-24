import { data } from "./data"
import { Card } from "./Card";
export const Shop = (props) => {
    let div = [];
    for (let i = 0; i < 8; i++) {
        div.push(<Card
            {...data[i]}
            num={i}
            function={props.function}
        />)
    }
    return (
        <div className="shop">
            {div}
        </div>
    )
}