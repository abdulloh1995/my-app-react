import { useState } from "react"
export default function InputtValue () {

  const [value, setValue] = useState("")

    return (
    <>
        <p>Value: {value}</p>
        <input
            type="text"
            className="form-control"
            value={value}
            onChange={event => setValue(event.target.value)}
        />
    </>

    )
}