import React from 'react';

export default function Button({ children, bgColor, ml, color, hover }) {
    return (
    <button className={`p-4 ${bgColor} rounded-md ${ml} ${color} hover:${hover}`}>
        {children}
    </button>
    )
}
