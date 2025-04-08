import React from "react";
import { Link } from 'react-router-dom';
const LinkButton=({linkto,value})=>{
    return (
        <button className='navbutton1'>
            <Link to={linkto} className="button">{value}</Link>
        </button>
    )
};
export default LinkButton;