import "./Button.css"

function Button( {children} ){
    return (
        <button className="primary">{children}</button>
    )
}

export default Button;