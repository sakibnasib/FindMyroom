import React from 'react';
import './Button.css'
const Button = ({text,isOutline}) => {
    
    return (
         <button className={`${isOutline ? 'outline' : 'primari'} cursor-pointer`}>{text} </button>
    );
};

export default Button;