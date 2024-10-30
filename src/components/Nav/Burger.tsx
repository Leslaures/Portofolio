import "./Burger.css"
import { useState } from "react";
import NavRight from "./NavRight";

const Burger = () => {
    const[open, setOpen] = useState(false)
    
    return (
        <>
            <div id="burger" open={open} onClick={() => setOpen(!open)}>
                ☰
            </div>
            <NavRight open={open}/>
        </>
    )
}

export default Burger;