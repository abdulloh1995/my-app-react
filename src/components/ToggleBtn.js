import { useState } from "react"
export default function ToggleBtn () {
  const [toggleBtn, setToggleBtn] = useState(false)

    return (
        <>    
            <button 
                onClick={() => setToggleBtn(!toggleBtn)}
                className="btn btn-secondary mt-2">
                ToggleBtn
            </button>
            {toggleBtn
            ?<p>Toggle Button</p>
            :null
            }
        </>
    )
}