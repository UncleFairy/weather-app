import React from "react"

const Form  = props => (
    <form onSubmit={props.getWeather}>
        <input type="text" name="city" placeholder="City..." className="form__input" />
        <input type="text" name="country" placeholder="Country..." className="form__input"/>
        <button className="form__button">Search</button>
    </form>
)

export default Form