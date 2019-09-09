import React, { useState } from 'react';
import { Router, useRouter } from 'next/router';
import { Tag } from 'antd';


const Vallinajs = () => {
  const router = useRouter();
  const { lesson } = router.query;
  const handleClick = (lesson) => {
    router.push('/[vanillajs]/[lesson]', `/vanillajs/${lesson}`, { shallow: true });
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tag color="magenta" onClick={() => handleClick('ofconst')}>Old-fashion Const</Tag>
        <Tag color="red" onClick={() => handleClick('ajax')}>JS ajax</Tag>
        <Tag color="volcano" onClick={() => handleClick('unsplashapi')}>Unsplash API</Tag>
        <Tag color="orange" onClick={() => handleClick('callapplybind')}>Call- Apply- Bind</Tag>
        <Tag color="gold" onClick={() => handleClick('closure')}>Closure</Tag>
        <Tag color="lime" onClick={() => handleClick('IIFE')}>IIFE</Tag>
        <Tag color="green" onClick={() => handleClick('this')}>This</Tag>
        <Tag color="cyan" onClick={() => handleClick('settimeout')}>setTimeout</Tag>
        {/* <Tag color="blue">blue</Tag> */}
        {/* <Tag color="geekblue">geekblue</Tag> */}
        {/* <Tag color="purple">purple</Tag> */}
      </div>
    </>
  );
};

export default Vallinajs;
