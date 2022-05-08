import "./../scss/app.scss"

import {
    Link
} from "react-router-dom";

function button(props) {
    return (
        <Link to={props.to || ""}>
            <div className="title-button">
                {props.name}
            </div>
        </Link >
    )
}

export default button