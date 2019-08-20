import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

const Cypress = () => {
    const [someThing, setSomething] = useState('Hey Guys');
    const [visibility, setVisibilityg] = useState(false);

    // useEffect(() => {
    //     document.title = `Your initial value is : ${someThing}`;
    //     alert(`Your initial value is : ${someThing}`)
    // });

    return(
        <>
            <Input onChange={(e) => setSomething(e.target.value)}/>
            <p>About</p>
            <button type="submit" onClick={() => setVisibilityg(!visibility) }>click</button>
            <span className="test" style={{ display: visibility ? 'block' : 'none'}}>{someThing}</span>
        </>
    );
};

export default Cypress;
