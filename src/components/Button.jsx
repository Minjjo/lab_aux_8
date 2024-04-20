import { useState } from "react"

export const Button = props => {
    const {text} = props
    const [count, setcount] = useState(5)
    function handlerButton() {
        setcount(count + 50)
    } 
    return (
        <button onClick={handlerButton}>
        {count}{text} 
        </button>
    )
}