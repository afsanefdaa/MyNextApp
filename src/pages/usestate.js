import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const UseState = () => {
    const [someThing, setSomething] = useState('Hey Guys');

    useEffect(() => {
        document.title = `Your initial value is : ${someThing}`;
        alert(`Your initial value is : ${someThing}`)
    });

    return(
        <>
            <Input onChange={(e) => setSomething(e.target.value)}/>
            <span>{someThing}</span>
        </>
    );
};

export default UseState;
