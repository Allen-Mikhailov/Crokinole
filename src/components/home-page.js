import Button from "./title-button"

const bp = "/Crokinole"
function homepage(props)
{
    return (
        <div className="title-button-container">
            <Button name="Test" to={bp+'/test'}></Button>
            <Button name="but" to={bp+'/test'}></Button>
            <Button name="Test" to={bp+'/test'}></Button>
        </div>
    )
}

export default homepage