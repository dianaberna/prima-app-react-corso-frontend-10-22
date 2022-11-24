import "./Button.css"

function Button( {children} ){
    return (
        <button class="primary">{children}</button>
    )
}

export default Button;