import React from "react"

const Form = props => {
    return (
        <form action="#" onSubmit={props.onSubmit} className="form">
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                className="form__input"
                placeholder="Insert location"
                required
            />
            <button className="form__button">Procurar</button>
        </form>
    )
}

export default Form
