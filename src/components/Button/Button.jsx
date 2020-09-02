import React from 'react';

export default function Button({ children, bgColor, ml, color }) {
    return (
    <button className={`p-4 ${bgColor} rounded-md ${ml} ${color} text-sm`}>
        {children}
    </button>
    )
}
