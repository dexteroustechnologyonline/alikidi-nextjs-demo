"use client";
import React from 'react'
const Productinfo = ({ prod }) => {
    console.log(prod, "product");
    return (
        <div>
            <h4> title : {prod.newsTitle}</h4>
            <h4> description : {prod.newsContent}</h4>
        </div>
    )
}

export default Productinfo