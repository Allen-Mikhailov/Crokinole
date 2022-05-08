import Button from "./title-button"

const bp = "/Crokinole"
function homepage(props) {
    return (
        <div>
            <div className="title">Crokinole</div>
            <div className="title-button-container">
                <Button name="TestLogin" to={bp + '/Login'}></Button>
                <Button name="but" to={bp + '/test'}></Button>
                <Button name="Test" to={bp + '/test'}></Button>
            </div>
        </div>
    )
}

export default homepage