import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TestUseEffect = () => {
    let [data, setData] = useState([]);

    useEffect(()=>{
        ( async()=>{
            let response = await fetch('https://dummyjson.com/products/1');
            let json = await response.json();
            setData(json);
        })()
    })
    return (
        <div className="container my-6">
            <h1 className="text-center text-lg font-bold">Testing Use Effect Hook Method</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default TestUseEffect;