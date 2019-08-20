import React, { useEffect, useLayoutEffect } from 'react';

const UseLayoutEffect = () => {
    useEffect(() => {
        console.log('use effect lifecycle: component did mount')
    }, []);

    useLayoutEffect(() => {
        console.log('use layout effect lifecycle: component did mount')
    }, []);

    console.log('render lifecycle');
    return (
        <>
            Afsane Fadaei
        </>
    );
}

export default UseLayoutEffect;